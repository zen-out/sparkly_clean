const { problem, task } = require("./data.js")
const { arrz } = require("./index.js")
let problem2 = [{
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
    // // function ARRINCLUDE
    // let problem2 = arrz.filterAndSort(input, "high", ["importance", "usefulness"], "created", true, 2)
    //     // console.log(problem2)

// function getFilterAndSortObject() {
//     let filtered = arrz.filterAndSortObject(problem, "created", true, 10)
//     console.log(filtered)
//     return filtered;
// }
// getFilterAndSortObject()
//     // let parentAnArray = arrz.parentAnArray(problem, task, "problem", "task")
//     // console.log(parentAnArray)



// let counts = arrz.countByCondition(problem, "status", "done")
// HAS(counts, 1)
// console.log(counts)

// let grouped = arrz.groupAndSort(problem, "status", {
// "status": ["to do", "doing", "done"],
// "difficulty": ["easy", "medium", "difficult"]
// })
// console.log(grouped)


// let shouldBeTodo = grouped[0]["status"]
// HAS(shouldBeTodo, "to do")
// console.log("🚀 ~ file: playground.js ~ line 168 ~ shouldBeTodo", shouldBeTodo)
// let shouldBeDone = grouped[grouped.length - 1]["status"]
// HAS(shouldBeDone, "done")

// let getSorted = arrz.filterAndSort(problem, "mustafa", ["problem"], "created")
// returns problems that are sorted and
// console.log(getSorted.length)
// let getSorted1 = getSorted[0].seconds
// console.log("🚀 ~ file: playground.js ~ line 145 ~ getSorted1", getSorted1)

// let getSorted2 = getSorted[1].seconds
// console.log("🚀 ~ file: playground.js ~ line 148 ~ getSorted2", getSorted2)

// let getSorted3 = getSorted[2].seconds
// console.log("🚀 ~ file: playground.js ~ line 151 ~ getSorted3", getSorted3)


// let found = arrz.filterValues(problem, "mustafa", ["problem"])
// console.log(found)
// HAS(found, importance: 'high', difficulty: 'easy', email: 'ryanyiu@bu.edu')

// let sorted = arrz.sortAsc(problem, "problem")
// console.log(sorted[0]["problem"])
// console.log(sorted[1]["problem"])
// console.log(sorted[2]["problem"])


// let sortedDesc = arrz.sortDesc(problem, "problem")
// console.log(sortedDesc[0]["problem"])
// console.log(sortedDesc[1]["problem"])
// console.log(sortedDesc[2]["problem"])

// let doesNotContain2 = arrz.doesNotContain(problem, "whatsup")
// let length = doesNotContain2.length
// console.log("🚀 ~ file: playground.js ~ line 152 ~ length", length)
// IS(length, 3)