var fs = require('fs');
var rimraf = require('rimraf');
var path=require('path');

rimraf(path.resolve(__dirname,'webapp'), fs, function cb() {
  console.log('webapp目录已清空');
});