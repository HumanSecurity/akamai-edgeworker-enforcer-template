const tar = require('tar');
const path = require('path');

process.chdir(path.join(__dirname, '..', 'dist'));
tar.create({ gzip: true, file: 'build.tgz', sync: true }, ['main.js', 'bundle.json']);
