import { CanonicalValues, foldValue, formatVotacaoShow, isControlledField, matchCanonical, parseVotacao } from "./controlled-fields";

describe("isControlledField", () => {
    test("recognizes the four controlled fields", () => {
        expect(isControlledField("Decisão")).toBe(true);
        expect(isControlledField("Meio Processual")).toBe(true);
        expect(isControlledField("Relator Nome Profissional")).toBe(true);
        expect(isControlledField("Votação")).toBe(true);
    });
    test("rejects other keys", () => {
        expect(isControlledField("Descritores")).toBe(false);
        expect(isControlledField("Relator Nome Completo")).toBe(false);
        expect(isControlledField("nonexistent")).toBe(false);
    });
});

describe("foldValue", () => {
    test("folds case, accents, whitespace and edge punctuation", () => {
        expect(foldValue("  Negado  Provimento. ")).toBe("negado provimento");
        expect(foldValue("UNANIMIDADE")).toBe("unanimidade");
        expect(foldValue("Ação")).toBe("acao");
    });
});

describe("matchCanonical", () => {
    const FIELD = "Votação" as const;
    const original = CanonicalValues[FIELD].slice();

    afterEach(() => {
        CanonicalValues[FIELD] = original.slice();
    });

    test("empty canonical list passes value through unmatched", () => {
        CanonicalValues[FIELD] = [];
        expect(matchCanonical(FIELD, "Unanimidade")).toEqual({ value: "Unanimidade", matched: false });
    });

    test("exact folded variants map to canonical", () => {
        CanonicalValues[FIELD] = ["Unanimidade"];
        expect(matchCanonical(FIELD, "UNANIMIDADE")).toEqual({ value: "Unanimidade", matched: true });
        expect(matchCanonical(FIELD, "unanimidade.")).toEqual({ value: "Unanimidade", matched: true });
    });

    test("close typos map within threshold", () => {
        CanonicalValues[FIELD] = ["Unanimidade"];
        expect(matchCanonical(FIELD, "Unanimdade")).toEqual({ value: "Unanimidade", matched: true });
    });

    test("garbage below threshold is kept untouched", () => {
        CanonicalValues[FIELD] = ["Unanimidade"];
        expect(matchCanonical(FIELD, "Maioria com voto de vencido")).toEqual({
            value: "Maioria com voto de vencido",
            matched: false,
        });
    });

    test("picks the closest of several canonical values", () => {
        CanonicalValues[FIELD] = ["Unanimidade", "Maioria"];
        expect(matchCanonical(FIELD, "maioia").value).toBe("Maioria");
    });
});

describe("parseVotacao", () => {
    const pick = (raw: string) => {
        const p = parseVotacao(raw);
        return { matched: p.matched, category: p.category, show: p.show };
    };

    test("fixed categories", () => {
        expect(pick("UNANIMIDADE")).toEqual({ matched: true, category: "Unanimidade", show: "Unanimidade" });
        expect(pick("Por desempate")).toEqual({ matched: true, category: "Desempate", show: "Desempate" });
        expect(pick("Sem informação")).toEqual({ matched: true, category: "Sem informação", show: "Sem informação" });
    });

    test("maioria with no counts is simple majority", () => {
        expect(pick("Por maioria")).toEqual({ matched: true, category: "Maioria simples", show: "Maioria simples" });
    });

    test("votos vencidos: digits and number-words, singular/plural", () => {
        expect(pick("Maioria, com 2 votos de vencido")).toEqual({
            matched: true, category: "Maioria com votos vencidos", show: "Maioria com 2 votos vencidos",
        });
        expect(pick("maioria com um voto de vencido")).toEqual({
            matched: true, category: "Maioria com votos vencidos", show: "Maioria com 1 voto vencido",
        });
        expect(pick("Maioria com dois votos vencidos")).toEqual({
            matched: true, category: "Maioria com votos vencidos", show: "Maioria com 2 votos vencidos",
        });
    });

    test("declarações de voto", () => {
        expect(pick("Maioria com uma declaração de voto")).toEqual({
            matched: true, category: "Maioria com declarações de voto", show: "Maioria com 1 declaração de voto",
        });
        expect(pick("Maioria com 3 declarações de voto")).toEqual({
            matched: true, category: "Maioria com declarações de voto", show: "Maioria com 3 declarações de voto",
        });
    });

    test("combined votos vencidos + declarações", () => {
        expect(pick("Maioria com 2 votos vencidos e 1 declaração de voto")).toEqual({
            matched: true,
            category: "Maioria com votos vencidos e declarações de voto",
            show: "Maioria com 2 votos vencidos e 1 declaração de voto",
        });
    });

    test("unrecognized text stays raw and unmatched", () => {
        expect(pick("qualquer coisa estranha")).toEqual({ matched: false, category: "", show: "qualquer coisa estranha" });
        expect(pick("")).toEqual({ matched: false, category: "", show: "" });
    });

    test("formatVotacaoShow agreement", () => {
        expect(formatVotacaoShow("Maioria com votos vencidos", 1, 0)).toBe("Maioria com 1 voto vencido");
        expect(formatVotacaoShow("Unanimidade", 0, 0)).toBe("Unanimidade");
    });
});
