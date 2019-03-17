import fs from 'fs';
import genDiff from '../src';


const pathToFile1 = '__tests__/__fixtures__/before.json';
const pathToFile2 = '__tests__/__fixtures__/after.json';
const pathToFile3 = '__tests__/__fixtures__/before.yml';
const pathToFile4 = '__tests__/__fixtures__/after.yml';
const pathToFile5 = '__tests__/__fixtures__/before.ini';
const pathToFile6 = '__tests__/__fixtures__/after.ini';

const pathToFile11 = '__tests__/__fixtures__/beforeTree.json';
const pathToFile22 = '__tests__/__fixtures__/afterTree.json';
const pathToFile33 = '__tests__/__fixtures__/beforeTree.yml';
const pathToFile44 = '__tests__/__fixtures__/afterTree.yml';
const pathToFile55 = '__tests__/__fixtures__/beforeTree.ini';
const pathToFile66 = '__tests__/__fixtures__/afterTree.ini';


describe('genDiff', () => {
  it('#flow 1', () => {
    expect(genDiff(pathToFile1, pathToFile2)).toEqual(fs.readFileSync('__tests__/__fixtures__/result.txt', 'utf8'));
    expect(genDiff(pathToFile3, pathToFile4)).toEqual(fs.readFileSync('__tests__/__fixtures__/result.txt', 'utf8'));
    expect(genDiff(pathToFile5, pathToFile6)).toEqual(fs.readFileSync('__tests__/__fixtures__/result.txt', 'utf8'));
    expect(genDiff(pathToFile11, pathToFile22)).toBe(fs.readFileSync('__tests__/__fixtures__/resultTree.txt', 'utf8'));
    expect(genDiff(pathToFile33, pathToFile44)).toEqual(fs.readFileSync('__tests__/__fixtures__/resultTree.txt', 'utf8'));
    expect(genDiff(pathToFile55, pathToFile66)).toEqual(fs.readFileSync('__tests__/__fixtures__/resultTree.txt', 'utf8'));
  });
  it('#flow 2', () => {
    expect(genDiff(pathToFile11, pathToFile22, 'plain')).toBe(fs.readFileSync('__tests__/__fixtures__/plainRender.txt', 'utf8'));
    expect(genDiff(pathToFile33, pathToFile44, 'plain')).toEqual(fs.readFileSync('__tests__/__fixtures__/plainRender.txt', 'utf8'));
    expect(genDiff(pathToFile55, pathToFile66, 'plain')).toEqual(fs.readFileSync('__tests__/__fixtures__/plainRender.txt', 'utf8'));
  });
});
