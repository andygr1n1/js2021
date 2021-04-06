function createPromise(value, delay, error) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            error ? reject(error) : resolve(value)
        }, delay)
    })
}

const p1 = createPromise(1, 250, 'some custom error')
const p2 = createPromise(2, 1500, 'fucking error')
const p3 = createPromise(3, 2700)
const p4 = createPromise(4, 100)

    ;(async() => {
        const res = await Promise.all([p1, p2, p3, p4])
        return ('promise all', console.log(res))
    })()

    ;(async () => {
        const res = await Promise.allSettled([p1, p2, p3, p4])
        return ('all settled', console.log(res))
    })()

    ;(async () => {
        try {
            const res = await Promise.any([p1, p2])
            return ('any', console.log(res))
        } catch (e) {
            console.log(e)
            console.log('errors: ', e.errors)
        }
    })()