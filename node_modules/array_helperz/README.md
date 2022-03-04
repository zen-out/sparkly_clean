<a name="ArrayOfObjectsHelper"></a>

## ArrayOfObjectsHelper

### To start 

npm install array_helperz 

```js
const {
    arrz
} = require("array_helperz")
```

**Kind**: global class  
**Date**: 2022-02-17  

* [ArrayOfObjectsHelper](#ArrayOfObjectsHelper)
    - [new ArrayOfObjectsHelper()](#new_ArrayOfObjectsHelper_new)
    - [.trimArr(arr)](#ArrayOfObjectsHelper+trimArr) ⇒ <code>array</code>
    - [.countByCondition(array, key, value)](#ArrayOfObjectsHelper+countByCondition) ⇒ <code>number</code>
    - [.filterValues(array, keyword, arrOfKeys)](#ArrayOfObjectsHelper+filterValues) ⇒ <code>array</code>
    - [.sortAsc(array, property)](#ArrayOfObjectsHelper+sortAsc) ⇒ <code>array</code>
    - [.sortDesc(array, property)](#ArrayOfObjectsHelper+sortDesc) ⇒ <code>array</code>
    - [.contains(array, property)](#ArrayOfObjectsHelper+contains) ⇒ <code>array</code>
    - [.doesNotContain(array, property)](#ArrayOfObjectsHelper+doesNotContain) ⇒ <code>array</code>
    - [.filterAndSortObject(data, object, sortValue, sortType, asc, limit)](#ArrayOfObjectsHelper+filterAndSortObject) ⇒ <code>any</code>
    - [.filterAndSort(of, containsThisWord, arrOfKeys, sortValue, asc)](#ArrayOfObjectsHelper+filterAndSort) ⇒ <code>array</code>
    - [.group(of, groupByCondition, dictionary)](#ArrayOfObjectsHelper+group) ⇒ <code>array</code>
    - [.parentAnArray(getAll, getAllSecond, firstTableName, secondTableName)](#ArrayOfObjectsHelper+parentAnArray) ⇒ <code>array</code>
    - [.intersect()](#ArrayOfObjectsHelper+intersect) ⇒ <code>array</code>

<a name="new_ArrayOfObjectsHelper_new"></a>

### new ArrayOfObjectsHelper()

let arrz = new ArrayOfObjectsHelper()

<a name="ArrayOfObjectsHelper+trimArr"></a>

### arrayOfObjectsHelper.trimArr(arr) ⇒ <code>array</code>

trims array values

**Kind**: instance method of [<code>ArrayOfObjectsHelper</code>](#ArrayOfObjectsHelper)  
**Date**: 2021-12-19  
**Author**: lezzles11 :) www.github.com/lezzles11  
**Author**: lezzles11 :) www.github.com/lezzles11  

| Param | Type |
| --- | --- |
| arr | <code>array</code> | 

<a name="ArrayOfObjectsHelper+countByCondition"></a>

### arrayOfObjectsHelper.countByCondition(array, key, value) ⇒ <code>number</code>

**Kind**: instance method of [<code>ArrayOfObjectsHelper</code>](#ArrayOfObjectsHelper)  
**Returns**: <code>number</code> - of objects that meet that condition  
**Date**: 2022-02-17  
**Author**: lezzles11 :) www.github.com/lezzles11  

| Param | Type |
| --- | --- |
| array | <code>any</code> | 
| key | <code>string</code> | 
| value | <code>string</code> | 

**Example**  

```js
let output = arrz.countByCondition(problem, "status", "to do")
console.log(output) // 9 
```

<a name="ArrayOfObjectsHelper+filterValues"></a>

### arrayOfObjectsHelper.filterValues(array, keyword, arrOfKeys) ⇒ <code>array</code>

**Kind**: instance method of [<code>ArrayOfObjectsHelper</code>](#ArrayOfObjectsHelper)  
**Returns**: <code>array</code> - of objects  
**Date**: 2022-02-17  
**Author**: lezzles11 :) www.github.com/lezzles11  

| Param | Type |
| --- | --- |
| array | <code>array</code> | 
| keyword | <code>any</code> | 
| arrOfKeys | <code>any</code> | 

**Example**  

```js
let input = [{
    id: 1,
    problem: "hello",
    start: "Dec 11, 1995",
    seconds: 50,
    status: "to do",
    whatshouldbe: "it should be more fun"
}, {
    id: 2,
    seconds: 20,
    status: "doing",
    start: "Dec 12, 1994",
    problem: "zup",
    whatshouldbe: "hii"
}]
let output = arrz.filterValues(input, "hello", ["problem"])
// output 
[{
    id: 1,
    problem: 'hello',
    start: 'Dec 11, 1995',
    seconds: 50,
    status: 'to do',
    whatshouldbe: 'it should be more fun'
}]
```

<a name="ArrayOfObjectsHelper+sortAsc"></a>

### arrayOfObjectsHelper.sortAsc(array, property) ⇒ <code>array</code>

描述

**Kind**: instance method of [<code>ArrayOfObjectsHelper</code>](#ArrayOfObjectsHelper)  
**Returns**: <code>array</code> - of objects  
**Date**: 2022-02-17  
**Author**: lezzles11 :) www.github.com/lezzles11  

| Param | Type |
| --- | --- |
| array | <code>array</code> | 
| property | <code>any</code> | 

<a name="ArrayOfObjectsHelper+sortDesc"></a>

### arrayOfObjectsHelper.sortDesc(array, property) ⇒ <code>array</code>

描述

**Kind**: instance method of [<code>ArrayOfObjectsHelper</code>](#ArrayOfObjectsHelper)  
**Returns**: <code>array</code> - of objects  
**Date**: 2022-02-17  
**Author**: lezzles11 :) www.github.com/lezzles11  

| Param | Type |
| --- | --- |
| array | <code>array</code> | 
| property | <code>any</code> | 

<a name="ArrayOfObjectsHelper+contains"></a>

### arrayOfObjectsHelper.contains(array, property) ⇒ <code>array</code>

**Kind**: instance method of [<code>ArrayOfObjectsHelper</code>](#ArrayOfObjectsHelper)  
**Returns**: <code>array</code> - of objects  
**Date**: 2022-02-17  
**Author**: lezzles11 :) www.github.com/lezzles11  

| Param | Type |
| --- | --- |
| array | <code>array</code> | 
| property | <code>any</code> | 

**Example**  

```js
let input = [{
    id: 1,
    problem: "hello",
    start: "Dec 11, 1995",
    seconds: 50,
    status: "to do",
    whatshouldbe: "it should be more fun"
}, {
    id: 2,
    seconds: 20,
    status: "doing",
    start: "Dec 12, 1994",
    problem: "zup",
    whatshouldbe: "hii"
}]
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
```

<a name="ArrayOfObjectsHelper+doesNotContain"></a>

### arrayOfObjectsHelper.doesNotContain(array, property) ⇒ <code>array</code>

**Kind**: instance method of [<code>ArrayOfObjectsHelper</code>](#ArrayOfObjectsHelper)  
**Returns**: <code>array</code> - of objects  
**Date**: 2022-02-17  
**Author**: lezzles11 :) www.github.com/lezzles11  

| Param | Type |
| --- | --- |
| array | <code>array</code> | 
| property | <code>any</code> | 

**Example**  

```js
let input = [{
    id: 1,
    problem: "hello",
    start: "Dec 11, 1995",
    seconds: 50,
    status: "to do",
    whatshouldbe: "it should be more fun"
}, {
    id: 2,
    seconds: 20,
    status: "doing",
    start: "Dec 12, 1994",
    problem: "zup",
    whatshouldbe: "hii"
}]
let output = arrz.doesNotContain(input, "status", "to do")
console.log(output)[{
    id: 2,
    seconds: 20,
    status: 'doing',
    start: 'Dec 12, 1994',
    problem: 'zup',
    whatshouldbe: 'hii'
}]
```

<a name="ArrayOfObjectsHelper+filterAndSortObject"></a>

### arrayOfObjectsHelper.filterAndSortObject(data, object, sortValue, sortType, asc, limit) ⇒ <code>any</code>

**Kind**: instance method of [<code>ArrayOfObjectsHelper</code>](#ArrayOfObjectsHelper)  
**Date**: 2022-02-17  

| Param | Type | Default |
| --- | --- | --- |
| data | <code>any</code> |  | 
| object | <code>any</code> |  | 
| sortValue | <code>any</code> |  | 
| sortType | <code>any</code> |  | 
| asc | <code>any</code> | <code>true</code> | 
| limit | <code>any</code> |  | 

**Example**  

```js
let input = [{
    id: 1,
    problem: "hello",
    start: "Dec 11, 1995",
    seconds: 50,
    status: "to do",
    whatshouldbe: "it should be more fun"
}, {
    id: 2,
    seconds: 20,
    status: "doing",
    start: "Dec 12, 1994",
    problem: "zup",
    whatshouldbe: "hii"
}]
let output = arrz.filterAndSortObject(input, {
    status: "to do"
}, "id", "number")
console.log(output)[{
    id: 1,
    problem: 'hello',
    start: 'Dec 11, 1995',
    seconds: 50,
    status: 'to do',
    whatshouldbe: 'it should be more fun'
}]
```

<a name="ArrayOfObjectsHelper+filterAndSort"></a>

### arrayOfObjectsHelper.filterAndSort(of, containsThisWord, arrOfKeys, sortValue, asc) ⇒ <code>array</code>

描述

**Kind**: instance method of [<code>ArrayOfObjectsHelper</code>](#ArrayOfObjectsHelper)  
**Returns**: <code>array</code> - of objects  
**Date**: 2022-02-17  
**Author**: lezzles11 :) www.github.com/lezzles11  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| of | <code>array</code> |  | objects |
| containsThisWord | <code>any</code> |  |  |
| arrOfKeys | <code>any</code> |  |  |
| sortValue | <code>any</code> |  |  |
| asc | <code>any</code> | <code>true</code> |  |

**Example**  

```js
let input = [{
    id: 1,
    problem: "hello",
    start: "Dec 11, 1995",
    seconds: 50,
    status: "to do",
    whatshouldbe: "it should be more fun"
}, {
    id: 2,
    seconds: 20,
    status: "doing",
    start: "Dec 12, 1994",
    problem: "zup",
    whatshouldbe: "hii"
}]
let output = arrz.filterAndSort(input, "more fun", ["problem", "whatshouldbe"], "status", "string")
console.log(output)
// output
[{
    id: 1,
    problem: 'hello',
    start: 'Dec 11, 1995',
    seconds: 50,
    status: 'to do',
    whatshouldbe: 'it should be more fun'
}]
```

<a name="ArrayOfObjectsHelper+group"></a>

### arrayOfObjectsHelper.group(of, groupByCondition, dictionary) ⇒ <code>array</code>

group(array, "status")
{"to do": [{}], "doing": [{}]}

**Kind**: instance method of [<code>ArrayOfObjectsHelper</code>](#ArrayOfObjectsHelper)  
**Returns**: <code>array</code> - of objects  
**Date**: 2022-02-17  
**Author**: lezzles11 :) www.github.com/lezzles11  

| Param | Type | Description |
| --- | --- | --- |
| of | <code>array</code> | objects |
| groupByCondition | <code>any</code> |  |
| dictionary | <code>any</code> |  |

**Example**  

```js
let input = [{
    id: 1,
    problem: "hello",
    start: "Dec 11, 1995",
    seconds: 50,
    status: "to do",
    whatshouldbe: "it should be more fun"
}, {
    id: 2,
    seconds: 20,
    status: "doing",
    start: "Dec 12, 1994",
    problem: "zup",
    whatshouldbe: "hii"
}]
let output = arrz.group(input, "status")
console.log(output) {
    'to do': [{
        id: 1,
        problem: 'hello',
        start: 'Dec 11, 1995',
        seconds: 50,
        status: 'to do',
        whatshouldbe: 'it should be more fun'
    }],
    doing: [{
        id: 2,
        seconds: 20,
        status: 'doing',
        start: 'Dec 12, 1994',
        problem: 'zup',
        whatshouldbe: 'hii'
    }]
}
```

<a name="ArrayOfObjectsHelper+parentAnArray"></a>

### arrayOfObjectsHelper.parentAnArray(getAll, getAllSecond, firstTableName, secondTableName) ⇒ <code>array</code>

**Kind**: instance method of [<code>ArrayOfObjectsHelper</code>](#ArrayOfObjectsHelper)  
**Returns**: <code>array</code> - of objects  
**Date**: 2022-02-17  
**Author**: lezzles11 :) www.github.com/lezzles11  
**Author**: lezzles11 :) www.github.com/lezzles11  

| Param | Type |
| --- | --- |
| getAll | <code>array</code> | 
| getAllSecond | <code>array</code> | 
| firstTableName | <code>any</code> | 
| secondTableName | <code>any</code> | 

**Example**  

```js
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
console.log(output)[{
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
    task: [
        [Object]
    ]
}]
```

<a name="ArrayOfObjectsHelper+intersect"></a>

### arrayOfObjectsHelper.intersect() ⇒ <code>array</code>

arrz.intersect()

**Kind**: instance method of [<code>ArrayOfObjectsHelper</code>](#ArrayOfObjectsHelper)  
**Returns**: <code>array</code> - of objects  
**Date**: 2022-02-17  
**Author**: lezzles11 :) www.github.com/lezzles11  

| Param | Type |
| --- | --- |
| ...rest | <code>any</code> | 
