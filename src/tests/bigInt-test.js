const BigInt = require('../bigInt').BigInt
const miniTest = require('./mini-test')
const [test, assertEquals] = [miniTest.test, miniTest.assertEquals]

test(() => {
    let x = new BigInt()
    assertEquals(1, x.digits.length)
    assertEquals(0, x.digits[0])

    let y = new BigInt([3, 5])
    assertEquals(2, y.digits.length)
    assertEquals(5, y.digits[0])
    assertEquals(3, y.digits[1])
}, 'ctor test')

test(() => {
    let a = new BigInt([3, 5])
    let b = new BigInt([3, 5])
    assertEquals(true, a.equals(b))
}, 'equals test')

test(() => {
    let c = new BigInt([6, 5, 8, 4])
    let d = new BigInt([6, 5, 8, 5])
    assertEquals(true, c.increment.equals(d))

    let e = new BigInt([9, 9, 9])
    let f = new BigInt([1, 0, 0, 0])
    assertEquals(true, e.increment.equals(f))
}, 'increment test')

test(() => {
    let e = new BigInt([9, 9, 9])
    assertEquals(true, e.toString() === '999')
    assertEquals(true, e.increment.toString() === '1000')
}, 'toString test')

test(() => {
    let x = BigInt.fromString('199')
    assertEquals(true, x.toString() === '199')
    assertEquals(true, x.increment.toString() === '200')
}, 'fromString test')
