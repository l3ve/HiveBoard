// Note: Run from `npm test`

'use strict';

var electron = require('electron-prebuilt');
var spawnSync = require('child_process').spawnSync;
var join = require('path').join;

var args = process.argv.slice(2);

function runOnElectron(tests) {
    console.log(tests);
    var args = [join(__dirname, 'runner')].concat(tests);
    args.push('--travis');
    var proc = spawnSync(electron, args, { stdio: 'inherit' });
    console.log(proc.status === 0 ? 'run.js: SUCCESS' : 'run.js: FAILED');
    process.exit(proc.status);
}

runOnElectron(args);