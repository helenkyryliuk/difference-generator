[![Build Status](https://travis-ci.org/helenkyryliuk/difference-generator.svg?branch=master)](https://travis-ci.org/helenkyryliuk/difference-generator)
[![Maintainability](https://api.codeclimate.com/v1/badges/378e2c06293def1f9e55/maintainability)](https://codeclimate.com/github/helenkyryliuk/difference-generator/maintainability)

#  Generator of differences

## :white_check_mark: General info

### install

```npm i helen_gendiff```

### A command line interface utility for finding differences in configuration files.

```
helen_gendiff -h

  Usage: gendiff [options] <firstConfig> <secondConfig>

  Compares two configuration files and shows a difference.

  Options:

    -h, --help           output usage information
    -V, --version        output the version number
    -f, --format [type]  Output format
```


Features of the utility:

`Json, yaml and ini` formats are supported  
Report generation as plain, tree and json 

The usual sequence of events for creating a diff is to create two identical directories, make changes in one directory, and then use the diff utility to create a list of differences between the two. 

Using gendiff eliminates the need for the extra, original and unmodified directory copy. Instead, only the individual files that are modified need to be saved.

## :file_folder: Examples

`$ helen_gendiff --format tree first-config.json second-config.json`  

<p align="center">
  <img alt="helen_gendiff --format tree first-config.json second-config.json"  src="https://user-images.githubusercontent.com/29301041/55676531-21f9de00-592b-11e9-946d-75d613aae6f2.png">
</p>

`$ helen_gendiff --format plain first-config.json second-config.json`  

 <p align="center">
  <img alt="helen_gendiff --format plain first-config.json second-config.json"  src="https://user-images.githubusercontent.com/29301041/55676421-22917500-5929-11e9-87b6-a305cddb0b26.png">
</p>

`$ helen_gendiff --format json first-config.json second-config.json`  

<p align="center">
  <img alt="helen_gendiff --format json first-config.json second-config.json"  src="https://user-images.githubusercontent.com/29301041/55676465-ed395700-5929-11e9-9893-a7cb66504c7b.png">
</p>

## :hammer: Technologies

Project is created with:
* ES6
* Node.js
* Eslint
* Travic CI
* Npm
