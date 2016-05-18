import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';


    var data = [
{
name: "The Honourable Ed Fast",
party: "Conservative",
riding: "Abbotsford",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/FastEd_CPC.jpg",
phone: "604-557-7888",
address: [
"2825 Clearbrook Road (Main Office)",
"Suite 205",
"Abbotsford, British Columbia",
"V2T 6S3"
]
},
{
name: "Romeo Saganash",
party: "NDP",
riding: "Abitibi—Baie-James—Nunavik—Eeyou",
languages: "French",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/SaganashRomeo_NDP.jpg",
phone: "418-748-7870",
address: [
"888 3rd Avenue (Main Office)",
"Suite 204",
"Val-d'Or, Quebec",
"J9P 5E6",
"333 3rd Street ",
"Suite 10",
"Chibougamau, Quebec",
"G8P 1N4"
]
},
{
name: "Christine Moore",
party: "NDP",
riding: "Abitibi—Témiscamingue",
languages: "French",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/MooreChristine_NPD.jpg",
phone: "819-339-2266",
address: [
"33-A Gamble Street West (Main Office)",
"RC 15",
"Rouyn-noranda, Quebec",
"J9X 2R3",
"3 Industrielle Street ",
"Suite 7",
"Ville-marie, Quebec",
"J9V 1S3",
"644 1st Avenue West ",
"Suite 210",
"Amos, Quebec",
"J9T 1V3",
"29 Road 111 E ",
"La Sarre, Quebec",
"J9Z 1R8"
]
},
{
name: "Serge Cormier",
party: "Liberal",
riding: "Acadie—Bathurst",
languages: "French / English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/CormierSerge_LIB.jpg",
phone: "506-726-5398",
address: [
"220 St-Pierre Blvd West (Main Office)",
"Suite 314",
"Caraquet, New Brunswick",
"E1W 1B5"
]
},
{
name: "The Honourable Mélanie Joly",
party: "Liberal",
riding: "Ahuntsic-Cartierville",
languages: "French / English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/JolyMélanie_Lib.jpg",
phone: "514-383-3709",
address: [
"225 Chabanel West (Main Office)",
"Suite 1109",
"Montréal, Quebec",
"H2N 2C9"
]
},
{
name: "Mark Holland",
party: "Liberal",
riding: "Ajax",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/HollandMark_Lib.jpg",
phone: "905-426-6808",
address: [
"100 Old Kingston Road (Main Office)",
"Suite 1",
"Ajax, Ontario",
"L1T 2Z9"
]
},
{
name: "Angelo Iacono",
party: "Liberal",
riding: "Alfred-Pellan",
languages: "French / English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/IaconoAngelo_Lib.jpg",
phone: "450-661-4117",
address: [
"3131 de la Concorde East (Main Office)",
"Suite 300",
"Laval, Quebec",
"H7E 4W4"
]
},
{
name: "Carol Hughes",
party: "NDP",
riding: "Algoma—Manitoulin—Kapuskasing",
languages: "English / French",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/HughesCarol_NDP.jpg",
phone: "",
address: [ ]
},
{
name: "Stéphane Lauzon",
party: "Liberal",
riding: "Argenteuil—La Petite-Nation",
languages: "French / English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/LauzonStéphane_Lib.jpg",
phone: "819-281-2626",
address: [
"505 Bethany Avenue (Main Office)",
"Suite 204",
"Lachute, Quebec",
"J8H 4A6",
"127 Joseph Street ",
"Gatineau, Quebec",
"J8L 1G1"
]
},
{
name: "Leona Alleslev",
party: "Liberal",
riding: "Aurora—Oak Ridges—Richmond Hill",
languages: "English / French",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/AlleslevLeona_Lib.jpg",
phone: "905-773-8358",
address: [
"12820 Yonge Street (Main Office)",
"Suite 202",
"Richmond Hill, Ontario",
"L4E 4H1"
]
},
{
name: "Ken McDonald",
party: "Liberal",
riding: "Avalon",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/McDonaldKen_Lib.jpg",
phone: "709-834-3424",
address: [
"120 Conception Bay Highway (Main Office)",
"Suite 105",
"Conception Bay South, Newfoundland and Labrador",
"A1W 3A6"
]
},
{
name: "Rémi Massé",
party: "Liberal",
riding: "Avignon—La Mitis—Matane—Matapédia",
languages: "French / English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/MasséRémi_Lib.jpg",
phone: "418-364-6254",
address: [
"290 Saint-Jérôme Avenue (Main Office)",
"Matane, Quebec",
"G4W 3A9",
"598 C Perron Blvd ",
"Carleton-sur-Mer, Quebec",
"G0C 1J0"
]
},
{
name: "Blake Richards",
party: "Conservative",
riding: "Banff—Airdrie",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/RichardsBlake_CPC.jpg",
phone: "403-948-5103",
address: [
"620 - 1st Avenue NW (Main Office)",
"Suite 16",
"Airdrie, Alberta",
"T4B 2R3"
]
},
{
name: "John Brassard",
party: "Conservative",
riding: "Barrie—Innisfil",
languages: "English / French",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/BrassardJohn_CPC.jpg",
phone: "705-726-5959",
address: [
"480 Huronia Road (Main Office)",
"Suite 204-B",
"Barrie, Ontario",
"L4N 6M2"
]
},
{
name: "Alexander Nuttall",
party: "Conservative",
riding: "Barrie—Springwater—Oro-Medonte",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/NuttallAlex_CPC.jpg",
phone: "",
address: [ ]
},
{
name: "The Honourable Kevin Sorenson",
party: "Conservative",
riding: "Battle River—Crowfoot",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/SorensonKevin_CPC.jpg",
phone: "780-608-4600",
address: [
"4945 - 50th Street (Main Office)",
"Camrose, Alberta",
"T4V 1P9"
]
},
{
name: "The Honourable Gerry Ritz",
party: "Conservative",
riding: "Battlefords—Lloydminster",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/RitzGerry_CPC.jpg",
phone: "306-445-2004",
address: [
"1322 - 100th Street (Main Office)",
"North Battleford, Saskatchewan",
"S9A 0V8"
]
},
{
name: "Neil R. Ellis",
party: "Liberal",
riding: "Bay of Quinte",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/EllisNeil_Lib.jpg",
phone: "613-969-3300",
address: [
"100 Station Street (Main Office)",
"Belleville, Ontario",
"K8N 2S5"
]
},
{
name: "Nathaniel Erskine-Smith",
party: "Liberal",
riding: "Beaches—East York",
languages: "English / French",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/ErskineSmithNathaniel_Lib.jpg",
phone: "416-467-0860",
address: [
"1902 Danforth Avenue (Main Office)",
"Toronto, Ontario",
"M4C 1J4"
]
},
{
name: "The Honourable Maxime Bernier",
party: "Conservative",
riding: "Beauce",
languages: "French",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/BernierMaxime_CPC.jpg",
phone: "418-387-4224",
address: [
"11535 1st Avenue (Main Office)",
"Suite 430",
"Saint-georges, Quebec",
"G5Y 7H5",
"1068 Vachon Blvd North ",
"Suite 225",
"Sainte-marie, Quebec",
"G6E 1M6"
]
},
{
name: "Sylvie Boucher",
party: "Conservative",
riding: "Beauport—Côte-de-Beaupré—Île d'Orléans—Charlevoix",
languages: "French / English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/BoucherSylvie_CPC.jpg",
phone: "418-827-6776",
address: [
"9749 Sainte-Anne Blvd. (Main Office)",
"Ste-anne-de-beaupre, Quebec",
"G0A 3C0",
"32 Patrick-Morgan Street ",
"La Malbaie, Quebec",
"G5A 1T1",
"Telephone: "
]
},
{
name: "Alupa A. Clarke",
party: "Conservative",
riding: "Beauport—Limoilou",
languages: "French / English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/ClarkeAlupa_CPC.jpg",
phone: "418-663-2113",
address: [
"2000 Sanfaçon Avenue (Main Office)",
"Suite 101",
"Québec, Quebec",
"G1E 3R7"
]
},
{
name: "The Honourable Dominic LeBlanc",
party: "Liberal",
riding: "Beauséjour",
languages: "French / English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/LeblancDominic_Lib.jpg",
phone: "506-533-5700",
address: [
"328 Main Street (Main Office)",
"Suite I",
"Shediac, New Brunswick",
"E4P 2E3"
]
},
{
name: "Louis Plamondon",
party: "Bloc Québécois",
riding: "Bécancour—Nicolet—Saurel",
languages: "French",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/PlamondonLouis_BQ.jpg",
phone: "819-293-2041",
address: [
"307 Marie-Victorin Road (Main Office)",
"Sorel-Tracy, Quebec",
"J3R 1K6",
"702 de Mgr Panet Street ",
"Nicolet, Quebec",
"J3T 1C6"
]
},
{
name: "The Honourable Steven Blaney",
party: "Conservative",
riding: "Bellechasse—Les Etchemins—Lévis",
languages: "French",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/BlaneySteven_CPC.jpg",
phone: "",
address: [ ]
},
{
name: "Matthew Dubé",
party: "NDP",
riding: "Beloeil—Chambly",
languages: "French / English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/DubéMatthew_NDP.jpg",
phone: "450-658-0088",
address: [
"1991 Blvd De Périgny (Main Office)",
"Suite 105",
"Chambly, Quebec",
"J3L 4C3"
]
},
{
name: "Ruth Ellen Brosseau",
party: "NDP",
riding: "Berthier—Maskinongé",
languages: "French / English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/BrosseauRuthEllen_NDP.jpg",
phone: "819-228-1210",
address: [
"343 St-Laurent Avenue (Main Office)",
"Louiseville, Quebec",
"J5V 1K2"
]
},
{
name: "The Honourable Judy Foote",
party: "Liberal",
riding: "Bonavista—Burin—Trinity",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/FooteJudy_Lib.jpg",
phone: "709-832-1383",
address: [
"3 Church Street (Main Office)",
"PO Box 370",
"Grand Bank, Newfoundland and Labrador",
"A0E 1W0"
]
},
{
name: "Emmanuel Dubourg",
party: "Liberal",
riding: "Bourassa",
languages: "French",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/DubourgEmmanuel_Lib.jpg",
phone: "514-323-1212",
address: [
"5835 Leger Blvd (Main Office)",
"Suite 203",
"Montreal-Nord, Quebec",
"H1G 6E1"
]
},
{
name: "Martin Shields",
party: "Conservative",
riding: "Bow River",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/ShieldsMartin_CPC.jpg",
phone: "",
address: [
"403 - 2nd Avenue W (Main Office)",
"Suite 2",
"Brooks, Alberta",
"T1R 0S3",
"Telephone: 1-844-241-0020"
]
},
{
name: "Ramesh Sangha",
party: "Liberal",
riding: "Brampton Centre",
languages: "English / French",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/SanghaRamesh_Lib.jpg",
phone: "",
address: [ ]
},
{
name: "Raj Grewal",
party: "Liberal",
riding: "Brampton East",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/GrewalRaj_Lib.jpg",
phone: "905-458-1474",
address: [
"1 Gateway Blvd (Main Office)",
"Suite 204",
"Brampton, Ontario",
"L6T 0G3"
]
},
{
name: "Ruby Sahota",
party: "Liberal",
riding: "Brampton North",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/SahotaRuby_Lib.jpg",
phone: "905-840-0505",
address: [
"50 Sunny Meadow Blvd (Main Office)",
"Suite 307",
"Brampton, Ontario",
"L6R 0Y7"
]
},
{
name: "Sonia Sidhu",
party: "Liberal",
riding: "Brampton South",
languages: "English / French",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/SidhuSonia_Lib.jpg",
phone: "905-846-0076",
address: [
"24 Queen Street East (Main Office)",
"Suite 600",
"Brampton, Ontario",
"L6V 1A3"
]
},
{
name: "Kamal Khera",
party: "Liberal",
riding: "Brampton West",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/KheraKamal_Lib.jpg",
phone: "905-454-4758",
address: [
"35 Van Kirk Drive (Main Office)",
"Suite 10/10A",
"Brampton, Ontario",
"L7A 1A5"
]
},
{
name: "Larry Maguire",
party: "Conservative",
riding: "Brandon—Souris",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/MaguireLarry_CPC.jpg",
phone: "204-726-7600",
address: [
"223 - 18th Street North (Main Office)",
"Suite 8",
"Brandon, Manitoba",
"R7A 2V8"
]
},
{
name: "Phil McColeman",
party: "Conservative",
riding: "Brantford—Brant",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/McColemanPhil_CPC.jpg",
phone: "519-754-4300",
address: [
"108 St. George Street (Main Office)",
"Suite 3",
"Brantford, Ontario",
"N3R 1V6"
]
},
{
name: "The Honourable Denis Paradis",
party: "Liberal",
riding: "Brome—Missisquoi",
languages: "French",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/ParadisDenis_Lib.jpg",
phone: "450-248-3144",
address: [
"353 Principale West Street (Main Office)",
"Magog, Quebec",
"J1X 2B1",
"351 Principale Street ",
"Cowansville, Quebec",
"J2K 1J4",
"106 Principale Street ",
"Bedford, Quebec",
"J0J 1A0"
]
},
{
name: "Alexandra Mendès",
party: "Liberal",
riding: "Brossard—Saint-Lambert",
languages: "French / English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/MendesAlexandra_Lib.jpg",
phone: "450-466-6872",
address: [
"6955 Taschereau Blvd. (Main Office)",
"Suite 225",
"Brossard, Quebec",
"J4Z 1A7"
]
},
{
name: "Larry Miller",
party: "Conservative",
riding: "Bruce—Grey—Owen Sound",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/MillerLarry_CPC.jpg",
phone: "519-371-1059",
address: [
"1131 - 2nd Avenue East (Main Office)",
"Suite 208",
"Owen Sound, Ontario",
"N4K 2J1"
]
},
{
name: "Karina Gould",
party: "Liberal",
riding: "Burlington",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/GouldKarina_Lib.jpg",
phone: "905-639-5757",
address: [
"777 Guelph Line (Main Office)",
"Suite 209",
"Burlington, Ontario",
"L7R 3N2"
]
},
{
name: "Terry Beech",
party: "Liberal",
riding: "Burnaby North—Seymour",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/BeechTerry_Lib.jpg",
phone: "604-718-8870",
address: [
"3906 Hastings Street (Main Office)",
"Burnaby, British Columbia",
"V5C 6C1"
]
},
{
name: "Kennedy Stewart",
party: "NDP",
riding: "Burnaby South",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/StewartKennedy_NDP.jpg",
phone: "604-291-8863",
address: [
"4940 Kingsway (Main Office)",
"Burnaby, British Columbia",
"V5H 2E2"
]
},
{
name: "The Honourable Kent Hehr",
party: "Liberal",
riding: "Calgary Centre",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/HehrKent_Lib.jpg",
phone: "403-244-1880",
address: [
"950 - 6th Avenue SW (Main Office)",
"Calgary, Alberta",
"T2P 1E4"
]
},
{
name: "Len Webber",
party: "Conservative",
riding: "Calgary Confederation",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/WebberLen_CPC.jpg",
phone: "",
address: [ ]
},
{
name: "The Honourable Deepak Obhrai",
party: "Conservative",
riding: "Calgary Forest Lawn",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/ObhraiDeepak_CPC.jpg",
phone: "403-207-3030",
address: [
"525 - 28th Street SE (Main Office)",
"Suite 225",
"Calgary, Alberta",
"T2A 6W9"
]
},
{
name: "The Right Honourable Stephen Harper",
party: "Conservative",
riding: "Calgary Heritage",
languages: "English / French",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/HarperStephen_CPC.jpg",
phone: "403-253-7990",
address: [
"1600 - 90th Avenue SW Suite A-203 (Main Office)",
"Calgary, Alberta",
"T2V 5A8"
]
},
{
name: "The Honourable Jason Kenney",
party: "Conservative",
riding: "Calgary Midnapore",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/KenneyJason_CPC.jpg",
phone: "403-225-3480",
address: [
"1168 - 137th Avenue South East (Main Office)",
"Calgary, Alberta",
"T2J 6T6"
]
},
{
name: "The Honourable Michelle Rempel",
party: "Conservative",
riding: "Calgary Nose Hill",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/RempelMichelle_CPC.jpg",
phone: "",
address: [ ]
},
{
name: "Pat Kelly",
party: "Conservative",
riding: "Calgary Rocky Ridge",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/KellyPat_CPC.jpg",
phone: "403-282-7980",
address: [
"400 Crowfoot Crescent (Main Office)",
"Suite 202",
"Calgary, Alberta",
"T3G 5H6"
]
},
{
name: "Tom Kmiec",
party: "Conservative",
riding: "Calgary Shepard",
languages: "English / French",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/KmiecTom_CPC.jpg",
phone: "",
address: [
"2784 Glenmore Trail SE (Main Office)",
"Suite 1220",
"Calgary, Alberta",
"T2C 2E6",
"Telephone: 1-855-852-5710"
]
},
{
name: "Ron Liepert",
party: "Conservative",
riding: "Calgary Signal Hill",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/LiepertRon_CPC.jpg",
phone: "403-292-6666",
address: [
"8561 - 8A Avenue SW (Main Office)",
"Suite 2216",
"Calgary, Alberta",
"T3H 0V5"
]
},
{
name: "Darshan Singh Kang",
party: "Liberal",
riding: "Calgary Skyview",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/KangDarshanSingh_Lib.jpg",
phone: "403-291-0018",
address: [
"2635 - 37th Avenue NE (Main Office)",
"Suite 140",
"Calgary, Alberta",
"T1Y 5Z6"
]
},
{
name: "Bryan May",
party: "Liberal",
riding: "Cambridge",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/MayBryan_Lib.jpg",
phone: "519-624-7440",
address: [
"534 Hespeler Road (Main Office)",
"Suite A4",
"Cambridge, Ontario",
"N1R 6J7"
]
},
{
name: "Rodger Cuzner",
party: "Liberal",
riding: "Cape Breton—Canso",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/CuznerRodger_Lib.jpg",
phone: "902-842-9763",
address: [
"78 Commercial Street (Main Office)",
"Suite G and E",
"Dominion, Nova Scotia",
"B1G 1B4"
]
},
{
name: "The Honourable Lawrence MacAulay",
party: "Liberal",
riding: "Cardigan",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/MacAulayLawrence_Lib.jpg",
phone: "902-838-4139",
address: [
"551 Main Street (Main Office)",
"PO Box 1150",
"Montague, Prince Edward Island",
"C0A 1R0"
]
},
{
name: "Todd Doherty",
party: "Conservative",
riding: "Cariboo—Prince George",
languages: "English / French",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/DohertyTodd_CPC.jpg",
phone: "250-564-7771",
address: [
"1520 - 3rd Avenue (Main Office)",
"Prince George, British Columbia",
"V2L 3G4"
]
},
{
name: "The Honourable Pierre Poilievre",
party: "Conservative",
riding: "Carleton",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/PoilievrePierre_CPC.jpg",
phone: "613-692-3331",
address: [
"1139 Mill Street (Main Office)",
"Manotick, Ontario",
"K4M 1A5"
]
},
{
name: "Kelly Block",
party: "Conservative",
riding: "Carlton Trail—Eagle Creek",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/BlockKelly_CPC.jpg",
phone: "306-882-6447",
address: [
"725 Centennial Drive S. (Main Office)",
"Unit 2-B",
"Martensville, Saskatchewan",
"S0K 2T0",
"634 Main Street, Box 3400 ",
"Humboldt, Saskatchewan",
"S0K 2A0",
"309 Main Street, Box 1808 ",
"Unit 4",
"Rosetown, Saskatchewan",
"S0L 2V0"
]
},
{
name: "Sean Fraser",
party: "Liberal",
riding: "Central Nova",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/FraserSean_Lib.jpg",
phone: "902-867-2919",
address: [
"2A - 115 MacLean Street (Main Office)",
"New Glasgow, Nova Scotia",
"B2H 4M5",
"Telephone: 1-844-641-5886",
"155 Main Street ",
"Suite 200",
"Antigonish, Nova Scotia",
"B2G 2B6"
]
},
{
name: "Dan Albas",
party: "Conservative",
riding: "Central Okanagan—Similkameen—Nicola",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/AlbasDan_CPC.jpg",
phone: "",
address: [
"2562B Main Street (Main Office)",
"West Kelowna, British Columbia",
"V4T 2N5",
"Telephone: 1-800-665-8711",
"10122-B Main Street ",
"Summerland, British Columbia",
"V0H 1Z0",
"Telephone: 1-800-665-8711"
]
},
{
name: "Pierre Paul-Hus",
party: "Conservative",
riding: "Charlesbourg—Haute-Saint-Charles",
languages: "French",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/PaulHusPierre_CPC.jpg",
phone: "418-624-0022",
address: [
"8400 Henri-Bourassa Blvd (Main Office)",
"Suite 204",
"Québec, Quebec",
"G1G 4E2"
]
},
{
name: "Doug Eyolfson",
party: "Liberal",
riding: "Charleswood—St. James—Assiniboia—Headingley",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/EyolfsonDoug_Lib.jpg",
phone: "204-984-6432",
address: [
"3092 Portage Avenue (Main Office)",
"Unit D",
"Winnipeg, Manitoba",
"R3K 0Y2"
]
},
{
name: "Sean Casey",
party: "Liberal",
riding: "Charlottetown",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/CaseySean_Lib.jpg",
phone: "902-566-7770",
address: [
"75 Fitzroy Road (Main Office)",
"Suite 201",
"Charlottetown, Prince Edward Island",
"C1A 1R6"
]
},
{
name: "Brenda Shanahan",
party: "Liberal",
riding: "Châteauguay—Lacolle",
languages: "English / French",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/ShanahanBrenda_Lib.jpg",
phone: "450-691-7044",
address: [
"253 D'Anjou Blvd (Main Office)",
"Châteauguay, Quebec",
"J6J 2R4"
]
},
{
name: "Dave Van Kesteren",
party: "Conservative",
riding: "Chatham-Kent—Leamington",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/VanKesterenDave_CPC.jpg",
phone: "",
address: [ ]
},
{
name: "Denis Lemieux",
party: "Liberal",
riding: "Chicoutimi—Le Fjord",
languages: "French / English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/LemieuxDenis_Lib.jpg",
phone: "418-698-5648",
address: [
"345 Des Saguenéens Street (Main Office)",
"Suite 70",
"Chicoutimi, Quebec",
"G7H 6K9"
]
},
{
name: "Mark Strahl",
party: "Conservative",
riding: "Chilliwack—Hope",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/StrahlMark_CPC.jpg",
phone: "604-847-9711",
address: [
"7388 Vedder Road (Main Office)",
"Suite 102",
"Chilliwack, British Columbia",
"V2R 4E4"
]
},
{
name: "Niki Ashton",
party: "NDP",
riding: "Churchill—Keewatinook Aski",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/AshtonNiki_NDP.jpg",
phone: "204-627-8716",
address: [
"83 Churchill Drive (Main Office)",
"Thompson, Manitoba",
"R8N 0L6",
"1416 Gordon Avenue ",
"The Pas, Manitoba",
"R9A 1M6"
]
},
{
name: "John Aldag",
party: "Liberal",
riding: "Cloverdale—Langley City",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/AldagJohn_Lib.jpg",
phone: "604-575-6595",
address: [
"19211 Fraser Highway (Main Office)",
"Suite 5",
"Surrey, British Columbia",
"V3S 2C9"
]
},
{
name: "Scott Simms",
party: "Liberal",
riding: "Coast of Bays—Central—Notre Dame",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/SimmsScott_Lib.jpg",
phone: "",
address: [ ]
},
{
name: "The Honourable Marie-Claude Bibeau",
party: "Liberal",
riding: "Compton—Stanstead",
languages: "French / English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/BibeauMarieClaude_Lib.jpg",
phone: "819-347-2598",
address: [
"175 Queen Street (Main Office)",
"Suite 204",
"Sherbrooke, Quebec",
"J1M 1K1"
]
},
{
name: "Ron McKinnon",
party: "Liberal",
riding: "Coquitlam—Port Coquitlam",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/McKinnonRon_Lib.jpg",
phone: "604-927-1080",
address: [
"3278 Westwood Street (Main Office)",
"Suite 101",
"Port Coquitlam, British Columbia",
"V3C 3L8"
]
},
{
name: "Gord Johns",
party: "NDP",
riding: "Courtenay—Alberni",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/JohnsGord_NDP.jpg",
phone: "250-947-2140",
address: [
"1209 East Island (Main Office)",
"Suite 12A",
"Parksville, British Columbia",
"V9P 1R5"
]
},
{
name: "Alistair MacGregor",
party: "NDP",
riding: "Cowichan—Malahat—Langford",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/MacGregorAlistair_NDP.jpg",
phone: "250-746-4896",
address: [
"126 Ingram Street (Main Office)",
"Suite 101",
"Duncan, British Columbia",
"V9L 1P1"
]
},
{
name: "Bill Casey",
party: "Liberal",
riding: "Cumberland—Colchester",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/CaseyBill_Lib.jpg",
phone: "902-895-2863",
address: [
"35 Church Street (Main Office)",
"Amherst, Nova Scotia",
"B4H 3A7",
"40 Inglis Place ",
"Truro, Nova Scotia",
"B2N 4B4"
]
},
{
name: "David Anderson",
party: "Conservative",
riding: "Cypress Hills—Grasslands",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/AndersonDavid_CPC.jpg",
phone: "306-778-4480",
address: [
"240 Central Avenue North (Main Office)",
"Suite 2",
"Swift Current, Saskatchewan",
"S9H 0L2"
]
},
{
name: "Darren Fisher",
party: "Liberal",
riding: "Dartmouth—Cole Harbour",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/FisherDarren_Lib.jpg",
phone: "902-462-6453",
address: [
"82 Tacoma Drive (Main Office)",
"Suite 200",
"Dartmouth, Nova Scotia",
"B2W 3E5"
]
},
{
name: "Robert Sopuck",
party: "Conservative",
riding: "Dauphin—Swan River—Neepawa",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/SopuckRobert_CPC.jpg",
phone: "",
address: [ ]
},
{
name: "Julie Dzerowicz",
party: "Liberal",
riding: "Davenport",
languages: "English / French",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/DzerowiczJulie_Lib.jpg",
phone: "416-654-8048",
address: [
"1202 Bloor Street West (Main Office)",
"Toronto, Ontario",
"M6H 1N2"
]
},
{
name: "The Honourable Carla Qualtrough",
party: "Liberal",
riding: "Delta",
languages: "English / French",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/QualtroughCarla_Lib.jpg",
phone: "778-591-0549",
address: [
"8295 - 120th Street (Main Office)",
"Suite 110",
"Delta, British Columbia",
"V4C 0R1"
]
},
{
name: "Georgina Jolibois",
party: "NDP",
riding: "Desnethé—Missinippi—Churchill River",
languages: "English / French",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/JoliboisGeorgina_NDP.jpg",
phone: "306-425-2643",
address: [
"23 La Loche Avenue (Main Office)",
"Suite 117",
"La Loche, Saskatchewan",
"S0M 1G0",
"207 La Ronge Avenue ",
"Suite 5",
"La Ronge, Saskatchewan",
"S0J 1L0"
]
},
{
name: "Yasmin Ratansi",
party: "Liberal",
riding: "Don Valley East",
languages: "English / French",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/RatansiYasmin_LIB.jpg",
phone: "416-443-0343",
address: [
"220 Duncan Mill Road (Main Office)",
"Suite 309",
"Toronto, Ontario",
"M3B 3J5"
]
},
{
name: "Geng Tan",
party: "Liberal",
riding: "Don Valley North",
languages: "English / French",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/TanGeng_Lib.jpg",
phone: "416-443-0623",
address: [
"442 McNicoll Avenue (Main Office)",
"Toronto, Ontario",
"M2H 2E1"
]
},
{
name: "Robert Oliphant",
party: "Liberal",
riding: "Don Valley West",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/OliphantRobert_Lib.jpg",
phone: "416-467-7275",
address: [
"1670 Bayview Avenue (Main Office)",
"Suite 310",
"Toronto, Ontario",
"M4G 3C2"
]
},
{
name: "Anju Dhillon",
party: "Liberal",
riding: "Dorval—Lachine—LaSalle",
languages: "English / French",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/DhillonAnju_Lib.jpg",
phone: "514-639-4497",
address: [
"735 Notre-Dame Street (Main Office)",
"Lachine, Quebec",
"H8S 2B5"
]
},
{
name: "François Choquette",
party: "NDP",
riding: "Drummond",
languages: "French",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/ChoquetteFrançois_NDP.jpg",
phone: "819-477-3611",
address: [
"150 Marchand Street (Main Office)",
"Suite 100",
"Drummondville, Quebec",
"J2C 4N1"
]
},
{
name: "David Tilson",
party: "Conservative",
riding: "Dufferin—Caledon",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/TilsonDavid_CPC.jpg",
phone: "905-857-6080",
address: [
"229 Broadway (Main Office)",
"Suite 2",
"Orangeville, Ontario",
"L9W 1K4",
"12596 Regional Road 50 ",
"Bolton, Ontario",
"L7E 1T6"
]
},
{
name: "The Honourable Erin O'Toole",
party: "Conservative",
riding: "Durham",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/OTooleErin_CPC.jpg",
phone: "905-697-1699",
address: [
"54 King Street East (Main Office)",
"Suite 103",
"Bowmanville, Ontario",
"L1C 1N3"
]
},
{
name: "Randy Boissonnault",
party: "Liberal",
riding: "Edmonton Centre",
languages: "English / French",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/BoissonnaultRandy_Lib.jpg",
phone: "780-442-1888",
address: [
"10235 - 124 Street (Main Office)",
"Suite 103",
"Edmonton, Alberta",
"T5N 1P9"
]
},
{
name: "Kerry Diotte",
party: "Conservative",
riding: "Edmonton Griesbach",
languages: "English / French",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/DiotteKerry_CPC.jpg",
phone: "780-495-3261",
address: [
"10212 - 127th Avenue NW (Main Office)",
"Suite 102",
"Edmonton, Alberta",
"T5E 0B8"
]
},
{
name: "Ziad Aboultaif",
party: "Conservative",
riding: "Edmonton Manning",
languages: "English / French",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/AboultaifZiad_CPC.jpg",
phone: "780-822-1540",
address: [
"8119 - 160 Avenue (Main Office)",
"Suite 204A",
"Edmonton, Alberta",
"T5Z 0G3"
]
},
{
name: "The Honourable Amarjeet Sohi",
party: "Liberal",
riding: "Edmonton Mill Woods",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/SohiAmarjeet_Lib.jpg",
phone: "780-497-3524",
address: [
"9225 - 28th Avenue (Main Office)",
"Edmonton, Alberta",
"T6N 1N1"
]
},
{
name: "Matt Jeneroux",
party: "Conservative",
riding: "Edmonton Riverbend",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/JenerouxMatt_CPC.jpg",
phone: "780-495-4351",
address: [
"596 Riverbend Square (Main Office)",
"Suite 204",
"Edmonton, Alberta",
"T6R 2E3"
]
},
{
name: "Linda Duncan",
party: "NDP",
riding: "Edmonton Strathcona",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/DuncanLinda_NDP.jpg",
phone: "780-495-8404",
address: [
"10049 - 81st Avenue (Main Office)",
"Edmonton, Alberta",
"T6E 1W7"
]
},
{
name: "Kelly McCauley",
party: "Conservative",
riding: "Edmonton West",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/McCauleyKelly_CPC.jpg",
phone: "780-392-2515",
address: [
"5613 - 199th Street (Main Office)",
"Edmonton, Alberta",
"T6M 0M8"
]
},
{
name: "The Honourable Mike Lake",
party: "Conservative",
riding: "Edmonton—Wetaskiwin",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/LakeMike_CPC.jpg",
phone: "780-495-2149",
address: [
"1230 - 91 Street SW (Main Office)",
"Edmonton, Alberta",
"T6X 0P2"
]
},
{
name: "Marco Mendicino",
party: "Liberal",
riding: "Eglinton—Lawrence",
languages: "English / French",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/MendicinoMarco_Lib.jpg",
phone: "416-781-5583",
address: [
"511 Lawrence Avenue West (Main Office)",
"Toronto, Ontario",
"M6A 1A3"
]
},
{
name: "Robert J. Morrissey",
party: "Liberal",
riding: "Egmont",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/MorrisseyRobert_Lib.jpg",
phone: "",
address: [
"263 Heather Moyse Drive (Main Office)",
"Summerside, Prince Edward Island",
"C1N 5P1",
"Telephone: 1-800-224-0018"
]
},
{
name: "Karen Vecchio",
party: "Conservative",
riding: "Elgin—Middlesex—London",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/VecchioKaren_CPC.jpg",
phone: "519-637-2255",
address: [
"750 Talbot Street (Main Office)",
"Suite 203",
"St. Thomas, Ontario",
"N5P 1E2"
]
},
{
name: "Daniel Blaikie",
party: "NDP",
riding: "Elmwood—Transcona",
languages: "English / French",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/BlaikieDaniel_NDP.jpg",
phone: "204-984-2499",
address: [
"1100 Concordia Avenue (Main Office)",
"Suite 210",
"Winnipeg, Manitoba",
"R2K 4B8"
]
},
{
name: "Randall Garrison",
party: "NDP",
riding: "Esquimalt—Saanich—Sooke",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/GarrisonRandall_NDP.jpg",
phone: "250-405-6550",
address: [
"2904 Tillicum Road (Main Office)",
"Victoria, British Columbia",
"V9A 2A5"
]
},
{
name: "Tracey Ramsey",
party: "NDP",
riding: "Essex",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/RamseyTracey_NDP.jpg",
phone: "519-776-4700",
address: [
"316 Talbot Street North (Main Office)",
"Essex, Ontario",
"N8M 2E1"
]
},
{
name: "Borys Wrzesnewskyj",
party: "Liberal",
riding: "Etobicoke Centre",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/WrzesnewskyjBorys_Lib.jpg",
phone: "416-249-7322",
address: [
"577 Burnhamthorpe Road (Main Office)",
"Suite 2",
"Etobicoke, Ontario",
"M9C 2Y3"
]
},
{
name: "The Honourable Kirsty Duncan",
party: "Liberal",
riding: "Etobicoke North",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/DuncanKirsty_Lib.jpg",
phone: "416-747-6003",
address: [
"815 Albion Rd (Main Office)",
"Etobicoke, Ontario",
"M9V 1A3"
]
},
{
name: "James Maloney",
party: "Liberal",
riding: "Etobicoke—Lakeshore",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/MaloneyJames_Lib.jpg",
phone: "416-251-5510",
address: [
"1092 Islington Avenue (Main Office)",
"Suite 203",
"Toronto, Ontario",
"M8Z 4R9"
]
},
{
name: "David Sweet",
party: "Conservative",
riding: "Flamborough—Glanbrook",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/SweetDavid_CPC.jpg",
phone: "905-574-0474",
address: [
"1760 Upper James St. (Main Office)",
"Suite 4",
"Hamilton, Ontario",
"L9B 1K9"
]
},
{
name: "Ken Hardie",
party: "Liberal",
riding: "Fleetwood—Port Kells",
languages: "English / French",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/HardieKen_Lib.jpg",
phone: "604-501-5900",
address: [
"16088 - 84th Avenue (Main Office)",
"Suite 301",
"Surrey, British Columbia",
"V4N 0V9"
]
},
{
name: "John Barlow",
party: "Conservative",
riding: "Foothills",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/BarlowJohn_CPC.jpg",
phone: "403-603-3665",
address: [
"109 - 4th Avenue South West (Main Office)",
"High River, Alberta",
"T1V 1M5"
]
},
{
name: "David Yurdiga",
party: "Conservative",
riding: "Fort McMurray—Cold Lake",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/YurdigaDavid_CPC.jpg",
phone: "780-743-2201",
address: [
"10021 Biggs Avenue (Main Office)",
"Suite 112",
"Fort McMurray, Alberta",
"T9H 1S4",
"901 - 10 Strret ",
"Suite 3",
"Cold Lake, Alberta",
"T9M 1H8",
"Telephone: "
]
},
{
name: "Matt DeCourcey",
party: "Liberal",
riding: "Fredericton",
languages: "English / French",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/DeCourceyMatt_Lib.jpg",
phone: "506-452-4110",
address: [
"494 Queen Street (Main Office)",
"Suite 300",
"Fredericton, New Brunswick",
"E3B 1B6"
]
},
{
name: "Alaina Lockhart",
party: "Liberal",
riding: "Fundy Royal",
languages: "English / French",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/LockhartAlaina_Lib.jpg",
phone: "506-832-4200",
address: [
"599 Main Street (Main Office)",
"Suite 104",
"Hampton, New Brunswick",
"E5N 6C2"
]
},
{
name: "The Honourable Diane Lebouthillier",
party: "Liberal",
riding: "Gaspésie—Les Îles-de-la-Madeleine",
languages: "French",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/LebouthillierDiane_Lib.jpg",
phone: "418-764-2890",
address: [
"153 La Grande Allée East (Main Office)",
"Suite 104",
"Grande-Rivière, Quebec",
"G0C 1V0",
"350 Principale Road ",
"Suite 101",
"Cap-aux-Meules, Quebec",
"G4T 1C9",
"464 Ste-Anne Blvd West ",
"Suite 27",
"Ste-Anne-Des-Monts, Quebec",
"G4V 1T5"
]
},
{
name: "Steven MacKinnon",
party: "Liberal",
riding: "Gatineau",
languages: "French / English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/MacKinnonSteven_Lib.jpg",
phone: "819-561-5555",
address: [
"160 de l'Hôpital Blvd (Main Office)",
"Suite 204",
"Gatineau, Quebec",
"J8T 8J1"
]
},
{
name: "Francis Drouin",
party: "Liberal",
riding: "Glengarry—Prescott—Russell",
languages: "French / English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/DrouinFrancis_Lib.jpg",
phone: "613-632-5214",
address: [
"1468 Laurier Street (Main Office)",
"Suite 201",
"Rockland, Ontario",
"K4K 1C8",
"179 Main Street East ",
"Hawkesbury, Ontario",
"K6A 1A1",
"90 Main Street South ",
"Alexandria, Ontario",
"K0C 1A0",
"Telephone: "
]
},
{
name: "Chris Warkentin",
party: "Conservative",
riding: "Grande Prairie—Mackenzie",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/WarkentinChris_CPC.jpg",
phone: "780-538-1677",
address: [
"10625 West Side Drive (Main Office)",
"Suite 201",
"Grande Prairie, Alberta",
"T8V 8E6"
]
},
{
name: "Lloyd Longfield",
party: "Liberal",
riding: "Guelph",
languages: "English / French",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/LongfieldLloyd_Lib.jpg",
phone: "519-837-8276",
address: [
"40 Cork Street East (Main Office)",
"Guelph, Ontario",
"N1H 2W8"
]
},
{
name: "The Honourable Diane Finley",
party: "Conservative",
riding: "Haldimand—Norfolk",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/FinleyDiane_CPC.jpg",
phone: "519-426-3400",
address: [
"76 Kent Street South (Main Office)",
"Simcoe, Ontario",
"N3Y 2Y1"
]
},
{
name: "Jamie Schmale",
party: "Conservative",
riding: "Haliburton—Kawartha Lakes—Brock",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/SchmaleJamie_CPC.jpg",
phone: "705-324-2400",
address: [
"68 McLaughlin Road (Main Office)",
"Lindsay, Ontario",
"K9V 6B5"
]
},
{
name: "Andy Fillmore",
party: "Liberal",
riding: "Halifax",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/FillmoreAndy_Lib.jpg",
phone: "902-426-8691",
address: [
"1888 Brunswick Street (Main Office)",
"Suite 808",
"Halifax, Nova Scotia",
"B3J 3J8"
]
},
{
name: "The Honourable Geoff Regan",
party: "Liberal",
riding: "Halifax West",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/ReganGeoff_Lib.jpg",
phone: "902-426-2217",
address: [
"1496 Bedford Highway (Main Office)",
"Suite 222",
"Bedford, Nova Scotia",
"B4A 1E5"
]
},
{
name: "David Christopherson",
party: "NDP",
riding: "Hamilton Centre",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/ChristophersonDavid_NDP.jpg",
phone: "905-526-0770",
address: [
"22 Tisdale Street South (Main Office)",
"Hamilton, Ontario",
"L8N 2V9"
]
},
{
name: "Bob Bratina",
party: "Liberal",
riding: "Hamilton East—Stoney Creek",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/BratinaBob_Lib.jpg",
phone: "905-662-4763",
address: [
"40 Centennial Parkway North (Main Office)",
"Unit 2",
"Hamilton, Ontario",
"L8E 1H6"
]
},
{
name: "Scott Duvall",
party: "NDP",
riding: "Hamilton Mountain",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/DuvallScott_NDP.jpg",
phone: "905-574-3331",
address: [
"555 Concession Street (Main Office)",
"Unit 2, Level 2",
"Hamilton, Ontario",
"L8V 1A8"
]
},
{
name: "Filomena Tassi",
party: "Liberal",
riding: "Hamilton West—Ancaster—Dundas",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/TassiFilomena_Lib.jpg",
phone: "905-529-5435",
address: [
"1686 Main Street West (Main Office)",
"Hamilton, Ontario",
"L8S 0A2"
]
},
{
name: "Mike Bossio",
party: "Liberal",
riding: "Hastings—Lennox and Addington",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/BossioMike_Lib.jpg",
phone: "613-354-0909",
address: [
"20-B Richmond Blvd (Main Office)",
"Napanee, Ontario",
"K7R 4A4"
]
},
{
name: "Marjolaine Boutin-Sweet",
party: "NDP",
riding: "Hochelaga",
languages: "French / English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/BoutinSweetMarjolaine_NDP.jpg",
phone: "514-283-2655",
address: [
"2030 Pie-IX Blvd (Main Office)",
"Suite 225",
"Montréal, Quebec",
"H1V 2C8"
]
},
{
name: "Pablo Rodriguez",
party: "Liberal",
riding: "Honoré-Mercier",
languages: "French / English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/RodriguezPablo_Lib.jpg",
phone: "514-353-5044",
address: [
"8595 Maurice-Duplessis Blvd (Main Office)",
"Suite 208",
"Montréal, Quebec",
"H1E 4H7"
]
},
{
name: "Greg Fergus",
party: "Liberal",
riding: "Hull—Aylmer",
languages: "French / English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/FergusGreg_Lib.jpg",
phone: "819-682-1125",
address: [
"179 Du Portage Promenade (Main Office)",
"Suite 301",
"Gatineau, Quebec",
"J8X 2K5",
"115, Principale Street ",
"Suite 102",
"Gatineau, Quebec",
"J9H 3M2"
]
},
{
name: "The Honourable Judy A. Sgro",
party: "Liberal",
riding: "Humber River—Black Creek",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/SgroJudy_Lib.jpg",
phone: "416-744-1882",
address: [
"2201 Finch Avenue West (Main Office)",
"Suite 25",
"Toronto, Ontario",
"M9M 2Y9"
]
},
{
name: "Ben Lobb",
party: "Conservative",
riding: "Huron—Bruce",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/LobbBen_CPC.jpg",
phone: "",
address: [ ]
},
{
name: "Gabriel Ste-Marie",
party: "Bloc Québécois",
riding: "Joliette",
languages: "French",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/SteMarieGabriel_BQ.jpg",
phone: "450-752-1940",
address: [
"436 St-Viateur (Main Office)",
"Joliette, Quebec",
"J6E 3B2"
]
},
{
name: "Karine Trudel",
party: "NDP",
riding: "Jonquière",
languages: "French",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/TrudelKarine_NDP.jpg",
phone: "418-695-4477",
address: [
"1930 Davis Street (Main Office)",
"Jonquiere, Quebec",
"G7S 3B6"
]
},
{
name: "Cathy McLeod",
party: "Conservative",
riding: "Kamloops—Thompson—Cariboo",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/McLeodCathy_CPC.jpg",
phone: "250-851-4991",
address: [
"275 Seymour Street (Main Office)",
"Suite 6",
"Kamloops, British Columbia",
"V2C 2E7"
]
},
{
name: "Karen McCrimmon",
party: "Liberal",
riding: "Kanata—Carleton",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/McCrimmonKaren_Lib.jpg",
phone: "613-592-3469",
address: [
"555 Legget Drive (Main Office)",
"Suite 121",
"Kanata, Ontario",
"K2K 2X3"
]
},
{
name: "Stephen Fuhr",
party: "Liberal",
riding: "Kelowna—Lake Country",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/FuhrStephen_Lib.jpg",
phone: "250-470-5075",
address: [
"1420 St. Paul Street (Main Office)",
"Suite 102",
"Kelowna, British Columbia",
"V1Y 2E6"
]
},
{
name: "The Honourable Robert D. Nault",
party: "Liberal",
riding: "Kenora",
languages: "English / French",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/NaultRobert_Lib.jpg",
phone: "807-737-4934",
address: [
"301 First Avenue S (Main Office)",
"Suite 202",
"Kenora, Ontario",
"P9N 1W2",
"54 Front Street ",
"Unit 1A",
"Sioux Lookout, Ontario",
"P8T 1A1"
]
},
{
name: "The Honourable MaryAnn Mihychuk",
party: "Liberal",
riding: "Kildonan—St. Paul",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/MihychukMaryAnn_Lib.jpg",
phone: "204-984-6322",
address: [
"1575 Main Street (Main Office)",
"Winnipeg, Manitoba",
"R2W 3W5"
]
},
{
name: "The Honourable Scott Brison",
party: "Liberal",
riding: "Kings—Hants",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/BrisonScott_Lib.jpg",
phone: "902-542-4010",
address: [
"24 Harbourside Drive (Main Office)",
"Suite 101A",
"Wolfville, Nova Scotia",
"B4P 2C1"
]
},
{
name: "Mark Gerretsen",
party: "Liberal",
riding: "Kingston and the Islands",
languages: "English / French",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/GerretsenMark_Lib.jpg",
phone: "613-542-3243",
address: [
"841 Princess Street (Main Office)",
"Kingston, Ontario",
"K7L 1G7"
]
},
{
name: "Deborah Schulte",
party: "Liberal",
riding: "King—Vaughan",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/SchulteDeb_Lib.jpg",
phone: "905-303-5000",
address: [
"9401 Jane Street (Main Office)",
"Suite 115",
"Vaughan, Ontario",
"L6A 4H7"
]
},
{
name: "Raj Saini",
party: "Liberal",
riding: "Kitchener Centre",
languages: "English / French",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/SainiRaj_Lib.jpg",
phone: "519-741-2001",
address: [
"209 Frederick Street (Main Office)",
"Suite 202",
"Kitchener, Ontario",
"N2H 2M7"
]
},
{
name: "Marwan Tabbara",
party: "Liberal",
riding: "Kitchener South—Hespeler",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/TabbaraMarwan_Lib.jpg",
phone: "519-571-5509",
address: [
"153 Country Hill Drive (Main Office)",
"Suite 2A",
"Kitchener, Ontario",
"N2E 2G7"
]
},
{
name: "Harold Albrecht",
party: "Conservative",
riding: "Kitchener—Conestoga",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/AlbrechtHarold_CPC.jpg",
phone: "519-578-3777",
address: [
"1187 Fischer-Hallman Road (Main Office)",
"Unit 624",
"Kitchener, Ontario",
"N2E 4H9"
]
},
{
name: "Wayne Stetski",
party: "NDP",
riding: "Kootenay—Columbia",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/StetskiWayne_NDP.jpg",
phone: "250-354-2610",
address: [
"111 - 7th Avenue South (Main Office)",
"Cranbrook, British Columbia",
"V1C 2J3",
"310 Ward Street ",
"Suite 501",
"Nelson, British Columbia",
"V1L 5S4"
]
},
{
name: "Mario Beaulieu",
party: "Bloc Québécois",
riding: "La Pointe-de-l'Île",
languages: "French",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/BeaulieuMario_BQ.jpg",
phone: "514-645-0101",
address: [
"12500 Industriel Blvd (Main Office)",
"Suite 100",
"Montréal, Quebec",
"H1B 5P5"
]
},
{
name: "Jean-Claude Poissant",
party: "Liberal",
riding: "La Prairie",
languages: "French / English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/PoissantJeanClaude_Lib.jpg",
phone: "450-632-3383",
address: [
"66 Road 132 (Main Office)",
"Suite 200",
"Delson, Quebec",
"J5B 0A1"
]
},
{
name: "Yvonne Jones",
party: "Liberal",
riding: "Labrador",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/JonesYvonne_Lib.jpg",
phone: "709-944-2146",
address: [
"217 Hamilton River Road, PO Box 119 Station B (Main Office)",
"Happy Valley-Goose Bay, Newfoundland and Labrador",
"A0P 1E0",
"53 Main Highway, PO Box 242 ",
"L'Anse au Loup, Newfoundland and Labrador",
"A0K 3L0",
"201 Humber Avenue ",
"Suite 202",
"Labrador City, Newfoundland and Labrador",
"A2V 2Y3"
]
},
{
name: "The Honourable Denis Lebel",
party: "Conservative",
riding: "Lac-Saint-Jean",
languages: "French",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/LebelDenis_CPC.jpg",
phone: "418-275-2768",
address: [
"797 Saint-Joseph Blvd (Main Office)",
"Suite 102",
"Roberval, Quebec",
"G8H 2L4",
"173 St-Michel Blvd ",
"Dolbeau-Mistassini, Quebec",
"G8L 4N9",
"570 de l'Aéroport Road ",
"Suite 112",
"Alma, Quebec",
"G8B 5V2"
]
},
{
name: "Francis Scarpaleggia",
party: "Liberal",
riding: "Lac-Saint-Louis",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/ScarpaleggiaFrancis_Lib.jpg",
phone: "514-695-6661",
address: [
"1 Holiday Avenue (Main Office)",
"635 East Tower",
"Pointe-Claire, Quebec",
"H9R 5N3"
]
},
{
name: "Shannon Stubbs",
party: "Conservative",
riding: "Lakeland",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/StubbsShannon_CPC.jpg",
phone: "780-657-7075",
address: [
"5009 - 40 Street (Main Office)",
"Two Hills, Alberta",
"T0B 4K0"
]
},
{
name: "Bev Shipley",
party: "Conservative",
riding: "Lambton—Kent—Middlesex",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/ShipleyBev_CPC.jpg",
phone: "",
address: [
"380 Albert Street (Main Office)",
"Strathroy, Ontario",
"N7G 1W7",
"Telephone: 1-800-586-4614",
"21 Arnold Street ",
"Suite 5",
"Wallaceburg, Ontario",
"N7G 3P3",
"Telephone: 1-800-585-2640"
]
},
{
name: "Scott Reid",
party: "Conservative",
riding: "Lanark—Frontenac—Kingston",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/ReidScott_CPC.jpg",
phone: "",
address: [ ]
},
{
name: "Mark Warawa",
party: "Conservative",
riding: "Langley—Aldergrove",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/WarawaMark_CPC.jpg",
phone: "604-534-5955",
address: [
"4769 - 222nd Street (Main Office)",
"Suite 104",
"Langley, British Columbia",
"V2Z 3C1"
]
},
{
name: "David Lametti",
party: "Liberal",
riding: "LaSalle—Émard—Verdun",
languages: "English / French",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/LamettiDavid_Lib.jpg",
phone: "514-363-0954",
address: [
"6415 Monk Blvd. (Main Office)",
"Montréal, Quebec",
"H4E 3H8"
]
},
{
name: "David de Burgh Graham",
party: "Liberal",
riding: "Laurentides—Labelle",
languages: "French / English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/GrahamDavid_Lib.jpg",
phone: "819-440-3091",
address: [
"80A Norbert-Morin Blvd (Main Office)",
"Sainte-Agathe-des-Monts, Quebec",
"J8C 2V8",
"424 du Pont Street ",
"Mont-Laurier, Quebec",
"J9L 2R7"
]
},
{
name: "Hélène Laverdière",
party: "NDP",
riding: "Laurier—Sainte-Marie",
languages: "French / English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/LaverdièreHélène_NDP.jpg",
phone: "514-522-1339",
address: [
"1001 Maisonneuve Blvd East (Main Office)",
"suite 507",
"Montréal, Quebec",
"H2L 4P9"
]
},
{
name: "Fayçal El-Khoury",
party: "Liberal",
riding: "Laval—Les Îles",
languages: "French",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/ElKhouryFayçal_Lib.jpg",
phone: "450-689-4594",
address: [
"674 Place Publique (Main Office)",
"Suite 200",
"Laval, Quebec",
"H7X 1G1"
]
},
{
name: "Gordon Brown",
party: "Conservative",
riding: "Leeds—Grenville—Thousand Islands and Rideau Lakes",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/BrownGordon_CPC.jpg",
phone: "613-498-3096",
address: [
"2399 Parkedale Avenue (Main Office)",
"Suite 120",
"Brockville, Ontario",
"K6V 3G9"
]
},
{
name: "Rachael Harder",
party: "Conservative",
riding: "Lethbridge",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/HarderRachael_CPC.jpg",
phone: "403-320-0070",
address: [
"255 - 8th Street South (Main Office)",
"Lethbridge, Alberta",
"T1J 4Y1"
]
},
{
name: "Jacques Gourde",
party: "Conservative",
riding: "Lévis—Lotbinière",
languages: "French",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/GourdeJaques_CPC.jpg",
phone: "418-836-0970",
address: [
"2677 Lagueux Road (Main Office)",
"Lévis, Quebec",
"G6J 1B7"
]
},
{
name: "Peter Fragiskatos",
party: "Liberal",
riding: "London North Centre",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/FragiskatosPeter_Lib.jpg",
phone: "519-663-9777",
address: [
"885 Adelaide Street North (Main Office)",
"London, Ontario",
"N5Y 2M2"
]
},
{
name: "Kate Young",
party: "Liberal",
riding: "London West",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/YoungKate_Lib.jpg",
phone: "519-473-5955",
address: [
"390 Commissioners Road West (Main Office)",
"Suite 200",
"London, Ontario",
"N6J 1Y3"
]
},
{
name: "Irene Mathyssen",
party: "NDP",
riding: "London—Fanshawe",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/MathyssenIrene_NDP.jpg",
phone: "519-685-4745",
address: [
"1700 Dundas Street (Main Office)",
"Unit D",
"London, Ontario",
"N5W 3C9"
]
},
{
name: "Gudie Hutchings",
party: "Liberal",
riding: "Long Range Mountains",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/HutchingsGudie_Lib.jpg",
phone: "709-637-4540",
address: [
"49-51 Park Street (Main Office)",
"Corner Brook, Newfoundland and Labrador",
"A2H 2X1"
]
},
{
name: "Sherry Romanado",
party: "Liberal",
riding: "Longueuil—Charles-LeMoyne",
languages: "French / English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/RomanadoSherry_Lib.jpg",
phone: "450-671-1222",
address: [
"2120 Victoria Avenue (Main Office)",
"Suite 150",
"Greenfield Park, Quebec",
"J4V 1M9"
]
},
{
name: "Pierre Nantel",
party: "NDP",
riding: "Longueuil—Saint-Hubert",
languages: "French",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/NantelPierre_NDP.jpg",
phone: "450-928-4288",
address: [
"192 Saint-Jean Street (Main Office)",
"Suite 200",
"Longueuil, Quebec",
"J4H 2X5"
]
},
{
name: "Joël Lightbound",
party: "Liberal",
riding: "Louis-Hébert",
languages: "French / English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/LightboundJoël_Lib.jpg",
phone: "418-648-3244",
address: [
"3700 du Campanile Street (Main Office)",
"Suite 110",
"Québec, Quebec",
"G1X 4G6"
]
},
{
name: "Gérard Deltell",
party: "Conservative",
riding: "Louis-Saint-Laurent",
languages: "French",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/DeltellGérard_CPC.jpg",
phone: "418-842-5552",
address: [
"9195 de L'Ormière Blvd. (Main Office)",
"Suite 200",
"Québec, Quebec",
"G2B 3K2"
]
},
{
name: "René Arseneault",
party: "Liberal",
riding: "Madawaska—Restigouche",
languages: "French / English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/ArseneaultRené_Lib.jpg",
phone: "506-739-0285",
address: [
"19 Aberdeen Street (Main Office)",
"Suite 204",
"Campbellton, New Brunswick",
"E3N 3G4",
"71 St-François Street ",
"Edmundston, New Brunswick",
"E3V 1E5"
]
},
{
name: "The Honourable Wayne Easter",
party: "Liberal",
riding: "Malpeque",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/EasterWayne_Lib.jpg",
phone: "",
address: [
"4283 Route 13 (Main Office)",
"Unit 1",
"Hunter River, Prince Edward Island",
"C0A 1N0",
"Telephone: 1-800-442-4050"
]
},
{
name: "Marilène Gill",
party: "Bloc Québécois",
riding: "Manicouagan",
languages: "French / English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/GillMarilène_BQ.jpg",
phone: "418-960-1411",
address: [
"955 de Parfondeval Street (Main Office)",
"Baie-Comeau, Quebec",
"G5C 2W8",
"700 Laure Blvd ",
"Suite 235",
"Sept-Îles, Quebec",
"G4R 1Y5"
]
},
{
name: "Yves Robillard",
party: "Liberal",
riding: "Marc-Aurèle-Fortin",
languages: "French / English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/RobillardYves_Lib.jpg",
phone: "450-622-2992",
address: [
"2968 Dagenais Blvd West (Main Office)",
"Suite 101",
"Laval, Quebec",
"H7P 1T1"
]
},
{
name: "The Honourable Jane Philpott",
party: "Liberal",
riding: "Markham—Stouffville",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/PhilpottJane_Lib.jpg",
phone: "905-640-1125",
address: [
"6060 Main Street (Main Office)",
"Stouffville, Ontario",
"L4A 1B8"
]
},
{
name: "The Honourable John McCallum",
party: "Liberal",
riding: "Markham—Thornhill",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/McCallumJohn_LIB.jpg",
phone: "905-479-8100",
address: [
"7750 Birchmount Road (Main Office)",
"Unit 21-22",
"Markham, Ontario",
"L3R 0B4"
]
},
{
name: "Bob Saroya",
party: "Conservative",
riding: "Markham—Unionville",
languages: "English / French",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/SaroyaBob_CPC.jpg",
phone: "905-470-2024",
address: [
"8300 Woodbine Avenue (Main Office)",
"Suite 201",
"Markham, Ontario",
"L3R 9Y7"
]
},
{
name: "Luc Berthold",
party: "Conservative",
riding: "Mégantic—L'Érable",
languages: "French",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/BertholdLuc_CPC.jpg",
phone: "418-338-2903",
address: [
"105A Notre-Dame Street East (Main Office)",
"Thetford Mines, Quebec",
"G6G 2J9",
"1470 Trudelle Avenue ",
"Suite 302",
"Plessisville, Quebec",
"G6L 3K4",
"Telephone: ",
"5527 Frontenac Street ",
"Suite 212",
"Lac-Mégantic, Quebec",
"G6B 1H6",
"Telephone: "
]
},
{
name: "The Honourable Lisa Raitt",
party: "Conservative",
riding: "Milton",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/RaittLisa_CPC.jpg",
phone: "905-693-0166",
address: [
"86 Main Street East (Main Office)",
"Milton, Ontario",
"L9T 1N3"
]
},
{
name: "Simon Marcil",
party: "Bloc Québécois",
riding: "Mirabel",
languages: "French",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/MarcilSimon_BQ.jpg",
phone: "450-430-5535",
address: [
"13479 Curé-Labelle Blvd (Main Office)",
"Suite 102",
"Mirabel, Quebec",
"J7J 1H1"
]
},
{
name: "Pat Finnigan",
party: "Liberal",
riding: "Miramichi—Grand Lake",
languages: "English / French",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/FinniganPat_Lib.jpg",
phone: "506-778-8448",
address: [
"514 Water Street (Main Office)",
"Miramichi, New Brunswick",
"E1V 3G5"
]
},
{
name: "Jati Sidhu",
party: "Liberal",
riding: "Mission—Matsqui—Fraser Canyon",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/SidhuJati_Lib.jpg",
phone: "604-814-5710",
address: [
"32081 Lougheed Highway (Main Office)",
"Suite B3",
"Mission, British Columbia",
"V2V 1A3"
]
},
{
name: "Omar Alghabra",
party: "Liberal",
riding: "Mississauga Centre",
languages: "English / French",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/AlghabraOmar_Lib.jpg",
phone: "905-848-8595",
address: [
"151 City Centre Drive (Main Office)",
"Suite 400",
"Mississauga, Ontario",
"L5B 1M7"
]
},
{
name: "Peter Fonseca",
party: "Liberal",
riding: "Mississauga East—Cooksville",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/FonsecaPeter_Lib.jpg",
phone: "905-566-0009",
address: [
"918 Dundas Street East (Main Office)",
"Suite 303",
"Mississauga, Ontario",
"L4Y 4H9"
]
},
{
name: "Iqra Khalid",
party: "Liberal",
riding: "Mississauga—Erin Mills",
languages: "English / French",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/KhalidIqra_Lib.jpg",
phone: "905-820-8814",
address: [
"3100 Ridgeway Drive (Main Office)",
"Suite 35",
"Mississauga, Ontario",
"L5L 5M5"
]
},
{
name: "Sven Spengemann",
party: "Liberal",
riding: "Mississauga—Lakeshore",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/SpengemannSven_Lib.jpg",
phone: "905-273-8033",
address: [
"1077 North Service Road (Main Office)",
"Suite 30",
"Mississauga, Ontario",
"L4Y 1A6"
]
},
{
name: "The Honourable Navdeep Bains",
party: "Liberal",
riding: "Mississauga—Malton",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/BainsNavdeep_Lib.jpg",
phone: "905-564-0228",
address: [
"6660 Kennedy Road (Main Office)",
"Unit 210",
"Mississauga, Ontario",
"L5T 2M9"
]
},
{
name: "Gagan Sikand",
party: "Liberal",
riding: "Mississauga—Streetsville",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/SikandGagan_Lib.jpg",
phone: "905-812-1811",
address: [
"6990 Financial Drive (Main Office)",
"Unit 8G",
"Mississauga, Ontario",
"L5N 8J4"
]
},
{
name: "The Honourable Ginette Petitpas Taylor",
party: "Liberal",
riding: "Moncton—Riverview—Dieppe",
languages: "English / French",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/PetitpasTaylorGinette_Lib.jpg",
phone: "506-851-3310",
address: [
"272 St-George Street (Main Office)",
"Suite 110",
"Moncton, New Brunswick",
"E1C 1W6"
]
},
{
name: "Michel Picard",
party: "Liberal",
riding: "Montarville",
languages: "French",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/PicardMichel_Lib.jpg",
phone: "450-653-8383",
address: [
"1428 Montarville Street (Main Office)",
"Suite 203",
"Saint-Bruno-de-Montarville, Quebec",
"J3V 3T5"
]
},
{
name: "Luc Thériault",
party: "Bloc Québécois",
riding: "Montcalm",
languages: "French",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/ThériaultLuc_BQ.jpg",
phone: "",
address: [
"1095 Montée Masson (Main Office)",
"Mascouche, Quebec",
"J7K 2M1",
"Telephone: 1-800-263-5726"
]
},
{
name: "Bernard Généreux",
party: "Conservative",
riding: "Montmagny—L'Islet—Kamouraska—Rivière-du-Loup",
languages: "French",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/GénéreuxBernard_CPC.jpg",
phone: "418-868-1280",
address: [
"6 St-Jean Baptiste Street East (Main Office)",
"Suite 101",
"Montmagny, Quebec",
"G5V 1J7",
"277 Lafontaine Street ",
"Riviere-du-loup, Quebec",
"G5R 3A9"
]
},
{
name: "Tom Lukiwski",
party: "Conservative",
riding: "Moose Jaw—Lake Centre—Lanigan",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/LukiwskiTom_CPC.jpg",
phone: "306-691-3577",
address: [
"54 Stadacona Street W. (Main Office)",
"Suite 1",
"Moose Jaw, Saskatchewan",
"S6H 1Z1"
]
},
{
name: "Anthony Housefather",
party: "Liberal",
riding: "Mount Royal",
languages: "English / French",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/HousefatherAnthony_Lib.jpg",
phone: "514-283-0171",
address: [
"4770 Kent Avenue (Main Office)",
"Suite 316",
"Montréal, Quebec",
"H3W 1H2"
]
},
{
name: "Sheila Malcolmson",
party: "NDP",
riding: "Nanaimo—Ladysmith",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/MalcolmsonSheila_NDP.jpg",
phone: "250-734-6400",
address: [
"495 Dunsmuir Street (Main Office)",
"Suite 103",
"Nanaimo, British Columbia",
"V9R 6B9"
]
},
{
name: "Chandra Arya",
party: "Liberal",
riding: "Nepean",
languages: "English / French",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/AryaChandra_Lib.jpg",
phone: "613-825-5505",
address: [
"240 Kennevale Drive (Main Office)",
"Suite 201A",
"Nepean, Ontario",
"K2J 6B6"
]
},
{
name: "Karen Ludwig",
party: "Liberal",
riding: "New Brunswick Southwest",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/LudwigKaren_Lib.jpg",
phone: "506-738-3634",
address: [
"49 King Street (Main Office)",
"St. Stephen, New Brunswick",
"E3L 2C1",
"192 River Valley Drive ",
"Suite 1",
"Grand Bay - Westfield, New Brunswick",
"E5K 1A4"
]
},
{
name: "Peter Julian",
party: "NDP",
riding: "New Westminster—Burnaby",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/JulianPeter_NDP.jpg",
phone: "604-775-5707",
address: [
"888 Carnarvon Street (Main Office)",
"Suite 110",
"New Westminster, British Columbia",
"V3M 0C6"
]
},
{
name: "Kyle Peterson",
party: "Liberal",
riding: "Newmarket—Aurora",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/PetersonKyle_Lib.jpg",
phone: "905-953-7515",
address: [
"16600 Bayview Avenue (Main Office)",
"Suite 202",
"Newmarket, Ontario",
"L3X 1Z9"
]
},
{
name: "Vance Badawey",
party: "Liberal",
riding: "Niagara Centre",
languages: "English / French",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/BadaweyVance_Lib.jpg",
phone: "905-788-2204",
address: [
"136 East Main Street (Main Office)",
"Suite 103",
"Welland, Ontario",
"L3B 3W6"
]
},
{
name: "The Honourable Rob Nicholson",
party: "Conservative",
riding: "Niagara Falls",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/NicholsonRob_CPC.jpg",
phone: "",
address: [ ]
},
{
name: "Dean Allison",
party: "Conservative",
riding: "Niagara West",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/AllisonDean_CPC.jpg",
phone: "905-563-7900",
address: [
"4994 King Street (Main Office)",
"Beamsville, Ontario",
"L0R 1B0"
]
},
{
name: "Marc Serré",
party: "Liberal",
riding: "Nickel Belt",
languages: "English / French",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/SerréMarc_Lib.jpg",
phone: "705-580-2584",
address: [
"2945 Highway 69 North (Main Office)",
"Suite 203",
"Val Caron, Ontario",
"P3N 1N3",
"94 King Street ",
"Suite 1",
"Sturgeon Falls, Ontario",
"P2B 2Z5"
]
},
{
name: "Anthony Rota",
party: "Liberal",
riding: "Nipissing—Timiskaming",
languages: "English / French",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/RotaAnthony_Lib.jpg",
phone: "705-647-6262",
address: [
"375 Main Street West (Main Office)",
"North Bay, Ontario",
"P1B 2T9",
"112 Whitewood Avenue ",
"Temiskaming Shores, Ontario",
"P0J 1P0"
]
},
{
name: "Rachel Blaney",
party: "NDP",
riding: "North Island—Powell River",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/BlaneyRachel_NDP.jpg",
phone: "250-287-9388",
address: [
"908 Island Highway (Main Office)",
"Campbell River, British Columbia",
"V9W 4B2"
]
},
{
name: "Mel Arnold",
party: "Conservative",
riding: "North Okanagan—Shuswap",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/ArnoldMel_CPC.jpg",
phone: "250-260-5020",
address: [
"3105 - 29th Street (Main Office)",
"Vernon, British Columbia",
"V1T 5A8"
]
},
{
name: "Jonathan Wilkinson",
party: "Liberal",
riding: "North Vancouver",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/WilkinsonJonathan_Lib.jpg",
phone: "604-775-6333",
address: [
"102 - 3rd Street West (Main Office)",
"North Vancouver, British Columbia",
"V7M 1E8"
]
},
{
name: "Kim Rudd",
party: "Liberal",
riding: "Northumberland—Peterborough South",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/RuddKim_Lib.jpg",
phone: "905-372-8757",
address: [
"12 Elgin Street East (Main Office)",
"Unit No. 4",
"Cobourg, Ontario",
"K9A 0C5"
]
},
{
name: "Michael V. McLeod",
party: "Liberal",
riding: "Northwest Territories",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/McLeodMichael_Lib.jpg",
phone: "867-873-6995",
address: [
"5109 - 48th Street (Main Office)",
"Suite 114",
"Yellowknife, Northwest Territories",
"X1A 1N5"
]
},
{
name: "The Honourable Marc Garneau",
party: "Liberal",
riding: "Notre-Dame-de-Grâce—Westmount",
languages: "French / English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/GarneauMarc_Lib.jpg",
phone: "514-283-2013",
address: [
"4060 Sainte-Catherine Street West (Main Office)",
"Suite 340",
"Westmount, Quebec",
"H3Z 2Z3"
]
},
{
name: "The Honourable Hunter Tootoo",
party: "Liberal",
riding: "Nunavut",
languages: "English / French",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/TootooHunter_Lib.jpg",
phone: "867-979-4193",
address: [
"922 Niagunngusiaq Road (Main Office)",
"Suite 101",
"Iqaluit, Nunavut",
"X0A 0H0"
]
},
{
name: "John Oliver",
party: "Liberal",
riding: "Oakville",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/OliverJohn_Lib.jpg",
phone: "905-338-2008",
address: [
"301 Robinson Street (Main Office)",
"Oakville, Ontario",
"L6J 1G7"
]
},
{
name: "Pam Damoff",
party: "Liberal",
riding: "Oakville North—Burlington",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/DamoffPam_Lib.jpg",
phone: "905-847-4043",
address: [
"2525 Old Bronte Road (Main Office)",
"Suite 590",
"Oakville, Ontario",
"L6M 4J2"
]
},
{
name: "The Honourable Andrew Leslie",
party: "Liberal",
riding: "Orléans",
languages: "English / French",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/LeslieAndrew_Lib.jpg",
phone: "613-834-1800",
address: [
"255 Centrum Blvd (Main Office)",
"Orléans, Ontario",
"K1E 3W3"
]
},
{
name: "Colin Carrie",
party: "Conservative",
riding: "Oshawa",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/CarrieColin_CPC.jpg",
phone: "905-440-4868",
address: [
"57 Simcoe Street South (Main Office)",
"Suite 2B",
"Oshawa, Ontario",
"L1H 4G4"
]
},
{
name: "The Honourable Catherine McKenna",
party: "Liberal",
riding: "Ottawa Centre",
languages: "English / French",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/McKennaCatherine_Lib.jpg",
phone: "613-946-8682",
address: [
"107 Catherine Street (Main Office)",
"Ottawa, Ontario",
"K2P 0P4"
]
},
{
name: "David J. McGuinty",
party: "Liberal",
riding: "Ottawa South",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/McGuintyDavid_Lib.jpg",
phone: "613-990-8640",
address: [
"1883 Bank Street (Main Office)",
"Unit A",
"Ottawa, Ontario",
"K1V 7Z9"
]
},
{
name: "Anita Vandenbeld",
party: "Liberal",
riding: "Ottawa West—Nepean",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/VandenbeldAnita_Lib.jpg",
phone: "613-990-7720",
address: [
"1315 Richmond road (Main Office)",
"Ottawa, Ontario",
"K2B 7Y4"
]
},
{
name: "The Honourable Mauril Bélanger",
party: "Liberal",
riding: "Ottawa—Vanier",
languages: "French / English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/BélangerMauril_Lib.jpg",
phone: "613-947-7961",
address: [
"168 Charlotte Street (Main Office)",
"Suite 504",
"Ottawa, Ontario",
"K1N 8K6"
]
},
{
name: "The Honourable Thomas J. Mulcair",
party: "NDP",
riding: "Outremont",
languages: "French / English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/MulcairThomas_NDP.jpg",
phone: "514-736-2727",
address: [
"154 Laurier Avenue West (Main Office)",
"Suite 302",
"Montréal, Quebec",
"H2T 2N7"
]
},
{
name: "Dave MacKenzie",
party: "Conservative",
riding: "Oxford",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/MacKenzieDave_CPC.jpg",
phone: "",
address: [ ]
},
{
name: "The Right Honourable Justin Trudeau",
party: "Liberal",
riding: "Papineau",
languages: "French / English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/TrudeauJustin_LIB.jpg",
phone: "514-277-6020",
address: [
"529 Jarry Street East (Main Office)",
"Suite 302",
"Montréal, Quebec",
"H2P 1V4"
]
},
{
name: "Arif Virani",
party: "Liberal",
riding: "Parkdale—High Park",
languages: "English / French",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/ViraniArif_Lib.jpg",
phone: "416-769-5072",
address: [
"1596 Bloor Street West (Main Office)",
"Toronto, Ontario",
"M6P 1A7"
]
},
{
name: "The Honourable Tony Clement",
party: "Conservative",
riding: "Parry Sound—Muskoka",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/ClementTony_CPC.jpg",
phone: "",
address: [ ]
},
{
name: "Arnold Viersen",
party: "Conservative",
riding: "Peace River—Westlock",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/ViersenArnold_CPC.jpg",
phone: "",
address: [
"5124 - 50th Street, Box 4458 (Main Office)",
"Barrhead, Alberta",
"T7N 1A3",
"Telephone: 1-800-667-8450"
]
},
{
name: "John Nater",
party: "Conservative",
riding: "Perth—Wellington",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/NaterJohn_CPC.jpg",
phone: "519-338-3589",
address: [
"59 Lorne Avenue East (Main Office)",
"Unit A",
"Stratford, Ontario",
"N5A 6S4",
"39 Elora Street South ",
"Unit 1",
"Harriston, Ontario",
"N0G 1Z0"
]
},
{
name: "The Honourable Maryam Monsef",
party: "Liberal",
riding: "Peterborough—Kawartha",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/MonsefMaryam_Lib.jpg",
phone: "705-745-2108",
address: [
"417 Bethune Street (Main Office)",
"Suite 4",
"Peterborough, Ontario",
"K9H 3Z1"
]
},
{
name: "Jennifer O'Connell",
party: "Liberal",
riding: "Pickering—Uxbridge",
languages: "English / French",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/OConnellJennifer_Lib.jpg",
phone: "905-839-2878",
address: [
"1154 Kingston Road (Main Office)",
"Unit 4",
"Pickering, Ontario",
"L1V 1B4"
]
},
{
name: "Xavier Barsalou-Duval",
party: "Bloc Québécois",
riding: "Pierre-Boucher—Les Patriotes—Verchères",
languages: "French",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/BarsalouDuvalXavier_BQ.jpg",
phone: "450-652-4442",
address: [
"1625 Lionel-Boulet Blvd. (Main Office)",
"Suite 202",
"Varennes, Quebec",
"J3X 1P7"
]
},
{
name: "Frank Baylis",
party: "Liberal",
riding: "Pierrefonds—Dollard",
languages: "English / French",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/BaylisFrank_Lib.jpg",
phone: "514-624-5725",
address: [
"3883 Blvd St-Jean (Main Office)",
"Suite 501",
"Dollard-des-Ormeaux, Quebec",
"H9G 3B9"
]
},
{
name: "Dan Ruimy",
party: "Liberal",
riding: "Pitt Meadows—Maple Ridge",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/RuimyDan_Lib.jpg",
phone: "604-466-2761",
address: [
"22369 Lougheed Hwy (Main Office)",
"Maple Ridge, British Columbia",
"V2X 2T3"
]
},
{
name: "William Amos",
party: "Liberal",
riding: "Pontiac",
languages: "English / French",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/AmosWilliam_Lib.jpg",
phone: "819-648-2138",
address: [
"164 Old Chelsea Road (Main Office)",
"Chelsea, Quebec",
"J9B 1J4",
"87-D St Joseph Street ",
"Gracefield, Quebec",
"J0X 1W0",
"110 Front Street ",
"Campbell's Bay, Quebec",
"J0X 1V0"
]
},
{
name: "Fin Donnelly",
party: "NDP",
riding: "Port Moody—Coquitlam",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/DonnellyFin_NDP.jpg",
phone: "604-664-9229",
address: [
"1116 Austin Avenue (Main Office)",
"Coquitlam, British Columbia",
"V3K 3P5"
]
},
{
name: "The Honourable Candice Bergen",
party: "Conservative",
riding: "Portage—Lisgar",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/BergenCandice_CPC.jpg",
phone: "",
address: [ ]
},
{
name: "Joël Godin",
party: "Conservative",
riding: "Portneuf—Jacques-Cartier",
languages: "French",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/GodinJoël_CPC.jpg",
phone: "418-870-1571",
address: [
"334 Road 138 (Main Office)",
"Unit 230",
"Saint-Augustin-de-Desmaures, Quebec",
"G3A 1G8"
]
},
{
name: "Randy Hoback",
party: "Conservative",
riding: "Prince Albert",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/HobackRandy_CPC.jpg",
phone: "",
address: [ ]
},
{
name: "Bob Zimmer",
party: "Conservative",
riding: "Prince George—Peace River—Northern Rockies",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/ZimmerBob_CPC.jpg",
phone: "250-719-6848",
address: [
"9916 - 100th Avenue (Main Office)",
"Fort St John, British Columbia",
"V1J 1Y5",
"1520 - 3rd Avenue ",
"Prince George, British Columbia",
"V2L 3G4",
"Telephone: 1-855-767-4567",
"10421 - 10th Street ",
"Dawson Creek, British Columbia",
"V1G 3T4"
]
},
{
name: "Ted Falk",
party: "Conservative",
riding: "Provencher",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/FalkTed_CPC.jpg",
phone: "204-326-9889",
address: [
"76 Provincial Trunk Hwy 12 N (Main Office)",
"Steinbach, Manitoba",
"R5G 1T4"
]
},
{
name: "The Honourable Jean-Yves Duclos",
party: "Liberal",
riding: "Québec",
languages: "French / English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/DuclosJeanYves_Lib.jpg",
phone: "418-523-6666",
address: [
"275 Charest Blvd East (Main Office)",
"Québec, Quebec",
"G1K 3G8"
]
},
{
name: "Blaine Calkins",
party: "Conservative",
riding: "Red Deer—Lacombe",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/CalkinsBlaine_CPC.jpg",
phone: "403-783-5530",
address: [
"4612 - 50th Street (Main Office)",
"Suite 6A",
"Ponoka, Alberta",
"T4J 1S7"
]
},
{
name: "Earl Dreeshen",
party: "Conservative",
riding: "Red Deer—Mountain View",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/DreeshenEarl_CPC.jpg",
phone: "",
address: [ ]
},
{
name: "Erin Weir",
party: "NDP",
riding: "Regina—Lewvan",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/WeirErin_NDP.jpg",
phone: "306-790-4747",
address: [
"2024-A Albert Street (Main Office)",
"Regina, Saskatchewan",
"S4P 2T7"
]
},
{
name: "Andrew Scheer",
party: "Conservative",
riding: "Regina—Qu'Appelle",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/ScheerAndrew_CPC.jpg",
phone: "306-790-4727",
address: [
"160 C Broadway Avenue West (Main Office)",
"Fort Qu'appelle, Saskatchewan",
"S0G 1S0",
"984 A Albert Street ",
"Regina, Saskatchewan",
"S4R 2P7"
]
},
{
name: "The Honourable Ralph Goodale",
party: "Liberal",
riding: "Regina—Wascana",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/GoodaleRalph_Lib.jpg",
phone: "306-585-2202",
address: [
"310 University Park Drive (Main Office)",
"Regina, Saskatchewan",
"S4V 0Y8"
]
},
{
name: "Cheryl Gallant",
party: "Conservative",
riding: "Renfrew—Nipissing—Pembroke",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/GallantCheryl_CPC.jpg",
phone: "613-732-4404",
address: [
"84 Isabella Street (Main Office)",
"1st Floor",
"Pembroke, Ontario",
"K8A 5S5"
]
},
{
name: "Monique Pauzé",
party: "Bloc Québécois",
riding: "Repentigny",
languages: "French",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/PauzéMonique_BQ.jpg",
phone: "450-581-3896",
address: [
"184 Notre-Dame Street (Main Office)",
"Suite 201",
"Repentigny, Quebec",
"J6A 2P9"
]
},
{
name: "The Honourable Alice Wong",
party: "Conservative",
riding: "Richmond Centre",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/WongAlice_CPC.jpg",
phone: "604-775-5790",
address: [
"5951 Number 3 Road (Main Office)",
"Suite 360",
"Richmond, British Columbia",
"V6X 2E3"
]
},
{
name: "Majid Jowhari",
party: "Liberal",
riding: "Richmond Hill",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/JowhariMajid_Lib.jpg",
phone: "905-707-9701",
address: [
"9140 Leslie Street (Main Office)",
"Suite 407",
"Richmond Hill, Ontario",
"L4B 0A9"
]
},
{
name: "Alain Rayes",
party: "Conservative",
riding: "Richmond—Arthabaska",
languages: "French",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/RayesAlain_CPC.jpg",
phone: "819-751-1375",
address: [
"3 de la Gare Street (Main Office)",
"Victoriaville, Quebec",
"G6P 6S4",
"22-A Saint-Georges Street ",
"Windsor, Quebec",
"J1S 2L7",
"Telephone: "
]
},
{
name: "Guy Caron",
party: "NDP",
riding: "Rimouski-Neigette—Témiscouata—Les Basques",
languages: "French",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/CaronGuy_NDP.jpg",
phone: "418-725-2562",
address: [
"140 Saint-Germain Street (Main Office)",
"Suite 109",
"Rimouski, Quebec",
"G5L 4B5"
]
},
{
name: "Linda Lapointe",
party: "Liberal",
riding: "Rivière-des-Mille-Îles",
languages: "French",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/LapointeLinda_Lib.jpg",
phone: "450-420-5525",
address: [
"61 de la Grande-Côte Road (Main Office)",
"Boisbriand, Quebec",
"J7G 1C8"
]
},
{
name: "Rhéal Éloi Fortin",
party: "Bloc Québécois",
riding: "Rivière-du-Nord",
languages: "French",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/FortinRhéal_BQ.jpg",
phone: "450-565-0061",
address: [
"161 de la Gare Street (Main Office)",
"Suite 305",
"Saint-Jérôme, Quebec",
"J7Z 2B9"
]
},
{
name: "Alexandre Boulerice",
party: "NDP",
riding: "Rosemont—La Petite-Patrie",
languages: "French",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/BoulericeAlexandre_NDP.jpg",
phone: "514-729-5342",
address: [
"1453 Beaubien Street East (Main Office)",
"Suite 208",
"Montréal, Quebec",
"H2G 3C6"
]
},
{
name: "Elizabeth May",
party: "Green Party",
riding: "Saanich—Gulf Islands",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/MayElizabeth_GP.jpg",
phone: "250-657-2000",
address: [
"9711 Fourth Street (Main Office)",
"Suite 1",
"Sidney, British Columbia",
"V8L 2Y8"
]
},
{
name: "Darrell Samson",
party: "Liberal",
riding: "Sackville—Preston—Chezzetcook",
languages: "French / English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/SamsonDarrell_Lib.jpg",
phone: "902-861-2311",
address: [
"2900 Highway 2 (Main Office)",
"Suite 2nd Floor",
"Fall River, Nova Scotia",
"B2T 1W4"
]
},
{
name: "Dan Vandal",
party: "Liberal",
riding: "Saint Boniface—Saint Vital",
languages: "French / English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/VandalDaniel_Lib.jpg",
phone: "204-983-3183",
address: [
"213 St.Mary's Road (Main Office)",
"Suite 4",
"Winnipeg, Manitoba",
"R2H 1J2"
]
},
{
name: "Wayne Long",
party: "Liberal",
riding: "Saint John—Rothesay",
languages: "English / French",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/LongWayne_Lib.jpg",
phone: "506-657-2500",
address: [
"1 Market Square (Main Office)",
"Suite N306",
"Saint John, New Brunswick",
"E2L 4Z6"
]
},
{
name: "Brigitte Sansoucy",
party: "NDP",
riding: "Saint-Hyacinthe—Bagot",
languages: "French",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/SansoucyBrigitte_NDP.jpg",
phone: "450-771-0505",
address: [
"2193 Sainte-Anne Avenue (Main Office)",
"Saint-Hyacinthe, Quebec",
"J2S 5H5"
]
},
{
name: "Jean R. Rioux",
party: "Liberal",
riding: "Saint-Jean",
languages: "French",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/RiouxJean_Lib.jpg",
phone: "450-357-9100",
address: [
"211 Mayrand (Main Office)",
"Suite 1",
"Saint-Jean-sur-Richelieu, Quebec",
"J3B 3L1"
]
},
{
name: "The Honourable Stéphane Dion",
party: "Liberal",
riding: "Saint-Laurent",
languages: "French",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/DionStéphane_Lib.jpg",
phone: "514-335-6655",
address: [
"750 Marcel Laurin Blvd (Main Office)",
"Suite 440",
"Saint-Laurent, Quebec",
"H4M 2M4"
]
},
{
name: "Nicola Di Iorio",
party: "Liberal",
riding: "Saint-Léonard—Saint-Michel",
languages: "French / English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/DiIorioNicola_Lib.jpg",
phone: "514-256-4548",
address: [
"8370 Lacordaire Blvd (Main Office)",
"Saint-Léonard, Quebec",
"H1R 3Y6"
]
},
{
name: "François-Philippe Champagne",
party: "Liberal",
riding: "Saint-Maurice—Champlain",
languages: "French",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/ChampagneFrançoisPhilippe_Lib.jpg",
phone: "819-523-2696",
address: [
"632 - 6th Avenue (Main Office)",
"Suite 01",
"Shawinigan, Quebec",
"G9T 2H5",
"290 Saint-Joseph Street ",
"La Tuque, Quebec",
"G9X 3Z8"
]
},
{
name: "Anne Minh-Thu Quach",
party: "NDP",
riding: "Salaberry—Suroît",
languages: "French",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/QuachAnneMinhThu_NDP.jpg",
phone: "450-371-0644",
address: [
"30 Du Centenaire Avenue (Main Office)",
"Suite 230",
"Salaberry-de-Valleyfield, Quebec",
"J6S 5X4"
]
},
{
name: "Marilyn Gladu",
party: "Conservative",
riding: "Sarnia—Lambton",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/GladuMarilyn_CPC.jpg",
phone: "519-383-6600",
address: [
"1000 Finch Drive (Main Office)",
"Unit 2",
"Sarnia, Ontario",
"N7S 6G5"
]
},
{
name: "Sheri Benson",
party: "NDP",
riding: "Saskatoon West",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/BensonSheri_NDP.jpg",
phone: "306-975-6555",
address: [
"904E - 22nd Street West (Main Office)",
"Saskatoon, Saskatchewan",
"S7M 0S1"
]
},
{
name: "Kevin Waugh",
party: "Conservative",
riding: "Saskatoon—Grasswood",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/WaughKevin_CPC.jpg",
phone: "306-975-6472",
address: [
"2720 - 8th Street East (Main Office)",
"Suite 5",
"Saskatoon, Saskatchewan",
"S7H 0V8"
]
},
{
name: "Brad Trost",
party: "Conservative",
riding: "Saskatoon—University",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/TrostBrad_CPC.jpg",
phone: "306-975-6133",
address: [
"505-B Nelson Road (Main Office)",
"Saskatoon, Saskatchewan",
"S7S 1P4"
]
},
{
name: "Terry Sheehan",
party: "Liberal",
riding: "Sault Ste. Marie",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/SheehanTerry_Lib.jpg",
phone: "705-941-2900",
address: [
"369 Queen Street East (Main Office)",
"Suite 102",
"Sault Ste Marie, Ontario",
"P6A 1Z4"
]
},
{
name: "Salma Zahid",
party: "Liberal",
riding: "Scarborough Centre",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/ZahidSalma_Lib.jpg",
phone: "416-752-2358",
address: [
"2155 Lawrence Avenue East (Main Office)",
"Unit 5",
"Scarborough, Ontario",
"M1R 5G9"
]
},
{
name: "Shaun Chen",
party: "Liberal",
riding: "Scarborough North",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/ChenShaun_Lib.jpg",
phone: "416-321-2436",
address: [
"4386 Sheppard Ave East (Main Office)",
"Unit C",
"Scarborough, Ontario",
"M1S 1T8"
]
},
{
name: "Bill Blair",
party: "Liberal",
riding: "Scarborough Southwest",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/BlairBill_Lib.jpg",
phone: "416-261-8613",
address: [
"2263 Kingston Road (Main Office)",
"Scarborough, Ontario",
"M1N 1T8"
]
},
{
name: "Arnold Chan",
party: "Liberal",
riding: "Scarborough—Agincourt",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/ChanArnold_Lib.jpg",
phone: "416-321-5454",
address: [
"2190 McNicoll Avenue (Main Office)",
"Suite 110",
"Scarborough, Ontario",
"M1V 0B3"
]
},
{
name: "The Honourable John McKay",
party: "Liberal",
riding: "Scarborough—Guildwood",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/McKayJohn_Lib.jpg",
phone: "416-283-1226",
address: [
"3785 Kingston Road (Main Office)",
"Suite 10",
"Scarborough, Ontario",
"M1J 3H4"
]
},
{
name: "Gary Anandasangaree",
party: "Liberal",
riding: "Scarborough—Rouge Park",
languages: "English / French",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/AnandasangareeGary_Lib.jpg",
phone: "416-283-1414",
address: [
"3600 Ellesmere Road (Main Office)",
"Unit 3",
"Toronto, Ontario",
"M1C 4Y8"
]
},
{
name: "James Bezan",
party: "Conservative",
riding: "Selkirk—Interlake—Eastman",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/BezanJames_CPC.jpg",
phone: "204-785-6151",
address: [
"374 Main Street (Main Office)",
"Selkirk, Manitoba",
"R1A 1T7"
]
},
{
name: "Pierre Breton",
party: "Liberal",
riding: "Shefford",
languages: "French / English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/BretonPierre_Lib.jpg",
phone: "450-378-3221",
address: [
"400 Principale Street (Main Office)",
"Suite 101",
"Granby, Quebec",
"J2G 2W6"
]
},
{
name: "Pierre-Luc Dusseault",
party: "NDP",
riding: "Sherbrooke",
languages: "French / English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/DusseaultPierreLuc_NDP.jpg",
phone: "819-564-4200",
address: [
"100 Belvédère Street South (Main Office)",
"Suite 130",
"Sherbrooke, Quebec",
"J1H 4B5"
]
},
{
name: "Garnett Genuis",
party: "Conservative",
riding: "Sherwood Park—Fort Saskatchewan",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/GenuisGarnett_CPC.jpg",
phone: "780-467-4944",
address: [
"2018 Sherwood Drive (Main Office)",
"Suite 214",
"Sherwood Park, Alberta",
"T8A 5V3"
]
},
{
name: "Bruce Stanton",
party: "Conservative",
riding: "Simcoe North",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/StantonBruce_CPC.jpg",
phone: "",
address: [ ]
},
{
name: "The Honourable K. Kellie Leitch",
party: "Conservative",
riding: "Simcoe—Grey",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/LeitchKKellie_CPC.jpg",
phone: "",
address: [ ]
},
{
name: "Nathan Cullen",
party: "NDP",
riding: "Skeena—Bulkley Valley",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/CullenNathan_NDP.jpg",
phone: "250-622-2413",
address: [
"3891 - 1st Avenue (Main Office)",
"Suite 100",
"Smithers, British Columbia",
"V0J 2N0",
"4716 Lazelle Avenue ",
"Suite 112",
"Terrace, British Columbia",
"V8G 1T2",
"818 - 3rd Avenue West ",
"Prince Rupert, British Columbia",
"V8J 1M7"
]
},
{
name: "Robert Kitchen",
party: "Conservative",
riding: "Souris—Moose Mountain",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/KitchenRobert_CPC.jpg",
phone: "306-634-3000",
address: [
"1133 - 4th Street (Main Office)",
"Suite 308",
"Estevan, Saskatchewan",
"S4A 0W6"
]
},
{
name: "Richard Cannings",
party: "NDP",
riding: "South Okanagan—West Kootenay",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/CanningsRichard_NDP.jpg",
phone: "250-365-2792",
address: [
"301 Main Street (Main Office)",
"Suite202",
"Penticton, British Columbia",
"V2A 5B7",
"1695A Columbia Avenue ",
"Castlegar, British Columbia",
"V1N 1J1"
]
},
{
name: "Bernadette Jordan",
party: "Liberal",
riding: "South Shore—St. Margarets",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/JordanBernadette_Lib.jpg",
phone: "902-527-5655",
address: [
"129 Aberdeen Road (Main Office)",
"Suite 106",
"Bridgewater, Nova Scotia",
"B4V 2S7"
]
},
{
name: "Dianne L. Watts",
party: "Conservative",
riding: "South Surrey—White Rock",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/WattsDianneLynn_CPC.jpg",
phone: "",
address: [ ]
},
{
name: "Adam Vaughan",
party: "Liberal",
riding: "Spadina—Fort York",
languages: "English / French",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/VaughanAdam_Lib.jpg",
phone: "416-533-2710",
address: [
"215 Spadina Avenue (Main Office)",
"4th Floor",
"Toronto, Ontario",
"M5T 2C7"
]
},
{
name: "Michael Cooper",
party: "Conservative",
riding: "St. Albert—Edmonton",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/CooperMichael_CPC.jpg",
phone: "780-459-0809",
address: [
"20 Perron Street (Main Office)",
"Suite 220",
"St Albert, Alberta",
"T8N 1E4"
]
},
{
name: "Chris Bittle",
party: "Liberal",
riding: "St. Catharines",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/BittleChris_Lib.jpg",
phone: "905-934-6767",
address: [
"61 Geneva Street (Main Office)",
"Unit 1",
"St Catharines, Ontario",
"L2M 4M6"
]
},
{
name: "Nick Whalen",
party: "Liberal",
riding: "St. John's East",
languages: "English / French",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/WhalenNick_Lib.jpg",
phone: "709-772-7171",
address: [
"120 Torbay Road (Main Office)",
"Suite E130",
"St. John's, Newfoundland and Labrador",
"A1A 2G8"
]
},
{
name: "Seamus O'Regan",
party: "Liberal",
riding: "St. John's South—Mount Pearl",
languages: "English / French",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/OReganSeamus_Lib.jpg",
phone: "709-772-4608",
address: [
"689 Topsail Road (Main Office)",
"2nd Floor",
"St. John's, Newfoundland and Labrador",
"A1E 2E3"
]
},
{
name: "Joe Peschisolido",
party: "Liberal",
riding: "Steveston—Richmond East",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/PeschisolidoJoe_Lib.jpg",
phone: "604-257-2900",
address: [
"120 - 11080 No.5 Road (Main Office)",
"Richmond, British Columbia",
"V7A 4E7"
]
},
{
name: "Guy Lauzon",
party: "Conservative",
riding: "Stormont—Dundas—South Glengarry",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/LauzonGuy_CPC.jpg",
phone: "613-937-3331",
address: [
"621 Pitt Street (Main Office)",
"Cornwall, Ontario",
"K6J 3R8"
]
},
{
name: "The Honourable Rona Ambrose",
party: "Conservative",
riding: "Sturgeon River—Parkland",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/AmbroseRona_CPC.jpg",
phone: "780-823-2050",
address: [
"4807 - 44 Avenue (Main Office)",
"Suite 102",
"Stony Plain, Alberta",
"T7Z 1V5"
]
},
{
name: "Paul Lefebvre",
party: "Liberal",
riding: "Sudbury",
languages: "French / English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/LefebvrePaul_Lib.jpg",
phone: "705-673-7107",
address: [
"152 Durham Street (Main Office)",
"Sudbury, Ontario",
"P3E 3M7"
]
},
{
name: "Randeep Sarai",
party: "Liberal",
riding: "Surrey Centre",
languages: "English / French",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/SaraiRandeep_Lib.jpg",
phone: "604-589-2441",
address: [
"10362 King George Blvd (Main Office)",
"Suite 170",
"Surrey, British Columbia",
"V3T 2W5"
]
},
{
name: "Sukh Dhaliwal",
party: "Liberal",
riding: "Surrey—Newton",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/DhaliwalSukh_Lib.jpg",
phone: "604-598-2200",
address: [
"12992 - 76th Avenue (Main Office)",
"Unit 202",
"Surrey, British Columbia",
"V3W 2V6"
]
},
{
name: "The Honourable Mark Eyking",
party: "Liberal",
riding: "Sydney—Victoria",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/EykingMark_Lib.jpg",
phone: "902-567-6275",
address: [
"500 Kings Road (Main Office)",
"Sydney, Nova Scotia",
"B1S 1B2"
]
},
{
name: "Michel Boudrias",
party: "Bloc Québécois",
riding: "Terrebonne",
languages: "French",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/BoudriasMichel_BQ.jpg",
phone: "450-964-9417",
address: [
"730-732 St. Louis Street (Main Office)",
"Terrebonne, Quebec",
"J6W 1J6"
]
},
{
name: "Ramez Ayoub",
party: "Liberal",
riding: "Thérèse-De Blainville",
languages: "French / English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/AyoubRamez_Lib.jpg",
phone: "450-965-1188",
address: [
"201 Curé-Labelle Blvd (Main Office)",
"Suite 401",
"Sainte-Thérèse, Quebec",
"J7E 2X6"
]
},
{
name: "The Honourable Peter Kent",
party: "Conservative",
riding: "Thornhill",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/KentPeter_CPC.jpg",
phone: "905-886-9911",
address: [
"7378 Yonge Street (Main Office)",
"Suite 41B",
"Thornhill, Ontario",
"L4J 8J1"
]
},
{
name: "Don Rusnak",
party: "Liberal",
riding: "Thunder Bay—Rainy River",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/RusnakDon_Lib.jpg",
phone: "807-625-1160",
address: [
"905 E Victoria Avenue (Main Office)",
"Unit 1",
"Thunder Bay, Ontario",
"P7C 1B3"
]
},
{
name: "The Honourable Patty Hajdu",
party: "Liberal",
riding: "Thunder Bay—Superior North",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/HajduPatty_Lib.jpg",
phone: "807-766-2090",
address: [
"705 Red River Road (Main Office)",
"Suite 3",
"Thunder Bay, Ontario",
"P7B 1J3"
]
},
{
name: "Charlie Angus",
party: "NDP",
riding: "Timmins—James Bay",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/AngusCharlie_NDP.jpg",
phone: "",
address: [ ]
},
{
name: "T.J. Harvey",
party: "Liberal",
riding: "Tobique—Mactaquac",
languages: "English / French",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/HarveyTJ_Lib.jpg",
phone: "506-392-5807",
address: [
"9160 Main Street (Main Office)",
"Florenceville, New Brunswick",
"E7L 2A6"
]
},
{
name: "The Honourable Bill Morneau",
party: "Liberal",
riding: "Toronto Centre",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/MorneauBill_Lib.jpg",
phone: "416-972-9749",
address: [
"430 Parliament Street (Main Office)",
"Toronto, Ontario",
"M5A 3A2"
]
},
{
name: "Julie Dabrusin",
party: "Liberal",
riding: "Toronto—Danforth",
languages: "English / French",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/DabrusinJulie_Lib.jpg",
phone: "416-405-8914",
address: [
"1180 Danforth Avenue (Main Office)",
"Toronto, Ontario",
"M4J 1M3"
]
},
{
name: "The Honourable Carolyn Bennett",
party: "Liberal",
riding: "Toronto—St. Paul's",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/BennettCarolyn_Lib.jpg",
phone: "416-952-3990",
address: [
"1650 Yonge Street (Main Office)",
"Suite 103",
"Toronto, Ontario",
"M4T 2A2"
]
},
{
name: "Robert Aubin",
party: "NDP",
riding: "Trois-Rivières",
languages: "French",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/AubinRobert_NDP.jpg",
phone: "819-371-5901",
address: [
"214 Bonaventure Street (Main Office)",
"Trois-Rivières, Quebec",
"G9A 2B1"
]
},
{
name: "The Honourable Chrystia Freeland",
party: "Liberal",
riding: "University—Rosedale",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/FreelandChrystia_LIB.jpg",
phone: "416-928-1451",
address: [
"344 Bloor Street West (Main Office)",
"Suite 510",
"Toronto, Ontario",
"M5S 3A7"
]
},
{
name: "The Honourable Hedy Fry",
party: "Liberal",
riding: "Vancouver Centre",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/FryHedy_Lib.jpg",
phone: "604-666-0135",
address: [
"1030 Denman Street (Main Office)",
"Suite 106",
"Vancouver, British Columbia",
"V6G 2M6"
]
},
{
name: "Jenny Kwan",
party: "NDP",
riding: "Vancouver East",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/KwanJenny_NDP.jpg",
phone: "",
address: [ ]
},
{
name: "The Honourable Jody Wilson-Raybould",
party: "Liberal",
riding: "Vancouver Granville",
languages: "English / French",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/WilsonRaybouldJody_Lib.jpg",
phone: "604-717-1140",
address: [
"1245 West Broadway (Main Office)",
"Suite 104",
"Vancouver, British Columbia",
"V6H 1G7"
]
},
{
name: "Don Davies",
party: "NDP",
riding: "Vancouver Kingsway",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/DaviesDon_NDP.jpg",
phone: "604-775-6263",
address: [
"2951 Kingsway (Main Office)",
"Vancouver, British Columbia",
"V5R 5J4"
]
},
{
name: "Joyce Murray",
party: "Liberal",
riding: "Vancouver Quadra",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/MurrayJoyce_Lib.jpg",
phone: "604-664-9220",
address: [
"2112, West Broadway (Main Office)",
"Suite 206",
"Vancouver, British Columbia",
"V6K 2C8"
]
},
{
name: "The Honourable Harjit S. Sajjan",
party: "Liberal",
riding: "Vancouver South",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/SajjanHarjitS_Lib.jpg",
phone: "604-775-5323",
address: [
"6406 Victoria Drive (Main Office)",
"Vancouver, British Columbia",
"V5P 3X7"
]
},
{
name: "Peter Schiefke",
party: "Liberal",
riding: "Vaudreuil—Soulanges",
languages: "English / French",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/SchiefkePeter_Lib.jpg",
phone: "450-510-2305",
address: [
"223 St. Charles Avenue (Main Office)",
"Vaudreuil-Dorion, Quebec",
"J7V 2L6"
]
},
{
name: "Francesco Sorbara",
party: "Liberal",
riding: "Vaughan—Woodbridge",
languages: "English / French",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/SorbaraFrancesco_Lib.jpg",
phone: "905-264-6446",
address: [
"8633 Weston Road (Main Office)",
"Suite 6A",
"Woodbridge, Ontario",
"L4L 9R6"
]
},
{
name: "Murray Rankin",
party: "NDP",
riding: "Victoria",
languages: "English / French",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/RankinMurray_NDP.jpg",
phone: "250-363-3600",
address: [
"1057 Fort Street (Main Office)",
"Victoria, British Columbia",
"V8V 3K5"
]
},
{
name: "Marc Miller",
party: "Liberal",
riding: "Ville-Marie—Le Sud-Ouest—Île-des-Soeurs",
languages: "French / English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/MillerMarc_Lib.jpg",
phone: "514-496-4885",
address: [
"3175 Saint-Jacques Street (Main Office)",
"Montréal, Quebec",
"H4C 1G7"
]
},
{
name: "Eva Nassif",
party: "Liberal",
riding: "Vimy",
languages: "English / French",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/NassifEva_Lib.jpg",
phone: "450-967-3641",
address: [
"1695 Laval Blvd (Main Office)",
"Suite 415",
"Laval, Quebec",
"H7S 2M2"
]
},
{
name: "The Honourable Bardish Chagger",
party: "Liberal",
riding: "Waterloo",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/ChaggerBardish_Lib.jpg",
phone: "519-746-1573",
address: [
"100 Regina Street South (Main Office)",
"Suite 360",
"Waterloo, Ontario",
"N2J 4A8"
]
},
{
name: "The Honourable Michael D. Chong",
party: "Conservative",
riding: "Wellington—Halton Hills",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/ChongMichael_CPC.jpg",
phone: "",
address: [ ]
},
{
name: "Colin Fraser",
party: "Liberal",
riding: "West Nova",
languages: "English / French",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/FraserColin_Lib.jpg",
phone: "902-825-3327",
address: [
"396 Main Street (Main Office)",
"Suite 103",
"Yarmouth, Nova Scotia",
"B5A 1E9",
"2 George Street ",
"Middleton, Nova Scotia",
"B0S 1P0"
]
},
{
name: "Pam Goldsmith-Jones",
party: "Liberal",
riding: "West Vancouver—Sunshine Coast—Sea to Sky Country",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/GoldsmithJonesPamela_Lib.jpg",
phone: "604-913-2660",
address: [
"6367 Bruce Street West (Main Office)",
"West Vancouver, British Columbia",
"V7W 2B8"
]
},
{
name: "Celina Caesar-Chavannes",
party: "Liberal",
riding: "Whitby",
languages: "English / French",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/CaesarChavannesCelina_Lib.jpg",
phone: "905-665-8182",
address: [
"701 Rossland Road East (Main Office)",
"Suite 206",
"Whitby, Ontario",
"L1N 8Y9"
]
},
{
name: "Ali Ehsassi",
party: "Liberal",
riding: "Willowdale",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/EhsassiAli_Lib.jpg",
phone: "416-223-2858",
address: [
"115 Sheppard Avenue West (Main Office)",
"Toronto, Ontario",
"M2N 1M7"
]
},
{
name: "Brian Masse",
party: "NDP",
riding: "Windsor West",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/MasseBrian_NDP.jpg",
phone: "519-255-1631",
address: [
"1398 Ouellette Avenue (Main Office)",
"Suite 2",
"Windsor, Ontario",
"N8X 1J8"
]
},
{
name: "Cheryl Hardcastle",
party: "NDP",
riding: "Windsor—Tecumseh",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/HardcastleCheryl_NDP.jpg",
phone: "519-979-2707",
address: [
"9733 Tecumseh Road East (Main Office)",
"Suite 2",
"Windsor, Ontario",
"N8R 1A5"
]
},
{
name: "Robert-Falcon Ouellette",
party: "Liberal",
riding: "Winnipeg Centre",
languages: "English / French",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/OuelletteRobertFalcon_Lib.jpg",
phone: "204-984-1675",
address: [
"594 Ellice Avenue (Main Office)",
"Winnipeg, Manitoba",
"R3G 0A3"
]
},
{
name: "Kevin Lamoureux",
party: "Liberal",
riding: "Winnipeg North",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/LamoureuxKevin_Lib.jpg",
phone: "204-984-1767",
address: [
"98 Mandalay Drive (Main Office)",
"Winnipeg, Manitoba",
"R2P 1V8"
]
},
{
name: "Terry Duguid",
party: "Liberal",
riding: "Winnipeg South",
languages: "English / French",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/DuguidTerry_Lib.jpg",
phone: "204-984-6787",
address: [
"2800 Pembina Highway (Main Office)",
"Suite 103",
"Winnipeg, Manitoba",
"R3T 5P3"
]
},
{
name: "The Honourable Jim Carr",
party: "Liberal",
riding: "Winnipeg South Centre",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/CarrJim_Lib.jpg",
phone: "204-983-1355",
address: [
"611 Corydon Avenue (Main Office)",
"Suite 102",
"Winnipeg, Manitoba",
"R3L 0P3"
]
},
{
name: "Jim Eglinski",
party: "Conservative",
riding: "Yellowhead",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/EglinskiJim_CPC.jpg",
phone: "",
address: [ ]
},
{
name: "Michael Levitt",
party: "Liberal",
riding: "York Centre",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/LevittMichael_Lib.jpg",
phone: "416-638-3700",
address: [
"660 Wilson Avenue (Main Office)",
"Toronto, Ontario",
"M3K 1E1"
]
},
{
name: "Ahmed Hussen",
party: "Liberal",
riding: "York South—Weston",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/HussenAhmed_Lib.jpg",
phone: "416-656-2526",
address: [
"99D Ingram Drive (Main Office)",
"Toronto, Ontario",
"M6M 2L7"
]
},
{
name: "The Honourable Peter Van Loan",
party: "Conservative",
riding: "York—Simcoe",
languages: "English",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/VanLoanPeter_CPC.jpg",
phone: "905-898-1600",
address: [
"45 Grist Mill Road (Main Office)",
"Suite 10",
"Holland Landing, Ontario",
"L9N 1M7"
]
},
{
name: "Cathay Wagantall",
party: "Conservative",
riding: "Yorkton—Melville",
languages: "English / French",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/WagantallCathay_CPC.jpg",
phone: "306-782-3309",
address: [
"43 Betts Avenue (Main Office)",
"Yorkton, Saskatchewan",
"S3N 1M1"
]
},
{
name: "The Honourable Larry Bagnell",
party: "Liberal",
riding: "Yukon",
languages: "English / French",
photo: "http://www.parl.gc.ca/Parliamentarians/Images/OfficialMPPhotos/42/BagnellLarry_Lib.jpg",
phone: "867-668-6565",
address: [
"204 Black Street (Main Office)",
"Suite 204",
"Whitehorse, Yukon",
"Y1A 2M9"
]
}
]

ReactDOM.render(<App data={data}/>, document.getElementById('app'));