'use strict';

var config = require('./config');

var uglify = {
  options: {
  },
  dist: {
    files: [{
      expand: true,
      cwd: config.build + '/' + config.src,
      src: '**/*.js',
      dest: config.dist
    }]
  }
};

module.exports = uglify;