import _ from 'lodash';

const makeAst = (obj1, obj2) => {
  const unitedKeys = _.union(_.keys(obj1), _.keys(obj2));
  return unitedKeys.reduce((acc, key) => {
    const val1 = obj1[key];
    const val2 = obj2[key];


    if (_.isObject(val1) && _.isObject(val2)) {
      return [...acc, ({
        key, type: 'node', children: makeAst(val1, val2),
      })];
    }
    if (_.has(obj1, key) && _.has(obj2, key)) {
      if (val1 === val2) {
        return [...acc, ({
          key, value: val1, type: 'unchanged',
        })];
      }
      if (val1 !== val2) {
        return [...acc, ({
          key, oldValue: val1, newValue: val2, type: 'changed',
        })];
      }
    }
    if (_.has(obj1, key) && !_.has(obj2, key)) {
      return [...acc, ({
        key, value: val1, type: 'deleted',
      })];
    }
    if (!_.has(obj1, key) && _.has(obj2, key)) {
      return [...acc, ({
        key, value: val2, type: 'added',
      })];
    }
    return {};
  }, []);
};
export default makeAst;
