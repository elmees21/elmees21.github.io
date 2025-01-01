const lines = [
    // Tram
    {
        "id": "T1",
        "name": "T1",
        "description": "Francesc Macià - Bon Viatge",
        "color": "#118175",
        "type": "tram"
    },
    {
        "id": "T2",
        "name": "T2",
        "description": "Francesc Macià - Llevant | Les Planes",
        "color": "#118175",
        "type": "tram"
    },
    {
        "id": "T3",
        "name": "T3",
        "description": "Francesc Macià - Sant Feliu | Consell Comarcal",
        "color": "#118175",
        "type": "tram"
    },
    {
        "id": "T4",
        "name": "T4",
        "description": "Verdaguer - Estació de Sant Adrià",
        "color": "#118175",
        "type": "tram"
    },
    {
        "id": "T5",
        "name": "T5",
        "description": "Ciutadella | Vila Olímpica - Gorg",
        "color": "#118175",
        "type": "tram"
    },
    {
        "id": "T6",
        "name": "T6",
        "description": "Ciutadella | Vila Olímpica - Estació de Sant Adrià",
        "color": "#118175",
        "type": "tram"
    },
    // Metro
    {
        "id": "L1",
        "name": "L1",
        "description": "Hospital de Bellvitge - Fondo",
        "color": "#e02434",
        "type": "metro"
    },
    {
        "id": "L2",
        "name": "L2",
        "description": "Paral·lel - Badalona Pompeu Fabra",
        "color": "#9a398d",
        "type": "metro"
    },
    {
        "id": "L3",
        "name": "L3",
        "description": "Zona Universitària - Trinitat Nova",
        "color": "#37aa3c",
        "type": "metro"
    },
    {
        "id": "L4",
        "name": "L4",
        "description": "La Pau - Trinitat Nova",
        "color": "#fcbf00",
        "lettercolor": "#171714",
        "type": "metro"
    },
    {
        "id": "L5",
        "name": "L5",
        "description": "Cornellà Centre - Vall d'Hebron",
        "color": "#0078bd",
        "type": "metro"
    },
    {
        "id": "L9N",
        "name": "L9 Nord",
        "description": "La Sagrera - Can Zam",
        "color": "#f88e00",
        "type": "metro"
    },
    {
        "id": "L9S",
        "name": "L9 Sud",
        "description": "Aeroport T1 - Zona Universitària",
        "color": "#f88e00",
        "type": "metro"
    },
    {
        "id": "L10N",
        "name": "L10 Nord",
        "description": "La Sagrera - Gorg",
        "color": "#01a1e6",
        "type": "metro"
    },
    {
        "id": "L10S",
        "name": "L10 Sud",
        "description": "ZAL | Riu Vell - Collblanc",
        "color": "#01a1e6",
        "type": "metro"
    },
    {
        "id": "L11",
        "name": "L11",
        "description": "Trinitat Nova - Can Cuiàs",
        "color": "#b5ce55",
        "lettercolor": "#171714",
        "type": "metro"
    },
    // Ferrocarrils metro
    {
        "id": "L6",
        "name": "L6",
        "description": "Barcelona | Pl. Catalunya - Sarrià",
        "color": "#7487bd",
        "type": "Metro (Ferrocarrils)"
    },
    {
        "id": "L7",
        "name": "L7",
        "description": "Barcelona | Pl. Catalunya - Av. Tibidabo",
        "color": "#b3660a",
        "type": "Metro (Ferrocarrils)"
    },
    {
        "id": "L8",
        "name": "L8",
        "description": "Barcelona | Pl. Espanya - Molí Nou | Ciutat Cooperativa",
        "color": "#e67ab0",
        "type": "Metro (Ferrocarrils)"
    },
    {
        "id": "L12",
        "name": "L12",
        "description": "Reina Elisenda - Sarrià",
        "color": "#bcb5d8",
        "lettercolor": "#171714",
        "type": "Metro (Ferrocarrils)"
    },
    // Ferrocarrils
    {
        "id": "S1",
        "name": "S1",
        "description": "Barcelona | Pl. Catalunya - Terrasa Nacions Unides",
        "color": "#ec6709",
        "type": "Ferrocarrils"
    },
    {
        "id": "S2",
        "name": "S2",
        "description": "Barcelona | Pl. Catalunya - Sabadell Parc del Nord",
        "color": "#88bd24",
        "type": "Ferrocarrils"
    },
    {
        "id": "S3",
        "name": "S3",
        "description": "Barcelona | Pl. Espanya - Can Ros",
        "color": "#448e99",
        "type": "Ferrocarrils"
    },
    {
        "id": "S4",
        "name": "S4",
        "description": "Barcelona | Pl. Espanya - Olesa de Montserrat",
        "color": "#9b8202",
        "type": "Ferrocarrils"
    },
    {
        "id": "S8",
        "name": "S8",
        "description": "Barcelona | Pl. Espanya - Martorell Enllaç",
        "color": "#3cbadc",
        "type": "Ferrocarrils"
    },
    {
        "id": "S9",
        "name": "S9",
        "description": "Barcelona | Pl. Espanya - Quatre Camins",
        "color": "#eb4b6f",
        "type": "Ferrocarrils"
    },
    {
        "id": "R5",
        "name": "R5",
        "description": "Barcelona | Pl. Espanya - Manresa Baixador",
        "color": "#309cb2",
        "type": "Ferrocarrils"
    },
    {
        "id": "R50",
        "name": "R50",
        "description": "Barcelona | Pl. Espanya - Manresa Baixador",
        "color": "#267e96",
        "type": "Ferrocarrils"
    },
    {
        "id": "R6",
        "name": "R6",
        "description": "Barcelona | Pl. Espanya - Igualada",
        "color": "#95969a",
        "type": "Ferrocarrils"
    },
    {
        "id": "R60",
        "name": "R60",
        "description": "Barcelona | Pl. Espanya - Igualada",
        "color": "#50535c",
        "type": "Ferrocarrils"
    },
    {
        "id": "RL1",
        "name": "RL1",
        "description": "Lleida – Balaguer",
        "color": "#5e861e",
        "type": "Ferrocarrils"
    },
    {
        "id": "RL2",
        "name": "RL2",
        "description": "Lleida – La Pobla de Segur",
        "color": "#6eb120",
        "type": "Ferrocarrils"
    },
    // Rodalies
    {
        "id": "R1",
        "name": "R1",
        "description": "Molins de Rei - Maçanet-Massanes (Per Mataró)",
        "color": "#78b3e0",
        "type": "rodalies"
    },
    {
        "id": "R2",
        "name": "R2",
        "description": "Castelldefels - Granollers Centre",
        "color": "#009640",
        "type": "rodalies"
    },
    {
        "id": "R2N",
        "name": "R2 Nord",
        "description": "Aeroport - Maçanet-Massanes (Per Granollers Centre)",
        "color": "#a2c617",
        "type": "rodalies"
    },
    {
        "id": "R2S",
        "name": "R2 Sud",
        "description": "Barcelona Estació de França - Sant Vicenç de Calders (Per Vilanova i la Geltrú)",
        "color": "#005f27",
        "type": "rodalies"
    },
    {
        "id": "R3",
        "name": "R3",
        "description": "L'Hospitalet de Llobregat - Puigcerdà (Per Vic)",
        "color": "#e63027",
        "type": "rodalies"
    },
    {
        "id": "R4",
        "name": "R4",
        "description": "Sant Vicenç de Calders - Manresa (Per Vilafranca del Penedès)",
        "color": "#f6a22d",
        "type": "rodalies"
    },
    {
        "id": "R7",
        "name": "R7",
        "description": "Barcelona Fabra i Puig - Cerdanyola Universitat",
        "color": "#bf7fb5",
        "type": "rodalies"
    },
    {
        "id": "R8",
        "name": "R8",
        "description": "Martorell Central - Granollers Centre (Per Cerdanyola Universitat)",
        "color": "#870064",
        "type": "rodalies"
    },
    {
        "id": "R11",
        "name": "R11",
        "description": "Barcelona Sants - Portbou (Per Granollers Centre i Girona)",
        "color": "#0064a7",
        "type": "rodalies"
    },
    {
        "id": "R13",
        "name": "R13",
        "description": "Barcelona Estació de França - Lleida (Per Valls)",
        "color": "#e8308a",
        "type": "rodalies"
    },
    {
        "id": "R14",
        "name": "R14",
        "description": "Barcelona Estació de França - Lleida (Per Tarragona i Reus)",
        "color": "#6a509d",
        "type": "rodalies"
    },
    {
        "id": "R15",
        "name": "R15",
        "description": "Barcelona Estació de França - Reus - Riba-roja d'Ebre",
        "color": "#9a8b75",
        "type": "rodalies"
    },
    {
        "id": "R16",
        "name": "R16",
        "description": "Barcelona Estació de França - Tarragona - Tortosa / Ulldecona",
        "color": "#b20933",
        "type": "rodalies"
    },
    {
        "id": "R17",
        "name": "R17",
        "description": "Barcelona Estació de França - Salou - Port Aventura",
        "color": "#e87200",
        "type": "rodalies"
    },
    {
        "id": "RG1",
        "name": "RG1",
        "description": "L'Hospitalet de Llobregat - Figueres / Portbou (Per Mataró i Girona)",
        "color": "#0071ce",
        "type": "rodalies"
    },
    {
        "id": "RT1",
        "name": "RT1",
        "description": "Tarragona - Reus",
        "color": "#00c4b3",
        "type": "rodalies"
    },
    {
        "id": "RT2",
        "name": "RT2",
        "description": "L'Arboç - Salou - Port Aventura",
        "color": "#e577cb",
        "type": "rodalies"
    },

    {
        "id": "RL3",
        "name": "RL3",
        "description": "Cervera - Lleida Pirineus",
        "color": "#949300",
        "type": "rodalies"
    },
    {
        "id": "RL4",
        "name": "RL4",
        "description": "Terrassa Estació del Nord - Lleida",
        "color": "#ffdd00",
        "lettercolor": "#1d1d1b",
        "type": "rodalies"
    },


    // BUS

    // TMB
    {
        'id': 'D20',
        'name': 'D20',
        'description': 'Pg. Marítim - Ernest Lluch',
        'color': '#93107E',
        'type': 'BUS TMB D'
    },
    {
        'id': 'D40',
        'name': 'D40',
        'description': 'Pl. Espanya - Canyelles',
        'color': '#93107E',
        'type': 'BUS TMB D'
    },
    {
        'id': 'D50',
        'name': 'D50',
        'description': 'Paral·lel - Ciutat Meridiana',
        'color': '#93107E',
        'type': 'BUS TMB D'
    },
    {
        'id': 'H2',
        'name': 'H2',
        'description': 'Av. Esplugues - Trinitat Nova',
        'color': '#003888',
        'type': 'BUS TMB H'
    },
    {
        'id': 'H4',
        'name': 'H4',
        'description': 'Zona Universitària - Bon Pastor',
        'color': '#003888',
        'type': 'BUS TMB H'
    },
    {
        'id': 'H6',
        'name': 'H6',
        'description': 'Zona Universitària - Onze de Setembre',
        'color': '#003888',
        'type': 'BUS TMB H'
    },
    {
        'id': 'H8',
        'name': 'H8',
        'description': 'Ernest Lluch - Bon Pastor',
        'color': '#003888',
        'type': 'BUS TMB H'
    },
    {
        'id': 'H10',
        'name': 'H10',
        'description': 'Pl. Sants - Olímpic de Badalona',
        'color': '#003888',
        'type': 'BUS TMB H'
    },
    {
        'id': 'H12',
        'name': 'H12',
        'description': 'Gornal - Besòs Verneda',
        'color': '#003888',
        'type': 'BUS TMB H'
    },
    {
        'id': 'H14',
        'name': 'H14',
        'description': 'Paral·lel - Sant Adrià',
        'color': '#003888',
        'type': 'BUS TMB H'
    },
    {
        'id': 'H16',
        'name': 'H16',
        'description': 'Pg. Zona Franca - Fòrum Campus Besòs',
        'color': '#003888',
        'type': 'BUS TMB H'
    },
    {
        'id': 'V1',
        'name': 'V1',
        'description': "Districte Gran Via l'Hospitalet - Av. Esplugues",
        'color': '#6AB023',
        'type': 'BUS TMB V'
    },
    {
        'id': 'V3',
        'name': 'V3',
        'description': 'Zona Franca - Can Caralleu',
        'color': '#6AB023',
        'type': 'BUS TMB V'
    },
    {
        'id': 'V5',
        'name': 'V5',
        'description': 'Mare de Déu de Port - Pedralbes',
        'color': '#6AB023',
        'type': 'BUS TMB V'
    },
    {
        'id': 'V7',
        'name': 'V7',
        'description': 'Pl. Espanya - Sarrià',
        'color': '#6AB023',
        'type': 'BUS TMB V'
    },
    {
        'id': 'V9',
        'name': 'V9',
        'description': 'Poble-sec - Sarrià',
        'color': '#6AB023',
        'type': 'BUS TMB V'
    },
    {
        'id': 'V11',
        'name': 'V11',
        'description': 'Estació Marítima (WTC) - Bonanova',
        'color': '#6AB023',
        'type': 'BUS TMB V'
    },
    {
        'id': 'V13',
        'name': 'V13',
        'description': 'Pl. Catalunya - Av. Tibidabo',
        'color': '#6AB023',
        'type': 'BUS TMB V'
    },
    {
        'id': 'V15',
        'name': 'V15',
        'description': 'Barceloneta - Av. Tibidabo',
        'color': '#6AB023',
        'type': 'BUS TMB V'
    },
    {
        'id': 'V17',
        'name': 'V17',
        'description': "Port Vell - Vall d'Hebron",
        'color': '#6AB023',
        'type': 'BUS TMB V'
    },
    {
        'id': 'V19',
        'name': 'V19',
        'description': 'Barceloneta - Pl. Alfonso Comín',
        'color': '#6AB023',
        'type': 'BUS TMB V'
    },
    {
        'id': 'V21',
        'name': 'V21',
        'description': 'Pg. Marítim - Montbau',
        'color': '#6AB023',
        'type': 'BUS TMB V'
    },
    {
        'id': 'V23',
        'name': 'V23',
        'description': 'Nova Icària - Can Marcet',
        'color': '#6AB023',
        'type': 'BUS TMB V'
    },
    {
        'id': 'V25',
        'name': 'V25',
        'description': 'Nova Icària - Horta',
        'color': '#6AB023',
        'type': 'BUS TMB V'
    },
    {
        'id': 'V27',
        'name': 'V27',
        'description': 'Pg. Marítim - Canyelles',
        'color': '#6AB023',
        'type': 'BUS TMB V'
    },
    {
        'id': 'V29',
        'name': 'V29',
        'description': 'Diagonal Mar - Roquetes',
        'color': '#6AB023',
        'type': 'BUS TMB V'
    },
    {
        'id': 'V31',
        'name': 'V31',
        'description': 'Fòrum - Trinitat Vella',
        'color': '#6AB023',
        'type': 'BUS TMB V'
    },
    {
        'id': 'V33',
        'name': 'V33',
        'description': 'Fòrum Campus Besòs - Santa Coloma',
        'color': '#6AB023',
        'type': 'BUS TMB V'
    }, {
        'id': 'X1',
        'name': 'X1',
        'description': 'Francesc Macià - Glòries',
        'color': '#010101',
        'type': 'BUS TMB X'
    },
    {
        'id': 'X2',
        'name': 'X2',
        'description': 'X2-Prat Xpres (Pl. Espanya) - X2-Prat Xpres (Av. Remolar)',
        'color': '#010101',
        'type': 'BUS TMB X'
    },
    {
        'id': '6',
        'name': '6',
        'description': 'Pg. Manuel Girona - Poblenou',
        'color': '#DA291C',
        'type': 'BUS TMB 1-60'
    },
    {
        'id': '7',
        'name': '7',
        'description': 'Fòrum - Zona Universitària',
        'color': '#DA291C',
        'type': 'BUS TMB 1-60'
    },
    {
        'id': '13',
        'name': '13',
        'description': 'Mercat Sant Antoni - Parc de Montjuïc',
        'color': '#DA291C',
        'type': 'BUS TMB 1-60'
    },
    {
        'id': '19',
        'name': '19',
        'description': 'Pl. Catalunya - Sant Genís',
        'color': '#DA291C',
        'type': 'BUS TMB 1-60'
    },
    {
        'id': '21',
        'name': '21',
        'description': 'Paral·lel - El Prat',
        'color': '#DA291C',
        'type': 'BUS TMB 1-60'
    },
    {
        'id': '22',
        'name': '22',
        'description': 'Pl. Catalunya - El Carmel',
        'color': '#DA291C',
        'type': 'BUS TMB 1-60'
    },
    {
        'id': '23',
        'name': '23',
        'description': 'Pl. Espanya - Parc Logístic',
        'color': '#DA291C',
        'type': 'BUS TMB 1-60'
    },
    {
        'id': '24',
        'name': '24',
        'description': 'Pl. Catalunya - El Carmel',
        'color': '#DA291C',
        'type': 'BUS TMB 1-60'
    },
    {
        'id': '27',
        'name': '27',
        'description': 'Estació de Sants - Roquetes',
        'color': '#DA291C',
        'type': 'BUS TMB 1-60'
    },
    {
        'id': '33',
        'name': '33',
        'description': 'Zona Universitària - Verneda',
        'color': '#DA291C',
        'type': 'BUS TMB 1-60'
    },
    {
        'id': '34',
        'name': '34',
        'description': 'Pg. Manuel Girona - Pl. Virrei Amat',
        'color': '#DA291C',
        'type': 'BUS TMB 1-60'
    },
    {
        'id': '39',
        'name': '39',
        'description': 'Pl. Urquinaona - Pl. Catalana',
        'color': '#DA291C',
        'type': 'BUS TMB 1-60'
    },
    {
        'id': '46',
        'name': '46',
        'description': 'Pl. Espanya - Aeroport BCN',
        'color': '#DA291C',
        'type': 'BUS TMB 1-60'
    },
    {
        'id': '47',
        'name': '47',
        'description': 'Pg. Marítim - Canyelles',
        'color': '#DA291C',
        'type': 'BUS TMB 1-60'
    },
    {
        'id': '52',
        'name': '52',
        'description': 'Pl. Catalunya - Collblanc',
        'color': '#DA291C',
        'type': 'BUS TMB 1-60'
    },
    {
        'id': '54',
        'name': '54',
        'description': 'Estació del Nord - Cardenal Reig',
        'color': '#DA291C',
        'type': 'BUS TMB 1-60'
    },
    {
        'id': '55',
        'name': '55',
        'description': 'Pl. Urquinaona - Parc de Montjuïc',
        'color': '#DA291C',
        'type': 'BUS TMB 1-60'
    },
    {
        'id': '59',
        'name': '59',
        'description': 'Poblenou - Pl. Reina Maria Cristina',
        'color': '#DA291C',
        'type': 'BUS TMB 1-60'
    },
    {
        'id': '60',
        'name': '60',
        'description': "Besòs Verneda - Vall d'Hebron",
        'color': '#DA291C',
        'type': 'BUS TMB 1-60'
    },
    {
        'id': '62',
        'name': '62',
        'description': '<M> Clot - Ciutat Meridiana',
        'color': '#DA291C',
        'type': 'BUS TMB 61-100'
    },
    {
        'id': '63',
        'name': '63',
        'description': 'Pl. Universitat - Sant Joan Despí',
        'color': '#DA291C',
        'type': 'BUS TMB 61-100'
    },
    {
        'id': '65',
        'name': '65',
        'description': 'Pl. Espanya - El Prat',
        'color': '#DA291C',
        'type': 'BUS TMB 61-100'
    },
    {
        'id': '67',
        'name': '67',
        'description': 'Pl. Catalunya - Cornellà',
        'color': '#DA291C',
        'type': 'BUS TMB 61-100'
    },
    {
        'id': '68',
        'name': '68',
        'description': 'Hospital Clínic - Cornellà',
        'color': '#DA291C',
        'type': 'BUS TMB 61-100'
    },
    {
        'id': '70',
        'name': '70',
        'description': 'Rambla de Badal - Bonanova',
        'color': '#DA291C',
        'type': 'BUS TMB 61-100'
    },
    {
        'id': '76',
        'name': '76',
        'description': 'Sant Genís - Ciutat Meridiana',
        'color': '#DA291C',
        'type': 'BUS TMB 61-100'
    },
    {
        'id': '78',
        'name': '78',
        'description': 'Estació de Sants - Sant Joan Despí',
        'color': '#DA291C',
        'type': 'BUS TMB 61-100'
    },
    {
        'id': '79',
        'name': '79',
        'description': 'Pl. Espanya - <M> Av. Carrilet',
        'color': '#DA291C',
        'type': 'BUS TMB 61-100'
    },
    {
        'id': '91',
        'name': '91',
        'description': 'Manso - La Bordeta',
        'color': '#DA291C',
        'type': 'BUS TMB 61-100'
    },
    {
        'id': '94',
        'name': '94',
        'description': 'Barri Almeda - Fontsanta',
        'color': '#DA291C',
        'type': 'BUS TMB 61-100'
    },
    {
        'id': '95',
        'name': '95',
        'description': 'Barri Almeda - Pl. Fontsanta',
        'color': '#DA291C',
        'type': 'BUS TMB 61-100'
    },
    {
        'id': '96',
        'name': '96',
        'description': '<M> La Sagrera - Montcada i Reixac',
        'color': '#DA291C',
        'type': 'BUS TMB 61-100'
    },
    {
        'id': '97',
        'name': '97',
        'description': 'Pg. Fabra i Puig - Vallbona',
        'color': '#DA291C',
        'type': 'BUS TMB 61-100'
    },
    {
        'id': '102',
        'name': '102',
        'description': 'Pl. Eivissa - Cementiri de Collserola',
        'color': '#DA291C',
        'type': 'BUS TMB 101-120'
    },
    {
        'id': '104',
        'name': '104',
        'description': 'Fabra i Puig - Cementiri de Collserola',
        'color': '#DA291C',
        'type': 'BUS TMB 101-120'
    },
    {
        'id': '107',
        'name': '107',
        'description': 'Pg. Can Tunis - Pg. del Migdia',
        'color': '#DA291C',
        'type': 'BUS TMB 101-120'
    },
    {
        'id': '109',
        'name': '109',
        'description': 'Hospital Clínic - Polígon Zona Franca',
        'color': '#DA291C',
        'type': 'BUS TMB 101-120'
    },
    {
        'id': '111',
        'name': '111',
        'description': 'Tibidabo - Vallvidrera',
        'color': '#DA291C',
        'type': 'BUS TMB 101-120'
    },
    {
        'id': '112',
        'name': '112',
        'description': 'Horta - Sant Genís',
        'color': '#DA291C',
        'type': 'BUS TMB 101-120'
    },
    {
        'id': '113',
        'name': '113',
        'description': 'Pl. Pius XII - Barri de la Mercè',
        'color': '#DA291C',
        'type': 'BUS TMB 101-120'
    },
    {
        'id': '114',
        'name': '114',
        'description': 'Gràcia - Can Baró',
        'color': '#DA291C',
        'type': 'BUS TMB 101-120'
    },
    {
        'id': '115',
        'name': '115',
        'description': 'Estació de Sants - La Bordeta',
        'color': '#DA291C',
        'type': 'BUS TMB 101-120'
    },
    {
        'id': '116',
        'name': '116',
        'description': 'Gràcia - La Salut',
        'color': '#DA291C',
        'type': 'BUS TMB 101-120'
    },
    {
        'id': '117',
        'name': '117',
        'description': "Guinardó - Font d'en Fargas",
        'color': '#DA291C',
        'type': 'BUS TMB 101-120'
    },
    {
        'id': '118',
        'name': '118',
        'description': 'Vallvidrera - Mas Guimbau',
        'color': '#DA291C',
        'type': 'BUS TMB 101-120'
    },
    {
        'id': '119',
        'name': '119',
        'description': 'Carmel - Penitents',
        'color': '#DA291C',
        'type': 'BUS TMB 101-120'
    },
    {
        'id': '120',
        'name': '120',
        'description': 'Mercat Sant Antoni - Ciutat Vella',
        'color': '#DA291C',
        'type': 'BUS TMB 101-120'
    },
    {
        'id': '121',
        'name': '121',
        'description': 'Mercat Sant Antoni - Poble Sec',
        'color': '#DA291C',
        'type': 'BUS TMB 121-140'
    },
    {
        'id': '122',
        'name': '122',
        'description': 'Turó de la Peira - Montsant/Cadí',
        'color': '#DA291C',
        'type': 'BUS TMB 121-140'
    },
    {
        'id': '123',
        'name': '123',
        'description': 'Av. Tibidabo - Iradier',
        'color': '#DA291C',
        'type': 'BUS TMB 121-140'
    },
    {
        'id': '124',
        'name': '124',
        'description': 'Vallcarca - Collserola',
        'color': '#DA291C',
        'type': 'BUS TMB 121-140'
    },
    {
        'id': '125',
        'name': '125',
        'description': 'La Marina - Pl. del Nou',
        'color': '#DA291C',
        'type': 'BUS TMB 121-140'
    },
    {
        'id': '126',
        'name': '126',
        'description': 'Trinitat Vella - <M> La Sagrera',
        'color': '#DA291C',
        'type': 'BUS TMB 121-140'
    },
    {
        'id': '127',
        'name': '127',
        'description': 'Via Favència - Roquetes (per Rodrigo Caro)',
        'color': '#DA291C',
        'type': 'BUS TMB 121-140'
    },
    {
        'id': '128',
        'name': '128',
        'description': 'Vallvidrera - El Rectoret',
        'color': '#DA291C',
        'type': 'BUS TMB 121-140'
    },
    {
        'id': '129',
        'name': '129',
        'description': 'Penitents - El Coll',
        'color': '#DA291C',
        'type': 'BUS TMB 121-140'
    },
    {
        'id': '130',
        'name': '130',
        'description': "Pl. d'Artós - Can Caralleu",
        'color': '#DA291C',
        'type': 'BUS TMB 121-140'
    },
    {
        'id': '131',
        'name': '131',
        'description': 'El Putxet - Pl. Alfons Comín',
        'color': '#DA291C',
        'type': 'BUS TMB 121-140'
    },
    {
        'id': '132',
        'name': '132',
        'description': 'Torre Llobeta - Prosperitat',
        'color': '#DA291C',
        'type': 'BUS TMB 121-140'
    },
    {
        'id': '133',
        'name': '133',
        'description': 'Trinitat Vella - Fabra i Puig',
        'color': '#DA291C',
        'type': 'BUS TMB 121-140'
    },
    {
        'id': '134',
        'name': '134',
        'description': 'Roquetes - Fabra i Puig',
        'color': '#DA291C',
        'type': 'BUS TMB 121-140'
    },
    {
        'id': '136',
        'name': '136',
        'description': 'Pg. Marítim - Verneda',
        'color': '#DA291C',
        'type': 'BUS TMB 121-140'
    },
    {
        'id': '141',
        'name': '141',
        'description': 'Pl. Francesc Macià - Sant Antoni',
        'color': '#DA291C',
        'type': 'BUS TMB 141-200'
    },
    {
        'id': '150',
        'name': '150',
        'description': 'Pl. Espanya - Castell de Montjuïc',
        'color': '#DA291C',
        'type': 'BUS TMB 141-200'
    },
    {
        'id': '155',
        'name': '155',
        'description': 'Can Cuiàs - Santa Maria de Montcada',
        'color': '#DA291C',
        'type': 'BUS TMB 141-200'
    },
    {
        'id': '157',
        'name': '157',
        'description': 'Collblanc - Sant Joan Despí',
        'color': '#DA291C',
        'type': 'BUS TMB 141-200'
    },
    {
        'id': '175',
        'name': '175',
        'description': 'Collblanc - Zona Universitària',
        'color': '#DA291C',
        'type': 'BUS TMB 141-200'
    },
    {
        'id': '182',
        'name': '182',
        'description': 'Pl. Virrei Amat - Torre Baró',
        'color': '#DA291C',
        'type': 'BUS TMB 141-200'
    },
    {
        'id': '183',
        'name': '183',
        'description': 'Vallbona-Ciutat Meridiana - Torre Baró-Ciutat Meridiana',
        'color': '#DA291C',
        'type': 'BUS TMB 141-200'
    },
    {
        'id': '185',
        'name': '185',
        'description': "<M> Canyelles - Vall d'Hebron",
        'color': '#DA291C',
        'type': 'BUS TMB 141-200'
    },
    {
        'id': '191',
        'name': '191',
        'description': 'Pl. Congrés - Can Baró',
        'color': '#DA291C',
        'type': 'BUS TMB 141-200'
    },
    {
        'id': '192',
        'name': '192',
        'description': 'Poblenou - Hospital de Sant Pau',
        'color': '#DA291C',
        'type': 'BUS TMB 141-200'
    },
    {
        'id': '196',
        'name': '196',
        'description': 'Av. Tibidabo - Bellesguard',
        'color': '#DA291C',
        'type': 'BUS TMB 141-200'
    },
    {
        'id': '135',
        'name': '135',
        'description': "Montbau-la Vall d'Hebron - Montbau-la Vall d'Hebron",
        'color': '#DA291C',
        'type': 'BUS TMB 141-200'
    },
    {
        'id': '180',
        'name': '180',
        'description': 'Torre Baró Sud - Torre Baró Sud',
        'color': '#DA291C',
        'type': 'BUS TMB 141-200'
    },
    {
        'id': '197',
        'name': '197',
        'description': 'Vallbona - Vallbona',
        'color': '#DA291C',
        'type': 'BUS TMB 141-200'
    },
    {
        'id': '198',
        'name': '198',
        'description': 'El Farró - Galvany - El Farró - Galvany',
        'color': '#DA291C',
        'type': 'BUS TMB 141-200'
    },
    {
        'id': '199',
        'name': '199',
        'description': 'Torre Baró Nord - Torre Baró Nord',
        'color': '#DA291C',
        'type': 'BUS TMB 141-200'
    },
];

const checklistContainer = document.getElementById('checklist');
const resetButton = document.getElementById('reset-btn');

function loadChecklist() {
    const completedLines = JSON.parse(localStorage.getItem('completedLines')) || [];
    checklistContainer.innerHTML = '';

    const types = [...new Set(lines.map(line => line.type))];

    types.forEach(type => {
        // Separador
        const separator = document.createElement('div');
        separator.classList.add('separator');
        separator.id = type;
        separator.textContent = type.toUpperCase();
        checklistContainer.appendChild(separator);

        // Afegir targetes
        lines
            .filter(line => line.type === type)
            .forEach(line => {
                const card = document.createElement('div');
                card.classList.add('card');
                if (completedLines.includes(line.id)) {
                    card.classList.add('completed');
                }
                card.style.backgroundColor = line.color;
                card.style.color = line.lettercolor; // Color del text
                card.innerHTML = `
                    <div>
                        <h2>${line.name}</h2>
                        <p>${line.description}</p>
                    </div>
                    <label>
                        <input type="checkbox" ${completedLines.includes(line.id) ? 'checked' : ''}>
                        <span class="visited-label"></span>
                    </label>
                `;
                checklistContainer.appendChild(card);

                // Event listener per marcar/desmarcar
                const checkbox = card.querySelector('input[type="checkbox"]');
                checkbox.addEventListener('change', () => toggleLine(line.id));
            });
    });
}

function toggleLine(id) {
    const completedLines = JSON.parse(localStorage.getItem('completedLines')) || [];
    if (completedLines.includes(id)) {
        localStorage.setItem('completedLines', JSON.stringify(completedLines.filter(line => line !== id)));
    } else {
        completedLines.push(id);
        localStorage.setItem('completedLines', JSON.stringify(completedLines));
    }
    loadChecklist();
}

resetButton.addEventListener('click', () => {
    localStorage.removeItem('completedLines');
    loadChecklist();
});

loadChecklist();

// Botó per tornar a dalt

let mybutton = document.getElementById("backBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0;
} 