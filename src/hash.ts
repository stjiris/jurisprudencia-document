import { createHash } from "crypto"

// Create a deterministic hash from stringifying an Record<string, string> object
export function calculateUUID(obj: any, keys?: string[]): string {
    let keysToUse = keys?.slice(0) || Object.keys(obj);
    keysToUse.sort();
    let str = JSON.stringify(obj, keysToUse);
    return createHash("sha256").update(str).digest("base64url")
}
