const valueToStr = (value) => {
  if (value instanceof Object) {
    return 'complex value';
  }
  return `value: '${value}'`;
};

const plainRender = (data, current = '') => data.map((e) => {
  switch (e.type) {
    case 'deleted':
      return `Property '${current}${e.key}' was removed`;
    case 'added':
      return `Property '${current}${e.key}' was added with ${valueToStr(e.value)}`;
    case 'unchanged':
      return `Property '${current}${e.key}' remained unchanged`;
    case 'node':
      return `${plainRender(e.children, `${current}${e.key}.`)}`;
    case 'changed':
      return `Property '${current}${e.key}' was updated. From ${valueToStr(e.oldValue)} to ${valueToStr(e.newValue)}`;
    default:
      return '';
  }
}).join('\n');
export default plainRender;
