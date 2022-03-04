const path = require("path")
const { see, hourglass } = require("code_clarity")
const fs = require("fs-extra")
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

// let getDirectory = getDirectoryStructure("./tree")
// let structuredPath = "./tree/structure/index.json"

// // writeJSON("./tree/structure/index.json", getDirectory)
// let readFromFile = readJSON(structuredPath)
//     // console.log("🚀 ~ file: playground.js ~ line 23 ~ readFromFile", JSON.stringify(readFromFile))

module.exports = { writeJSON, readJSON }