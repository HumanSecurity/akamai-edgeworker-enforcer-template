const fs = require('fs');
const tar = require('tar');
const path = require('path');

fs.copyFileSync('edgekv.js', path.join('dist', 'edgekv.js'));
fs.copyFileSync('edgekv_tokens.js', path.join('dist', 'edgekv_tokens.js'));

process.chdir(path.join(__dirname, '..', 'dist'));
const files = fs.readdirSync('.').filter(f => f !== 'build.tgz');
tar.create({ gzip: true, file: 'build.tgz', sync: true }, files);
