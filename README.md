[![Build Status](https://travis-ci.org/helenkyryliuk/difference-generator.svg?branch=master)](https://travis-ci.org/helenkyryliuk/difference-generator)
[![Maintainability](https://api.codeclimate.com/v1/badges/378e2c06293def1f9e55/maintainability)](https://codeclimate.com/github/helenkyryliuk/difference-generator/maintainability)

#  Generator of differences

## :white_check_mark: General info

### install

```npm i helen_gendiff```

### A command line interface utility for finding differences in configuration files.

```
gendiff -h

  Usage: gendiff [options] <firstConfig> <secondConfig>

  Compares two configuration files and shows a difference.

  Options:

    -h, --help           output usage information
    -V, --version        output the version number
    -f, --format [type]  Output format
```


Features of the utility:

`Json, yaml and ini` formats are supported  
Report generation as plain text, tree and json (default report
 is tree)

The usual sequence of events for creating a diff is to create two identical directories, make changes in one directory, and then use the diff utility to create a list of differences between the two. Using gendiff eliminates the need for the extra, original and unmodified directory copy. Instead, only the individual files that are modified need to be saved.

## :file_folder: Examples

`$ gendiff --format plain first-config.ini second-config.ini`  

Property 'common.setting1' remained unchanged  
Property 'common.setting2' was removed  
Property 'common.setting3' was updated. From value: 'true' to complex value  
Property 'common.setting6.key' remained unchanged  
Property 'common.setting6.ops' was added with value: 'vops'  
Property 'common.setting4' was added with value: 'blah blah'  
Property 'common.setting5' was added with complex value  
Property 'group1.baz' was updated. From value: 'bas' to value: 'bars'  
Property 'group1.foo' remained unchanged  
Property 'group1.nest' was updated. From complex value to value: 'str'  
Property 'group2' was removed  
Property 'group3' was added with complex value  

`$ gendiff first-config.json second-config.json`  

```{
    common: {
        setting1: Value 1
      - setting2: 200
      - setting3: true
      + setting3: {
            key: value
        }
        setting6: {
            key: value
          + ops: vops
        }
      + setting4: blah blah
      + setting5: {
            key5: value5
        }
    }
    group1: {
      + baz: bars
      - baz: bas
        foo: bar
      - nest: {
            key: value
        }
      + nest: str
    }
  - group2: {
        abc: 12345
    }
  + group3: {
        fee: 100500
    }
```
## :hammer: Technologies

Project is created with:
* ES6
* AJAX using Axios
* Node.js
* JQuery
* Webpack
* DOMParser
* CORS Proxy
* WatchJS (pattern Observer for View)