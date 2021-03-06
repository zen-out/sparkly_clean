const when_you_free = require("when_you_free")
const ccc = require("clear_concise_creative")
const arrz = require("array_helperz")

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
/**
 * @Description 
 * 1. Checks whether or not git is needed 
 * 2. 
 * @author zen-out
 * @date 2022-03-04
 * @param {any} git
 * @param {any} days
 * @returns {any}
 */
function foldersToDelete(git, days) {
    if (git === true) {
        let onlyGit = filterForGitTrue()
        let deleteThis = filterForPastDate(onlyGit, days)
        return deleteThis;
    } else {
        let folders = getFolders()
        let deleteThis = filterForPastDate(folders, days)
        return deleteThis;
    }
}


function deleteFolders(git, days) {
    let folders = foldersToDelete(git, days)
    console.log(folders)
    for (let i = 0; i < folders.length; i++) {
        ccc.deletePath(folders[i]["name"])
        console.log("deleted")
    }

}

// console.log("🚀 ~ file: deleteFolders.js ~ line 59 ~ getDelete", getDelete)
// let doesntMatter = deleteFiles(false, 14)
// console.log("🚀 ~ file: deleteFolders.js ~ line 56 ~ doesntMatter", doesntMatter)
// see.should("doesnt matter if its git or not")
// console.log("🚀 ~ file: deleteFolders.js ~ line 43 ~ theseFiles", theseFiles)

/**
 * @Description 
 * Filters got git true 
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
    let arr = []
    for (let i = 0; i < array.length; i++) {
        let last_opened = array[i]["last_opened_date"]
        let deleteIfTrue = dateIsLonger(last_opened, days)
        if (deleteIfTrue) {
            array[i]["should_delete"] = deleteIfTrue
            arr.push(array[i])
        }
    }
    return arr;
}


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
    let getDays = when_you_free.dateIsWithinLimit(date, limit)
    return !getDays;
}

// console.log(structure)




module.exports = { dateIsLonger, filterForPastDate, getFolders, foldersToDelete, deleteFolders, filterForGitTrue }