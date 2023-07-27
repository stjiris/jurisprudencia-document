import { isValidJurisprudenciaDocumentKey, JurisprudenciaDocumentContentKeys, JurisprudenciaDocumentDateKeys, JurisprudenciaDocumentExactKeys, JurisprudenciaDocumentGenericKeys, JurisprudenciaDocumentHashKeys, JurisprudenciaDocumentKey, JurisprudenciaDocumentKeys, JurisprudenciaDocumentObjectKeys, JurisprudenciaDocumentProperties, JurisprudenciaDocumentTextKeys } from "./jurisprudencia-document"

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

describe("validators", () => {
    test.each(Object.keys(JurisprudenciaDocumentProperties))("key %p is valid JurisprudenciaDocumentKey", (key) => {
        expect(isValidJurisprudenciaDocumentKey(key)).toBeTruthy();
    })
    test("Random string", () => {
        expect(isValidJurisprudenciaDocumentKey(Math.random().toString())).toBeFalsy()
    })
})