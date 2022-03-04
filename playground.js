/**********************************************
 * Organization of Folders
 * ==================================
 * problem: we need to have a place for everything. 
 * what should be: we should be quite organized in our code
 * what actually is: it's hard, like, really hard, to keep our directories and things organized. 
 * hypothesis: have a better method of keeping things organized, follow the marie kondon methodology in cleaning folders, function, classes, files in your work, spark complete joy here. 
 * 
 * Feature: 
 * 
 * 
 ***********************************************/
const { getDirectoryStructure, readJSON, writeJSON } = require("./index.js")

const path = require("path")
const dirTree = require("directory-tree")
const { see, hourglass } = require("code_clarity")
const fs = require("fs-extra")

let getDirectory = getDirectoryStructure("./tree")
let structuredPath = "./tree/structure/index.json"
writeJSON("./tree/structure/index.json", getDirectory)
let readFromFile = readJSON(structuredPath)
console.log("🚀 ~ file: playground.js ~ line 23 ~ readFromFile", JSON.stringify(readFromFile))

/**
 * @Description 
 * 1. Grabs JSON from json file 
 * 2. Grabs the key {data: [{}], problems: [{}]}
 * @author zen-out
 * @date 2022-03-04
 * @param {any} "1:30PM"
 * @returns {any}
 */
function appendToJSON(filePath, key, object) {
    hourglass.start("1:30 PM")
    let readFromFile = readJSON(filePath)
        // this would be an array 
    let getKey = readFromFile[key]
    getKey = getKey.push(object)
    readFromFile[key] = getKey;
    writeJSON(filePath, readFromFile)
}


appendToJSON(structuredPath, "problem", { problem: "i dont want to answer the phone" })
    /**
     * @Description 
     * 1. Given file path and destination, grabs the current readme file 
     * 2. Parses it into html 
     * 3. Outputs it into destination file, as an html document. 
     * @author zen-out
     * @date 2022-03-04
     * @param {any} filePath
     * @param {any} destination
     * @returns {any}
     */
function moveReadMeIntoGithub(filePath, destination) {
    // grabs the current readme file
    // applies remarkable to it 
    // pastes it into 
}
/**
 * @Description 
 * @author zen-out
 * @date 2022-03-04
 * @param {string} folder
 * @param {any} time
 * @returns {any}
 */
function notTouchedForThisTime(folder, time) {

    let teim2 = time;
    let whatsup = time + time;
}

function refreshNodeModules() {

}

function identifyJoy(addIntoJSON) {

}