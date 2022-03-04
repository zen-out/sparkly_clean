const _ = require("lodash")
const { matchSorter } = require("match-sorter")
const { formatDateTime } = require("./dateUtilz")

class ArrayOfObjectsHelper {
    constructor() {

    }

    /**
     * trimArr(arr)
     * @description trims array values
     * @author lezzles11 :) www.github.com/lezzles11
     * @author lezzles11 :) www.github.com/lezzles11
     * @date 2021-12-19
     * @param {array} arr
     * @returns {array}
     */
    trimArr(arr) {
            for (let i = 0; i < arr.length; i++) {
                for (const [key, value] of Object.entries(arr[i])) {
                    //   console.debug(`${key}: ${value}`);
                    if (typeof value === "string") {
                        let trimmed = _.trim(value);
                        arr[i][key] = trimmed;
                    }
                }
            }
            return arr;
        }
        /**
         * @example
         * let output = arrz.countByCondition(problem, "status", "to do")
console.log(output) // 9 
         * @author lezzles11 :) www.github.com/lezzles11
         * @date 2022-02-17
         * @param {any} array
         * @param {string} key
         * @param {string} value
         * @returns {number} of objects that meet that condition
         */
    countByCondition(array, key, value) {
            let count = 0;
            for (let i = 0; i < array.length; i++) {
                if (array[i][key] === value) {
                    count++;
                }
            }
            return count;
        }
        /**
         * @example
         * let input = [{ id: 1, problem: "hello", start: "Dec 11, 1995", seconds: 50, status: "to do", whatshouldbe: "it should be more fun" }, { id: 2, seconds: 20, status: "doing", start: "Dec 12, 1994", problem: "zup", whatshouldbe: "hii" }]
let output = arrz.filterValues(input, "hello", ["problem"])
// output 
[
  {
    id: 1,
    problem: 'hello',
    start: 'Dec 11, 1995',
    seconds: 50,
    status: 'to do',
    whatshouldbe: 'it should be more fun'
  }
]
         * @author lezzles11 :) www.github.com/lezzles11
         * @date 2022-02-17
         * @param {array} array
         * @param {any} keyword
         * @param {any} arrOfKeys
         * @returns {array} of objects
         */
    filterValues(array, keyword, arrOfKeys) {
            let result = matchSorter(array, keyword, { keys: arrOfKeys })
            return this.trimArr(result);
        }
        /**
         * 描述
         * @author lezzles11 :) www.github.com/lezzles11
         * @date 2022-02-17
         * @param {array} array
         * @param {any} property
         * @returns {array} of objects
         */
    sortAsc(array, property, type) {
            if (type === "date") {
                for (let i = 0; i < array.length; i++) {
                    array[i][property] = formatDateTime.format(array[i][property], "dateInput")
                }
            }
            let result = _.sortBy(array, [property])
            return this.trimArr(result);
        }
        /**
         * 描述
         * @author lezzles11 :) www.github.com/lezzles11
         * @date 2022-02-17
         * @param {array} array
         * @param {any} property
         * @returns {array} of objects
         */
    sortDesc(array, property, type) {

            if (type === "date") {
                for (let i = 0; i < array.length; i++) {
                    array[i][property] = formatDateTime.format(array[i][property], "dateInput")
                }
            }
            let result = _.sortBy(array, [property])
            return this.trimArr(result.reverse())
        }
        /**
         * @example
         * let input = [{ id: 1, problem: "hello", start: "Dec 11, 1995", seconds: 50, status: "to do", whatshouldbe: "it should be more fun" }, { id: 2, seconds: 20, status: "doing", start: "Dec 12, 1994", problem: "zup", whatshouldbe: "hii" }]
let output = arrz.contains(input, "status", "to do")
console.log(output)
// [
  {
    id: 1,
    problem: 'hello',
    start: 'Dec 11, 1995',
    seconds: 50,
    status: 'to do',
    whatshouldbe: 'it should be more fun'
  }
]
         * @author lezzles11 :) www.github.com/lezzles11
         * @date 2022-02-17
         * @param {array} array
         * @param {any} property
         * @returns {array} of objects
         */
    contains(array, property, value) {
            let result = []
            for (let i = 0; i < array.length; i++) {
                if (array[i][property] === value) {
                    result.push(array[i])
                }
            }
            return this.trimArr(result)
        }
        /**
         * @example
         * let input = [{ id: 1, problem: "hello", start: "Dec 11, 1995", seconds: 50, status: "to do", whatshouldbe: "it should be more fun" }, { id: 2, seconds: 20, status: "doing", start: "Dec 12, 1994", problem: "zup", whatshouldbe: "hii" }]
let output = arrz.doesNotContain(input, "status", "to do")
console.log(output)
[
  {
    id: 2,
    seconds: 20,
    status: 'doing',
    start: 'Dec 12, 1994',
    problem: 'zup',
    whatshouldbe: 'hii'
  }
]
         * @author lezzles11 :) www.github.com/lezzles11
         * @date 2022-02-17
         * @param {array} array
         * @param {any} property
         * @returns {array} of objects
         */
    doesNotContain(array, property, value) {
            let result = []
            for (let i = 0; i < array.length; i++) {
                if (!array[i][property] !== value) {
                    result.push(array[i])
                }
            }
            return this.trimArr(result)
        }
        /**
         * @example
         * let input = [{ id: 1, problem: "hello", start: "Dec 11, 1995", seconds: 50, status: "to do", whatshouldbe: "it should be more fun" }, { id: 2, seconds: 20, status: "doing", start: "Dec 12, 1994", problem: "zup", whatshouldbe: "hii" }]
let output = arrz.filterAndSortObject(input, { status: "to do" }, "id", "number")
console.log(output)
[
  {
    id: 1,
    problem: 'hello',
    start: 'Dec 11, 1995',
    seconds: 50,
    status: 'to do',
    whatshouldbe: 'it should be more fun'
  }
]
         * @date 2022-02-17
         * @param {any} data
         * @param {any} object
         * @param {any} sortValue
         * @param {any} sortType
         * @param {any} asc=true
         * @param {any} limit
         * @returns {any}
         */
    filterAndSortObject(data, object, sortValue, sortType, asc = true, limit) {
            let result = _.filter(data, object);
            let sorted = _.sortBy(result, [sortValue])
            if (asc === false) {
                sorted = this.sortDesc(sorted, sortValue, sortType)
            } else {
                sorted = this.sortAsc(sorted, sortValue, sortType)
            }
            if (limit) {
                let result = sorted.slice(0, limit)
                return this.trimArr(result);
            } else {
                return this.trimArr(sorted)
            }
        }
        /**
         * 描述
         * @example
         * let input = [{ id: 1, problem: "hello", start: "Dec 11, 1995", seconds: 50, status: "to do", whatshouldbe: "it should be more fun" }, { id: 2, seconds: 20, status: "doing", start: "Dec 12, 1994", problem: "zup", whatshouldbe: "hii" }]
let output = arrz.filterAndSort(input, "more fun", ["problem", "whatshouldbe"], "status", "string")
console.log(output)
// output
[
  {
    id: 1,
    problem: 'hello',
    start: 'Dec 11, 1995',
    seconds: 50,
    status: 'to do',
    whatshouldbe: 'it should be more fun'
  }
]


         * @author lezzles11 :) www.github.com/lezzles11
         * @date 2022-02-17
         * @param {array} of objects
         * @param {any} containsThisWord
         * @param {any} arrOfKeys
         * @param {any} sortValue
         * @param {any} asc=true
         * @returns {array} of objects
         */
    filterAndSort(data, containsThisWord, arrOfKeys, sortValue, sortType, asc = true, limit) {
        let result = matchSorter(data, containsThisWord, { keys: arrOfKeys })
        let sorted;
        if (asc === false) {
            sorted = this.sortDesc(result, sortValue, sortType)
        } else {
            sorted = this.sortAsc(result, sortValue, sortType)
        }
        if (limit) {
            let result = sorted.slice(0, limit)
            return this.trimArr(result)
        } else {
            return this.trimArr(sorted)
        }
    }

    /**
     * group(array, "status")
     * {"to do": [{}], "doing": [{}]}
     * @example
     * let input = [{ id: 1, problem: "hello", start: "Dec 11, 1995", seconds: 50, status: "to do", whatshouldbe: "it should be more fun" }, { id: 2, seconds: 20, status: "doing", start: "Dec 12, 1994", problem: "zup", whatshouldbe: "hii" }]
let output = arrz.group(input, "status")
console.log(output)
     * {
  'to do': [
    {
      id: 1,
      problem: 'hello',
      start: 'Dec 11, 1995',
      seconds: 50,
      status: 'to do',
      whatshouldbe: 'it should be more fun'
    }
  ],
  doing: [
    {
      id: 2,
      seconds: 20,
      status: 'doing',
      start: 'Dec 12, 1994',
      problem: 'zup',
      whatshouldbe: 'hii'
    }
  ]
}
     * @author lezzles11 :) www.github.com/lezzles11
     * @date 2022-02-17
     * @param {array} of objects
     * @param {any} groupByCondition
     * @param {any} dictionary
     * @returns {array} of objects
     */
    group(data, groupByCondition) {
        let grouped = _.groupBy(data, groupByCondition)
        return this.trimArr(grouped)
    }

    /**
     * @example
     * let problem2 = [{
    problem_user_id: 4,
    problem_hourglass_id: 64,
    problem: "we actually solve our problems best by looking at how other people solved them - segment each feature",
    whatshouldbe: "it should be easier to develop as a whole application but that's actually quite difficult - so segment each component and make sure you test utilizing good practices",
    whatactuallyis: "there's no like, database of previous problems and how people solved them, right? also, what is your current process",
    hypothesis: "like, what if i wanted to start my own business, how would i do that?",
    plan: "test better, when you develop, i think it would also be great actually to have an effectiveness scale - what one task really helped you?",
    problem_created: "2022-01-24T19:57:31.075Z",
    problem_id: 32,
    hourglass_id: 64,
    user_id: 4,
    hourglass_user_id: 4,
    importance: "high",
    difficulty: "hard",
    created: "2022-01-25",
    seconds: 0,
    format_created: "Jan 25, 2022 3:57 AM"
}, ]
let task2 = [{
    task_user_id: 4,
    task_hourglass_id: 157,
    task_problem_id: 32,
    name: "should be able to toggle tasks",
    task_created: "2022-01-24T19:57:47.998Z",
    task_id: 84,
    hourglass_id: 157,
    user_id: 4,
    hourglass_user_id: 4,
    created: "2022-01-25",
    seconds: 0,
    format_created: "Jan 25, 2022 3:57 AM"
}, ]
let output = arrz.parentAnArray(problem2, task2, "problem", "task")
console.log(output)
     * [
  {
    problem_user_id: 4,
    problem_hourglass_id: 64,
    problem: 'we actually solve our problems best by looking at how other people solved them - segment each feature',
    whatshouldbe: "it should be easier to develop as a whole application but that's actually quite difficult - so segment each component and make sure you test utilizing good practices",
    whatactuallyis: "there's no like, database of previous problems and how people solved them, right? also, what is your current process",
    hypothesis: 'like, what if i wanted to start my own business, how would i do that?',
    plan: 'test better, when you develop, i think it would also be great actually to have an effectiveness scale - what one task really helped you?',
    problem_created: '2022-01-24T19:57:31.075Z',
    problem_id: 32,
    hourglass_id: 64,
    user_id: 4,
    hourglass_user_id: 4,
    importance: 'high',
    difficulty: 'hard',
    created: '2022-01-25',
    seconds: 0,
    format_created: 'Jan 25, 2022 3:57 AM',
    task: [ [Object] ]
  }
]

     * @author lezzles11 :) www.github.com/lezzles11
     * @author lezzles11 :) www.github.com/lezzles11
     * @date 2022-02-17
     * @param {array} getAll
     * @param {array} getAllSecond
     * @param {any} firstTableName
     * @param {any} secondTableName
     * @returns {array} of objects
     */
    parentAnArray(getAll, getAllSecond, firstTableName, secondTableName) {
            let tableName = secondTableName
            let mapped = getAll.map((eachOne) => {
                return {
                    eachOne,
                    tableName: getAllSecond.filter((item) => {
                        return `${item}.${secondTableName}_${firstTableName}_id === ${eachOne}.${firstTableName}_id`
                    }).map(foundItem => {
                        return foundItem
                    })
                }
            })
            console.log(mapped)
            let result = []
            for (let i = 0; i < mapped.length; i++) {
                let object = mapped[i]["eachOne"]
                object[`${secondTableName}`] = mapped[i][`tableName`]
                result.push(object)
            }
            return this.trimArr(result)

        }
        /**
         * arrz.intersect()
         * @author lezzles11 :) www.github.com/lezzles11
         * @date 2022-02-17
         * @param {any} ...rest
         * @returns {array} of objects
         */
    intersect(...rest) {
        if (rest.length === 1) return rest[0] || {}

        // step 1
        const keysList = rest.map(obj => {
            return Object.keys(obj)
        })
        const minNKeysIdx = keysList.reduce((resultIdx, currItems, idx) => {
            return keysList[resultIdx].length < currItems.length ? resultIdx : idx
        }, 0)
        const intersectedKeys = (keysList[minNKeysIdx] || []).filter((key, idx) => {
            return keysList.reduce((isKeyExist, keys, keyListIdx, arr) => {
                // return true, when same index of initObjKeys
                if (keyListIdx === minNKeysIdx) return true
                return isKeyExist && keys.indexOf(key) !== -1
            }, true)
        })
        let result = intersectedKeys.reduce((intersectedObject, key) => {
            intersectedObject[key] = rest[0][key]
            return intersectedObject
        }, {})
        return result
    }


}
let arrz = new ArrayOfObjectsHelper()
module.exports = { arrz }