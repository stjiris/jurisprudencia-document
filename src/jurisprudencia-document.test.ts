import { isJurisprudenciaDocumentContentKey, isJurisprudenciaDocumentDateKey, isJurisprudenciaDocumentExactKey, isJurisprudenciaDocumentGenericKey, isJurisprudenciaDocumentHashKey, isJurisprudenciaDocumentObjectKey, isJurisprudenciaDocumentTextKey, isValidJurisprudenciaDocumentKey, JurisprudenciaDocumentContentKeys, JurisprudenciaDocumentDateKeys, JurisprudenciaDocumentExactKeys, JurisprudenciaDocumentGenericKeys, JurisprudenciaDocumentHashKeys, JurisprudenciaDocumentKey, JurisprudenciaDocumentKeys, JurisprudenciaDocumentObjectKeys, JurisprudenciaDocumentProperties, JurisprudenciaDocumentTextKeys } from "./jurisprudencia-document"

describe("JurisprudenciaDocument", () => {
    const merge = (JurisprudenciaDocumentContentKeys as unknown as JurisprudenciaDocumentKey[]).concat(
        ...JurisprudenciaDocumentHashKeys,
        ...JurisprudenciaDocumentObjectKeys,
        ...JurisprudenciaDocumentDateKeys,
        ...JurisprudenciaDocumentTextKeys,
        ...JurisprudenciaDocumentExactKeys,
        ...JurisprudenciaDocumentGenericKeys)

    test.each(JurisprudenciaDocumentKeys)("key %p exists in JurisprudenciaDocumentProperties", (key) => {
        expect(merge.includes(key)).toBeTruthy();
    })

    test.each(merge)("property %p exits in JurisprudenciaDocumentKeys", (key) => {
        expect(JurisprudenciaDocumentKeys.includes(key as JurisprudenciaDocumentKey)).toBeTruthy();
    })

    test("Number of keys", () => {
        expect(merge.length).toBe(JurisprudenciaDocumentKeys.length)
    })
})

describe("There are 8 validators", () => {
    let keys = require("./jurisprudencia-document");
    expect(Object.keys(keys).filter(vs => vs.startsWith("is"))).toHaveLength(8)
    require("./jurisprudencia-document")
})

describe("validators", () => {
    test.each(Object.keys(JurisprudenciaDocumentProperties))("key %p is valid JurisprudenciaDocumentKey", (key) => {
        expect(isValidJurisprudenciaDocumentKey(key)).toBeTruthy();
    })
    test("Random string", () => {
        let key = Math.random().toString()
        expect(isValidJurisprudenciaDocumentKey(key)).toBeFalsy()
        expect(isJurisprudenciaDocumentContentKey(key)).toBeFalsy()
        expect(isJurisprudenciaDocumentHashKey(key)).toBeFalsy()
        expect(isJurisprudenciaDocumentDateKey(key)).toBeFalsy()
        expect(isJurisprudenciaDocumentTextKey(key)).toBeFalsy()
        expect(isJurisprudenciaDocumentObjectKey(key)).toBeFalsy()
        expect(isJurisprudenciaDocumentGenericKey(key)).toBeFalsy()
        expect(isJurisprudenciaDocumentExactKey(key)).toBeFalsy()
    })

    test("Key can only be of one type", () => {
        JurisprudenciaDocumentKeys.forEach((key) => {
            expect(
                (+isJurisprudenciaDocumentContentKey(key)) +
                (+isJurisprudenciaDocumentHashKey(key)) +
                (+isJurisprudenciaDocumentDateKey(key)) +
                (+isJurisprudenciaDocumentTextKey(key)) +
                (+isJurisprudenciaDocumentObjectKey(key)) +
                (+isJurisprudenciaDocumentGenericKey(key)) +
                (+isJurisprudenciaDocumentExactKey(key))
            ).toBe(1)
        })
    })

})