import { JurisprudenciaDocumentGenericKey } from "./jurisprudencia-document";

/**
 * Fields whose values come from an uncontrolled source and must be collapsed onto
 * a canonical vocabulary. The canonical list per field is the single source of
 * truth used both for fuzzy pre-fill at ingest and for the strict editor dropdown.
 */
export type ControlledField = Extract<JurisprudenciaDocumentGenericKey,
    "Decisão" | "Meio Processual" | "Relator Nome Profissional" | "Votação">;

/**
 * Canonical (official) values per controlled field.
 *
 * Filled in once the court provides the normalized lists. Keep each as a plain
 * array of canonical strings. An empty list is valid: `matchCanonical` then passes
 * every value through unchanged.
 */
export const CanonicalValues: Record<ControlledField, string[]> = {
    "Decisão": [
        "Admitir",
        "Anular",
        "Conceder provimento",
        "Conceder provimento parcialmente",
        "Confirmar",
        "Declarar competência",
        "Declarar incompetência",
        "Fixar jurisprudência",
        "Indeferir",
        "Deferir",
        "Julgar extinta a instância",
        "Não admitir",
        "Não conhecer",
        "Negar provimento",
        "Ordenar baixa dos autos",
        "Prosseguir os autos",
        "Rejeitar",
        "Remeter os autos",
        "Repristinar a sentença",
        "Revogar",
        "Suspender a instância",
        "Sem informação",
    ],
    "Meio Processual": [
        "Recurso de revista",
        "Recurso de revista excecional",
        "Recurso extraordinário de uniformização/fixação de jurisprudência",
        "Recurso extraordinário de revisão",
        "Recurso per saltum",
        "Recurso de contraordenação",
        "Recursos penais das decisões do STJ em 1.ª e 2.ª instâncias",
        "Reclamação para a conferência",
        "Reclamação art. 643.º CPC",
        "Reclamação art. 405.º CPP",
        "Reforma de decisão",
        "Reenvio prejudicial",
        "Habeas corpus",
        "Revisão de sentença estrangeira",
        "Conflito de competência",
        "Conflito de jurisdição",
        "Extradição",
        "Mandado de detenção europeu",
        "Impugnação das deliberações do CSM",
        "Impugnação das decisões do Presidente do STJ",
        "Escusa/Recusa",
        "Outro",
    ],
    "Relator Nome Profissional": [
        "A. BARATEIRO MARTINS",
        "A. VAZ PEREIRA",
        "ABEL DE CAMPOS",
        "ABEL DELGADO",
        "ABEL FREIRE",
        "ABRANCHES MARTINS",
        "ABRANTES GERALDES",
        "ABREU COUTINHO",
        "ABÍLIO BRANDÃO",
        "ABÍLIO DE ANDRADE",
        "ABÍLIO VALVERDE",
        "ACÁCIO CARVALHO",
        "ACÁCIO DAS NEVEZ",
        "ACÁCIO RIBEIRO",
        "ADELAIDE MAGALHÃES SEQUEIRA",
        "ADELINA BARRADAS DE OLIVEIRA",
        "ADOLFO COUTINHO",
        "ADRIANO FERNANDES",
        "AFONSO CORREIA",
        "AFONSO DE MELO",
        "AFONSO HENRIQUE",
        "AFONSO LIBERAL",
        "AGOSTINHO FONTES",
        "AGOSTINHO TORRES",
        "ALBERTINA PEREIRA",
        "ALBERTO NOGUEIRA",
        "ALBERTO SOBRINHO",
        "ALBERTO TOSCANO",
        "ALBUQUERQUE BARATA",
        "ALBUQUERQUE BETTENCOURT",
        "ALBUQUERQUE DE SOUSA",
        "ALBUQUERQUE ROCHA",
        "ALCIDES DE ALMEIDA",
        "ALEXANDRE DE ARAGÃO",
        "ALEXANDRE REIS",
        "ALFEU CRUZ",
        "ALFREDO CARDOSO",
        "ALFREDO GONÇALVES PEREIRA",
        "ALFREDO RODRIGUES",
        "ALMEIDA BORGES",
        "ALMEIDA DEVEZA",
        "ALMEIDA E SILVA",
        "ALMEIDA MOURA",
        "ALMEIDA RIBEIRO",
        "ALMEIDA SIMÕES",
        "ALVARES DE MOURA",
        "ALVES CARDOSO",
        "ALVES CARMO",
        "ALVES CORTES",
        "ALVES PEIXOTO",
        "ALVES PINTO",
        "ALVES RIBEIRO",
        "ALVES VELHO",
        "ALÍPIO CALHEIROS",
        "AMADO GOMES",
        "AMADO LOPES",
        "AMARAL AGUIAR",
        "AMORIM GIRÃO",
        "AMÂNCIO OLIVEIRA",
        "AMÉLIA ALVES RIBEIRO",
        "ANA BARATA BRITO",
        "ANA COSTA PARAMÉS",
        "ANA LUÍSA GERALDES",
        "ANA MARIA BARATA DE BRITO",
        "ANA PARAMÉS",
        "ANA PAULA BOULAROT",
        "ANA PAULA LEAL CARVALHO",
        "ANA PAULA LOBO",
        "ANA RESENDE",
        "ANABELA LUNA DE CARVALHO",
        "ANDRADE SARAIVA",
        "ANTERO DINIS RAMOS VEIGA",
        "ANTERO LUIS",
        "ANTUNES GRANCHO",
        "ANTÓNIO AUGUSTO MANSO",
        "ANTÓNIO CLEMENTE LIMA",
        "ANTÓNIO COLAÇO",
        "ANTÓNIO DA SILVA GONÇALVES",
        "ANTÓNIO DE MATOS",
        "ANTÓNIO DE MOURA MAGALHÃES",
        "ANTÓNIO DOIMNGOS PIRES ROBALO",
        "ANTÓNIO FERNANDES",
        "ANTÓNIO GAMA",
        "ANTÓNIO JOAQUIM PIÇARRA",
        "ANTÓNIO LATAS",
        "ANTÓNIO LEONES DANTAS",
        "ANTÓNIO MAGALHÃES",
        "ANTÓNIO MANSO",
        "ANTÓNIO MARÇAL",
        "ANTÓNIO MESQUITA",
        "ANTÓNIO POÇAS",
        "ANTÓNIO TEIXEIRA CARMO",
        "AQUILINO RIBEIRO",
        "ARAGÃO SEIA",
        "ARALA CHAVES",
        "ARAÚJO BARROS",
        "ARAÚJO BASTOS",
        "ARAÚJO DOS ANJOS",
        "ARAÚJO DOS SANTOS",
        "ARAÚJO RIBEIRO",
        "ARELO MANSO",
        "AREZ",
        "ARLINDO DE OLIVEIRA",
        "ARLINDO MARTINS",
        "ARMANDO BASTOS",
        "ARMANDO LEANDRO",
        "ARMANDO LOURENÇO",
        "ARMINDO LUÍS",
        "ARMINDO MONTEIRO",
        "ARMÉNIO SOTTOMAYOR",
        "ARNALDO VIDIGAL",
        "ARTUR RIBEIRO",
        "ASSUNÇÃO RAIMUNDO",
        "AUGUSTO ALVES",
        "AUGUSTO MARTINS",
        "AURELIO FERNANDES",
        "AVELINO LEITE",
        "AZAMBUJA FONSECA",
        "AZEVEDO FERREIRA",
        "AZEVEDO MENDES",
        "AZEVEDO RAMOS",
        "Abílio Vasconcelos",
        "B. VEIGA",
        "BALTAZAR COELHO",
        "BALTAZAR PINTO",
        "BARATA FIGUEIRA",
        "BARBIERI CARDOSO",
        "BARBOSA DE ALMEIDA",
        "BARBOSA DE OLIVEIRA",
        "BARBOSA VIANA",
        "BARRETO NUNES",
        "BARROS CALDEIRA",
        "BARROS DE SEQUEIROS",
        "BELARMINO CERQUEIRA",
        "BELO MORGADO",
        "BERNARDES DE MIRANDA",
        "BERNARDO DOMINGOS",
        "BESSA PACHECO",
        "BETTENCOURT DE FARIA",
        "BEÇA DE ARAGÃO",
        "BEÇA PEREIRA",
        "BOAVIDA BARROS",
        "BOGARIM GUEDES",
        "BORDALO E SÁ",
        "BORGES PINHO",
        "BORGES SOEIRO",
        "BOTELHO DE SOUSA",
        "BRAGA THEMIDO",
        "BRAVO SERRA",
        "BRITO CÂMARA",
        "BROCHADO BRANDÃO",
        "BRUTO DA COSTA",
        "CABRAL DE ANDRADE",
        "CABRAL TAVARES",
        "CAETANO GONÇALVES",
        "CALIXTO PIRES",
        "CAMPELO DE ANDRADE",
        "CAMPOS COSTA",
        "CAMPOS DE CARVALHO",
        "CARDONA FERREIRA",
        "CARDOSO ALBUQUERQUE",
        "CARDOSO BASTOS",
        "CARDOSO VENTURA",
        "CARLINDO COSTA",
        "CARLOS ALVES",
        "CARLOS ALMEIDA",
        "CARLOS CALDAS",
        "CARLOS CAMPOS LOBO",
        "CARLOS DE MIRANDA",
        "CARLOS PORTELA",
        "CARLOS VALVERDE",
        "CARMONA DA MOTA",
        "CARVALHO JUNIOR",
        "CARVALHO PEREIRA",
        "CARVALHO PINHEIRO",
        "CASTANHEIRA COSTA",
        "CASTELO BRANCO",
        "CASTELO PAULO",
        "CASTRO MENDES",
        "CASTRO RIBEIRO",
        "CATARINA SERRA",
        "CELSO MANATA",
        "CERQUEIRA VAHIA",
        "CHAMABEL MOURISCO",
        "CHICHORRO RODRIGUES",
        "CID GERALDO",
        "CLARA SOTTOMAYOR",
        "COELHO VENTURA",
        "CONCEIÇÃO GOMES",
        "CORREIA DE LIMA",
        "CORREIA DE PAIVA",
        "CORREIA DE SOUSA",
        "CORREIA GUEDES",
        "CORTE REAL",
        "CORTEZ NEVES",
        "COSTA FERREIRA",
        "COSTA PEREIRA",
        "COSTA FIGUEIRINHAS",
        "COSTA MARQUES",
        "COSTA MORTÁGUA",
        "COSTA RAPOSO",
        "COSTA SANTOS",
        "COSTA SOARES",
        "COUTO MENDONÇA",
        "CRISTINA COELHO",
        "CRISTINA SOARES",
        "CRUZ ALVURA",
        "CRUZ VASCONCELOS",
        "CUNHA BARBOSA",
        "CUNHA FERREIRA",
        "CUSTÓDIO MONTES",
        "CUSTÓDIO NEVES",
        "CÉSAR MARQUES",
        "DANIEL FERREIRA",
        "DIAS ALVES",
        "DIAS BRAVO",
        "DIAS DA FONSECA",
        "DIAS FREIRE",
        "DIAS GARCIA",
        "DIAS GIRÃO",
        "DIAS SIMÃO",
        "DINIS ALVES",
        "DINIS ROLDÃO",
        "DINIZ NUNES",
        "DIOGO FERNANDES",
        "DIONÍSIO ALVES",
        "DIONÍSIO CORREIA",
        "DIONÍSIO PINHO",
        "DOMINGOS GONÇALVES",
        "DOMINGOS JOSÉ DE MORAIS",
        "DUARTE SOARES",
        "EDUARDA BRANQUINHO",
        "EDUARDO BAPTISTA",
        "EDUARDO COIMBRA",
        "EDUARDO LOUREIRO",
        "EDUARDO MARTINS",
        "EDUARDO SANTOS",
        "ELISEU FIGUEIRA",
        "EMANUEL DIAS",
        "EMIDIO FRANCISCO SANTOS",
        "EMÍDIO SANTOS",
        "EMÉRICO SOARES",
        "ERNESTO CALEJO",
        "ERNESTO NASCIMENTO",
        "ERNESTO VAZ PEREIRA",
        "ESTELITA DE MENDONÇA",
        "EUCÁRIA VIEIRA",
        "F. TOSCANO PESSOA",
        "FARIA ANTUNES",
        "FARIA DE SOUSA",
        "FATIMA GOMES",
        "FERNANDO BAPTISTA",
        "FERNANDA ISABEL PEREIRA",
        "FERNANDES CADILHA",
        "FERNANDES COSTA",
        "FERNANDES DA SILVA",
        "FERNANDES DO VALE",
        "FERNANDES FUGAS",
        "FERNANDES MAGALHÃES",
        "FERNANDES VIEIRA",
        "FERNANDO BENTO",
        "FERNANDO FABIÃO",
        "FERNANDO FRÓIS",
        "FERNANDO GIRÃO",
        "FERNANDO METELLO",
        "FERNANDO SAMÕES",
        "FERNANDO SEQUEIRA",
        "FERNANDO VENTURA",
        "FERREIRA",
        "FERREIRA DE ALMEIDA",
        "FERREIRA BAPTISTA",
        "FERREIRA DA ROCHA",
        "FERREIRA DA SILVA",
        "FERREIRA DA COSTA",
        "FERREIRA DE SOUSA",
        "FERREIRA DIAS",
        "FERREIRA GIRÃO",
        "FERREIRA JUNIOR",
        "FERREIRA LEITÃO",
        "FERREIRA LOPES",
        "FERREIRA MACEDO",
        "FERREIRA NETO",
        "FERREIRA PINTO",
        "FERREIRA RAMOS",
        "FERREIRA VIDIGAL",
        "FIDALGO DE MATOS",
        "FIGUEIREDO DA SILVA",
        "FIGUEIREDO DE SOUSA",
        "FIGUEIREDO MARÇAL",
        "FISHER SÁ NOGUEIRA",
        "FLAMINO MARTINS",
        "FLORES RIBEIRO",
        "FOLQUE GOUVEIA",
        "FONSECA RAMOS",
        "FRAGOSO DE ALMEIDA",
        "FRANCISCO CAETANO",
        "FRANCISCO CARVALHO",
        "FRANCISCO LOURENÇO",
        "FRANCISCO MARCOLINO",
        "FRANCISCO SOARES",
        "FRANCO DE SÁ",
        "FREDERICO BAPTISTA",
        "FREDERICO CARVALHÃO",
        "FREITAS NETO",
        "FURTADO DOS SANTOS",
        "GABRIEL CATARINO",
        "GAMA PRAZERES",
        "GAMA VIEIRA",
        "GARCIA CALEJO",
        "GARCIA DA FONSECA",
        "GARCIA GUIMARÃES",
        "GARCIA MARQUES",
        "GELASIO ROCHA",
        "GIL ROQUE",
        "GOIS PINHEIRO",
        "GOMES DOS SANTOS",
        "GOMES LEANDRO",
        "GONÇALO SILVANO",
        "GONÇALVES PEREIRA",
        "GONÇALVES ROCHA",
        "RODRIGUES GONÇALVES",
        "GRANJA DA FONSECA",
        "GRAÇA AMARAL",
        "GREGÓRIO SILVA JESUS",
        "GUERRA PIRES",
        "GUIMARÃES DIAS",
        "GUSMÃO DE MEDEIROS",
        "HEITOR MARTINS",
        "HELDER ALMEIDA",
        "HELDER ROQUE",
        "HELENA FAZENDA",
        "HELENA MONIZ",
        "HENRIQUE ANTUNES",
        "HENRIQUE ARAÚJO",
        "HENRIQUE DE SOTTO",
        "HENRIQUES SIMÕES",
        "HENRIQUES DE MATOS",
        "HENRIQUES GASPAR",
        "HERCULANO LIMA",
        "HERCULANO NAMORA",
        "HERNÂNI DE LENCASTRE",
        "HORTA E VALE",
        "HORÁCIO CORREIA PINTO",
        "HUGO LOPES",
        "ILÍDIO SACARRÃO MARTINS",
        "ISABEL PAIS MARTINS",
        "ISABEL SALGADO",
        "ISABEL SÃO MARCOS",
        "ISAÍAS PÁDUA",
        "ISOLETA COSTA",
        "J. CIPRIANO",
        "J. SANTOS CARVALHO",
        "JAIME DE OLIVEIRA",
        "JAIME DOS SANTOS",
        "JAIME TOMÉ",
        "JOAQUIM DE CARVALHO",
        "JOAQUIM DE FIGUEIREDO",
        "JOAQUIM DE MATOS",
        "JOAQUIM DE MELO",
        "JOAQUIM DIAS",
        "JOAQUIM GONÇALVES",
        "JORGE ARCANJO",
        "JORGE DIAS",
        "JORGE DOS REIS BRAVO",
        "JORGE GONÇALVES",
        "JORGE JACOB",
        "JORGE LEAL",
        "JORGE MANUEL ARCANJO RODRIGUES",
        "JORGE MIRANDA JACOB",
        "JORGE RAPOSO",
        "JORGE VASCONCELOS",
        "JOSÉ CARRETO",
        "JOSÉ CAEIRO",
        "JOSÉ CALEJO",
        "JOSÉ CARVALHO",
        "JOSÉ COIMBRA",
        "JOSÉ DOMINGUES",
        "JOSÉ EDUARDO SAPATEIRO",
        "JOSÉ FERNANDES",
        "JOSÉ FERREIRA LOPES",
        "JOSÉ FETEIRA",
        "JOSÉ GIRÃO",
        "JOSÉ LUIS LOPES DA MOTA",
        "JOSÉ LUIS PEREIRA",
        "JOSÉ MAGALHÃES",
        "JOSÉ MENESES",
        "JOSÉ MESQUITA",
        "JOSÉ MONTENEGRO",
        "JOSÉ MOURA",
        "JOSÉ OSÓRIO",
        "JOSÉ PEREIRA",
        "JOSÉ PIEDADE",
        "JOSÉ RAINHO",
        "JOSÉ RODRIGUES",
        "JOSÉ SARAIVA",
        "JOSÉ SOEIRO",
        "JOÃO BERNARDO",
        "JOÃO CAMILO",
        "JOÃO CURA MARIANO",
        "JOÃO DO VALE",
        "JOÃO GUERRA",
        "JOÃO MOURA",
        "JOÃO MAGALHÃES",
        "JOÃO RAMIRES",
        "JOÃO RATO",
        "JOÃO SILVA MIGUEL",
        "JOÃO TRINDADE",
        "JÚLIO GOMES",
        "JÚLIO DE LEMOS",
        "JÚLIO MANUEL VIEIRA GOMES",
        "JÚLIO PEREIRA",
        "JÚLIO SANTOS",
        "LACERDA TINOCO",
        "LAURA LEONARDO",
        "LEAL-HENRIQUES",
        "LEITE DE CAMPOS",
        "LEITE MARREIROS",
        "LEMOS TRIUNFANTE",
        "LENCASTRE DA VEIGA",
        "LEONARDO DIAS",
        "LEONEL SERÔDIO",
        "LEONES DANTAS",
        "LEONOR CRUZ RODRIGUES",
        "LEONOR FURTADO",
        "LEOPOLDO SOARES",
        "LICURGO DOS SANTOS",
        "LICÍNIO CASEIRO",
        "LIMA CLUNY",
        "LIMA GONÇALVES",
        "LOPES CARDOSO",
        "LOPES CARVALHO",
        "LOPES DA MOTA",
        "LOPES DE MELO",
        "LOPES DO REGO",
        "LOPES NEVES",
        "LOPES PINTO",
        "LOPES ROCHA",
        "LOUREIRO PIPA",
        "LOURENÇO MARTINS",
        "LUCAS COELHO",
        "LUCENA E VALLE",
        "LUDOVICO DA COSTA",
        "LUÍS CORREIA DE MENDONÇA",
        "LUÍS ESPÍRITO SANTO",
        "LUIS FRANQUEIRA",
        "LUIS GARCIA",
        "LUIS VAZ SEQUEIRA",
        "LUIZ OSORIO",
        "LUÍS FONSECA",
        "LÁZARO FARIA",
        "LÚCIO TEIXEIRA",
        "MACHADO SOARES",
        "MAGALHÃES BAIÃO",
        "MAGALHÃES BARROS",
        "MARGARIDA BLASCO",
        "MAIA COSTA",
        "MAIA GONÇALVES",
        "MANSO PRETO",
        "MANUEL AGUIAR PEREIRA",
        "MANUEL AUGUSTO DE MATOS",
        "MANUEL BRAZ",
        "MANUEL CAPELO",
        "MANUEL PEREIRA",
        "MARGARIDA RAMOS DE ALMEIDA",
        "MARIA AMÉLIA RIBEIRO",
        "MARIA DE DEUS CORREIA",
        "MARIA DA GRAÇA SANTOS SILVA",
        "MARIA DA GRAÇA TRIGO",
        "MARIA DO CARMO DA SILVA DIAS",
        "MARIA DO ROSÁRIO GONÇALVES",
        "MARIA DO ROSÁRIO MORGADO",
        "MARIA DOS PRAZERES BELEZA",
        "MARIA HELENA FAZENDA",
        "MARIA JOSÉ MOURO",
        "MARIA JOÃO VAZ TOMÉ",
        "MARIA LAURA LEONARDO",
        "MARIA MARGARIDA ALMEIDA",
        "MARIA OLINDA GARCIA",
        "MARIANO PEREIRA",
        "MARIO BELO MORGADO",
        "MARQUES CORDEIRO",
        "MARQUES PEREIRA",
        "MARTINS DA COSTA",
        "MARTINS DA FONSECA",
        "MARTINS DE SOUSA",
        "MARTINS RAMIRES",
        "MATOS CANAS",
        "MATOS NAMORA",
        "MELO BANDEIRA",
        "MELO FERREIRA",
        "MELO FRANCO",
        "MELO LIMA",
        "MENDES ARNAUT",
        "MENDES CARVALHÃO",
        "MENDES PINTO",
        "MENERES PIMENTEL",
        "METELLO DE NÁPOLES",
        "MIGUEL CAEIRO",
        "MIGUEL CRESPO",
        "MIGUEL MONTENEGRO",
        "MIRANDA GUSMÃO",
        "MIRANDA MONTEIRO",
        "MOITINHO DE ALMEIDA",
        "MORA DO VALE",
        "MORAIS CABRAL",
        "MOREIRA ALVES",
        "MOREIRA CAMILO",
        "MOREIRA DA FONSECA",
        "MOREIRA DA SILVA",
        "MOREIRA LIMA",
        "MOREIRA MATEUS",
        "MOTA E COSTA",
        "MOTA MIRANDA",
        "MOURA CRUZ",
        "MOURISCA",
        "MÁRIO AFONSO",
        "MÁRIO CANCELA",
        "MÁRIO CARDOSO",
        "MÁRIO CRUZ",
        "MÁRIO DE BRITO",
        "MÁRIO MENDES",
        "MÁRIO MORGADO",
        "MÁRIO NORONHA",
        "MÁRIO PEREIRA",
        "MÁRIO RAPOSO",
        "MÁRIO TORRES",
        "MÁXIMO GUIMARÃES",
        "NASCIMENTO COSTA",
        "NELSON BORGES CARNEIRO",
        "NEVES RIBEIRO",
        "NOEL PINTO",
        "NORONHA DE VASCONCELOS",
        "NORONHA DO NASCIMENTO",
        "NUNES DA CRUZ",
        "NUNES RIBEIRO",
        "NUNO ANTÓNIO GONÇALVES",
        "NUNO ATAÍDE DAS NEVES",
        "NUNO CAMEIRA",
        "NUNO GOMES DA SILVA",
        "NUNO PINTO DE OLIVEIRA",
        "NUNO VASCONCELOS",
        "OCTÁVIO GARCIA",
        "OLINDO GERALDES",
        "OLIVEIRA ABREU",
        "OLIVEIRA BARROS",
        "OLIVEIRA BRANQUINHO",
        "OLIVEIRA CARVALHO",
        "OLIVEIRA DA GRAÇA",
        "OLIVEIRA GUIMARÃES",
        "OLIVEIRA MATOS",
        "OLIVEIRA MENDES",
        "OLIVEIRA ROCHA",
        "OLIVEIRA VASCONCELOS",
        "OLÍMPIO DA FONSECA",
        "ORLANDO AFONSO",
        "ORLANDO DOS SANTOS NASCIMENTO",
        "ORLANDO GONÇALVES",
        "ORLANDO NASCIMENTO",
        "PADRÃO GONÇALVES",
        "PAIS DE AMARAL",
        "PAIS DE SOUSA",
        "PAIVA VASCONCELOS",
        "PAULA LEAL DE CARVALHO",
        "PAULA SÁ FERNANDES",
        "PAULO FERREIRA DA CUNHA",
        "PAULO SÁ",
        "PEDRO BRANQUINHO DIAS",
        "PEDRO DE ALBUQUERQUE",
        "PEDRO DE LIMA GONÇALVES",
        "PEDRO DONAS BOTTO",
        "PEDRO MACEDO",
        "PEDRO MARÇAL",
        "PEDRO SAMEIRO",
        "PEIXE PELICA",
        "PEREIRA CARDIGOS",
        "PEREIRA DA COSTA",
        "PEREIRA DA GRAÇA",
        "PEREIRA DA SILVA",
        "PEREIRA DE MIRANDA",
        "PEREIRA DOS SANTOS",
        "PEREIRA LEITÃO",
        "PEREIRA MADEIRA",
        "PEREIRA RODRIGUES",
        "PIEDADE REBELO",
        "PINHEIRO FARINHA",
        "PINTO DE ALMEIDA",
        "PINTO BASTOS",
        "PINTO FERREIRA",
        "PINTO GOMES",
        "PINTO HESPANHOL",
        "PINTO MAGALHÃES",
        "PINTO MONTEIRO",
        "PIRES DA GRAÇA",
        "PIRES DA ROSA",
        "PIRES DE LIMA",
        "PIRES ROBALO",
        "PIRES SALPICO",
        "PONCE DE LEÃO",
        "PONCES DE CARVALHO",
        "PRAZERES PAIS",
        "QUESADA PASTOR",
        "QUIRINO SOARES",
        "RAIMUNDO QUEIRÓS",
        "RAMALHO PINTO",
        "RAMIRO VIDIGAL",
        "RAMOS DOS SANTOS",
        "RAUL BORGES",
        "RAÚL MARTINS",
        "RAÚL MATEUS",
        "REINO PIRES",
        "REIS FIGUEIRA",
        "RIBEIRO CARDOSO",
        "RIBEIRO COELHO",
        "RICARDO COSTA",
        "RICARDO DA VELHA",
        "RICARDO LOPES",
        "RIJO FERREIRA",
        "ROBERTO MARTINS",
        "ROBERTO VALENTE",
        "ROCHA FERREIRA",
        "RODRIGUES BASTOS",
        "RODRIGUES DA COSTA",
        "RODRIGUES DOS SANTOS",
        "ROGER LOPES",
        "ROQUE NOGUEIRA",
        "ROSA RIBEIRO COELHO",
        "ROSA TCHING",
        "ROSÁRIO GONÇALVES",
        "ROSEIRA DE FIGUEIREDO",
        "RUI BENTO",
        "RUI BRITO",
        "RUI GUIMARÃES",
        "RUI MACHADO E MOURA",
        "RUI MAURÍCIO",
        "SALAZAR CASANOVA",
        "SALRETA PEREIRA",
        "SALVADOR DA COSTA",
        "SALVIANO DE SOUSA",
        "SAMPAIO DA NÓVOA",
        "SAMPAIO DA SILVA",
        "SAMPAIO DUARTE",
        "SAMPAIO E MELO",
        "SAMPAIO GOMES",
        "SANTOS BERNARDINO",
        "SANTOS BRANDÃO",
        "SANTOS CABRAL",
        "SANTOS MONTEIRO",
        "SANTOS SILVEIRA",
        "SANTOS VICTOR",
        "SEBASTIÃO PÓVOAS",
        "SENRA MALGUEIRO",
        "SEQUEIRA DE CARVALHO",
        "SERRA BAPTISTA",
        "SILVA CANCELA",
        "SILVA CURA",
        "SILVA E SOUSA",
        "SILVA FLOR",
        "SILVA GASPAR",
        "SILVA GONÇALVES",
        "SILVA GRAÇA",
        "SILVA MONTEIRO",
        "SILVA PAIXÃO",
        "SILVA REIS",
        "SILVA SALAZAR",
        "SIMAS SANTOS",
        "SIMÕES DE CARVALHO",
        "SIMÕES FREIRE",
        "SIMÕES REDINHA",
        "SIMÕES VENTURA",
        "SOARES RAMOS",
        "SOARES TOMÉ",
        "SOLANO VIANA",
        "SORETO DE BARROS",
        "SOUSA DINIS",
        "SOUSA FONTE",
        "SOUSA GRANDÃO",
        "SOUSA GUEDES",
        "SOUSA INÊS",
        "SOUSA LAMAS",
        "SOUSA LAMEIRA",
        "SOUSA LEITE",
        "SOUSA MACEDO",
        "SOUSA MONTEIRO",
        "SOUSA PEIXOTO",
        "SOUSA PINTO",
        "SOUSA SEQUEIRA",
        "SOUTO DE MOURA",
        "SÁ COIMBRA",
        "SÁ COUTO",
        "SÁ FERREIRA",
        "SÁ GOMES",
        "SÁ NOGUEIRA",
        "SÉNIO ALVES",
        "SÉRGIO POÇAS",
        "TATO MARINHO",
        "TAVARES DA COSTA",
        "TAVARES DE PAIVA",
        "TAVARES DOS SANTOS",
        "TAVARES LEBRE",
        "TEIXEIRA DE ANDRADE",
        "TEIXEIRA DIREITO",
        "TEIXEIRA DO CARMO",
        "TEIXEIRA DUARTE",
        "TEIXEIRA RIBEIRO",
        "TERESA ALBUQUERQUE",
        "TERESA DE ALMEIDA",
        "TERESA FÉRIA",
        "TIBÉRIO NUNES DA SILVA",
        "TINOCO DE ALMEIDA",
        "TOMÉ DE CARVALHO",
        "TOMÉ GOMES",
        "TORRES PAULO",
        "TOVAR DE LEMOS",
        "TÁVORA VICTOR",
        "URBANO DIAS",
        "VASCO TINOCO",
        "VASCONCELOS DE CARVALHO",
        "VASQUES DINIS",
        "VASQUES OSÓRIO",
        "VASSANTA TAMBA",
        "VAZ DE SEQUEIRA",
        "VERA JARDIM",
        "VICTOR COELHO",
        "VICTOR ROCHA",
        "VIEIRA E CUNHA",
        "VIEIRA RIBEIRO",
        "VILLA NOVA",
        "VINÍCIO RIBEIRO",
        "VIRGÍLIO FONSECA GUIMARÃES",
        "VIRGÍLIO OLIVEIRA",
        "VAZ DOS SANTOS",
        "VÍTOR MESQUITA",
        "ZEFERINO FARIA",
        "ÁLVARO PONCES",
        "ÁLVARO RODRIGUES",
        "ÓSCAR CATROLA",
        // Fallback for raw values that cannot be attributed to any judge.
        "Sem informação",
    ],
    // Votação is parametrized (counts of votes), handled by parseVotacao /
    // formatVotacaoShow below. These are the category values used for the Index
    // facet and the editor's category dropdown. matchCanonical is NOT used for it.
    "Votação": [
        "Unanimidade",
        "Maioria simples",
        "Maioria com votos vencidos",
        "Maioria com declarações de voto",
        "Maioria com votos vencidos e declarações de voto",
        "Desempate",
        "Sem informação",
    ],
};

export const VotacaoCategories = CanonicalValues["Votação"] as readonly string[];
export type VotacaoCategory = typeof CanonicalValues["Votação"][number];

export const ControlledFields = Object.keys(CanonicalValues) as ControlledField[];

export function isControlledField(key: string): key is ControlledField {
    return Object.prototype.hasOwnProperty.call(CanonicalValues, key);
}

/**
 * Normalize a value for comparison: lower-case, strip diacritics, collapse
 * whitespace and drop surrounding punctuation. Used to compare a raw value
 * against canonical entries; never stored.
 */
export function foldValue(s: string): string {
    return s
        .normalize("NFD")
        .replace(/[̀-ͯ]/g, "") // strip accents (combining diacritics)
        .toLowerCase()
        .replace(/\s+/g, " ")
        .replace(/^[\s.,;:"'`«»\-]+|[\s.,;:"'`«»\-]+$/g, "") // trim edge punctuation
        .trim();
}

/** Levenshtein edit distance between two strings. */
function levenshtein(a: string, b: string): number {
    if (a === b) return 0;
    if (a.length === 0) return b.length;
    if (b.length === 0) return a.length;

    let prev = new Array(b.length + 1);
    for (let j = 0; j <= b.length; j++) prev[j] = j;

    for (let i = 1; i <= a.length; i++) {
        let curr = [i];
        for (let j = 1; j <= b.length; j++) {
            const cost = a[i - 1] === b[j - 1] ? 0 : 1;
            curr[j] = Math.min(
                prev[j] + 1,      // deletion
                curr[j - 1] + 1,  // insertion
                prev[j - 1] + cost // substitution
            );
        }
        prev = curr;
    }
    return prev[b.length];
}

/** Similarity ratio in [0, 1] derived from edit distance. */
function similarity(a: string, b: string): number {
    const maxLen = Math.max(a.length, b.length);
    if (maxLen === 0) return 1;
    return 1 - levenshtein(a, b) / maxLen;
}

export type CanonicalMatch = {
    /** The value to store in Show/Index — canonical on a confident hit, else the raw value. */
    value: string;
    /** True when `value` is a canonical entry; false means the raw value was kept untouched. */
    matched: boolean;
};

/**
 * Best-effort fuzzy match of a raw value onto a field's canonical list.
 *
 * Returns the canonical value when an exact (accent/case/punctuation-folded) match
 * exists or the closest canonical value scores at or above `threshold`. Otherwise
 * returns the raw value unchanged with `matched: false`, so unrecognized values
 * survive for the manual correction step rather than being silently mangled.
 */
export function matchCanonical(field: ControlledField, raw: string, threshold = 0.85): CanonicalMatch {
    const canonical = CanonicalValues[field];
    const value = raw.trim();
    if (!value || canonical.length === 0) {
        return { value, matched: false };
    }

    const folded = foldValue(value);
    if (!folded) return { value, matched: false };

    let best: string | null = null;
    let bestScore = -1;
    for (const c of canonical) {
        const score = foldValue(c) === folded ? 1 : similarity(foldValue(c), folded);
        if (score > bestScore) {
            bestScore = score;
            best = c;
        }
    }

    if (best !== null && bestScore >= threshold) {
        return { value: best, matched: true };
    }
    return { value, matched: false };
}

// --- Votação ---------------------------------------------------------------
//
// Votação is special: three of its categories carry a numeric parameter (the
// count of dissenting votes / declarations). It is therefore NOT handled by the
// generic list-based matchCanonical. Instead:
//   Original = raw text
//   Show     = human value with the actual counts ("Maioria com 2 votos vencidos")
//   Index    = the category, count-free, so the facet groups every count together
//              ("Maioria com votos vencidos")

const VOTACAO_NUMBER_WORDS: Record<string, number> = {
    um: 1, uma: 1, dois: 2, duas: 2, tres: 3, quatro: 4, cinco: 5,
    seis: 6, sete: 7, oito: 8, nove: 9, dez: 10,
};

function wordToNumber(token: string): number {
    if (/^\d+$/.test(token)) return parseInt(token, 10);
    return VOTACAO_NUMBER_WORDS[token] ?? 0;
}

// Explicit count expressed as "<number> <keyword>" (digits or PT number-words).
// Returns 0 when the keyword appears without a number (count unknown, e.g. the
// "* vot venc" prod form) or is absent — presence is tested separately via the
// keyword pattern, so 0 here means "unknown", not "none".
function numberBefore(folded: string, keywordPattern: string): number {
    const num = "(\\d+|um|uma|dois|duas|tres|quatro|cinco|seis|sete|oito|nove|dez)";
    const m = folded.match(new RegExp(num + "\\s+(?:" + keywordPattern + ")"));
    return m ? wordToNumber(m[1]) : 0;
}

// Patterns broadened to cover the prod abbreviations: "vot venc" (votos vencidos),
// "dec vot" (declarações de voto), plus the full spellings.
const VENCIDOS_PATTERN = "vot\\.?\\s*venc|voto?s?\\.?\\s+(?:de\\s+)?venc(?:ido|idos)?|venc(?:ido|idos)?\\.?\\s*vot";
const DECLARACOES_PATTERN = "dec\\.?\\s*vot|declarac(?:ao|oes)(?:\\s+de\\s+voto)?";

function votosPhrase(n: number): string {
    if (n <= 0) return "votos vencidos"; // count unknown (e.g. "* vot venc")
    return `${n} ${n === 1 ? "voto vencido" : "votos vencidos"}`;
}
function declaracoesPhrase(n: number): string {
    if (n <= 0) return "declarações de voto"; // count unknown
    return `${n} ${n === 1 ? "declaração de voto" : "declarações de voto"}`;
}

/** Build the display (Show) string for a Votação category and its counts. */
export function formatVotacaoShow(category: VotacaoCategory, vencidos: number, declaracoes: number): string {
    switch (category) {
        case "Maioria com votos vencidos":
            return `Maioria com ${votosPhrase(vencidos)}`;
        case "Maioria com declarações de voto":
            return `Maioria com ${declaracoesPhrase(declaracoes)}`;
        case "Maioria com votos vencidos e declarações de voto":
            return `Maioria com ${votosPhrase(vencidos)} e ${declaracoesPhrase(declaracoes)}`;
        default:
            return category;
    }
}

export type VotacaoParse = {
    /** True when the raw text was recognized as a known Votação form. */
    matched: boolean;
    /** Category used for the Index facet (empty when unmatched). */
    category: string;
    /** Display value with counts (the raw text when unmatched). */
    show: string;
    vencidos: number;
    declaracoes: number;
};

/**
 * Parse raw Votação text into category + counts. Best-effort: unrecognized text
 * is returned with `matched: false` and the raw value as `show`, leaving it for
 * the manual editor step.
 */
export function parseVotacao(raw: string): VotacaoParse {
    const value = raw.trim();
    const folded = foldValue(value);
    const none: VotacaoParse = { matched: false, category: "", show: value, vencidos: 0, declaracoes: 0 };
    if (!folded) return none;

    if (/unanimidade/.test(folded)) {
        return { matched: true, category: "Unanimidade", show: "Unanimidade", vencidos: 0, declaracoes: 0 };
    }
    if (/desempate|voto de qualidade/.test(folded)) {
        return { matched: true, category: "Desempate", show: "Desempate", vencidos: 0, declaracoes: 0 };
    }
    if (/sem\s+informacao/.test(folded)) {
        return { matched: true, category: "Sem informação", show: "Sem informação", vencidos: 0, declaracoes: 0 };
    }
    // Presence is detected by keyword (so "* vot venc" still counts as vencidos);
    // the numeric count is read separately and may be 0 (unknown).
    const hasVencidos = new RegExp(VENCIDOS_PATTERN).test(folded);
    const hasDeclaracoes = new RegExp(DECLARACOES_PATTERN).test(folded);
    if (/maioria|maioia|mairoia|mairoria|maoria/.test(folded) || hasVencidos || hasDeclaracoes) {
        const vencidos = numberBefore(folded, VENCIDOS_PATTERN);
        const declaracoes = numberBefore(folded, DECLARACOES_PATTERN);
        let category: VotacaoCategory;
        if (hasVencidos && hasDeclaracoes) category = "Maioria com votos vencidos e declarações de voto";
        else if (hasVencidos) category = "Maioria com votos vencidos";
        else if (hasDeclaracoes) category = "Maioria com declarações de voto";
        else category = "Maioria simples";
        return { matched: true, category, show: formatVotacaoShow(category, vencidos, declaracoes), vencidos, declaracoes };
    }
    return none;
}
