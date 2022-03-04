describe("it can read, write and append to json", () => {
    it("can write into json", () => {

    })
    it('can read from json', () => {

    })
    it("can append to json", () => {

        function writeJSON(filePath, object) {
            fs.outputJsonSync(filePath, object)
        }

        function readJSON(filePath) {
            let readFromFile = fs.readJsonSync(filePath)
            return readFromFile
        }
        let getDirectory = getDirectoryStructure("./tree", /\.txt$/)
        let structuredPath = "./tree/structure/index.json"
        writeJSON("./tree/structure/index.json", getDirectory)
        let readFromFile = readJSON(structuredPath)
        console.log("🚀 ~ file: playground.js ~ line 23 ~ readFromFile", JSON.stringify(readFromFile))
            // should include tree/frontend/views
    })
})