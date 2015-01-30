'use strict';

var config = require('.config');

var replace = {
  dist: {
    src: [
      '<%= app.dist %>/htdocs/index.html',
      '<%= app.dist %>/**/*.php'
    ],
    overwrite: true,
    replacements: [
      {
        from: 'requirejs/require.js',
        to: 'lib/requirejs/require.js'
      }
    ]
  },
  templateConfig: {
    src: [
      '<%= app.test %>/_config.inc.php'
    ],
    overwrite: true,
    replacements: [
      {
        from: '<?php',
        to: '<?php // DO NOT EDIT THIS FILE. See src/htdocs/_config.inc.php'
      }
    ]
  }
};

module.exports = replace;