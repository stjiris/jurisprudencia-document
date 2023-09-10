export const JurisprudenciaVersion = "jurisprudencia.11.1"

type NullableField<F> = F | null | undefined;
type N<F> = NullableField<F>;

export type ExactField = string;
export type DateField = string;
export type GenericField = {
    Original: string[],
    Show: string[],
    Index: string[]
};
export type ObjectField = Record<string, string>;
export type HASHField = {
    "Original": string
    "Texto": string
    "Sumário": string
    "Processo": string
};

export type CONTENTField = string[];

const ExactFieldMapping = {
    type: 'keyword'
}

const NormalizedFieldMapping = {
    type: 'keyword',
    normalizer: 'term_normalizer'   
}

const DateFieldMapping = {
    type: 'date',
    format: 'dd/MM/yyyy'
}

const GenericFieldMapping = {
    properties: {
        Original: ExactFieldMapping,
        Show: ExactFieldMapping,
        Index: {
            type:"text",
            fielddata: true,
            fields: {
                raw: ExactFieldMapping,
                keyword: NormalizedFieldMapping
            }
        }
    }
}

const ObjectFieldMapping = {
    type: 'object',
    enabled: false
}

const TextFieldMapping = {
    type: 'text',
    term_vector: 'with_positions_offsets_payloads'
}

export const JurisprudenciaDocumentProperties = {
    "Original": ObjectFieldMapping,
    "Número de Processo": NormalizedFieldMapping,
    "ECLI": ExactFieldMapping,
    "Data": DateFieldMapping,
    "Tipo": ExactFieldMapping,
    "Relator Nome Profissional": GenericFieldMapping,
    "Relator Nome Completo": GenericFieldMapping,
    "Descritores": GenericFieldMapping,
    "Meio Processual": GenericFieldMapping,
    "Votação": GenericFieldMapping,
    "Secção": GenericFieldMapping,
    "Área": GenericFieldMapping,
    "Decisão": GenericFieldMapping,
    "Tribunal de Recurso": GenericFieldMapping,
    "Tribunal de Recurso - Processo": GenericFieldMapping,
    "Área Temática": GenericFieldMapping,
    "Jurisprudência Estrangeira": GenericFieldMapping,
    "Jurisprudência Internacional": GenericFieldMapping,
    "Jurisprudência Nacional": GenericFieldMapping,
    "Doutrina": GenericFieldMapping,
    "Legislação Comunitária": GenericFieldMapping,
    "Legislação Estrangeira": GenericFieldMapping,
    "Legislação Nacional": GenericFieldMapping,
    "Referências Internacionais": GenericFieldMapping,
    "Indicações Eventuais": GenericFieldMapping,
    "Referência de publicação": GenericFieldMapping,
    "Jurisprudência": GenericFieldMapping,
    "Sumário": TextFieldMapping,
    "Texto": TextFieldMapping,
    "Fonte": ExactFieldMapping,
    "URL": ExactFieldMapping,
    "UUID": ExactFieldMapping,
    "HASH":{
        type: "object",
        properties: {
            "Original": { type: "keyword" },
            "Texto": { type: "keyword" },
            "Sumário" : { type: "keyword" },
            "Processo" : { type: "keyword" }
        }
    },
    "CONTENT": {
        type: 'text'
    }
};

export const JurisprudenciaDocumentContentKeys = ["CONTENT"] as const;
export const JurisprudenciaDocumentHashKeys = ["HASH"] as const;
export const JurisprudenciaDocumentObjectKeys = ["Original"] as const;
export const JurisprudenciaDocumentDateKeys = ["Data"] as const;
export const JurisprudenciaDocumentTextKeys = ["Sumário", "Texto"] as const;
export const JurisprudenciaDocumentExactKeys = ["Número de Processo","ECLI","Fonte","URL","UUID","Tipo"] as const;
export const JurisprudenciaDocumentGenericKeys = ["Relator Nome Profissional","Relator Nome Completo","Descritores","Meio Processual","Votação","Secção","Área","Decisão","Tribunal de Recurso","Tribunal de Recurso - Processo","Área Temática","Jurisprudência Estrangeira","Jurisprudência Internacional","Jurisprudência Nacional","Doutrina","Legislação Comunitária","Legislação Estrangeira","Legislação Nacional","Referências Internacionais","Indicações Eventuais","Referência de publicação","Jurisprudência"] as const;

export type JurisprudenciaDocumentContentKey = typeof JurisprudenciaDocumentContentKeys[number];
export type JurisprudenciaDocumentHashKeys = typeof JurisprudenciaDocumentHashKeys[number];
export type JurisprudenciaDocumentObjectKeys = typeof JurisprudenciaDocumentObjectKeys[number];
export type JurisprudenciaDocumentDateKeys = typeof JurisprudenciaDocumentDateKeys[number];
export type JurisprudenciaDocumentTextKeys = typeof JurisprudenciaDocumentTextKeys[number];
export type JurisprudenciaDocumentExactKeys = typeof JurisprudenciaDocumentExactKeys[number];
export type JurisprudenciaDocumentGenericKeys = typeof JurisprudenciaDocumentGenericKeys[number];

export type JurisprudenciaDocument =
    Record<JurisprudenciaDocumentContentKey, N<CONTENTField>> &
    Record<JurisprudenciaDocumentHashKeys, N<HASHField>> &
    Record<JurisprudenciaDocumentObjectKeys, N<ObjectField>> &
    Record<JurisprudenciaDocumentDateKeys, N<DateField>> &
    Record<JurisprudenciaDocumentTextKeys, N<string>> &
    Record<JurisprudenciaDocumentExactKeys, N<ExactField>> &
    Record<JurisprudenciaDocumentGenericKeys, N<GenericField>>;

export type PartialJurisprudenciaDocument = Partial<JurisprudenciaDocument>;

export type JurisprudenciaDocumentKey = keyof JurisprudenciaDocument;
export const JurisprudenciaDocumentKeys = Object.keys(JurisprudenciaDocumentProperties) as JurisprudenciaDocumentKey[];

export function isValidJurisprudenciaDocumentKey(accessKey: string): accessKey is JurisprudenciaDocumentKey{
    return accessKey in JurisprudenciaDocumentProperties
}

export function isJurisprudenciaDocumentContentKey(accessKey: string){
    return isValidJurisprudenciaDocumentKey(accessKey) && (JurisprudenciaDocumentContentKeys as unknown as JurisprudenciaDocumentKey[]).includes(accessKey);
}
export function isJurisprudenciaDocumentHashKeys(accessKey: string){
    return isValidJurisprudenciaDocumentKey(accessKey) && (JurisprudenciaDocumentHashKeys as unknown as JurisprudenciaDocumentKey[]).includes(accessKey);
}
export function isJurisprudenciaDocumentObjectKeys(accessKey: string){
    return isValidJurisprudenciaDocumentKey(accessKey) && (JurisprudenciaDocumentObjectKeys as unknown as JurisprudenciaDocumentKey[]).includes(accessKey);
}
export function isJurisprudenciaDocumentDateKeys(accessKey: string){
    return isValidJurisprudenciaDocumentKey(accessKey) && (JurisprudenciaDocumentDateKeys as unknown as JurisprudenciaDocumentKey[]).includes(accessKey);
}
export function isJurisprudenciaDocumentTextKeys(accessKey: string){
    return isValidJurisprudenciaDocumentKey(accessKey) && (JurisprudenciaDocumentTextKeys as unknown as JurisprudenciaDocumentKey[]).includes(accessKey);
}
export function isJurisprudenciaDocumentExactKeys(accessKey: string){
    return isValidJurisprudenciaDocumentKey(accessKey) && (JurisprudenciaDocumentExactKeys as unknown as JurisprudenciaDocumentKey[]).includes(accessKey);
}
export function isJurisprudenciaDocumentGenericKeys(accessKey: string){
    return isValidJurisprudenciaDocumentKey(accessKey) && (JurisprudenciaDocumentGenericKeys as unknown as JurisprudenciaDocumentKey[]).includes(accessKey);
}