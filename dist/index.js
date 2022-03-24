const { getDirectoryStructure, getPathForEach, printDirectory, isGitSync, formatStats, getShape } = require("./fs.js")
const { dateIsLonger, filterForPastDate, getFolders, foldersToDelete, deleteFolders, filterForGitTrue, } = require("./deleteFolders.js")
const { list } = require("./list.js")
module.exports = { list, getDirectoryStructure, getPathForEach, printDirectory, isGitSync, formatStats, getShape, dateIsLonger, getFolders, foldersToDelete, deleteFolders, filterForGitTrue, filterForPastDate }