/**
 * Represents unsigned interger without overflow issue.
 */
class BigInt {
    /**
     * @param {Array} digits e.g. 1024 <=> digits: [4, 2, 0, 1]
     */
    constructor(digits) {
        this.digits = digits === undefined? [0] : reverseArr(digits)
        if (!this.digits.every(i => isDigit(i))) {
            throw new Error()
        }
    }

    /**
     * Value equality of the two bigInt.
     * @param {bigInt} other 
     */
    equals(other) {
        return arrEquals(this.digits, other.digits)
    }

    get increment() {
        let res = new BigInt(reverseArr(this.digits))
        addToDigit(res.digits, 0, 1)
        return res
    }

    toString() {
        return reverseArr(this.digits).join('')
    }

    /**
     * @param {string} str 
     */
    static fromString(str) {
        let chars = str.split('')
        if (chars.length === 0 || !chars.every(c => isDigitChar(c))) {
            throw new Error()
        }

        return new BigInt(chars.map(c => parseInt(c)))
    }
}

function reverseArr(arr) {
    let a = arr.slice()
    a.reverse()
    return a
}

function isDigitChar(c) {
    return '0' <= c && c <= '9'
}

function isDigit(n) {
    return isInt(n) && 0 <= n && n <= 9
}

function isInt(n) {
    return n % 1 === 0
}

function arrEquals(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false
    }

    return arr1.every((e, i) => e === arr2[i])
}

function addToDigit(digits, index, amount) {
    if (!isDigit(amount)) {
        throw new Error()
    }

    let d = digits
    if (index >= d.length) {
        d.push(amount)
    } else {
        d[index] += amount
        if (d[index] > 9) {
            d[index] -= 10
            addToDigit(d, index + 1, 1)
        }
    }        
}

exports.BigInt = BigInt
