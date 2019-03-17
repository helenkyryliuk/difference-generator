#!/usr/bin/env node
import program from 'commander';
import genDiff from '..';

program
  .version('0.0.1')
  .arguments('<firstConfig> <secondConfig>')
  .action((firstConfig, secondConfig) => console.log(genDiff(firstConfig, secondConfig)))
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'Specified type of render [tree]', 'treeRender')
  .parse(process.argv);
