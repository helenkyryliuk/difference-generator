import path from 'path';
import fs from 'fs';
import getParser from './parsers';
import makeAst from './makeAst';
import getRender from './renderers';

const genDiff = (pathToFile1, pathToFile2, format = 'tree') => {
  const data1 = fs.readFileSync(pathToFile1, 'utf8');
  const data2 = fs.readFileSync(pathToFile2, 'utf8');
  const ext1 = path.extname(pathToFile1);
  const ext2 = path.extname(pathToFile2);

  const parse1 = getParser(ext1);
  const obj1 = parse1(data1);

  const parse2 = getParser(ext2);
  const obj2 = parse2(data2);
  const data = makeAst(obj1, obj2);

  const render = getRender(format);
  return render(data);
};
export default genDiff;
