import { createHash } from "crypto"
import { HASHField, JurisprudenciaDocument } from "./jurisprudencia-document";

// Create a deterministic hash from stringifying an Record<string, string> object
export function calculateSHA1(obj: any, keys?: string[]): string {
    let keysToUse = keys?.slice(0) || Object.keys(obj);
    keysToUse.sort();
    let str = JSON.stringify(obj, keysToUse);
    return createHash("sha1").update(str).digest("base64url")
}

export function calculateHASH(doc: Pick<JurisprudenciaDocument, "Original" | "Número de Processo" | "Data" | "Meio Processual" | "Sumário" | "Texto" | "STATE">): HASHField {
    return {
        Original: calculateSHA1(doc.Original),
        Processo: calculateSHA1(doc["Número de Processo"] || ""),
        Data: calculateSHA1(doc.Data || ""),
        "Meio Processual": calculateSHA1(doc["Meio Processual"]?.Original || ""),
        Sumário: calculateSHA1(doc.Sumário || ""),
        Texto: calculateSHA1(doc.Texto || ""),
        STATE: calculateSHA1(doc.STATE || "")
    }
}

export function calculateUUID(hash: HASHField): string {
    return calculateSHA1(hash, ["Processo", "Data", "Meio Processual", "STATE"])
}
