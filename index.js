var answer = ''

async function arrToString(arr) {
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
                answer += arr[i].toString() + ','
                count = 0
            }
            else if (count == 1) {
                answer += arr[j].toString() + ',' + arr[i].toString() + ','
                count = 0
            } 
            else {
                answer += arr[j].toString() + '-' + arr[i].toString() + ','
                count = 0
            }
        }
    }
    return answer.substring(0, answer.length - 1)
}

exports.arrToStr = arrToString