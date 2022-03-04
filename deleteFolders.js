const fs = require('fs-extra')
const { formatDateTime } = require("format_date_time_moment/node")
const path = require("path")
const { see, hourglass } = require("code_clarity")
const dirTree = require("directory-tree")
const { git, node_modules } = require("define_me")
const ccc = require("clear_concise_creative")
const { arrz } = require("array_helperz")

see.problem("should essentially remove files that you havent touched in two weeks")
see.should("")
see.is("")
see.step("think more clearly about what you need to do to make this really good")

function getFiles() {
    let arr = ccc.readJSON("./structure/index.json")
        // console.log("🚀 ~ file: deleteFolders.js ~ line 16 ~ getFiles ~ arr", arr)
    let getFiles = arr["files"]
    return getFiles
}

function getFolders() {
    let arr = ccc.readJSON("./structure/index.json")
        // console.log("🚀 ~ file: deleteFolders.js ~ line 16 ~ getFiles ~ arr", arr)
    let getFiles = arr["folder"]
    return getFiles
}
let files = getFiles()
let folders = getFolders()
    // console.log("🚀 ~ file: deleteFolders.js ~ line 29 ~ folders", folders)
    // console.log("🚀 ~ file: deleteFolders.js ~ line 19 ~ files", files)

function deleteFiles(days, onlyGit) {


}

/**
 * @Description 
 * @author zen-out
 * @date 2022-03-04
 * @returns {any}
 */
function filterForGitTrue() {
    let folders = getFolders()
    let gitTrue = arrz.contains(folders, "git", true)
    return gitTrue
}

function filterForPastDate(array, days) {
    let newArr = array.map(changeDateObject)
    return newArr;
}

function changeDateObject(x) {
    let last_opened = x["last_opened_date"]
    let deleteIfTrue = dateIsLonger(last_opened, 14)
    x["should_delete"] = deleteIfTrue
    return x;
}
let onlyGit = filterForGitTrue()
console.log("🚀 ~ file: deleteFolders.js ~ line 44 ~ onlyGit", onlyGit)
let deleteThis = filterForPastDate(onlyGit, 14)
console.log("🚀 ~ file: deleteFolders.js ~ line 61 ~ deleteThis", deleteThis)

/**
 * @Description 
 * - If true, should delete. 
 * let shouldWeDelete = dateIsLonger("March 2, 2022", 5)
let shouldDelete = dateIsLonger("March 2, 2022", 1)
console.log("🚀 ~ file: fs.js ~ line 82 ~ shouldDelete", shouldDelete)
console.log("🚀 ~ file: fs.js ~ line 80 ~ shouldWeDelete", shouldWeDelete)
 * @author zen-out
 * @date 2022-03-04
 * @param {any} limit
 * @returns {any}
 */
function dateIsLonger(date, limit) {
    let cantBePastThisDate = formatDateTime.getDaysAgo(limit)
    let isPast = formatDateTime.isBefore(date, cantBePastThisDate)
    return isPast;
}

// console.log(structure)



async function writePath() {
    let getBody = await getPathForEach().then((result) => {
        return result;
    })
    ccc.writeJSON("./structure/info.json", getBody)
}