import { calculateUUID } from "./hash";

describe("hash is deterministic", () => {
    let value = Math.random().toString();
    test("random string", () => {
        expect(calculateUUID(value)).toBe(calculateUUID(value))
        expect(calculateUUID(value)).not.toBe(calculateUUID(""))
    })

    test("empty object", () => {
        expect(calculateUUID({})).toBe(calculateUUID({}))
        expect(calculateUUID({})).not.toBe(calculateUUID(""))
    })

    test("empty keys", () => {
        expect(calculateUUID({}, [])).toBe(calculateUUID({}, []))
        expect(calculateUUID({a: 1}, [])).toBe(calculateUUID({}, []))
        expect(calculateUUID({}, [])).not.toBe(calculateUUID(""))
    })

    test("same keys", () => {
        expect(calculateUUID({a: 1}, ["a"])).toBe(calculateUUID({a: 1}, ["a"]))
        expect(calculateUUID({a: 1}, ["a"])).not.toBe(calculateUUID({a: 2}, ["a"]))
    })

    test("multiple keys", () => {
        expect(calculateUUID({a: 1, b: 2})).toBe(calculateUUID({b: 2, a: 1}))
        expect(calculateUUID({a: 1, b: 2})).not.toBe(calculateUUID({a: 2, b: 1}))
    })

    test("nested keys", () => {
        expect(calculateUUID({a: 1, b: {c: 2, d: 3}})).toBe(calculateUUID({b: {d: 3, c: 2}, a: 1}))
        expect(calculateUUID({a: 1, b: {c: 2, d: 3}})).toBe(calculateUUID({b: {}, a: 1}))
        expect(calculateUUID({a: 1, b: {c: 2}})).not.toBe(calculateUUID({a: 2, b: {c: 1}}))
    })

    test("JSON not deterministic", () => {
        expect(JSON.stringify({a: 1, b: 2})).not.toBe(JSON.stringify({b: 2, a: 1}))
    })
})