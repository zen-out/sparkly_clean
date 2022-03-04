const path = require("path")
const dirTree = require("directory-tree")
const { see, hourglass } = require("code_clarity")
const fs = require("fs-extra")

/**
 * @Description 
 * getDirectoryStructure("./tree", /\.txt$/)
 * @author zen-out
 * @date 2022-03-04
 * @param {any} filepath
 * @param {any} {extensions:extension}
 * @param {any} (item
 * @param {any} PATH
 * @param {any} stats
 * @returns {any}
 */
function getDirectoryStructure(filepath, extension) {
    if (extension) {
        const tree = dirTree(filepath, { extensions: extension }, (item, PATH, stats) => {
            console.log(item);
        });
        return tree;
    } else {

        const tree = dirTree(filepath, (item, PATH, stats) => {
            console.log(item);
        });
        return tree;
    }
}

/**
 * @Description 
 * writeJSON('./db.json', array)
 * writeJSON('./db.json', object)
 * @author zen-out
 * @date 2022-03-04
 * @param {any} filePath
 * @param {any} object
 */
function writeJSON(filePath, object) {
    fs.outputJsonSync(filePath, object)
}

/**
 * @Description 
 * let getJSON = readJSON("./db.json")
 * @author zen-out
 * @date 2022-03-04
 * @param {any} filePath
 * @returns {object}
 */
function readJSON(filePath) {
    let readFromFile = fs.readJsonSync(filePath)
    return readFromFile
}


module.exports = { getDirectoryStructure, writeJSON, readJSON }