const esbuild = require('esbuild');

const AKAMAI_BUILT_IN_MODULES = [
    'log',
    'http-request',
    'create-response',
    'cookies',
    'url-search-params',
    'crypto',
    'encoding',
    'text-encode-transform',
    './edgekv.js',
];

const shouldMinify = !process.argv.includes('--no-minify');

esbuild.buildSync({
    entryPoints: ['src/main.ts'],
    bundle: true,
    legalComments: shouldMinify ? 'none' : 'eof',
    external: AKAMAI_BUILT_IN_MODULES,
    outfile: './dist/main.js',
    target: 'es2022',
    minify: shouldMinify,
    format: 'esm',
});
