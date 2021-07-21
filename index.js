var answer = ''

function arrToString(arr, callback) {
    let count = 0
    let j = 0
    for (let i = 0; i < arr.length; i++) {
        if (count == 0) {
            j = i
        }
        if (arr[i + 1] - arr[i] == 1) {
            count += 1
            continue
        }
        else {
            if (count == 0) {
                callback(arr[i], arr[i])
                count = 0
            }
            else if (count == 1) {
                callback(arr[j], arr[j])
                count = 0
                callback(arr[i], arr[i])
                count = 0
            } 
            else {
            callback(arr[j], arr[i])
            count = 0
            }
        }
    }
    return answer.substring(0, answer.length - 1)
}

function myCallBack (arrStart, arrEnd) {
    if (arrStart == arrEnd) {
        answer += arrStart.toString() + ','
    } else {
    answer += arrStart.toString() + '-' + arrEnd.toString() + ','
    }
}

module.exports = {
    arrToString,
    myCallBack
}

// console.log(arrToString([1,2,3,4,5,6,7,8], myCallBack))
// answer = ''
// console.log(arrToString([1,3,4,5,6,7,8], myCallBack))
// answer = ''
// console.log(arrToString([1,3,4,5,6,7,8,10,11,12], myCallBack))
// answer = ''
// console.log(arrToString([1,2,3], myCallBack))
// answer = ''
// console.log(arrToString([1,2], myCallBack))
// answer = ''
// console.log(arrToString([1,2,4], myCallBack))
// answer = ''
// console.log(arrToString([1,2,4,5,6], myCallBack))
// answer = ''
// console.log(arrToString([1,2,3,7,8,9,15,17,19,20,21], myCallBack))
// answer = ''
// console.log(arrToString([1,2,3,4,5,6,100,1091,1999,2000,2001,2002], myCallBack))
// answer = ''
// console.log(arrToString([1], myCallBack))
// answer = ''
// console.log(arrToString([1,3,5,7,9,11], myCallBack))
// answer = ''