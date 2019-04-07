#!/usr/bin/env node

import program from 'commander';

import genDiff from '..';
import { version } from '../../package.json';


export default program
  .version(version, '-V, --version')
  .arguments('<firstConfig>')
  .arguments('<secondConfig>')
  .action((firstConfig, secondConfig) => console.log(genDiff(firstConfig, secondConfig)))
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'Output format', 'diff')
  .parse(process.argv);
