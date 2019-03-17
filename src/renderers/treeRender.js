import _ from 'lodash';

const treeRender = (data, depth = 1) => _.flatten(data.map((e) => {
  const margin = level => `${' '.repeat(2 * level)}`;

  const valueToStr = (value, level) => {
    if (value instanceof Object) {
      const resultStr = _.keys(value).map(key => `${margin(level + 3)}${key}: ${value[key]}`).join('\n');
      return `{\n${resultStr}\n${margin(depth + 2)}}`;
    }
    return `${value}`;
  };

  switch (e.type) {
    case 'deleted':
      return `${margin(depth)}- ${e.key}: ${valueToStr(e.value, depth)}`;
    case 'added':
      return `${margin(depth)}+ ${e.key}: ${valueToStr(e.value, depth)}`;
    case 'changed':
      return [`${margin(depth)}+ ${e.key}: ${valueToStr(e.newValue, depth)}`, `${margin(depth)}- ${e.key}: ${valueToStr(e.oldValue, depth)}`];
    case 'node':
      return [`${margin(depth)}  ${e.key}: {`, `${treeRender(e.children, depth + 1)}`, `${margin(depth + 1)}}`];
    default:
      return `${margin(depth)}  ${e.key}: ${valueToStr(e.value, depth)}`;
  }
})).join('\n');
export default treeRender;
