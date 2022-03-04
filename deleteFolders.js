const fs = require('fs-extra')
const { formatDateTime } = require("format_date_time_moment/node")
const path = require("path")
const { see, hourglass } = require("code_clarity")
const dirTree = require("directory-tree")
const { git, node_modules } = require("define_me")
const ccc = require("clear_concise_creative")

see.problem("should essentially remove files that you havent touched in two weeks")
see.should("")
see.is("")
see.step("think more clearly about what you need to do to make this really good")

function getFiles() {
    let arr = ccc.readJSON("./structure/index.json")
        // console.log("🚀 ~ file: deleteFolders.js ~ line 16 ~ getFiles ~ arr", arr)
    let getFiles = arr["files"]
    console.log("🚀 ~ file: deleteFolders.js ~ line 18 ~ getFiles ~ getFiles", getFiles)

}
let files = getFiles()
    // console.log("🚀 ~ file: deleteFolders.js ~ line 19 ~ files", files)


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