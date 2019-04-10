import Path from 'path';
import Fs from 'fs';
import _ from 'lodash';

/**
 * This file will read all the files from the current directory and
 * will do export all those items which are exported in every file in this directory
 */

module.exports = [];

let modelObject;

_.each(Fs.readdirSync(__dirname), (file) => {
    if (file !== 'index.js') {
        modelObject = require(Path.join(__dirname, file));
        if (modelObject instanceof Array) {
            module.exports = module.exports.concat(modelObject);
        } else {
            _.extend(module.exports, modelObject);
        }
    }
});
