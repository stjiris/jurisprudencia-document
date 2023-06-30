export const JurisprudenciaVersion = "jurisprudencia.9.4"

export const JurisprudenciaDocumentProperties = {
    "Original": {
        type: 'object',
        enabled: false
    },
    "Número de Processo": {
        type: 'keyword',
        normalizer: 'term_normalizer'
    },
    "ECLI": {
        type: 'keyword'
    },
    "Data": {
        type: 'date',
        format: 'dd/MM/yyyy'
    },
    "Relator Nome Profissional": {
        type: 'text',
        fielddata: true,
        fields: {
            raw: {
                type: "keyword"
            },
            keyword: {
                type: "keyword",
                normalizer: 'term_normalizer'
            }
        }
    },
    "Relator Nome Completo": {
        type: 'text',
        fielddata: true,
        fields: {
            raw: {
                type: "keyword"
            },
            keyword: {
                type: "keyword",
                normalizer: 'term_normalizer'
            }
        }
    },
    "Descritores": {
        type: 'text',
        fielddata: true,
        fields: {
            raw: {
                type: "keyword"
            },
            keyword: {
                type: 'keyword',
                normalizer: 'term_normalizer'
            }
        }
    },
    "Meio Processual": {
        type: 'text',
        fielddata: true,
        fields: {
            raw: {
                type: "keyword"
            },
            keyword: {
                type: 'keyword',
                normalizer: 'term_normalizer'
            }
        }
    },
    "Votação - Decisão": {
        type: 'text',
        fielddata: true,
        fields: {
            raw: {
                type: "keyword"
            },
            keyword: {
                type: 'keyword',
                normalizer: 'term_normalizer'
            }
        }
    },
    "Votação - Vencidos": {
        type: 'text',
        fielddata: true,
        fields: {
            raw: {
                type: "keyword"
            },
            keyword: {
                type: 'keyword',
                normalizer: 'term_normalizer'
            }
        }
    },
    "Votação - Declarações": {
        type: 'text',
        fielddata: true,
        fields: {
            raw: {
                type: "keyword"
            },
            keyword: {
                type: 'keyword',
                normalizer: 'term_normalizer'
            }
        }
    },
    "Secção": {
        type: 'text',
        fielddata: true,
        fields: {
            raw: {
                type: "keyword"
            },
            keyword: {
                type: 'keyword',
                normalizer: 'term_normalizer'
            }
        }
    },
    "Área": {
        type: 'text',
        fielddata: true,
        fields: {
            raw: {
                type: "keyword"
            },
            keyword: {
                type: 'keyword',
                normalizer: 'term_normalizer'
            }
        }
    },
    "Decisão": {
        type: 'text',
        fielddata: true,
        fields: {
            raw: {
                type: "keyword"
            },
            keyword: {
                type: 'keyword',
                normalizer: 'term_normalizer'
            }
        }
    },
    "Decisão (textual)": {
        type: 'text',
        fielddata: true,
        fields: {
            raw: {
                type: "keyword"
            },
            keyword: {
                type: 'keyword',
                normalizer: 'term_normalizer'
            }
        }
    },
    "Tribunal de Recurso": {
        type: 'text',
        fielddata: true,
        fields: {
            raw: {
                type: "keyword"
            },
            keyword: {
                type: 'keyword',
                normalizer: 'term_normalizer'
            }
        }
    },
    "Tribunal de Recurso - Processo": {
        type: 'text',
        fielddata: true,
        fields: {
            raw: {
                type: "keyword"
            },
            keyword: {
                type: 'keyword',
                normalizer: 'term_normalizer'
            }
        }
    },
    "Área Temática": {
        type: 'text',
        fielddata: true,
        fields: {
            raw: {
                type: "keyword"
            },
            keyword: {
                type: 'keyword',
                normalizer: 'term_normalizer'
            }
        }
    },
    "Jurisprudência Estrangeira": {
        type: 'text',
        fielddata: true,
        fields: {
            raw: {
                type: "keyword"
            },
            keyword: {
                type: 'keyword',
                normalizer: 'term_normalizer'
            }
        }
    },
    "Jurisprudência Internacional": {
        type: 'text',
        fielddata: true,
        fields: {
            raw: {
                type: "keyword"
            },
            keyword: {
                type: 'keyword',
                normalizer: 'term_normalizer'
            }
        }
    },
    "Jurisprudência Nacional": {
        type: 'text',
        fielddata: true,
        fields: {
            raw: {
                type: "keyword"
            },
            keyword: {
                type: 'keyword',
                normalizer: 'term_normalizer'
            }
        }
    },
    "Doutrina": {
        type: 'text',
        fielddata: true,
        fields: {
            raw: {
                type: "keyword"
            },
            keyword: {
                type: 'keyword',
                normalizer: 'term_normalizer'
            }
        }
    },
    "Legislação Comunitária": {
        type: 'text',
        fielddata: true,
        fields: {
            raw: {
                type: "keyword"
            },
            keyword: {
                type: 'keyword',
                normalizer: 'term_normalizer'
            }
        }
    },
    "Legislação Estrangeira": {
        type: 'text',
        fielddata: true,
        fields: {
            raw: {
                type: "keyword"
            },
            keyword: {
                type: 'keyword',
                normalizer: 'term_normalizer'
            }
        }
    },
    "Legislação Nacional": {
        type: 'text',
        fielddata: true,
        fields: {
            raw: {
                type: "keyword"
            },
            keyword: {
                type: 'keyword',
                normalizer: 'term_normalizer'
            }
        }
    },
    "Referências Internacionais": {
        type: 'text',
        fielddata: true,
        fields: {
            raw: {
                type: "keyword"
            },
            keyword: {
                type: 'keyword',
                normalizer: 'term_normalizer'
            }
        }
    },
    "Indicações Eventuais": {
        type: 'text',
        fielddata: true,
        fields: {
            raw: {
                type: "keyword"
            },
            keyword: {
                type: 'keyword',
                normalizer: 'term_normalizer'
            }
        }
    },
    "Referência de publicação": {
        type: 'text',
        fielddata: true,
        fields: {
            raw: {
                type: "keyword"
            },
            keyword: {
                type: 'keyword',
                normalizer: 'term_normalizer'
            }
        }
    },
    "Jurisprudência": {
        type: 'text',
        fielddata: true,
        fields: {
            raw: {
                type: "keyword"
            },
            keyword: {
                type: 'keyword',
                normalizer: 'term_normalizer'
            }
        }
    },
    "Sumário": {
        type: 'text',
        term_vector: 'with_positions_offsets_payloads'
    },
    "Texto": {
        type: 'text',
        term_vector: 'with_positions_offsets_payloads'
    },
    "Fonte": {
        type: 'keyword',
    },
    "URL": {
        type: 'keyword',
    },
    "UUID": {
        type: 'keyword'
    },
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

const keys = Object.keys(JurisprudenciaDocumentProperties);
export type JurisprudenciaDocumentKey = keyof typeof JurisprudenciaDocumentProperties;
export const JurisprudenciaDocumentKeys = keys as JurisprudenciaDocumentKey[];

const records = ["Original", "HASH"] as const;
export type JurisprudenciaDocumentRecordKey = typeof records[number];
export const JurisprudenciaDocumentRecordKeys =  records as readonly JurisprudenciaDocumentRecordKey[];

const strings = ["Número de Processo", "ECLI", "Data", "Relator Nome Profissional", "Relator Nome Completo", "Sumário", "Texto", "Fonte", "UUID", "URL"] as const;
export type JurisprudenciaDocumentStringKey = typeof strings[number];
export const JurisprudenciaDocumentStringKeys = strings as readonly JurisprudenciaDocumentStringKey[];

export type JurisprudenciaDocumentArrayKey = Exclude<JurisprudenciaDocumentKey, JurisprudenciaDocumentRecordKey | JurisprudenciaDocumentStringKey>
export const JurisprudenciaDocumentArrayKeys = keys.filter( k => !(records as readonly string[]).includes(k) && !(strings as readonly string[]).includes(k) ) as readonly JurisprudenciaDocumentArrayKey[];

export type JurisprudenciaDocument = Record<JurisprudenciaDocumentKey, any>;

export type PartialJurisprudenciaDocument = Partial<JurisprudenciaDocument>;

export type ExactTypedJurisprudenciaDocument = 
    Record<JurisprudenciaDocumentRecordKey, Record<string, any>> &
    Record<JurisprudenciaDocumentStringKey, string> & 
    Record<JurisprudenciaDocumentArrayKey, string[]>;

export type PartialTypedJurisprudenciaDocument = Partial<ExactTypedJurisprudenciaDocument>;

export function isValidJurisprudenciaDocumentKey(accessKey: string): accessKey is JurisprudenciaDocumentKey{
    return accessKey in JurisprudenciaDocumentProperties
}

export function isValidJurisprudenciaDocumentRecordKey(accessKey: string): accessKey is JurisprudenciaDocumentRecordKey{
    return isValidJurisprudenciaDocumentKey(accessKey) && (records as readonly string[]).includes(accessKey);
}

export function isValidJurisprudenciaDocumentStringKey(accessKey: string): accessKey is JurisprudenciaDocumentStringKey{
    return isValidJurisprudenciaDocumentKey(accessKey) && (strings as readonly string[]).includes(accessKey);
}

export function isValidJurisprudenciaDocumentArrayKey(accessKey: string): accessKey is JurisprudenciaDocumentArrayKey{
    return isValidJurisprudenciaDocumentKey(accessKey) && (JurisprudenciaDocumentArrayKeys as readonly string[]).includes(accessKey);
}

