// Auto-generated from Menurio API (https://app.menurio.com/kazanoba-tapas-bar-pr-gr)
// Do not edit by hand — regenerate via: npm run generate:menu (see /data)
// Source company: KAZANOBA TAPAS BAR | Pr gr, Xanthi, Greece. Currency: €
export type Locale = 'el' | 'en';
export interface Localized { el: string; en: string }
export interface MenuItem { id: number; active?: boolean; name: Localized; description: Localized; price: string; image: string }
export interface MenuNote { el: string; en: string }
export interface MenuCategory { id: number; active?: boolean; name: Localized; description: Localized; image: string; notes: MenuNote[]; items: MenuItem[] }
export interface MenuSection { id: number; order: number; slug: string; image: string; name: Localized; description: Localized; categories: MenuCategory[] }
export const CURRENCY = '€';
export const VENUE = { name: 'KAZANOBA TAPAS BAR', suffix: 'Pr·gr', city: 'Xanthi', country: 'Greece', postcode: '67100', sourceUrl: 'https://app.menurio.com/kazanoba-tapas-bar-pr-gr', currency: '€' } as const;
export const MENU: MenuSection[] = [
  {
    "id": 6218,
    "order": 1,
    "slug": "s-6218",
    "image": "https://app.menurio.com/storage/28237/menurio-kazanoba-tapas-bar-pr-gr-2024-07-25-09-14-54.jpeg",
    "name": {
      "el": "Καφέδες",
      "en": "Καφέδες"
    },
    "description": {
      "el": "Coffees",
      "en": "Juices, Tea, Soft Drinks, Smoothies"
    },
    "categories": [
      {
        "id": 131732,
        "active": true,
        "name": {
          "el": "ΣΟΚΟΛΑΤΕΣ",
          "en": "CHOCOLATES"
        },
        "description": {
          "el": "(Chocolates)",
          "en": "(Chocolates)"
        },
        "image": "/storage/28238/menurio-kazanoba-tapas-bar-pr-gr-2024-07-25-09-16-46.jpeg",
        "notes": [
          {
            "el": "Πρόσθετα: — *Προσθέστε τις αγαπημένες σας γεύσεις σιροπιού φουντούκι, καραμέλα, φράουλα, βανίλια, (+0.50€). *Add your favorite syrup flavors of hazelnut, caramel, strawberry, vanilla (+0.50€)",
            "en": "Extras: — *Add your favorite flavors of hazelnut, caramel, strawberry, vanilla syrup (+€0.50). *Add your favorite syrup flavors of hazelnut, caramel, strawberry, vanilla (+€0.50)"
          }
        ],
        "items": [
          {
            "id": 131736,
            "active": true,
            "name": {
              "el": "ΣΟΚΟΛΑΤΑ ΒΙΕΝΟΥΑ",
              "en": "VIENNA CHOCOLATE"
            },
            "description": {
              "el": "(Viennois chocolate)",
              "en": "(Viennois chocolate)"
            },
            "price": "4.50",
            "image": "/storage/3459/menurio-tiflomigha-kafe-potopolio-2022-01-17-14-40-32.jpg"
          },
          {
            "id": 131737,
            "active": true,
            "name": {
              "el": "ΚΑΚΑΟ ΔΙΠΛΟ",
              "en": "DOUBLE COCOA"
            },
            "description": {
              "el": "(Cocoa double)",
              "en": "(Cocoa double)"
            },
            "price": "3.50",
            "image": "/storage/3460/menurio-tiflomigha-kafe-potopolio-2022-01-17-14-41-53.jpg"
          },
          {
            "id": 131738,
            "active": true,
            "name": {
              "el": "ΚΑΚΑΟ",
              "en": "COCOA"
            },
            "description": {
              "el": "(Cocoa)",
              "en": "(Cocoa)"
            },
            "price": "3.00",
            "image": "/storage/3460/menurio-tiflomigha-kafe-potopolio-2022-01-17-14-41-53.jpg"
          },
          {
            "id": 131739,
            "active": true,
            "name": {
              "el": "ΣΟΚΟΛΑΤΑ ΚΡΥΑ",
              "en": "COLD CHOCOLATE"
            },
            "description": {
              "el": "(Cold chocolate)",
              "en": "(Cold chocolate)"
            },
            "price": "4.00",
            "image": "/storage/3461/menurio-tiflomigha-kafe-potopolio-2022-01-17-14-42-56.jpg"
          },
          {
            "id": 131740,
            "active": true,
            "name": {
              "el": "ΣΟΚΟΛΑΤΑ ΖΕΣΤΗ",
              "en": "HOT CHOCOLATE"
            },
            "description": {
              "el": "(Hot chocolate)",
              "en": "(Hot chocolate)"
            },
            "price": "4.00",
            "image": "/storage/3462/menurio-tiflomigha-kafe-potopolio-2022-01-17-14-44-07.jpg"
          },
          {
            "id": 241561,
            "active": false,
            "name": {
              "el": "SALTED CARAMEL CHOCOLATE - Copy",
              "en": "AUTHENTIC CHOCOLATE"
            },
            "description": {
              "el": "",
              "en": "(Original chocolate)"
            },
            "price": "4.50",
            "image": "/storage/3458/menurio-tiflomigha-kafe-potopolio-2022-01-17-14-38-18.jpg"
          },
          {
            "id": 241562,
            "active": false,
            "name": {
              "el": "Σοκολάτα Μαστίχα και τριαντάφυλλο",
              "en": "AUTHENTIC CHOCOLATE"
            },
            "description": {
              "el": "Λευκή Σοκολάτα γάλακτος με εκχύλισμα μαστίχας και γεύση τριαντάφυλλο",
              "en": "(Original chocolate)"
            },
            "price": "4.50",
            "image": ""
          },
          {
            "id": 241563,
            "active": false,
            "name": {
              "el": "Σοκολάτα Τσουρέκι & φουντούκι",
              "en": "AUTHENTIC CHOCOLATE"
            },
            "description": {
              "el": "Σοκολάτα Γάλακτος τσουρέκι αρωματισμένη με φουντούκι",
              "en": "(Original chocolate)"
            },
            "price": "4.50",
            "image": ""
          },
          {
            "id": 241564,
            "active": false,
            "name": {
              "el": "Σοκολάτα Chilly and herbs Spicy",
              "en": "AUTHENTIC CHOCOLATE"
            },
            "description": {
              "el": "Σοκολάτα Γάλακτος αρωματισμένη με αστεροειδή γλυκάνισο chili και κανέλα",
              "en": "(Original chocolate)"
            },
            "price": "5.00",
            "image": ""
          },
          {
            "id": 154787,
            "active": false,
            "name": {
              "el": "Christmass Hot Chocolate",
              "en": "AUTHENTIC CHOCOLATE"
            },
            "description": {
              "el": "Σοκολάτα γάλακτος αρωματισμένη με πορτοκάλι και κανέλα. Σερβίρετε με φρέσκια σαντιγί και καψαλισμένα marshmallow",
              "en": "(Original chocolate)"
            },
            "price": "5.50",
            "image": ""
          },
          {
            "id": 131735,
            "active": false,
            "name": {
              "el": "Σοκολάτα Ginger CInnamon",
              "en": "CHOCOLATE WITH FLAVORS (HOT OR COLD)."
            },
            "description": {
              "el": "Σοκολάτα γάλακτος αρωματισμένη με τζίντζερ και κανέλα",
              "en": "Oreo , Bueno , Salted Caramel , Cayenne , Caprice , Sugar free"
            },
            "price": "4.5",
            "image": ""
          }
        ]
      },
      {
        "id": 131741,
        "active": true,
        "name": {
          "el": "ΚΑΦΕΔΕΣ",
          "en": "BROWN"
        },
        "description": {
          "el": "(Coffees)",
          "en": "(Coffees)"
        },
        "image": "/storage/28239/menurio-kazanoba-tapas-bar-pr-gr-2024-07-25-09-23-00.jpeg",
        "notes": [],
        "items": [
          {
            "id": 194615,
            "active": true,
            "name": {
              "el": "Matcha Latte / Ice Matcha Latte",
              "en": "GREEK SINGLE"
            },
            "description": {
              "el": "Tea Hot or Cold",
              "en": "(Greek coffee)"
            },
            "price": "5.00",
            "image": "/storage/37986/menurio-kazanoba-tapas-bar-pr-gr-2025-06-04-12-04-05.jpeg"
          },
          {
            "id": 131742,
            "active": true,
            "name": {
              "el": "ΕΛΛΗΝΙΚΟΣ ΜΟΝΟΣ",
              "en": "GREEK SINGLE"
            },
            "description": {
              "el": "(Greek coffee)",
              "en": "(Greek coffee)"
            },
            "price": "3.00",
            "image": "/storage/3464/menurio-tiflomigha-kafe-potopolio-2022-01-17-14-47-00.jpg"
          },
          {
            "id": 131743,
            "active": true,
            "name": {
              "el": "ΕΛΛΗΝΙΚΟΣ ΔΙΠΛΟΣ",
              "en": "GREEK DOUBLE"
            },
            "description": {
              "el": "(Double Greek coffee)",
              "en": "(Double Greek coffee)"
            },
            "price": "3.50",
            "image": "/storage/3465/menurio-tiflomigha-kafe-potopolio-2022-01-17-14-48-01.jpg"
          },
          {
            "id": 131744,
            "active": true,
            "name": {
              "el": "ΚΑΦΕΣ ΦΙΛΤΡΟΥ",
              "en": "FILTER COFFEE (FRENCH)"
            },
            "description": {
              "el": "(Filtered coffee)",
              "en": "(Filtered coffee)"
            },
            "price": "4.00",
            "image": "/storage/28246/menurio-kazanoba-tapas-bar-pr-gr-2024-07-25-10-00-59.jpeg"
          },
          {
            "id": 131745,
            "active": true,
            "name": {
              "el": "ΣΤΙΓΜΙΑΙΟΣ ΚΑΦΕΣ - ΦΡΑΠΕ",
              "en": "INSTANT COFFEE - FRAPPE"
            },
            "description": {
              "el": "(Frapped coffee hot or cold)",
              "en": "(Frapped coffee hot or cold)"
            },
            "price": "3.50",
            "image": "/storage/3467/menurio-tiflomigha-kafe-potopolio-2022-01-17-14-50-39.jpg"
          },
          {
            "id": 131746,
            "active": true,
            "name": {
              "el": "ΕΣΠΡΕΣΣΟ (Espresso)",
              "en": "Espresso"
            },
            "description": {
              "el": "(ristretto, lungo)",
              "en": "(ristretto, lungo)"
            },
            "price": "3.50",
            "image": "/storage/28240/menurio-kazanoba-tapas-bar-pr-gr-2024-07-25-09-45-39.jpeg"
          },
          {
            "id": 131747,
            "active": true,
            "name": {
              "el": "ΕΣΠΡΕΣΣΟ ΑΜΕΡΙΚΑΝΟ",
              "en": "ESPRESSO AMERICANO"
            },
            "description": {
              "el": "(Espresso americano)",
              "en": "(Espresso americano)"
            },
            "price": "3.50",
            "image": "/storage/28245/menurio-kazanoba-tapas-bar-pr-gr-2024-07-25-09-55-36.jpeg"
          },
          {
            "id": 131748,
            "active": true,
            "name": {
              "el": "ΕΣΠΡΕΣΣΟ ΑΜΕΡΙΚΑΝΟ ΔΙΠΛΟ",
              "en": "DOUBLE ESPRESSO AMERICANO"
            },
            "description": {
              "el": "(Espresso americano double)",
              "en": "(Espresso americano double)"
            },
            "price": "4.00",
            "image": ""
          },
          {
            "id": 131749,
            "active": true,
            "name": {
              "el": "ΕΣΠΡΕΣΣΟ ΔΙΠΛΟ",
              "en": "DOUBLE ESPRESSO"
            },
            "description": {
              "el": "(Espresso double)",
              "en": "(Espresso double)"
            },
            "price": "4.00",
            "image": ""
          },
          {
            "id": 131750,
            "active": true,
            "name": {
              "el": "ΕΣΠΡΕΣΣΟ ΜΑΚΙΑΤΟ",
              "en": "ESPRESSO MACCHIATO"
            },
            "description": {
              "el": "(Espresso macchiato)",
              "en": "(Espresso macchiato)"
            },
            "price": "3.50",
            "image": "/storage/28244/menurio-kazanoba-tapas-bar-pr-gr-2024-07-25-09-52-49.jpeg"
          },
          {
            "id": 131751,
            "active": true,
            "name": {
              "el": "ΕΣΠΡΕΣΣΟ ΜΑΚΙΑΤΟ ΔΙΠΛΟ",
              "en": "Espresso Macchiato DOUBLE"
            },
            "description": {
              "el": "(Espresso macchiato double)",
              "en": "(Espresso macchiato double)"
            },
            "price": "4.00",
            "image": "/storage/47104/menurio-kazanoba-tapas-bar-pr-gr-2026-03-13-13-07-05.jpeg"
          },
          {
            "id": 131752,
            "active": true,
            "name": {
              "el": "ΚΑΠΟΥΤΣΙΝΟ",
              "en": "CAPPUCCINO"
            },
            "description": {
              "el": "(Cappuccino)",
              "en": "(Cappuccino)"
            },
            "price": "4.00",
            "image": "/storage/3471/menurio-tiflomigha-kafe-potopolio-2022-01-17-14-56-42.jpg"
          },
          {
            "id": 131753,
            "active": true,
            "name": {
              "el": "ΚΑΠΟΥΤΣΙΝΟ ΔΙΠΛΟ",
              "en": "CAPPUCCINO DOUBLE"
            },
            "description": {
              "el": "(Cappuccino double)",
              "en": "(Cappuccino double)"
            },
            "price": "4.50",
            "image": "/storage/3472/menurio-tiflomigha-kafe-potopolio-2022-01-17-14-57-41.jpg"
          },
          {
            "id": 131754,
            "active": true,
            "name": {
              "el": "ΙΡΛΑΝΔΙΚΟΣ ΚΑΦΕΣ",
              "en": "IRISH COFFEE"
            },
            "description": {
              "el": "(Irish coffee)",
              "en": "(Irish coffee)"
            },
            "price": "5.00",
            "image": "/storage/3473/menurio-tiflomigha-kafe-potopolio-2022-01-17-14-59-57.jpg"
          },
          {
            "id": 131755,
            "active": true,
            "name": {
              "el": "ΕΣΠΡΕΣΣΟ ΚΡΥΟ",
              "en": "FREDDO ESPRESSO"
            },
            "description": {
              "el": "(Freddo espresso)",
              "en": "(Freddo espresso)"
            },
            "price": "4.00",
            "image": "/storage/28241/menurio-kazanoba-tapas-bar-pr-gr-2024-07-25-09-46-10.jpeg"
          },
          {
            "id": 131756,
            "active": true,
            "name": {
              "el": "ΚΑΠΟΥΤΣΙΝΟ ΚΡΥΟ",
              "en": "FREDDO CAPPUCCINO"
            },
            "description": {
              "el": "(Freddo cappuccino)",
              "en": "(Freddo cappuccino)"
            },
            "price": "4.50",
            "image": "/storage/28242/menurio-kazanoba-tapas-bar-pr-gr-2024-07-25-09-47-30.jpeg"
          },
          {
            "id": 131757,
            "active": true,
            "name": {
              "el": "ΚΡΥΟ LATTE",
              "en": "CAPPUCCINO FREDDO LATTE"
            },
            "description": {
              "el": "(Iced Latte)",
              "en": "(Freddo cappuccino Latte)"
            },
            "price": "4.50",
            "image": "/storage/28243/menurio-kazanoba-tapas-bar-pr-gr-2024-07-25-09-50-14.jpeg"
          },
          {
            "id": 131758,
            "active": true,
            "name": {
              "el": "ΜΟΚΑΤΣΙΝΟ",
              "en": "MOCHACCINO"
            },
            "description": {
              "el": "(Mochaccino)",
              "en": "(Mochaccino)"
            },
            "price": "5.00",
            "image": "/storage/3477/menurio-tiflomigha-kafe-potopolio-2022-01-17-15-05-40.jpg"
          }
        ]
      },
      {
        "id": 131760,
        "active": false,
        "name": {
          "el": "XYMOI & ΑΝΑΨΥΚΤΙΚΑ",
          "en": "JUICES & REFRESHMENTS"
        },
        "description": {
          "el": "Soft Drinks & Tea",
          "en": "Soft Drinks & Tea"
        },
        "image": "",
        "notes": [],
        "items": [
          {
            "id": 131763,
            "active": true,
            "name": {
              "el": "AΡIZONA ΡΟΔΙ",
              "en": "ARIZONA POMEGRANATE"
            },
            "description": {
              "el": "(pomegranate)",
              "en": "(pomegranate)"
            },
            "price": "4.00",
            "image": ""
          },
          {
            "id": 131764,
            "active": true,
            "name": {
              "el": "ΧΥΜΟΙ ΕΜΠΟΡΙΟΥ (AMITA)",
              "en": "COMMERCIAL JUICES (AMITA)"
            },
            "description": {
              "el": "(Commercial juices)",
              "en": "(Commercial juices)"
            },
            "price": "3.50",
            "image": ""
          },
          {
            "id": 131765,
            "active": true,
            "name": {
              "el": "ΦΥΣΙΚΟΣ ΧΥΜΟΣ ΠΟΡΤΟΚΑΛΙ",
              "en": "NATURAL ORANGE JUICE"
            },
            "description": {
              "el": "(Fresh orange juice)",
              "en": "(Fresh orange juice)"
            },
            "price": "4.00",
            "image": ""
          },
          {
            "id": 131766,
            "active": true,
            "name": {
              "el": "COCKTAIL ΦΡΕΣΚΩΝ ΦΡΟΥΤΩΝ ΕΠΟΧΗΣ",
              "en": "FRESH SEASONAL FRUIT COCKTAIL"
            },
            "description": {
              "el": "(Natural mixed juice)",
              "en": "(Natural mixed juice)"
            },
            "price": "4.50",
            "image": ""
          },
          {
            "id": 131768,
            "active": true,
            "name": {
              "el": "FANTA 250ml",
              "en": "FANTA 250ml"
            },
            "description": {
              "el": "(πορτοκαλάδα, λεμονάδα)",
              "en": "(orange juice, lemonade)"
            },
            "price": "3.50",
            "image": ""
          },
          {
            "id": 131769,
            "active": true,
            "name": {
              "el": "SPRITE 250ml",
              "en": "SPRITE 250ml"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "3.50",
            "image": ""
          },
          {
            "id": 131770,
            "active": true,
            "name": {
              "el": "COCA COLA 250ml",
              "en": "COCA COLA 250ml"
            },
            "description": {
              "el": "(light, zero, zero caffeine)",
              "en": "(light, zero, zero caffeine)"
            },
            "price": "3.50",
            "image": ""
          },
          {
            "id": 131771,
            "active": true,
            "name": {
              "el": "SCHWEPPES ΣΟΔΑ 250ml",
              "en": "SCHWEPPES SODA 250ml"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "3.50",
            "image": ""
          },
          {
            "id": 131761,
            "active": false,
            "name": {
              "el": "ΠΑΓΩΜΕΝΟ ΤΣΑΙ",
              "en": "ICED TEA"
            },
            "description": {
              "el": "Λεμόνι, Ροδάκινο, Πράσινο. Ice tea lemon, peach, green)",
              "en": "Lemon, Peach, Green. Ice tea (lemon, peach, green)"
            },
            "price": "3.50",
            "image": ""
          },
          {
            "id": 131767,
            "active": false,
            "name": {
              "el": "ΣΠΙΤΙΚΗ ΛΕΜΟΝΑΔΑ",
              "en": "HOMEMADE LEMONADE"
            },
            "description": {
              "el": "(Homemade lemonade)",
              "en": "(Homemade lemonade)"
            },
            "price": "4.00",
            "image": ""
          }
        ]
      },
      {
        "id": 131774,
        "active": false,
        "name": {
          "el": "REFRESHMENTS",
          "en": "REFRESHMENTS"
        },
        "description": {
          "el": "",
          "en": ""
        },
        "image": "",
        "notes": [],
        "items": [
          {
            "id": 131775,
            "active": true,
            "name": {
              "el": "Ξυνό Νερο Φλώρινας",
              "en": "San Pellegrino-Sparkling Water."
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "4.50",
            "image": "/storage/36498/menurio-kazanoba-tapas-bar-pr-gr-2025-05-13-15-17-55.jpeg"
          },
          {
            "id": 131777,
            "active": true,
            "name": {
              "el": "GRAPEFRUIT SODA",
              "en": "GRAPEFRUIT SODA"
            },
            "description": {
              "el": "by 3cents",
              "en": "by 3cents"
            },
            "price": "4.50",
            "image": ""
          },
          {
            "id": 131778,
            "active": true,
            "name": {
              "el": "AEGEAN TONIC",
              "en": "AEGEAN TONIC"
            },
            "description": {
              "el": "by 3cents",
              "en": "by 3cents"
            },
            "price": "4.50",
            "image": ""
          },
          {
            "id": 131779,
            "active": true,
            "name": {
              "el": "GINGER BEER",
              "en": "GINGER BEER"
            },
            "description": {
              "el": "by 3cents",
              "en": "by 3cents"
            },
            "price": "4.50",
            "image": ""
          },
          {
            "id": 131780,
            "active": true,
            "name": {
              "el": "GENTLEMEΝ'S SODA",
              "en": "GENTLEMEΝ'S SODA"
            },
            "description": {
              "el": "by 3cents",
              "en": "by 3cents"
            },
            "price": "4.50",
            "image": ""
          },
          {
            "id": 131781,
            "active": true,
            "name": {
              "el": "CHERRY",
              "en": "CHERRY"
            },
            "description": {
              "el": "by 3cents",
              "en": "by 3cents"
            },
            "price": "4.50",
            "image": ""
          },
          {
            "id": 131782,
            "active": true,
            "name": {
              "el": "RED BULL",
              "en": "RED BULL"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "5.00",
            "image": ""
          }
        ]
      }
    ]
  },
  {
    "id": 8440,
    "order": 2,
    "slug": "s-8440",
    "image": "https://app.menurio.com/storage/19811/menurio-tiflomigha-kafe-potopolio-2024-02-22-13-33-59.jpeg",
    "name": {
      "el": "Χυμοί, Τσάι, Αναψυκτικά, Smoothies, Refreshments",
      "en": "Χυμοί, Τσάι, Αναψυκτικά, Smoothies, Refreshments"
    },
    "description": {
      "el": "Juices, Tea, Soft drinks, Smoothies, Refreshments",
      "en": "Juices, Tea, Soft Drinks, Smoothies"
    },
    "categories": [
      {
        "id": 179531,
        "active": false,
        "name": {
          "el": "ΣΟΚΟΛΑΤΕΣ - Copy",
          "en": "CHOCOLATES"
        },
        "description": {
          "el": "(Chocolates)",
          "en": "(Chocolates)"
        },
        "image": "/storage/28238/menurio-kazanoba-tapas-bar-pr-gr-2024-07-25-09-16-46.jpeg",
        "notes": [
          {
            "el": "Πρόσθετα: — *Προσθέστε τις αγαπημένες σας γεύσεις σιροπιού φουντούκι, καραμέλα, φράουλα, βανίλια, (+0.50€). *Add your favorite syrup flavors of hazelnut, caramel, strawberry, vanilla (+0.50€)",
            "en": "Extras: — *Add your favorite flavors of hazelnut, caramel, strawberry, vanilla syrup (+€0.50). *Add your favorite syrup flavors of hazelnut, caramel, strawberry, vanilla (+€0.50)"
          }
        ],
        "items": [
          {
            "id": 179538,
            "active": true,
            "name": {
              "el": "ΣΟΚΟΛΑΤΑ ΚΡΥΑ",
              "en": "COLD CHOCOLATE"
            },
            "description": {
              "el": "(Cold chocolate)",
              "en": "(Cold chocolate)"
            },
            "price": "4,00",
            "image": "/storage/3461/menurio-tiflomigha-kafe-potopolio-2022-01-17-14-42-56.jpg"
          },
          {
            "id": 179533,
            "active": false,
            "name": {
              "el": "SALTED CARAMEL CHOCOLATE",
              "en": "AUTHENTIC CHOCOLATE"
            },
            "description": {
              "el": "",
              "en": "(Original chocolate)"
            },
            "price": "4.50",
            "image": "/storage/3458/menurio-tiflomigha-kafe-potopolio-2022-01-17-14-38-18.jpg"
          },
          {
            "id": 179534,
            "active": false,
            "name": {
              "el": "FESTIVE WHITE CHOCOLATE (gingerbread - cinnamon)",
              "en": "CHOCOLATE WITH FLAVORS (HOT OR COLD)."
            },
            "description": {
              "el": "",
              "en": "Oreo , Bueno , Salted Caramel , Cayenne , Caprice , Sugar free"
            },
            "price": "4.5",
            "image": ""
          },
          {
            "id": 179535,
            "active": false,
            "name": {
              "el": "ΣΟΚΟΛΑΤΑ ΒΙΕΝΟΥΑ",
              "en": "VIENNA CHOCOLATE"
            },
            "description": {
              "el": "(Viennois chocolate)",
              "en": "(Viennois chocolate)"
            },
            "price": "4.00",
            "image": "/storage/3459/menurio-tiflomigha-kafe-potopolio-2022-01-17-14-40-32.jpg"
          },
          {
            "id": 179536,
            "active": false,
            "name": {
              "el": "ΚΑΚΑΟ ΔΙΠΛΟ",
              "en": "DOUBLE COCOA"
            },
            "description": {
              "el": "(Cocoa double)",
              "en": "(Cocoa double)"
            },
            "price": "3.50",
            "image": "/storage/3460/menurio-tiflomigha-kafe-potopolio-2022-01-17-14-41-53.jpg"
          },
          {
            "id": 179537,
            "active": false,
            "name": {
              "el": "ΚΑΚΑΟ",
              "en": "COCOA"
            },
            "description": {
              "el": "(Cocoa)",
              "en": "(Cocoa)"
            },
            "price": "3.00",
            "image": "/storage/3460/menurio-tiflomigha-kafe-potopolio-2022-01-17-14-41-53.jpg"
          },
          {
            "id": 179539,
            "active": false,
            "name": {
              "el": "ΣΟΚΟΛΑΤΑ ΖΕΣΤΗ",
              "en": "HOT CHOCOLATE"
            },
            "description": {
              "el": "(Hot chocolate)",
              "en": "(Hot chocolate)"
            },
            "price": "3.50",
            "image": "/storage/3462/menurio-tiflomigha-kafe-potopolio-2022-01-17-14-44-07.jpg"
          }
        ]
      },
      {
        "id": 179540,
        "active": false,
        "name": {
          "el": "ΚΑΦΕΔΕΣ - Copy",
          "en": "BROWN"
        },
        "description": {
          "el": "(Coffees)",
          "en": "(Coffees)"
        },
        "image": "/storage/28239/menurio-kazanoba-tapas-bar-pr-gr-2024-07-25-09-23-00.jpeg",
        "notes": [],
        "items": [
          {
            "id": 179541,
            "active": false,
            "name": {
              "el": "ΕΛΛΗΝΙΚΟΣ ΜΟΝΟΣ",
              "en": "GREEK SINGLE"
            },
            "description": {
              "el": "(Greek coffee)",
              "en": "(Greek coffee)"
            },
            "price": "3.00",
            "image": "/storage/3464/menurio-tiflomigha-kafe-potopolio-2022-01-17-14-47-00.jpg"
          },
          {
            "id": 179542,
            "active": false,
            "name": {
              "el": "ΕΛΛΗΝΙΚΟΣ ΔΙΠΛΟΣ",
              "en": "GREEK DOUBLE"
            },
            "description": {
              "el": "(Double Greek coffee)",
              "en": "(Double Greek coffee)"
            },
            "price": "3.50",
            "image": "/storage/3465/menurio-tiflomigha-kafe-potopolio-2022-01-17-14-48-01.jpg"
          },
          {
            "id": 179543,
            "active": false,
            "name": {
              "el": "ΚΑΦΕΣ ΦΙΛΤΡΟΥ",
              "en": "FILTER COFFEE (FRENCH)"
            },
            "description": {
              "el": "(Filtered coffee)",
              "en": "(Filtered coffee)"
            },
            "price": "4.00",
            "image": "/storage/28246/menurio-kazanoba-tapas-bar-pr-gr-2024-07-25-10-00-59.jpeg"
          },
          {
            "id": 179544,
            "active": false,
            "name": {
              "el": "ΣΤΙΓΜΙΑΙΟΣ ΚΑΦΕΣ - ΦΡΑΠΕ",
              "en": "INSTANT COFFEE - FRAPPE"
            },
            "description": {
              "el": "(Frapped coffee hot or cold)",
              "en": "(Frapped coffee hot or cold)"
            },
            "price": "3.50",
            "image": "/storage/3467/menurio-tiflomigha-kafe-potopolio-2022-01-17-14-50-39.jpg"
          },
          {
            "id": 179545,
            "active": false,
            "name": {
              "el": "ΕΣΠΡΕΣΣΟ (Espresso)",
              "en": "Espresso"
            },
            "description": {
              "el": "(ristretto, lungo)",
              "en": "(ristretto, lungo)"
            },
            "price": "3.00",
            "image": "/storage/28240/menurio-kazanoba-tapas-bar-pr-gr-2024-07-25-09-45-39.jpeg"
          },
          {
            "id": 179546,
            "active": false,
            "name": {
              "el": "ΕΣΠΡΕΣΣΟ ΑΜΕΡΙΚΑΝΟ",
              "en": "ESPRESSO AMERICANO"
            },
            "description": {
              "el": "(Espresso americano)",
              "en": "(Espresso americano)"
            },
            "price": "3.00",
            "image": "/storage/28245/menurio-kazanoba-tapas-bar-pr-gr-2024-07-25-09-55-36.jpeg"
          },
          {
            "id": 179547,
            "active": false,
            "name": {
              "el": "ΕΣΠΡΕΣΣΟ ΑΜΕΡΙΚΑΝΟ ΔΙΠΛΟ",
              "en": "DOUBLE ESPRESSO AMERICANO"
            },
            "description": {
              "el": "(Espresso americano double)",
              "en": "(Espresso americano double)"
            },
            "price": "3.50",
            "image": ""
          },
          {
            "id": 179548,
            "active": false,
            "name": {
              "el": "ΕΣΠΡΕΣΣΟ ΔΙΠΛΟ",
              "en": "DOUBLE ESPRESSO"
            },
            "description": {
              "el": "(Espresso double)",
              "en": "(Espresso double)"
            },
            "price": "3.50",
            "image": ""
          },
          {
            "id": 179549,
            "active": false,
            "name": {
              "el": "ΕΣΠΡΕΣΣΟ ΜΑΚΙΑΤΟ",
              "en": "ESPRESSO MACCHIATO"
            },
            "description": {
              "el": "(Espresso macchiato)",
              "en": "(Espresso macchiato)"
            },
            "price": "3.50",
            "image": "/storage/28244/menurio-kazanoba-tapas-bar-pr-gr-2024-07-25-09-52-49.jpeg"
          },
          {
            "id": 179550,
            "active": false,
            "name": {
              "el": "ΕΣΠΡΕΣΣΟ ΜΑΚΙΑΤΟ ΔΙΠΛΟ",
              "en": "Espresso Macchiato DOUBLE"
            },
            "description": {
              "el": "(Espresso macchiato double)",
              "en": "(Espresso macchiato double)"
            },
            "price": "4.00",
            "image": ""
          },
          {
            "id": 179551,
            "active": false,
            "name": {
              "el": "ΚΑΠΟΥΤΣΙΝΟ",
              "en": "CAPPUCCINO"
            },
            "description": {
              "el": "(Cappuccino)",
              "en": "(Cappuccino)"
            },
            "price": "3.50",
            "image": "/storage/3471/menurio-tiflomigha-kafe-potopolio-2022-01-17-14-56-42.jpg"
          },
          {
            "id": 179552,
            "active": false,
            "name": {
              "el": "ΚΑΠΟΥΤΣΙΝΟ ΔΙΠΛΟ",
              "en": "CAPPUCCINO DOUBLE"
            },
            "description": {
              "el": "(Cappuccino double)",
              "en": "(Cappuccino double)"
            },
            "price": "4.00",
            "image": "/storage/3472/menurio-tiflomigha-kafe-potopolio-2022-01-17-14-57-41.jpg"
          },
          {
            "id": 179553,
            "active": false,
            "name": {
              "el": "ΙΡΛΑΝΔΙΚΟΣ ΚΑΦΕΣ",
              "en": "IRISH COFFEE"
            },
            "description": {
              "el": "(Irish coffee)",
              "en": "(Irish coffee)"
            },
            "price": "5.00",
            "image": "/storage/3473/menurio-tiflomigha-kafe-potopolio-2022-01-17-14-59-57.jpg"
          },
          {
            "id": 179554,
            "active": false,
            "name": {
              "el": "ΕΣΠΡΕΣΣΟ ΚΡΥΟ",
              "en": "FREDDO ESPRESSO"
            },
            "description": {
              "el": "(Freddo espresso)",
              "en": "(Freddo espresso)"
            },
            "price": "3.50",
            "image": "/storage/28241/menurio-kazanoba-tapas-bar-pr-gr-2024-07-25-09-46-10.jpeg"
          },
          {
            "id": 179555,
            "active": false,
            "name": {
              "el": "ΚΑΠΟΥΤΣΙΝΟ ΚΡΥΟ",
              "en": "FREDDO CAPPUCCINO"
            },
            "description": {
              "el": "(Freddo cappuccino)",
              "en": "(Freddo cappuccino)"
            },
            "price": "4.00",
            "image": "/storage/28242/menurio-kazanoba-tapas-bar-pr-gr-2024-07-25-09-47-30.jpeg"
          },
          {
            "id": 179556,
            "active": false,
            "name": {
              "el": "ΚΑΠΟΥΤΣΙΝΟ ΚΡΥΟ LATTE",
              "en": "CAPPUCCINO FREDDO LATTE"
            },
            "description": {
              "el": "(Freddo cappuccino Latte)",
              "en": "(Freddo cappuccino Latte)"
            },
            "price": "4.00",
            "image": "/storage/28243/menurio-kazanoba-tapas-bar-pr-gr-2024-07-25-09-50-14.jpeg"
          },
          {
            "id": 179557,
            "active": false,
            "name": {
              "el": "ΜΟΚΑΤΣΙΝΟ",
              "en": "MOCHACCINO"
            },
            "description": {
              "el": "(Mochaccino)",
              "en": "(Mochaccino)"
            },
            "price": "5.00",
            "image": "/storage/3477/menurio-tiflomigha-kafe-potopolio-2022-01-17-15-05-40.jpg"
          }
        ]
      },
      {
        "id": 179558,
        "active": true,
        "name": {
          "el": "Αναψυκτικά, Ροφήματα και Χυμοί",
          "en": "JUICES & REFRESHMENTS"
        },
        "description": {
          "el": "Soft Drinks, Beverages and Juices",
          "en": "Soft Drinks & Tea"
        },
        "image": "",
        "notes": [],
        "items": [
          {
            "id": 179566,
            "active": true,
            "name": {
              "el": "Σπιτική Λεμονάδα",
              "en": "HOMEMADE LEMONADE"
            },
            "description": {
              "el": "Homemade lemonade",
              "en": "(Homemade lemonade)"
            },
            "price": "4.50",
            "image": ""
          },
          {
            "id": 259078,
            "active": true,
            "name": {
              "el": "Σπιτική Λεμονάδα με φράουλα ή Μήλο",
              "en": "ICED TEA"
            },
            "description": {
              "el": "Homemade Lemonade with Strawberry or Apple",
              "en": "Lemon, Peach, Green. Ice tea (lemon, peach, green)"
            },
            "price": "5.00",
            "image": ""
          },
          {
            "id": 259079,
            "active": true,
            "name": {
              "el": "Σπιτικό κρύο Τσάι του βουνού με Πεπόνι ή Ροδάκινο",
              "en": "ICED TEA"
            },
            "description": {
              "el": "Homemade cold Mountain Tea with Mango, Melon or Peach",
              "en": "Lemon, Peach, Green. Ice tea (lemon, peach, green)"
            },
            "price": "4.50",
            "image": ""
          },
          {
            "id": 179559,
            "active": true,
            "name": {
              "el": "NotWorthit Κεράσι",
              "en": "ICED TEA"
            },
            "description": {
              "el": "Ανθρακούχο τσαΪ με Βότανα Λουίζα, κεράσι, κάρδαμο, Τζίντζερ by Grizo Prasino",
              "en": "Lemon, Peach, Green. Ice tea (lemon, peach, green)"
            },
            "price": "4.50",
            "image": "/storage/40187/menurio-kazanoba-tapas-bar-pr-gr-2025-06-25-20-46-52.jpeg"
          },
          {
            "id": 194612,
            "active": true,
            "name": {
              "el": "NotWorthit Περγαμόντο",
              "en": "ICED TEA"
            },
            "description": {
              "el": "Ανθρακούχο τσαΪ με Βότανα Αρμπαρόριζα, Φασκόμηλο, περγαμόντο by Grizo Prasino",
              "en": "Lemon, Peach, Green. Ice tea (lemon, peach, green)"
            },
            "price": "4.50",
            "image": "/storage/40188/menurio-kazanoba-tapas-bar-pr-gr-2025-06-25-20-47-09.jpeg"
          },
          {
            "id": 179564,
            "active": true,
            "name": {
              "el": "Φυσικός Χυμός Πορτοκάλι",
              "en": "NATURAL ORANGE JUICE"
            },
            "description": {
              "el": "Fresh orange juice",
              "en": "(Fresh orange juice)"
            },
            "price": "4.00",
            "image": "/storage/47067/menurio-kazanoba-tapas-bar-pr-gr-2026-03-11-21-43-41.jpeg"
          },
          {
            "id": 179565,
            "active": true,
            "name": {
              "el": "Smoothie Sunrise_Μήλο, Ροδάκινο, Μανγκο , Ανανάς",
              "en": "FRESH SEASONAL FRUIT COCKTAIL"
            },
            "description": {
              "el": "Sunrise Smoothie_Apple, Peach, Mango, Pineapple",
              "en": "(Natural mixed juice)"
            },
            "price": "5,00",
            "image": ""
          },
          {
            "id": 276220,
            "active": true,
            "name": {
              "el": "Smoothie Red Fruits_Μήλο, Φράουλα, Μανγκο , Βατόμουρο",
              "en": "FRESH SEASONAL FRUIT COCKTAIL"
            },
            "description": {
              "el": "Smoothie Red Fruits_Apple, Strawberry, Mango, Raspberry",
              "en": "(Natural mixed juice)"
            },
            "price": "5,00",
            "image": ""
          },
          {
            "id": 179563,
            "active": true,
            "name": {
              "el": "Χυμοί Πορτοκάλι, Βύσσινο, Μπανάνα, Ανανάς, Ροδάκινο, Μήλo, Φράουλα, Λεμόνι",
              "en": "COMMERCIAL JUICES (AMITA)"
            },
            "description": {
              "el": "Juices Orange, Cherry, Banana, Pineapple, Peach, Apple, Strawberry, Lemon",
              "en": "(Commercial juices)"
            },
            "price": "3.50",
            "image": ""
          },
          {
            "id": 179567,
            "active": true,
            "name": {
              "el": "FANTA 250ml ( πορτοκαλάδα, λεμονάδα)",
              "en": "FANTA 250ml"
            },
            "description": {
              "el": "",
              "en": "(orange juice, lemonade)"
            },
            "price": "3.50",
            "image": "/storage/47061/menurio-kazanoba-tapas-bar-pr-gr-2026-03-11-21-27-24.jpeg"
          },
          {
            "id": 179569,
            "active": true,
            "name": {
              "el": "Coca Cola 250ml",
              "en": "COCA COLA 250ml"
            },
            "description": {
              "el": "",
              "en": "(light, zero, zero caffeine)"
            },
            "price": "3.50",
            "image": "/storage/47062/menurio-kazanoba-tapas-bar-pr-gr-2026-03-11-21-30-07.jpeg"
          },
          {
            "id": 245453,
            "active": true,
            "name": {
              "el": "Coca Cola Zero 250ml",
              "en": "COCA COLA 250ml"
            },
            "description": {
              "el": "",
              "en": "(light, zero, zero caffeine)"
            },
            "price": "3.50",
            "image": "/storage/47063/menurio-kazanoba-tapas-bar-pr-gr-2026-03-11-21-31-11.jpeg"
          },
          {
            "id": 179568,
            "active": true,
            "name": {
              "el": "Srite 250ml",
              "en": "SPRITE 250ml"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "3.50",
            "image": ""
          },
          {
            "id": 179570,
            "active": true,
            "name": {
              "el": "SCHWEPPES ΣΟΔΑ 250ml",
              "en": "SCHWEPPES SODA 250ml"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "3.50",
            "image": ""
          },
          {
            "id": 179560,
            "active": false,
            "name": {
              "el": "Κρύο Τσάι Πράσινο 330 ml (LIPTON)",
              "en": "ICED TEA"
            },
            "description": {
              "el": "Iced Tea Green",
              "en": "Lemon, Peach, Green. Ice tea (lemon, peach, green)"
            },
            "price": "3.50",
            "image": ""
          },
          {
            "id": 179562,
            "active": false,
            "name": {
              "el": "AΡIZONA ΡΟΔΙ",
              "en": "ARIZONA POMEGRANATE"
            },
            "description": {
              "el": "(pomegranate)",
              "en": "(pomegranate)"
            },
            "price": "4.00",
            "image": ""
          }
        ]
      },
      {
        "id": 179571,
        "active": true,
        "name": {
          "el": "REFRESHMENTS",
          "en": "REFRESHMENTS"
        },
        "description": {
          "el": "",
          "en": ""
        },
        "image": "",
        "notes": [],
        "items": [
          {
            "id": 179572,
            "active": true,
            "name": {
              "el": "Ξυνό Νερο Φλώρινας 250 ml",
              "en": "San Pellegrino-Sparkling Water."
            },
            "description": {
              "el": "Florina Sour Water 250 ml",
              "en": ""
            },
            "price": "4.50",
            "image": "/storage/36498/menurio-kazanoba-tapas-bar-pr-gr-2025-05-13-15-17-55.jpeg"
          },
          {
            "id": 256330,
            "active": true,
            "name": {
              "el": "Fig Leaf από 3cents 200 ml",
              "en": "GINGER BEER"
            },
            "description": {
              "el": "Fig Leaf from 3cents 200 ml",
              "en": "by 3cents"
            },
            "price": "4.50",
            "image": ""
          },
          {
            "id": 179574,
            "active": true,
            "name": {
              "el": "Grapefruit Soda από 3cents 200 ml",
              "en": "GRAPEFRUIT SODA"
            },
            "description": {
              "el": "Grapefruit Soda by 3cents",
              "en": "by 3cents"
            },
            "price": "4.50",
            "image": ""
          },
          {
            "id": 179575,
            "active": true,
            "name": {
              "el": "Aegean Tonic από 3cents 200 ml",
              "en": "AEGEAN TONIC"
            },
            "description": {
              "el": "Aegean Tonic by 3cents",
              "en": "by 3cents"
            },
            "price": "4.50",
            "image": "/storage/48850/menurio-kazanoba-tapas-bar-pr-gr-2026-05-01-15-25-35.jpeg"
          },
          {
            "id": 179576,
            "active": true,
            "name": {
              "el": "Ginger Beer από 3cents 200 ml",
              "en": "GINGER BEER"
            },
            "description": {
              "el": "Ginger Beer by 3cents",
              "en": "by 3cents"
            },
            "price": "4.50",
            "image": "/storage/47064/menurio-kazanoba-tapas-bar-pr-gr-2026-03-11-21-37-14.jpeg"
          },
          {
            "id": 179577,
            "active": true,
            "name": {
              "el": "Gentlement's Soda από 3cents (Μανταρίνι, Περγαμόντο) 200 ml",
              "en": "GENTLEMEΝ'S SODA"
            },
            "description": {
              "el": "Gentlement's Soda by 3cents (Mandarin, Bergamont)",
              "en": "by 3cents"
            },
            "price": "4.50",
            "image": "/storage/48849/menurio-kazanoba-tapas-bar-pr-gr-2026-05-01-15-21-54.jpeg"
          },
          {
            "id": 179578,
            "active": true,
            "name": {
              "el": "Σόδα Κεράσι από 3cents 200 ml",
              "en": "CHERRY"
            },
            "description": {
              "el": "Cherry Soda by 3cents",
              "en": "by 3cents"
            },
            "price": "4.50",
            "image": ""
          },
          {
            "id": 179579,
            "active": true,
            "name": {
              "el": "Red Bull (250ml)",
              "en": "RED BULL"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "5.00",
            "image": ""
          }
        ]
      }
    ]
  },
  {
    "id": 6220,
    "order": 3,
    "slug": "s-6220",
    "image": "https://app.menurio.com/storage/19811/menurio-tiflomigha-kafe-potopolio-2024-02-22-13-33-59.jpeg",
    "name": {
      "el": "Τσάι Ζεστό",
      "en": "Hot tea"
    },
    "description": {
      "el": "Dammann.",
      "en": "The road of tea."
    },
    "categories": [
      {
        "id": 150769,
        "active": false,
        "name": {
          "el": "MATCHA TEA",
          "en": "MATCHA TEA"
        },
        "description": {
          "el": "",
          "en": ""
        },
        "image": "",
        "notes": [],
        "items": [
          {
            "id": 150770,
            "active": false,
            "name": {
              "el": "LATTE MACHA VANILLA FLAVOUR",
              "en": "LATTE MACHA VANILLA FLAVOUR"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "4.5",
            "image": ""
          }
        ]
      },
      {
        "id": 131790,
        "active": true,
        "name": {
          "el": "Τσάι Ζεστό",
          "en": "Hot tea"
        },
        "description": {
          "el": "DAMMANN.",
          "en": "The road of tea."
        },
        "image": "",
        "notes": [
          {
            "el": "More than a tea…a Voyage! — Premium Herbal Teas",
            "en": "More than a tea…a Voyage! — Premium Herbal Teas"
          }
        ],
        "items": [
          {
            "id": 147984,
            "active": true,
            "name": {
              "el": "China Gunpowder",
              "en": "China Gunpowder"
            },
            "description": {
              "el": "Παραδοσιακό κινέζικο πράσινο τσάι. (3-4 min)",
              "en": "Traditional Chinese green tea. (3-4 minutes)"
            },
            "price": "4,00",
            "image": ""
          },
          {
            "id": 147985,
            "active": true,
            "name": {
              "el": "The Des Deux Chinos",
              "en": "The Des Deux Chinos"
            },
            "description": {
              "el": "Χαρμάνι πράσινου τσαγιού Sencha με μπαχα και εξωτικά φρούτα: μάνγκο, λάιμ, καρύδα, νότες πιπεριού, τζίντζερ.(3-4min0",
              "en": "Blend of Sencha green tea with bacha and exotic fruits: mango, lime, coconut, notes of pepper, ginger. (3-4min)"
            },
            "price": "4,00",
            "image": ""
          },
          {
            "id": 147986,
            "active": true,
            "name": {
              "el": "Bali",
              "en": "Bali"
            },
            "description": {
              "el": "Χαρμάνι πράσινου τσαγιού Κίνας και γιασεμιού με πέταλα λουλουδιών, αρώματα τριαντάφυλλου και φρούτων (lychee, γκρέιπφρουτ, πορτοκάλι, θαμνώδης ροδακινιά). (3-4min)",
              "en": "Blend of Chinese green tea and jasmine with flower petals, rose and fruit aromas (lychee, grapefruit, orange, bushy peach). (3-4min)"
            },
            "price": "4,00",
            "image": ""
          },
          {
            "id": 131791,
            "active": true,
            "name": {
              "el": "Strong Breakfast.",
              "en": "Strong Breakfast."
            },
            "description": {
              "el": "Μαύρο τσάι.(4-5 min)",
              "en": "Black tea. (4-5 min)"
            },
            "price": "4.00",
            "image": "/storage/17488/menurio-tiflomigha-kafe-potopolio-2023-10-25-22-09-05.jpeg"
          },
          {
            "id": 131792,
            "active": true,
            "name": {
              "el": "Earl grey.",
              "en": "Earl grey."
            },
            "description": {
              "el": "Μαύρο τσάι Κίνας με αιθέρια έλαια περγαμόντου. (4-5 min)",
              "en": "China black tea with bergamot essential oils. (4-5 minutes)"
            },
            "price": "4.00",
            "image": "/storage/17489/menurio-tiflomigha-kafe-potopolio-2023-10-25-22-12-32.jpeg"
          },
          {
            "id": 131793,
            "active": true,
            "name": {
              "el": "Carcadet Samba.",
              "en": "Carcadet Samba."
            },
            "description": {
              "el": "Λουλούδια ιβίσκου, ρόδων, πέταλα λουλουδιών και αποξηραμένα φρούτα.(4-6 min)",
              "en": "Hibiscus flowers, roses, flower petals and dried fruits. (4-6 min)"
            },
            "price": "4.00",
            "image": "/storage/17493/menurio-tiflomigha-kafe-potopolio-2023-10-25-22-19-37.jpeg"
          },
          {
            "id": 131794,
            "active": true,
            "name": {
              "el": "Rooibos Citrus.",
              "en": "Rooibos Citrus."
            },
            "description": {
              "el": "Εσπεριδοειδή, πέταλα λουλουδιών, σαγκουίνι , γεύση κόλα. (4-5 min).",
              "en": "Citrus, flower petals, sanguine, cola flavor. (4-5 min)."
            },
            "price": "4.00",
            "image": "/storage/17492/menurio-tiflomigha-kafe-potopolio-2023-10-25-22-19-00.jpeg"
          },
          {
            "id": 131796,
            "active": false,
            "name": {
              "el": "Κόκκινη Πλατεία.6-8min.",
              "en": "Red Square. 6-8min."
            },
            "description": {
              "el": "Περιέχει:κράνμπερι, μήλο, ιβίσκο.",
              "en": "Contains: cranberry, apple, hibiscus."
            },
            "price": "3.00",
            "image": "/storage/17275/menurio-tiflomigha-kafe-potopolio-2023-10-10-15-12-05.jpeg"
          },
          {
            "id": 131797,
            "active": false,
            "name": {
              "el": "Πράσινος Δράκος.2-3min.",
              "en": "Green Dragon. 2-3min."
            },
            "description": {
              "el": "Περιέχει:Πορτοκάλι, Γαρύφαλλο, Κανέλα.",
              "en": "Contains: Orange, Clove, Cinnamon."
            },
            "price": "3.00",
            "image": "/storage/17278/menurio-tiflomigha-kafe-potopolio-2023-10-10-15-16-43.jpeg"
          },
          {
            "id": 131798,
            "active": false,
            "name": {
              "el": "Φθινοπωρινή Σονάτα.4-6min.",
              "en": "Autumn Sonata. 4-6min."
            },
            "description": {
              "el": "Περιέχει:Bανίλια , Aμύγδαλο, Φουντούκι.",
              "en": "Contains: Vanilla, Almond, Hazelnut."
            },
            "price": "3.00",
            "image": "/storage/17277/menurio-tiflomigha-kafe-potopolio-2023-10-10-15-15-15.jpeg"
          },
          {
            "id": 131799,
            "active": false,
            "name": {
              "el": "Μυρωμενος Θάμνος.4-6min.",
              "en": "Fragrant Shrub. 4-6min."
            },
            "description": {
              "el": "Περιέχει: Πορτοκάλι, Γαρύφαλο, Κάρδαμο.",
              "en": "Contains: Orange, Clove, Cardamom."
            },
            "price": "3.00",
            "image": "/storage/17279/menurio-tiflomigha-kafe-potopolio-2023-10-10-15-17-03.jpeg"
          },
          {
            "id": 131800,
            "active": false,
            "name": {
              "el": "Ο Θησαυρός των Μάγια.4-6min.",
              "en": "The Treasure of the Maya. 4-6min."
            },
            "description": {
              "el": "Περιέχει:Σοκολάτα ,Κακάο.",
              "en": "Contains: Chocolate, Cocoa."
            },
            "price": "3.00",
            "image": "/storage/17280/menurio-tiflomigha-kafe-potopolio-2023-10-10-15-17-52.jpeg"
          },
          {
            "id": 131801,
            "active": false,
            "name": {
              "el": "Αιολική Γη.6-8min.",
              "en": "Aeolian Land.6-8min."
            },
            "description": {
              "el": "Περιέχει:Αχλάδι, Μήλο, Δαμάσκηνο.",
              "en": "Contains: Pear, Apple, Plum."
            },
            "price": "3.00",
            "image": "/storage/17281/menurio-tiflomigha-kafe-potopolio-2023-10-10-15-18-49.jpeg"
          },
          {
            "id": 131802,
            "active": false,
            "name": {
              "el": "Ποσειδών - Poseidon.Τσάι βουνού με εσπεριδοειδή (10 min)",
              "en": "Poseidon. Mountain tea with citrus fruits (10 min)"
            },
            "description": {
              "el": "Περιέχει:bio τσάι βουνού,άγριο τριαντάφυλλο,μήλο,ιβίσκο,πορτοκάλι,ηλίανθο",
              "en": "Contains: bio mountain tea, wild rose, apple, hibiscus, orange, sunflower"
            },
            "price": "3.00",
            "image": ""
          },
          {
            "id": 131803,
            "active": false,
            "name": {
              "el": "Αίολος - Aeolus.Βιολογικό τσάι βουνού (6-8 min)",
              "en": "Aeolus - Aeolus. Organic mountain tea (6-8 min)"
            },
            "description": {
              "el": "Περιέχει:bio τσάι βουνού",
              "en": "Contains: bio mountain tea"
            },
            "price": "3.00",
            "image": ""
          },
          {
            "id": 131804,
            "active": false,
            "name": {
              "el": "Πηνελόπη - Penelope.Βιολογικό χαμομήλι (5 min)",
              "en": "Penelope - Penelope. Organic chamomile (5 min)"
            },
            "description": {
              "el": "Περιέχει:bio χαμομήλι",
              "en": "Contains: organic chamomile"
            },
            "price": "3.00",
            "image": ""
          },
          {
            "id": 131805,
            "active": false,
            "name": {
              "el": "Καλυψώ - Calypso.Βιολογική λουίζα (5 min)",
              "en": "Calypso. Organic louiza (5 min)"
            },
            "description": {
              "el": "Περιέχει:bio λουίζα",
              "en": "Contains: bio luiza"
            },
            "price": "3.00",
            "image": ""
          },
          {
            "id": 131806,
            "active": false,
            "name": {
              "el": "Ναυσικά - Nausicaa.Βιολογική μέντα (5 min)",
              "en": "Nausicaa. Organic mint (5 min)"
            },
            "description": {
              "el": "Περιέχει:bio μέντα",
              "en": "Contains: bio mint"
            },
            "price": "3.00",
            "image": ""
          },
          {
            "id": 131807,
            "active": false,
            "name": {
              "el": "Σκύλλα - Skylla.Μαύρο τσάι (5 min)",
              "en": "Skylla - Skylla. Black tea (5 min)"
            },
            "description": {
              "el": "Περιέχει:μαύρο τσάι",
              "en": "Contains: black tea"
            },
            "price": "3.00",
            "image": ""
          },
          {
            "id": 131808,
            "active": false,
            "name": {
              "el": "Χάρυβδη - Charybdis.Πράσινο τσάι (5 min)",
              "en": "Charybdis - Charybdis. Green tea (5 min)"
            },
            "description": {
              "el": "Περιέχει:πράσινο τσάι",
              "en": "Contains: green tea"
            },
            "price": "3.00",
            "image": ""
          }
        ]
      }
    ]
  },
  {
    "id": 6221,
    "order": 4,
    "slug": "s-6221",
    "image": "https://app.menurio.com/storage/19802/menurio-tiflomigha-kafe-potopolio-2024-02-22-13-14-21.jpeg",
    "name": {
      "el": "Early Drinks",
      "en": "Early Drinks"
    },
    "description": {
      "el": "",
      "en": ""
    },
    "categories": [
      {
        "id": 131809,
        "active": false,
        "name": {
          "el": "Early Drinks - Copy",
          "en": "Early Drinks"
        },
        "description": {
          "el": "",
          "en": ""
        },
        "image": "/storage/19815/menurio-tiflomigha-kafe-potopolio-2024-02-22-13-57-48.jpeg",
        "notes": [],
        "items": [
          {
            "id": 131810,
            "active": true,
            "name": {
              "el": "Aperitivo Spritz.",
              "en": "Spritz aperitif."
            },
            "description": {
              "el": "Η πιο νόστιμη πρόταση σε Spritz με αρώματα από μανταρίνι,άνθη πορτοκαλιάς,guava και Luxardo Aperitivo.",
              "en": "The most delicious proposal in Spritz with aromas of tangerine, orange blossom, guava and Luxardo Aperitivo."
            },
            "price": "7.00",
            "image": ""
          },
          {
            "id": 131811,
            "active": true,
            "name": {
              "el": "Negroni Bianco",
              "en": "Negroni Bianco"
            },
            "description": {
              "el": "Το Negroni στα καλύτερά του, αλλά πλέον λευκό!",
              "en": "Negroni at its best, but now white!"
            },
            "price": "7.00",
            "image": ""
          },
          {
            "id": 131812,
            "active": true,
            "name": {
              "el": "Spritz Veneziano",
              "en": "Spritz Veneziano"
            },
            "description": {
              "el": "Δώσε αέρα Βενετίας απολαμβάνοντας ένα Spritz με Select Aperitivo.",
              "en": "Give it an air of Venice by enjoying a Spritz with Select Aperitivo."
            },
            "price": "7.50",
            "image": ""
          },
          {
            "id": 131813,
            "active": true,
            "name": {
              "el": "Amalfi and Tonic",
              "en": "Amalfi and Tonic"
            },
            "description": {
              "el": "Ένα γλυκόπικρο ποτό με αρώματα από περγαμόντο στα χρώματα του ουρανού.",
              "en": "A bittersweet drink with aromas of bergamot in the colors of the sky."
            },
            "price": "7.50",
            "image": ""
          },
          {
            "id": 131814,
            "active": true,
            "name": {
              "el": "Monte Mule",
              "en": "Mount Mule"
            },
            "description": {
              "el": "Αρώματα αρμπαροριζας παντρεύτηκαν με ginger σε συνδιασμό με τριαντάφυλλο σε μια πανδαισία γεύσεων.",
              "en": "Burberry aromas were married with ginger in combination with rose in a feast of flavors."
            },
            "price": "7.50",
            "image": ""
          }
        ]
      }
    ]
  },
  {
    "id": 6213,
    "order": 5,
    "slug": "s-6213",
    "image": "https://app.menurio.com/storage/19802/menurio-tiflomigha-kafe-potopolio-2024-02-22-13-14-21.jpeg",
    "name": {
      "el": "Cocktails",
      "en": "Cocktails"
    },
    "description": {
      "el": "New cocktail 🍹 list",
      "en": "New cocktail 🍹 list"
    },
    "categories": [
      {
        "id": 131375,
        "active": true,
        "name": {
          "el": "Signature Cocktails",
          "en": "Signature Cocktails"
        },
        "description": {
          "el": "",
          "en": ""
        },
        "image": "/storage/24698/menurio-tiflomigha-kafe-potopolio-2024-05-28-23-14-19.jpeg",
        "notes": [],
        "items": [
          {
            "id": 254468,
            "active": true,
            "name": {
              "el": "The Lover",
              "en": "Punch Of Caribbean"
            },
            "description": {
              "el": "Vodka, Triple Sec, Peach, Lime Juice",
              "en": "Rum Blend, Pinapple, Sweet spices, Ginger, Bubbles."
            },
            "price": "8,00",
            "image": "/storage/49446/menurio-kazanoba-tapas-bar-pr-gr-2026-05-12-13-09-16.jpeg"
          },
          {
            "id": 254469,
            "active": true,
            "name": {
              "el": "The Player",
              "en": "Punch Of Caribbean"
            },
            "description": {
              "el": "Campari, Dry Vermouth, Cocchi Rosa, Mint Strawberry",
              "en": "Rum Blend, Pinapple, Sweet spices, Ginger, Bubbles."
            },
            "price": "8,00",
            "image": "/storage/49443/menurio-kazanoba-tapas-bar-pr-gr-2026-05-12-13-07-43.jpeg"
          },
          {
            "id": 254470,
            "active": true,
            "name": {
              "el": "The Gentleman",
              "en": "Punch Of Caribbean"
            },
            "description": {
              "el": "Bickens London Dry Gin, Limoncello, Mastiha Pink Peppercorn, Oleo Cordial,",
              "en": "Rum Blend, Pinapple, Sweet spices, Ginger, Bubbles."
            },
            "price": "8,00",
            "image": "/storage/49444/menurio-kazanoba-tapas-bar-pr-gr-2026-05-12-13-08-08.jpeg"
          },
          {
            "id": 254471,
            "active": true,
            "name": {
              "el": "The Stranger",
              "en": "Punch Of Caribbean"
            },
            "description": {
              "el": "Pisco, Green Cordial, Lime Juice, Fig Leaf soda",
              "en": "Rum Blend, Pinapple, Sweet spices, Ginger, Bubbles."
            },
            "price": "8,00",
            "image": "/storage/49445/menurio-kazanoba-tapas-bar-pr-gr-2026-05-12-13-08-52.jpeg"
          },
          {
            "id": 254473,
            "active": true,
            "name": {
              "el": "The Dreamer",
              "en": "Punch Of Caribbean"
            },
            "description": {
              "el": "Lillet Rose, Peach Strawberry Cordial, Lime Juice, Pink Grapefruit Soda",
              "en": "Rum Blend, Pinapple, Sweet spices, Ginger, Bubbles."
            },
            "price": "8,00",
            "image": "/storage/49447/menurio-kazanoba-tapas-bar-pr-gr-2026-05-12-13-10-25.jpeg"
          },
          {
            "id": 254472,
            "active": false,
            "name": {
              "el": "The Rebel",
              "en": "Punch Of Caribbean"
            },
            "description": {
              "el": "Espolon Blanco, Fermented Peppercorn Raspberry Cordial, Lime Juice, Soda water",
              "en": "Rum Blend, Pinapple, Sweet spices, Ginger, Bubbles."
            },
            "price": "7.50",
            "image": "/storage/49448/menurio-kazanoba-tapas-bar-pr-gr-2026-05-12-13-14-21.jpeg"
          },
          {
            "id": 142366,
            "active": false,
            "name": {
              "el": "Blur",
              "en": "Punch Of Caribbean"
            },
            "description": {
              "el": "Olmeca Altos Tequila, Mezcal, Passion Fruit agave, Lime Tropical Bubbles",
              "en": "Rum Blend, Pinapple, Sweet spices, Ginger, Bubbles."
            },
            "price": "10.00",
            "image": ""
          },
          {
            "id": 142367,
            "active": false,
            "name": {
              "el": "World Party",
              "en": "World Party"
            },
            "description": {
              "el": "Planteray sealander, Kilchoman Machir Bay, Quince, cinnamon, bubbles.",
              "en": "Planteray sealander, Kilchoman Machir Bay, Quince, cinnamon, bubbles."
            },
            "price": "10.00",
            "image": ""
          },
          {
            "id": 142387,
            "active": false,
            "name": {
              "el": "Heartbeat",
              "en": "Heartbeat"
            },
            "description": {
              "el": "Absolut Vodka, Passion, Vanilla, Clementine",
              "en": "Absolut Vodka, Passion, Vanilla, Clementine"
            },
            "price": "10.00",
            "image": ""
          },
          {
            "id": 142388,
            "active": false,
            "name": {
              "el": "Love Story",
              "en": "Love Story"
            },
            "description": {
              "el": "Beefeater London Dry Gin, Bitter, Cherry tomato,strawberry, parsley , co2",
              "en": "Beefeater London Dry Gin, Bitter, Cherry tomato,strawberry, parsley , co2"
            },
            "price": "10.00",
            "image": ""
          },
          {
            "id": 131376,
            "active": false,
            "name": {
              "el": "Amorous",
              "en": "Amorous"
            },
            "description": {
              "el": "Absolut Vodka, Strawberry, Biscuits, Vanilla, Whey.",
              "en": "Absolut Vodka, Strawberry, Biscuits, Vanilla, Whey"
            },
            "price": "10.00",
            "image": ""
          },
          {
            "id": 131378,
            "active": false,
            "name": {
              "el": "Breeze",
              "en": "Breeze"
            },
            "description": {
              "el": "Beefeater London Dry Gin, Campari Bitter, Flowers, Protein.",
              "en": "Beefeater London Dry Gin, Campari Bitter, Flowers, Protein"
            },
            "price": "10.00",
            "image": ""
          },
          {
            "id": 131377,
            "active": false,
            "name": {
              "el": "Flare",
              "en": "Alchemist"
            },
            "description": {
              "el": "Beefeater London Dry Gin, Mandarin, Thyme, Lemongrass, Rosemary",
              "en": "Olmeca Altos Plata Tequila, Cilantro, Cardamon, Pineapple"
            },
            "price": "10.00",
            "image": ""
          },
          {
            "id": 131379,
            "active": false,
            "name": {
              "el": "Bliss",
              "en": "Spicy"
            },
            "description": {
              "el": "Jameson Irish Whiskey, Pumpkin Spiced, Co2",
              "en": "Havana Club Añejo 3yo, Passion, Coconut, Allspice"
            },
            "price": "10.00",
            "image": ""
          },
          {
            "id": 131380,
            "active": false,
            "name": {
              "el": "Glow",
              "en": "Embrace"
            },
            "description": {
              "el": "Havana Club Cuban Spiced, Banana, Coconut",
              "en": "Havana Club Añejo Especial, Del Maguey Vida Mezcal, Watermelon, Melon, Mango, c02"
            },
            "price": "10.00",
            "image": ""
          },
          {
            "id": 131382,
            "active": false,
            "name": {
              "el": "Spicy",
              "en": "Secret"
            },
            "description": {
              "el": "Havana Club, Piment Liqueur, Passion, Coco",
              "en": "Beer, Vermouth, Critamo, Thyme, Tonic water"
            },
            "price": "10.00",
            "image": ""
          }
        ]
      },
      {
        "id": 254474,
        "active": true,
        "name": {
          "el": "Early Drinks_Spritz",
          "en": "Classics Cocktails"
        },
        "description": {
          "el": "",
          "en": ""
        },
        "image": "",
        "notes": [
          {
            "el": "Επιλογές — *Μπορείτε να επιλέξετε τα αγαπημένα σας κοκτέιλ με γεύσεις μάνγκο ή φράουλα ή φρούτα του πάθους",
            "en": "Options — *You can choose your favorite cocktails with mango or strawberry or passion fruit flavors"
          }
        ],
        "items": [
          {
            "id": 254484,
            "active": true,
            "name": {
              "el": "Aperol Spritz",
              "en": "Aperol spritz"
            },
            "description": {
              "el": "Aperol, Prosecco, Soda",
              "en": "Prosecco, aperol, soda."
            },
            "price": "7,00",
            "image": ""
          },
          {
            "id": 254503,
            "active": true,
            "name": {
              "el": "Campari Spritz",
              "en": "Aperol spritz"
            },
            "description": {
              "el": "Campari , Prosecco, Soda Water",
              "en": "Prosecco, aperol, soda."
            },
            "price": "7,00",
            "image": ""
          },
          {
            "id": 254505,
            "active": true,
            "name": {
              "el": "Lillet Rose Spritz",
              "en": "Aperol spritz"
            },
            "description": {
              "el": "Lillet Rose, Pink Grapefruit Soda",
              "en": "Prosecco, aperol, soda."
            },
            "price": "7,00",
            "image": ""
          },
          {
            "id": 256249,
            "active": true,
            "name": {
              "el": "Sarti Spritz",
              "en": "Aperol spritz"
            },
            "description": {
              "el": "Sarti, Prosecco, Soda,",
              "en": "Prosecco, aperol, soda."
            },
            "price": "7.00",
            "image": ""
          },
          {
            "id": 256250,
            "active": true,
            "name": {
              "el": "Mondoro Spritz",
              "en": "Aperol spritz"
            },
            "description": {
              "el": "Mondoro , Prosecco, Soda,",
              "en": "Prosecco, aperol, soda."
            },
            "price": "7.00",
            "image": ""
          },
          {
            "id": 254506,
            "active": true,
            "name": {
              "el": "Limoncello Spritz",
              "en": "Aperol spritz"
            },
            "description": {
              "el": "Limoncello Liqueur, Prosecco, Soda Water",
              "en": "Prosecco, aperol, soda."
            },
            "price": "7,00",
            "image": ""
          },
          {
            "id": 254504,
            "active": true,
            "name": {
              "el": "Hugo Spritz",
              "en": "Aperol spritz"
            },
            "description": {
              "el": "St. Germain, Prosecco, Soda, Mint Leaves",
              "en": "Prosecco, aperol, soda."
            },
            "price": "7.00",
            "image": ""
          },
          {
            "id": 254507,
            "active": true,
            "name": {
              "el": "Sangrita",
              "en": "Aperol spritz"
            },
            "description": {
              "el": "Red Wine, Pineapple, Simple Syrop, Lemon Juice, Soda Water",
              "en": "Prosecco, aperol, soda."
            },
            "price": "7.00",
            "image": ""
          },
          {
            "id": 254489,
            "active": true,
            "name": {
              "el": "Negroni",
              "en": "Negroni"
            },
            "description": {
              "el": "London Dry Gin, Campari, Del Professore red vermouth",
              "en": "Blend vermouth, campari, Beefeater London Dry gin."
            },
            "price": "7,50",
            "image": ""
          },
          {
            "id": 254487,
            "active": true,
            "name": {
              "el": "Americano",
              "en": "American"
            },
            "description": {
              "el": "Campari, Del Professore red vermouth, Soda Water,",
              "en": "Sweet vermouth, campari, soda."
            },
            "price": "7,00",
            "image": ""
          },
          {
            "id": 254485,
            "active": true,
            "name": {
              "el": "Crodino Spritz",
              "en": "Aperol spritz"
            },
            "description": {
              "el": "Παραδοσιακό Ιταλικό αφέψημα με υπέροχη γεύση ( 0% alcohol )",
              "en": "Prosecco, aperol, soda."
            },
            "price": "6.00",
            "image": "/storage/38857/menurio-kazanoba-tapas-bar-pr-gr-2025-06-12-23-21-47.jpeg"
          }
        ]
      },
      {
        "id": 131388,
        "active": true,
        "name": {
          "el": "Classic Cocktails",
          "en": "Classics Cocktails"
        },
        "description": {
          "el": "",
          "en": ""
        },
        "image": "/storage/28041/menurio-kazanoba-tapas-bar-pr-gr-2024-07-16-15-06-59.jpeg",
        "notes": [
          {
            "el": "Επιλογές — *Μπορείτε να επιλέξετε τα αγαπημένα σας κοκτέιλ με γεύσεις μάνγκο ή φράουλα ή φρούτα του πάθους",
            "en": "Options — *You can choose your favorite cocktails with mango or strawberry or passion fruit flavors"
          }
        ],
        "items": [
          {
            "id": 131395,
            "active": true,
            "name": {
              "el": "Paloma",
              "en": "Paloma"
            },
            "description": {
              "el": "Tequila Blanco, Lime Juice , Grapefruit soda",
              "en": "Olmeca Altos Plata, agave, lime, greipfruit soda."
            },
            "price": "7.50",
            "image": ""
          },
          {
            "id": 259092,
            "active": true,
            "name": {
              "el": "Mojito με γεύσεις ( Ανανά, Καρύδα, , Μανταρίνι, Passion Fruit, Φράουλα )",
              "en": "Mojito"
            },
            "description": {
              "el": "Mojito with flavors (Pineapple, Mango, Coconut, Watermelon, Mandarin, Passion Fruit, Strawberry)",
              "en": "Havana Club Añejo 3yo, spearmint, lime, mint, soda."
            },
            "price": "8.00",
            "image": ""
          },
          {
            "id": 131415,
            "active": true,
            "name": {
              "el": "Mojito",
              "en": "Mojito"
            },
            "description": {
              "el": "Havana Club Añejo 3yo , Clement, Herba Buena, Lime Juice, Mint , Soda",
              "en": "Havana Club Añejo 3yo, spearmint, lime, mint, soda."
            },
            "price": "7.50",
            "image": ""
          },
          {
            "id": 131391,
            "active": true,
            "name": {
              "el": "Moscow mule",
              "en": "Moscow mule"
            },
            "description": {
              "el": "Vodka, Lime Juice, Ginger Beer , Angostura Bitter",
              "en": "Absolut vodka, lime, ginger beer , bitter ,salt pinch."
            },
            "price": "8.00",
            "image": ""
          },
          {
            "id": 131389,
            "active": true,
            "name": {
              "el": "Manhattan",
              "en": "Manhattan"
            },
            "description": {
              "el": "Bourbon, Vermouth , Bittermens, Orange Cream Bitter",
              "en": "Four roses Bourbon, vermouth , bitter cacao."
            },
            "price": "8.00",
            "image": ""
          },
          {
            "id": 131390,
            "active": true,
            "name": {
              "el": "Tommy’ s Margarita",
              "en": "Tommy’ s Margarita"
            },
            "description": {
              "el": "Reposado Tequila, Agave , Lime Juice",
              "en": "Olmeca Altos Reposado, agave syrup, lime."
            },
            "price": "8.00",
            "image": ""
          },
          {
            "id": 131392,
            "active": true,
            "name": {
              "el": "Porn star Martini",
              "en": "Porn star Martini"
            },
            "description": {
              "el": "Vodka, Passoa, Passion Fruit , Vanilla Syrup , Lime Juice",
              "en": "Absolut vodka, Passoa, passion fruit, gomme syrup, lime, brut champagne."
            },
            "price": "7.50",
            "image": ""
          },
          {
            "id": 131393,
            "active": true,
            "name": {
              "el": "Mezcalita",
              "en": "Mezcalita"
            },
            "description": {
              "el": "Mezcal, Daisy Triple Sec, Agave syrup, Lime Juice",
              "en": "Del Maguey Vida Mezcal, dry curacao, agave syrup, lime."
            },
            "price": "8.00",
            "image": ""
          },
          {
            "id": 131396,
            "active": true,
            "name": {
              "el": "Dark & Stormy",
              "en": "Dark & Stormy"
            },
            "description": {
              "el": "Blend rum, gomme syrup ,lime ,ginger beer , bitter.",
              "en": "Blend rum, gomme syrup ,lime ,ginger beer , bitter."
            },
            "price": "7.50",
            "image": ""
          },
          {
            "id": 131397,
            "active": true,
            "name": {
              "el": "Old fashioned",
              "en": "Old fashioned"
            },
            "description": {
              "el": "Four Roses Bourbon, sugar syrup, vanilla, bitters.",
              "en": "Four Roses Bourbon, sugar syrup, vanilla, bitters."
            },
            "price": "8.00",
            "image": ""
          },
          {
            "id": 131401,
            "active": true,
            "name": {
              "el": "Dry martini",
              "en": "Dry martini"
            },
            "description": {
              "el": "London Dry gin, Dry Vermouth, Orange Cream Bittermens",
              "en": "Beefeater London Dry gin, dry Vermouth, orange bitter."
            },
            "price": "7.50",
            "image": ""
          },
          {
            "id": 131403,
            "active": true,
            "name": {
              "el": "Apple martini",
              "en": "Apple martini"
            },
            "description": {
              "el": "Vodka, Macho Apple Liquer, Lime Juice, Gomme Syrup.",
              "en": "Absolut vodka, apple liqueur, lime, gum syrup."
            },
            "price": "7.50",
            "image": ""
          },
          {
            "id": 131404,
            "active": true,
            "name": {
              "el": "Cosmopolitan",
              "en": "Cosmopolitan"
            },
            "description": {
              "el": "Vodka, Daisy Triple Sec, Crampberry Juice, Lime Juice",
              "en": "Absolut vodka citron, crampberry juice, lime, dry curacao, salt pinch."
            },
            "price": "8.00",
            "image": ""
          },
          {
            "id": 131405,
            "active": true,
            "name": {
              "el": "Zombie",
              "en": "Zombie"
            },
            "description": {
              "el": "Apletton Estate, Gosling Black Seal, Falernum Homade, Plantaray, Pineapple, Grenadine, Grapefruit & Lime Juice , Cinnamon Syrop, Bitter Dash",
              "en": "Havana Club Añejo 3yo, velvet falernum, pineapple, grenadine, grapefruit & lime juice, bitter."
            },
            "price": "8.50",
            "image": ""
          },
          {
            "id": 131406,
            "active": true,
            "name": {
              "el": "Long island Iced Tea",
              "en": "Long island iced tea"
            },
            "description": {
              "el": "Havana Club Añejo 3yo, dry curacao, Absolut vodka, Beefeater London Dry Gin, Olmega Altos Plata, lime, gomme syrup, coca cola.",
              "en": "Havana Club Añejo 3yo, dry curacao, Absolut vodka, Beefeater London Dry Gin, Olmega Altos Plata, lime, gum syrup, coca cola."
            },
            "price": "8.00",
            "image": ""
          },
          {
            "id": 131408,
            "active": true,
            "name": {
              "el": "Caipirinhia",
              "en": "Caipirinha"
            },
            "description": {
              "el": "Cachaça Janeiro, lime, sugar syrup.",
              "en": "Cachaça Janeiro, lime, sugar syrup."
            },
            "price": "7.50",
            "image": ""
          },
          {
            "id": 131410,
            "active": true,
            "name": {
              "el": "Daquiri",
              "en": "Daquiri lime"
            },
            "description": {
              "el": "Havana Club Añejo 3yo, Gomme Syrup , Lime Juice",
              "en": "Havana Club Añejo 3yo, lime, gomme syrup , clement."
            },
            "price": "7.50",
            "image": ""
          },
          {
            "id": 131411,
            "active": true,
            "name": {
              "el": "Cuba Libre",
              "en": "Free Cuba"
            },
            "description": {
              "el": "Havana Club Añejo Especial, Coca cola, Lime, Sugar.",
              "en": "Havana Club Añejo Especial, Coca Cola, lime, sugar."
            },
            "price": "7.50",
            "image": ""
          },
          {
            "id": 131412,
            "active": true,
            "name": {
              "el": "Margarita",
              "en": "Margarita"
            },
            "description": {
              "el": "Tequila Blanco, Daisy Triple Sec , Lime Juice",
              "en": "Omleca Altos Plata, Daisy triple sec , lime."
            },
            "price": "8.00",
            "image": ""
          },
          {
            "id": 131413,
            "active": true,
            "name": {
              "el": "Mai tai",
              "en": "Come on"
            },
            "description": {
              "el": "Apletton Estate, Plantaray Xaymace, Daisy Triple Sec, Orgeat, Lime Juice, Bittermens Dash",
              "en": "Blend Rum , dry Curaçao , orgeat, lime, bitter."
            },
            "price": "8.00",
            "image": ""
          },
          {
            "id": 131416,
            "active": true,
            "name": {
              "el": "Bramble",
              "en": "Bramble"
            },
            "description": {
              "el": "London Dry Gin, Lime Juice, Gomme Syrup, Crème De Moore.",
              "en": "Beefeater London Dry gin, lime, gomme syrup, crème de Moore."
            },
            "price": "7.50",
            "image": ""
          },
          {
            "id": 131407,
            "active": false,
            "name": {
              "el": "Caipirosca",
              "en": "Caipirosca"
            },
            "description": {
              "el": "Absolut vodka, lime, sugar syrup.",
              "en": "Absolut vodka, lime, sugar syrup."
            },
            "price": "7.50",
            "image": ""
          }
        ]
      },
      {
        "id": 131417,
        "active": true,
        "name": {
          "el": "Mocktails",
          "en": "Mocktails"
        },
        "description": {
          "el": "",
          "en": ""
        },
        "image": "",
        "notes": [],
        "items": [
          {
            "id": 131419,
            "active": true,
            "name": {
              "el": "PALOMA 0%",
              "en": "VIRGIN MULE"
            },
            "description": {
              "el": "Pink grapefruit , lime, tequila 0% alcohol",
              "en": "Ginger beer , lime, gomme syrup."
            },
            "price": "6.00",
            "image": ""
          },
          {
            "id": 131420,
            "active": true,
            "name": {
              "el": "Mojito 0% alcohol",
              "en": "BUTTERFLY."
            },
            "description": {
              "el": "Soda Water, Lime, Gomme Syrup, Fresh Mint",
              "en": "Rum 0%, Chestnut & Raspberry Soda, Co2."
            },
            "price": "6.00",
            "image": ""
          },
          {
            "id": 131421,
            "active": true,
            "name": {
              "el": "Bramble 0% alcohol",
              "en": "BRAMBLE NON ALCOHOLIC"
            },
            "description": {
              "el": "Gin 0%, Lemon, Gomme, Syrup Blackberry",
              "en": "Gin 0%, lemon, gomme, syrup blackberry."
            },
            "price": "6.00",
            "image": ""
          }
        ]
      }
    ]
  },
  {
    "id": 6216,
    "order": 6,
    "slug": "s-6216",
    "image": "https://app.menurio.com/storage/28040/menurio-kazanoba-tapas-bar-pr-gr-2024-07-16-15-06-40.jpeg",
    "name": {
      "el": "Ποτά",
      "en": "Drinks"
    },
    "description": {
      "el": "",
      "en": ""
    },
    "categories": [
      {
        "id": 131512,
        "active": true,
        "name": {
          "el": "ΤΖΙΝ / GIN",
          "en": "GIN / GIN"
        },
        "description": {
          "el": "",
          "en": ""
        },
        "image": "/storage/28040/menurio-kazanoba-tapas-bar-pr-gr-2024-07-16-15-06-40.jpeg",
        "notes": [],
        "items": [
          {
            "id": 131513,
            "active": true,
            "name": {
              "el": "MALFY GIN ORIGINALE",
              "en": "MALFY GIN ORIGINALS"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "8.00",
            "image": "/storage/20504/menurio-tiflomigha-kafe-potopolio-2024-03-20-12-43-22.jpeg"
          },
          {
            "id": 131514,
            "active": true,
            "name": {
              "el": "MALFY GIN CON LIMONE",
              "en": "MALFY GIN WITH LEMON"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "8.00",
            "image": "/storage/19863/menurio-tiflomigha-kafe-potopolio-2024-02-23-21-59-24.jpeg"
          },
          {
            "id": 131515,
            "active": true,
            "name": {
              "el": "MALFY GIN CON ARANCIA",
              "en": "MALFY GIN WITH ORANGE"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "8.00",
            "image": "/storage/19864/menurio-tiflomigha-kafe-potopolio-2024-02-23-21-59-51.jpeg"
          },
          {
            "id": 131516,
            "active": true,
            "name": {
              "el": "MALFY GIN ROSA",
              "en": "MALFY PINK GIN"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "8.00",
            "image": "/storage/19865/menurio-tiflomigha-kafe-potopolio-2024-02-23-22-00-11.jpeg"
          },
          {
            "id": 131517,
            "active": true,
            "name": {
              "el": "BEEFEATER LONDON DRY GIN",
              "en": "BEEFEATER LONDON DRY GIN"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "8.00",
            "image": "/storage/19862/menurio-tiflomigha-kafe-potopolio-2024-02-23-21-58-43.jpeg"
          },
          {
            "id": 131518,
            "active": true,
            "name": {
              "el": "BEEFEATER 24",
              "en": "BEEFEATER 24"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "9.00",
            "image": "/storage/19838/menurio-tiflomigha-kafe-potopolio-2024-02-23-18-39-00.jpeg"
          },
          {
            "id": 131519,
            "active": true,
            "name": {
              "el": "BEEFEATER PINK",
              "en": "BEEFEATER PINK"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "8.00",
            "image": "/storage/19942/menurio-tiflomigha-kafe-potopolio-2024-02-25-08-40-30.jpeg"
          },
          {
            "id": 131520,
            "active": true,
            "name": {
              "el": "PLYMOUTH",
              "en": "PLYMOUTH"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "9.00",
            "image": "/storage/19840/menurio-tiflomigha-kafe-potopolio-2024-02-23-18-41-54.jpeg"
          },
          {
            "id": 131521,
            "active": true,
            "name": {
              "el": "MONKEY 47",
              "en": "MONKEY 47"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "12.00",
            "image": "/storage/19839/menurio-tiflomigha-kafe-potopolio-2024-02-23-18-39-53.jpeg"
          },
          {
            "id": 131522,
            "active": true,
            "name": {
              "el": "KI. NO. BI.",
              "en": "KI. NO. BI."
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "14.00",
            "image": "/storage/19866/menurio-tiflomigha-kafe-potopolio-2024-02-23-22-00-36.jpeg"
          },
          {
            "id": 149542,
            "active": true,
            "name": {
              "el": "STAR OF BOMBAY",
              "en": "STAR OF BOMBAY"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "10.00",
            "image": ""
          },
          {
            "id": 131527,
            "active": true,
            "name": {
              "el": "BOMBAY",
              "en": "BOMBAY"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "8.00",
            "image": ""
          },
          {
            "id": 131524,
            "active": true,
            "name": {
              "el": "VOTANIKON",
              "en": "GORDON'S"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "8.00",
            "image": ""
          },
          {
            "id": 131530,
            "active": true,
            "name": {
              "el": "CITADELLE",
              "en": "CITADEL"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "8.00",
            "image": ""
          },
          {
            "id": 131529,
            "active": true,
            "name": {
              "el": "MATAROA",
              "en": "MATAROA"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "9.00",
            "image": ""
          },
          {
            "id": 131533,
            "active": true,
            "name": {
              "el": "ENGINE",
              "en": "ENGINE"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "10.00",
            "image": ""
          },
          {
            "id": 131525,
            "active": true,
            "name": {
              "el": "TANQUERAY",
              "en": "TANQUERAY"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "8.00",
            "image": ""
          },
          {
            "id": 131526,
            "active": true,
            "name": {
              "el": "TANQUERAY 10",
              "en": "TANQUERAY 10"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "10.00",
            "image": ""
          },
          {
            "id": 131532,
            "active": true,
            "name": {
              "el": "G'VINE",
              "en": "G'VINE"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "10.00",
            "image": ""
          },
          {
            "id": 149543,
            "active": true,
            "name": {
              "el": "THE BOTANIST",
              "en": "THE BOTANIST"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "10.00",
            "image": ""
          },
          {
            "id": 131534,
            "active": true,
            "name": {
              "el": "ΑΒΑΝΤΕΣ GRACE",
              "en": "AVANTES GRACE"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "9.00",
            "image": ""
          },
          {
            "id": 131537,
            "active": true,
            "name": {
              "el": "HENDRICKS",
              "en": "HENDRICKS"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "10.00",
            "image": ""
          },
          {
            "id": 131539,
            "active": true,
            "name": {
              "el": "ETSU HANDCRAFTED",
              "en": "ETSU HANDCRAFTED"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "11.00",
            "image": ""
          },
          {
            "id": 131535,
            "active": true,
            "name": {
              "el": "GIN MARE",
              "en": "GIN MARE"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "12.00",
            "image": ""
          },
          {
            "id": 131528,
            "active": false,
            "name": {
              "el": "TANQUERAY RANGPUR",
              "en": "BOMBAY LIMITED EDITION"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "8.00",
            "image": ""
          }
        ]
      },
      {
        "id": 131540,
        "active": true,
        "name": {
          "el": "ΡΟΥΜΙ / RUM",
          "en": "RUM"
        },
        "description": {
          "el": "",
          "en": ""
        },
        "image": "",
        "notes": [],
        "items": [
          {
            "id": 131541,
            "active": true,
            "name": {
              "el": "Havana Club Añejo 3yo",
              "en": "Havana Club Añejo 3yo"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "8.00",
            "image": "/storage/19869/menurio-tiflomigha-kafe-potopolio-2024-02-23-22-09-03.jpeg"
          },
          {
            "id": 150853,
            "active": true,
            "name": {
              "el": "Havana Club Cuban Spiced",
              "en": "Havana Club Cuban Spiced"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "8.00",
            "image": "/storage/30937/menurio-kazanoba-tapas-bar-pr-gr-2024-12-09-21-09-17.jpeg"
          },
          {
            "id": 131542,
            "active": true,
            "name": {
              "el": "Havana Club Añejo Reserva",
              "en": "Havana Club Añejo Reserva"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "8.00",
            "image": "/storage/19943/menurio-tiflomigha-kafe-potopolio-2024-02-25-08-41-17.jpeg"
          },
          {
            "id": 131543,
            "active": true,
            "name": {
              "el": "Havana Club Añejo 7yo",
              "en": "Havana Club Añejo 7yo"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "8.00",
            "image": "/storage/19870/menurio-tiflomigha-kafe-potopolio-2024-02-23-22-14-33.jpeg"
          },
          {
            "id": 131545,
            "active": true,
            "name": {
              "el": "Havana Club Añejo Especial",
              "en": "Havana Club Añejo Especial"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "8.00",
            "image": "/storage/19944/menurio-tiflomigha-kafe-potopolio-2024-02-25-08-41-33.jpeg"
          },
          {
            "id": 131546,
            "active": true,
            "name": {
              "el": "BUMBU THE ORIGINAL",
              "en": "BUMBU THE ORIGINAL"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "10.00",
            "image": "/storage/19872/menurio-tiflomigha-kafe-potopolio-2024-02-23-22-15-47.jpeg"
          },
          {
            "id": 131547,
            "active": true,
            "name": {
              "el": "BUMBU XO",
              "en": "BUMBU XO"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "10.00",
            "image": "/storage/19873/menurio-tiflomigha-kafe-potopolio-2024-02-23-22-16-05.jpeg"
          },
          {
            "id": 131548,
            "active": true,
            "name": {
              "el": "BUMBU CREAM",
              "en": "BUMBU CREAM"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "10.00",
            "image": "/storage/19874/menurio-tiflomigha-kafe-potopolio-2024-02-23-22-16-31.jpeg"
          },
          {
            "id": 131557,
            "active": true,
            "name": {
              "el": "PLANTATION XAYMACA",
              "en": "PLANTATION DARK ORIGINAL"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "9.00",
            "image": ""
          },
          {
            "id": 131558,
            "active": true,
            "name": {
              "el": "PLANTATION SEALANDER",
              "en": "PLANTATION JAMAICA RUM"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "10",
            "image": ""
          },
          {
            "id": 131559,
            "active": true,
            "name": {
              "el": "PLANTATION PINEAPPLE",
              "en": "PLANTATION PINEAPPLE"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "12.00",
            "image": ""
          },
          {
            "id": 131561,
            "active": true,
            "name": {
              "el": "CHAIRMAN'S FORGOTTEN CASKS",
              "en": "CHERMAIN'S FORGOTTEN CASKS"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "10.00",
            "image": ""
          },
          {
            "id": 131560,
            "active": true,
            "name": {
              "el": "CHERMAIN'S SPICED",
              "en": "CHERMAIN'S SPICED"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "9.00",
            "image": ""
          },
          {
            "id": 131563,
            "active": true,
            "name": {
              "el": "SAILOR JERRY",
              "en": "SAILOR JERRY"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "8.00",
            "image": ""
          },
          {
            "id": 131565,
            "active": true,
            "name": {
              "el": "APPLETON ESTATE",
              "en": "APPLETON ESTATE"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "8.00",
            "image": ""
          },
          {
            "id": 131570,
            "active": true,
            "name": {
              "el": "ABUELO 7",
              "en": "ABUELO 7"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "9.00",
            "image": ""
          },
          {
            "id": 131571,
            "active": true,
            "name": {
              "el": "KRAKEN",
              "en": "KRAKEN"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "8.00",
            "image": ""
          },
          {
            "id": 131572,
            "active": true,
            "name": {
              "el": "RON LEGENDARIO ELIXIR 7",
              "en": "RON LEGENDARIO ELIXIR 7"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "8.00",
            "image": ""
          },
          {
            "id": 131573,
            "active": true,
            "name": {
              "el": "DIPLOMATICO PLANAS",
              "en": "DIPLOMATICO PLANAS"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "9.00",
            "image": ""
          },
          {
            "id": 131574,
            "active": true,
            "name": {
              "el": "DIPLOMATICO MANTUANO",
              "en": "DIPLOMATICO MANTUANO"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "9.00",
            "image": ""
          },
          {
            "id": 131575,
            "active": true,
            "name": {
              "el": "DIPLOMATICO RESERVE",
              "en": "DIPLOMATICO RESERVE"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "11.00",
            "image": ""
          },
          {
            "id": 131576,
            "active": true,
            "name": {
              "el": "EL DORADO 12",
              "en": "PYRAT XO RESERVE"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "12.00",
            "image": ""
          },
          {
            "id": 131577,
            "active": true,
            "name": {
              "el": "EL DORADO 15",
              "en": "SANTA TERESA 1976"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "15.00",
            "image": ""
          },
          {
            "id": 131580,
            "active": true,
            "name": {
              "el": "MATUSALEM GRAN RESERVA",
              "en": "MATUSALEM GRAN RESERVA"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "10.00",
            "image": ""
          },
          {
            "id": 131581,
            "active": true,
            "name": {
              "el": "CANEROCK",
              "en": "MATUSALEM 23 GRAND RESERVE"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "10.00",
            "image": ""
          },
          {
            "id": 131578,
            "active": true,
            "name": {
              "el": "DON PAPA",
              "en": "DON PAPA"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "12.00",
            "image": ""
          },
          {
            "id": 131579,
            "active": true,
            "name": {
              "el": "ZACAPA 23",
              "en": "ZACAPA 23"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "13.00",
            "image": ""
          },
          {
            "id": 149544,
            "active": false,
            "name": {
              "el": "Havana Club Selección Pacto Navio",
              "en": "Havana Club Selección De Maestros"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "11.00",
            "image": "/storage/19871/menurio-tiflomigha-kafe-potopolio-2024-02-23-22-15-00.jpeg"
          },
          {
            "id": 131544,
            "active": false,
            "name": {
              "el": "Havana Club Selección De Maestros",
              "en": "Havana Club Selección De Maestros"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "12.00",
            "image": "/storage/19871/menurio-tiflomigha-kafe-potopolio-2024-02-23-22-15-00.jpeg"
          },
          {
            "id": 131562,
            "active": false,
            "name": {
              "el": "RON BARCELO IMPERIAL",
              "en": "RON BARCELO"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "9.00",
            "image": ""
          }
        ]
      },
      {
        "id": 131582,
        "active": true,
        "name": {
          "el": "ΤΕΚΙΛΑ / TEQUILA",
          "en": "TEQUILA / TEQUILA"
        },
        "description": {
          "el": "",
          "en": ""
        },
        "image": "",
        "notes": [],
        "items": [
          {
            "id": 131585,
            "active": true,
            "name": {
              "el": "ALTOS PLATA",
              "en": "ALTOS PLATA"
            },
            "description": {
              "el": "8.00",
              "en": "7.00"
            },
            "price": "",
            "image": "/storage/19878/menurio-tiflomigha-kafe-potopolio-2024-02-23-22-27-05.jpeg"
          },
          {
            "id": 131586,
            "active": true,
            "name": {
              "el": "ALTOS REPOSADO",
              "en": "ALTOS REPOSADO"
            },
            "description": {
              "el": "8.00",
              "en": "7.00"
            },
            "price": "",
            "image": "/storage/19945/menurio-tiflomigha-kafe-potopolio-2024-02-25-08-42-24.jpeg"
          },
          {
            "id": 131587,
            "active": true,
            "name": {
              "el": "DEL MAGUEY VIDA MEZCAL",
              "en": "DEL MAGUEY VIDA MEZCAL"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "12.00",
            "image": "/storage/19879/menurio-tiflomigha-kafe-potopolio-2024-02-23-22-28-26.jpeg"
          },
          {
            "id": 131590,
            "active": true,
            "name": {
              "el": "DON JULIO BLANCO",
              "en": "DON JULIO BLANCO"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "11.00",
            "image": ""
          },
          {
            "id": 131591,
            "active": true,
            "name": {
              "el": "DON JULIO REPOSADO",
              "en": "DON JULIO REPOSADO"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "12.00",
            "image": ""
          },
          {
            "id": 131592,
            "active": true,
            "name": {
              "el": "PATRON SILVER",
              "en": "THE WHITE HIMATOR"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "11.00",
            "image": ""
          },
          {
            "id": 131593,
            "active": true,
            "name": {
              "el": "PATRON REPOSADO",
              "en": "EL HIMADOR REPOSADO"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "12.00",
            "image": ""
          },
          {
            "id": 131594,
            "active": true,
            "name": {
              "el": "PATRON ANEJO",
              "en": "1800 SILVER"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "15.00",
            "image": ""
          },
          {
            "id": 131596,
            "active": true,
            "name": {
              "el": "HERRADURA REPOSADO",
              "en": "HERRADURA"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "10.00",
            "image": ""
          },
          {
            "id": 131597,
            "active": true,
            "name": {
              "el": "MEZCAL VERDE MOMENTO",
              "en": "GUSANO ROJO (MEZCAL)"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "10.00",
            "image": ""
          },
          {
            "id": 131598,
            "active": true,
            "name": {
              "el": "VIDA MEZCAL",
              "en": "VIDA MEZCAL"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "12.00",
            "image": ""
          },
          {
            "id": 131595,
            "active": false,
            "name": {
              "el": "1800 SILVER",
              "en": "1800 REPOSADO"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "12.00",
            "image": ""
          },
          {
            "id": 131588,
            "active": false,
            "name": {
              "el": "ROOSTER ROJO MEZCAL",
              "en": "JOSE QUERVO BLANCO"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "12.00",
            "image": ""
          }
        ]
      },
      {
        "id": 131599,
        "active": true,
        "name": {
          "el": "ΒΟΤΚΑ / VODKA",
          "en": "VODKA"
        },
        "description": {
          "el": "",
          "en": ""
        },
        "image": "",
        "notes": [],
        "items": [
          {
            "id": 131600,
            "active": true,
            "name": {
              "el": "Absolut vodka",
              "en": "Absolut vodka"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "8.00",
            "image": "/storage/19880/menurio-tiflomigha-kafe-potopolio-2024-02-23-22-29-09.jpeg"
          },
          {
            "id": 141746,
            "active": true,
            "name": {
              "el": "Absolut citron",
              "en": "Absolut citron"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "8.00",
            "image": ""
          },
          {
            "id": 131603,
            "active": true,
            "name": {
              "el": "STOLICHNAYA",
              "en": "STOLICHNAYA"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "8.00",
            "image": ""
          },
          {
            "id": 131605,
            "active": true,
            "name": {
              "el": "STOLICHNAYA ELIT",
              "en": "STOLICHNAYA ELIT"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "15.00",
            "image": ""
          },
          {
            "id": 131606,
            "active": true,
            "name": {
              "el": "KETEL ONE",
              "en": "KETEL ONE"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "8.00",
            "image": ""
          },
          {
            "id": 131609,
            "active": true,
            "name": {
              "el": "CIROC",
              "en": "CIROC"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "10.00",
            "image": ""
          },
          {
            "id": 131604,
            "active": true,
            "name": {
              "el": "BELVEDERE",
              "en": "SCORPPIO"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "11.00",
            "image": ""
          },
          {
            "id": 131607,
            "active": true,
            "name": {
              "el": "GREY GOOSE",
              "en": "GREY GOOSE"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "11.00",
            "image": ""
          },
          {
            "id": 131602,
            "active": true,
            "name": {
              "el": "BELUGA",
              "en": "42 BELOW"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "12.00",
            "image": ""
          },
          {
            "id": 131608,
            "active": true,
            "name": {
              "el": "CRYSTAL HEAD",
              "en": "CRYSTAL HEAD"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "14.00",
            "image": ""
          },
          {
            "id": 149546,
            "active": true,
            "name": {
              "el": "URSUS RED",
              "en": "CRYSTAL HEAD"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "8.00",
            "image": ""
          },
          {
            "id": 131601,
            "active": false,
            "name": {
              "el": "Absolut Elyx",
              "en": "Absolutely Elyx"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "11.00",
            "image": "/storage/19881/menurio-tiflomigha-kafe-potopolio-2024-02-23-22-29-27.jpeg"
          },
          {
            "id": 141747,
            "active": false,
            "name": {
              "el": "KAUFFMAN",
              "en": "KAUFFMAN"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "11.00",
            "image": ""
          }
        ]
      },
      {
        "id": 131610,
        "active": true,
        "name": {
          "el": "IRISH WHISKIES",
          "en": "IRISH WHISKIES"
        },
        "description": {
          "el": "",
          "en": ""
        },
        "image": "",
        "notes": [],
        "items": [
          {
            "id": 131611,
            "active": true,
            "name": {
              "el": "JAMESON",
              "en": "JAMESON"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "8.00",
            "image": "/storage/19946/menurio-tiflomigha-kafe-potopolio-2024-02-25-08-43-10.jpeg"
          },
          {
            "id": 131612,
            "active": true,
            "name": {
              "el": "JAMESON CASKMATES",
              "en": "JAMESON CASKMATES"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "8.00",
            "image": "/storage/19883/menurio-tiflomigha-kafe-potopolio-2024-02-23-22-32-55.jpeg"
          },
          {
            "id": 131613,
            "active": true,
            "name": {
              "el": "JAMESON BLACK BARREL",
              "en": "JAMESON BLACK BARREL"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "8.00",
            "image": "/storage/19988/menurio-tiflomigha-kafe-potopolio-2024-02-28-07-02-34.jpeg"
          },
          {
            "id": 149548,
            "active": true,
            "name": {
              "el": "JAMESON CASKMATES IPA EDITION",
              "en": "JAMESON CASKMATES IPA EDITION"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "9.00",
            "image": "/storage/19883/menurio-tiflomigha-kafe-potopolio-2024-02-23-22-32-55.jpeg"
          },
          {
            "id": 149549,
            "active": true,
            "name": {
              "el": "JAMESON SINGLE POT STILL",
              "en": "JAMESON SINGLE POT STILL"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "10.00",
            "image": "/storage/19883/menurio-tiflomigha-kafe-potopolio-2024-02-23-22-32-55.jpeg"
          },
          {
            "id": 131615,
            "active": true,
            "name": {
              "el": "REDBREAST 12YO",
              "en": "REDBREAST 12YO"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "12.00",
            "image": "/storage/19947/menurio-tiflomigha-kafe-potopolio-2024-02-25-08-51-11.jpeg"
          },
          {
            "id": 131616,
            "active": true,
            "name": {
              "el": "TULLAMORE",
              "en": "TULLAMORE"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "8.00",
            "image": ""
          },
          {
            "id": 131617,
            "active": true,
            "name": {
              "el": "TULLAMORE DEW 12",
              "en": "TULLAMORE DEW 12"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "10.00",
            "image": ""
          },
          {
            "id": 131618,
            "active": true,
            "name": {
              "el": "TULLAMORE CARIBBEAN CASKS",
              "en": "TULLAMORE CARIBBEAN CASKS"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "9.00",
            "image": ""
          },
          {
            "id": 131619,
            "active": true,
            "name": {
              "el": "BUSHMILLS",
              "en": "BUSHMILLS"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "8.00",
            "image": ""
          },
          {
            "id": 131620,
            "active": true,
            "name": {
              "el": "BUSHMILLS BLACK BUSH",
              "en": "BUSHMILLS BLACK BUSH"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "9.00",
            "image": ""
          },
          {
            "id": 149555,
            "active": true,
            "name": {
              "el": "TEELING WHISKEY SMALL BATCH",
              "en": "TEELING WHISKEY SMALL BATCH"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "10.00",
            "image": ""
          },
          {
            "id": 131621,
            "active": true,
            "name": {
              "el": "KILBEGGAN CONNEMARA PEATED",
              "en": "KILBEGGAN CONNEMARA PEATED"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "9.00",
            "image": ""
          },
          {
            "id": 149550,
            "active": true,
            "name": {
              "el": "ROE & CO",
              "en": "ROE & CO"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "10.0",
            "image": ""
          },
          {
            "id": 131614,
            "active": false,
            "name": {
              "el": "JAMESON 18YO",
              "en": "JAMESON 18YO"
            },
            "description": {
              "el": "10.00",
              "en": "10.00"
            },
            "price": "",
            "image": "/storage/19885/menurio-tiflomigha-kafe-potopolio-2024-02-23-22-33-47.jpeg"
          }
        ]
      },
      {
        "id": 131622,
        "active": true,
        "name": {
          "el": "SCOTCH WHISKEY",
          "en": "SCOTCH WHISKEY"
        },
        "description": {
          "el": "",
          "en": ""
        },
        "image": "",
        "notes": [],
        "items": [
          {
            "id": 131623,
            "active": true,
            "name": {
              "el": "CHIVAS REGAL 12YO",
              "en": "CHIVAS REGAL 12YO"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "9.00",
            "image": "/storage/19886/menurio-tiflomigha-kafe-potopolio-2024-02-23-22-34-31.jpeg"
          },
          {
            "id": 131624,
            "active": true,
            "name": {
              "el": "Chivas Extra 13 yo",
              "en": "Chivas Extra 13 yo"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "10",
            "image": "/storage/20505/menurio-tiflomigha-kafe-potopolio-2024-03-20-12-48-01.jpeg"
          },
          {
            "id": 131625,
            "active": true,
            "name": {
              "el": "CHIVAS REGAL 18YO",
              "en": "CHIVAS REGAL 18YO"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "16",
            "image": "/storage/19888/menurio-tiflomigha-kafe-potopolio-2024-02-23-22-35-22.jpeg"
          },
          {
            "id": 131626,
            "active": true,
            "name": {
              "el": "BALLANTINE'S FINEST",
              "en": "BALLANTINE'S FINEST"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "8.00",
            "image": "/storage/19889/menurio-tiflomigha-kafe-potopolio-2024-02-23-22-35-53.jpeg"
          },
          {
            "id": 131628,
            "active": true,
            "name": {
              "el": "CANADIAN",
              "en": "DEWAR'S"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "7.00",
            "image": ""
          },
          {
            "id": 131629,
            "active": true,
            "name": {
              "el": "CARDHU 12",
              "en": "DEWAR'S 12"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "9.00",
            "image": ""
          },
          {
            "id": 131630,
            "active": true,
            "name": {
              "el": "CUTTY SARK",
              "en": "CUTTY SARK"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "7.00",
            "image": ""
          },
          {
            "id": 131631,
            "active": true,
            "name": {
              "el": "HAIG",
              "en": "HAIG"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "7.00",
            "image": ""
          },
          {
            "id": 131632,
            "active": true,
            "name": {
              "el": "FAMOUS GROUSE",
              "en": "FAMOUS GROUSE"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "7.00",
            "image": ""
          },
          {
            "id": 131633,
            "active": true,
            "name": {
              "el": "JOHNIE WALKER RED LABEL",
              "en": "JOHNIE WALKER RED LABEL"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "7.00",
            "image": ""
          },
          {
            "id": 149552,
            "active": true,
            "name": {
              "el": "JOHNIE WALKER DOUBLE BLACK LABEL",
              "en": "JOHNIE WALKER DOUBLE BLACK LABEL"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "10.00",
            "image": ""
          },
          {
            "id": 131634,
            "active": true,
            "name": {
              "el": "JOHNIE WALKER BLACK LABEL",
              "en": "JOHNIE WALKER BLACK LABEL"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "9.00",
            "image": ""
          },
          {
            "id": 131635,
            "active": true,
            "name": {
              "el": "JOHNIE WALKER GOLD LABEL",
              "en": "JOHNIE WALKER GOLD LABEL"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "12.00",
            "image": ""
          },
          {
            "id": 131636,
            "active": true,
            "name": {
              "el": "DIMPLE",
              "en": "DIMPLE"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "9.00",
            "image": ""
          },
          {
            "id": 149931,
            "active": true,
            "name": {
              "el": "CARDHU 12",
              "en": "CARDHU 12"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "9.00",
            "image": ""
          },
          {
            "id": 131637,
            "active": true,
            "name": {
              "el": "LAPHROAIG",
              "en": "LAPHROAIG"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "15.00",
            "image": ""
          },
          {
            "id": 149553,
            "active": true,
            "name": {
              "el": "THE GLENORTHES 12",
              "en": "THE GLENORTHES 12"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "12.00",
            "image": ""
          },
          {
            "id": 131638,
            "active": true,
            "name": {
              "el": "GLENFIDICH 12",
              "en": "GLENFIDICH 12"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "10.00",
            "image": ""
          },
          {
            "id": 131639,
            "active": true,
            "name": {
              "el": "GLENFIDICH 15",
              "en": "GLENFIDICH 15"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "14.00",
            "image": ""
          },
          {
            "id": 131640,
            "active": true,
            "name": {
              "el": "GLENFIDICH 18",
              "en": "GLENFIDICH 18"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "20.00",
            "image": ""
          },
          {
            "id": 131642,
            "active": true,
            "name": {
              "el": "MONKEY SHOULDER",
              "en": "MONKEY SHOULDER"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "9.00",
            "image": ""
          },
          {
            "id": 131643,
            "active": true,
            "name": {
              "el": "BOWMORE 12",
              "en": "BOWMORE 12"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "14.00",
            "image": ""
          },
          {
            "id": 131645,
            "active": true,
            "name": {
              "el": "TALISKER 10",
              "en": "TALISKER 10"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "11.00",
            "image": ""
          },
          {
            "id": 131646,
            "active": true,
            "name": {
              "el": "DALWHINNIE 15",
              "en": "DALWHINNIE 15"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "15.00",
            "image": ""
          },
          {
            "id": 131648,
            "active": true,
            "name": {
              "el": "DALMORE 12",
              "en": "DALMORE 12"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "15.00",
            "image": ""
          },
          {
            "id": 149551,
            "active": false,
            "name": {
              "el": "JOHNIE WALKER GREEN LABEL 15",
              "en": "JOHNIE WALKER GREEN LABEL 15"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "12.00",
            "image": ""
          },
          {
            "id": 149558,
            "active": false,
            "name": {
              "el": "KILCHOMAN",
              "en": "KILCHOMAN"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "13.00",
            "image": ""
          },
          {
            "id": 131644,
            "active": false,
            "name": {
              "el": "OBAN 14",
              "en": "OBAN 14"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "14.00",
            "image": ""
          },
          {
            "id": 149554,
            "active": false,
            "name": {
              "el": "LAGAVULIN 12",
              "en": "LAGAVULIN 12"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "18.00",
            "image": ""
          },
          {
            "id": 131647,
            "active": false,
            "name": {
              "el": "LAGAVULIN 16",
              "en": "LAGAVULIN 12"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "22.00",
            "image": ""
          },
          {
            "id": 131649,
            "active": false,
            "name": {
              "el": "MACALLAN 12",
              "en": "MACALLAN 12"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "18.00",
            "image": ""
          },
          {
            "id": 131650,
            "active": false,
            "name": {
              "el": "ROYAL BRACKLA 12",
              "en": "ROYAL BRACKLA 12"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "16.00",
            "image": ""
          }
        ]
      },
      {
        "id": 131651,
        "active": true,
        "name": {
          "el": "BOURBON WHISKEY",
          "en": "BOURBON WHISKEY"
        },
        "description": {
          "el": "",
          "en": ""
        },
        "image": "",
        "notes": [],
        "items": [
          {
            "id": 131652,
            "active": true,
            "name": {
              "el": "FOUR ROSES BOURBON",
              "en": "FOUR ROSES BOURBON"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "8.00",
            "image": "/storage/19891/menurio-tiflomigha-kafe-potopolio-2024-02-23-22-36-48.jpeg"
          },
          {
            "id": 149557,
            "active": true,
            "name": {
              "el": "MICHTER'S US*1 STRAIGHT RYE",
              "en": "MICHTER'S US*1 STRAIGHT RYE"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "16.00",
            "image": ""
          },
          {
            "id": 131653,
            "active": true,
            "name": {
              "el": "JIM BEAM",
              "en": "JIM BEAM"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "8.00",
            "image": ""
          },
          {
            "id": 131654,
            "active": true,
            "name": {
              "el": "WILD TURKEY",
              "en": "WILD TURKEY"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "8.00",
            "image": ""
          },
          {
            "id": 131655,
            "active": true,
            "name": {
              "el": "BUFFALO TRACE",
              "en": "BUFFALO TRACE"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "8.00",
            "image": ""
          },
          {
            "id": 131656,
            "active": true,
            "name": {
              "el": "WOODFORD RESERVE",
              "en": "WOODFORD RESERVE"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "10.00",
            "image": ""
          }
        ]
      },
      {
        "id": 131657,
        "active": true,
        "name": {
          "el": "MALT WHISKIES",
          "en": "MALT WHISKIES"
        },
        "description": {
          "el": "",
          "en": ""
        },
        "image": "",
        "notes": [],
        "items": [
          {
            "id": 131658,
            "active": true,
            "name": {
              "el": "THE GLENLIVET FOUNDER'S RESERVE",
              "en": "THE GLENLIVET FOUNDER'S RESERVE"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "9",
            "image": "/storage/19892/menurio-tiflomigha-kafe-potopolio-2024-02-23-22-37-36.jpeg"
          },
          {
            "id": 131661,
            "active": true,
            "name": {
              "el": "SCAPA SKIREN",
              "en": "SCAPA SKIREN"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "14",
            "image": "/storage/19895/menurio-tiflomigha-kafe-potopolio-2024-02-23-22-38-34.jpeg"
          }
        ]
      },
      {
        "id": 131662,
        "active": true,
        "name": {
          "el": "TENESSE WHISKIES",
          "en": "TENESSE WHISKIES"
        },
        "description": {
          "el": "",
          "en": ""
        },
        "image": "",
        "notes": [],
        "items": [
          {
            "id": 131663,
            "active": true,
            "name": {
              "el": "JACK DANIELS",
              "en": "JACK DANIELS"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "8.00",
            "image": ""
          },
          {
            "id": 131664,
            "active": true,
            "name": {
              "el": "JACK DANILES HONEY",
              "en": "JACK DANILES HONEY"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "8.00",
            "image": ""
          },
          {
            "id": 131665,
            "active": false,
            "name": {
              "el": "JACK DANILES SINGLE BARREL",
              "en": "JACK DANILES SINGLE BARREL"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "14.00",
            "image": ""
          },
          {
            "id": 131666,
            "active": false,
            "name": {
              "el": "JACK DANIELS GENTLEMAN",
              "en": "JACK DANIELS SINATRA"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "9.00",
            "image": ""
          }
        ]
      },
      {
        "id": 131667,
        "active": true,
        "name": {
          "el": "JAPANESE WHISKIES",
          "en": "JAPANESE WHISKIES"
        },
        "description": {
          "el": "",
          "en": ""
        },
        "image": "",
        "notes": [],
        "items": [
          {
            "id": 149561,
            "active": true,
            "name": {
              "el": "NIKKA DAYS",
              "en": "NIKKA DAYS"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "13.00",
            "image": ""
          },
          {
            "id": 131669,
            "active": true,
            "name": {
              "el": "YAMAZAKURA",
              "en": "YAMAZAKURA"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "15.00",
            "image": ""
          },
          {
            "id": 149559,
            "active": true,
            "name": {
              "el": "TOGOUSHI BEER CASK",
              "en": "TOGOUSHI BEER CASK"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "16.00",
            "image": ""
          },
          {
            "id": 131670,
            "active": false,
            "name": {
              "el": "NIKKA FROM THE BARREL",
              "en": "NIKKA COFFEY MALT"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "15.00",
            "image": ""
          },
          {
            "id": 149560,
            "active": false,
            "name": {
              "el": "TOGOUSHI PREMIUM BLEND",
              "en": "TOGOUSHI PREMIUM BLEND"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "15.00",
            "image": ""
          }
        ]
      },
      {
        "id": 131671,
        "active": true,
        "name": {
          "el": "LIQUEURS",
          "en": "LIQUEURS"
        },
        "description": {
          "el": "",
          "en": ""
        },
        "image": "",
        "notes": [],
        "items": [
          {
            "id": 149566,
            "active": true,
            "name": {
              "el": "DRAMBUIE",
              "en": "DRAMBUIE"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "9.00",
            "image": ""
          },
          {
            "id": 149567,
            "active": true,
            "name": {
              "el": "SOUTHERN COMFORT",
              "en": "SOUTHERN COMFORT"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "7.00",
            "image": ""
          },
          {
            "id": 149547,
            "active": true,
            "name": {
              "el": "SMIRNOFF NORTH",
              "en": "SMIRNOFF NORTH"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "7.00",
            "image": ""
          },
          {
            "id": 131672,
            "active": true,
            "name": {
              "el": "MALIBU",
              "en": "MALIBU"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "7.00",
            "image": "/storage/19896/menurio-tiflomigha-kafe-potopolio-2024-02-23-22-39-37.jpeg"
          },
          {
            "id": 149562,
            "active": true,
            "name": {
              "el": "TIA MARIA",
              "en": "TIA MARIA"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "7.00",
            "image": ""
          },
          {
            "id": 131673,
            "active": true,
            "name": {
              "el": "KAHLUA",
              "en": "KAHLUA"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "7.00",
            "image": "/storage/19897/menurio-tiflomigha-kafe-potopolio-2024-02-23-22-39-52.jpeg"
          },
          {
            "id": 149563,
            "active": true,
            "name": {
              "el": "SKINOS",
              "en": "SKINOS"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "7.00",
            "image": ""
          },
          {
            "id": 149565,
            "active": true,
            "name": {
              "el": "SKINOS DARK",
              "en": "SKINOS DARK"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "8.00",
            "image": ""
          },
          {
            "id": 149564,
            "active": true,
            "name": {
              "el": "M DRY MASTIHA",
              "en": "M DRY MASTIHA"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "7.00",
            "image": ""
          },
          {
            "id": 131674,
            "active": true,
            "name": {
              "el": "ROOTS MASTIHA",
              "en": "ROOTS MASTIHA"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "7.00",
            "image": "/storage/19898/menurio-tiflomigha-kafe-potopolio-2024-02-23-22-40-12.jpeg"
          },
          {
            "id": 131675,
            "active": true,
            "name": {
              "el": "ITALICUS ROSOLIO DI BERGAMOTTO",
              "en": "ITALICUS ROSOLIO DI BERGAMOTTO"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "",
            "image": "/storage/19899/menurio-tiflomigha-kafe-potopolio-2024-02-23-22-45-57.jpeg"
          },
          {
            "id": 131678,
            "active": true,
            "name": {
              "el": "FRANGELICO",
              "en": "FRANGELICO"
            },
            "description": {
              "el": "(λικέρ φουντουκιού)",
              "en": "(hazelnut liqueur)"
            },
            "price": "7.00",
            "image": ""
          },
          {
            "id": 131679,
            "active": true,
            "name": {
              "el": "COINTREAU",
              "en": "COINTREU"
            },
            "description": {
              "el": "(λικέρ πορτοκαλιού)",
              "en": "(orange liqueur)"
            },
            "price": "7.00",
            "image": ""
          },
          {
            "id": 131684,
            "active": true,
            "name": {
              "el": "BATIDA DE COCCO",
              "en": "COCCO SHAKE"
            },
            "description": {
              "el": "(λικέρ καρύδας)",
              "en": "(coconut liqueur)"
            },
            "price": "7.00",
            "image": ""
          },
          {
            "id": 131680,
            "active": true,
            "name": {
              "el": "BAILEYS",
              "en": "BAILEYS"
            },
            "description": {
              "el": "(λικέρ κρέμας)",
              "en": "(cream liqueur)"
            },
            "price": "7.00",
            "image": ""
          },
          {
            "id": 131681,
            "active": true,
            "name": {
              "el": "DISARONNO",
              "en": "DISARONNO"
            },
            "description": {
              "el": "(λικέρ πυκραμύγδαλου)",
              "en": "(bitter almond liqueur)"
            },
            "price": "7.00",
            "image": ""
          },
          {
            "id": 131683,
            "active": true,
            "name": {
              "el": "GRAND MARNIER",
              "en": "GRAND MARNIER"
            },
            "description": {
              "el": "(λικέρ πορτοκαλιού)",
              "en": "(orange liqueur)"
            },
            "price": "7.00",
            "image": ""
          }
        ]
      },
      {
        "id": 131685,
        "active": true,
        "name": {
          "el": "COGNAC",
          "en": "COGNAC"
        },
        "description": {
          "el": "",
          "en": ""
        },
        "image": "",
        "notes": [],
        "items": [
          {
            "id": 144050,
            "active": true,
            "name": {
              "el": "METAXA 12 STARS",
              "en": "METAXA 12 STARS"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "10.00",
            "image": ""
          },
          {
            "id": 149568,
            "active": true,
            "name": {
              "el": "METAXA 5 STARS",
              "en": "METAXA 5 STARS"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "7.00",
            "image": ""
          },
          {
            "id": 131686,
            "active": true,
            "name": {
              "el": "METAXA 7 STARS",
              "en": "MARTELL VS"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "8.00",
            "image": ""
          },
          {
            "id": 148097,
            "active": true,
            "name": {
              "el": "HENNESSY V.S.",
              "en": "HENNESSY V.S."
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "12.00",
            "image": ""
          },
          {
            "id": 150045,
            "active": false,
            "name": {
              "el": "REMY MARTIN V.S.O.P.",
              "en": "REMY MARTIN V.S.O.P."
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "14.00",
            "image": ""
          }
        ]
      },
      {
        "id": 131687,
        "active": true,
        "name": {
          "el": "APPERITIVE",
          "en": "APPERITIVE"
        },
        "description": {
          "el": "",
          "en": ""
        },
        "image": "",
        "notes": [],
        "items": [
          {
            "id": 131690,
            "active": true,
            "name": {
              "el": "APEROL",
              "en": "APEROL"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "7.00",
            "image": ""
          },
          {
            "id": 131691,
            "active": true,
            "name": {
              "el": "CAMPARI",
              "en": "CAMPARI"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "7.00",
            "image": ""
          },
          {
            "id": 131692,
            "active": true,
            "name": {
              "el": "JAGERMEISTER",
              "en": "JAGERMEISTER"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "8.00",
            "image": ""
          },
          {
            "id": 131694,
            "active": true,
            "name": {
              "el": "MARTINI BIANCO",
              "en": "MARTINI BIANCO"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "7.00",
            "image": ""
          },
          {
            "id": 131695,
            "active": true,
            "name": {
              "el": "SKINOS ΜΑΣΤΙΧΑ",
              "en": "SKINOS MASTICH"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "7.00",
            "image": ""
          },
          {
            "id": 131688,
            "active": false,
            "name": {
              "el": "ΣΠΙΤΙΚΟ ΡΑΚΟΜΕΛΟ",
              "en": "HOMEMADE ROCOMELO"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "",
            "image": ""
          },
          {
            "id": 131689,
            "active": false,
            "name": {
              "el": "ΣΠΙΤΙΚΟ ΟΙΝΟΜΕΛΟ",
              "en": "HOMEMADE WINE"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "",
            "image": ""
          },
          {
            "id": 131693,
            "active": false,
            "name": {
              "el": "MARTINI ROSSO",
              "en": "MARTINI ROSSO"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "7.00",
            "image": ""
          },
          {
            "id": 131696,
            "active": false,
            "name": {
              "el": "ΟΥΖΟ ΚΑΡΑΦΑΚΙ",
              "en": "Ouzo Carafe"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "",
            "image": ""
          },
          {
            "id": 131697,
            "active": false,
            "name": {
              "el": "ΤΣΙΠΟΥΡΟ ΚΑΡΑΦΑΚΙ 'Η ΡΑΚΙ",
              "en": "TSIPOOURO CARAFAKI OR RAKI"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "2.50",
            "image": ""
          },
          {
            "id": 131698,
            "active": false,
            "name": {
              "el": "ΤΣΙΠΟΥΡΟ ΗΔΩΝΙΚΟ 200ml",
              "en": "TSIPOURO IDONIKO 200ml"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "7.00",
            "image": ""
          }
        ]
      }
    ]
  },
  {
    "id": 6215,
    "order": 7,
    "slug": "s-6215",
    "image": "https://app.menurio.com/storage/19812/menurio-tiflomigha-kafe-potopolio-2024-02-22-13-40-33.jpeg",
    "name": {
      "el": "Μπύρες / Beers",
      "en": "Beers"
    },
    "description": {
      "el": "",
      "en": ""
    },
    "categories": [
      {
        "id": 131484,
        "active": true,
        "name": {
          "el": "Μπύρες / Beers Κατηγορία",
          "en": "Beers / Beers Category"
        },
        "description": {
          "el": "",
          "en": ""
        },
        "image": "",
        "notes": [],
        "items": [
          {
            "id": 131486,
            "active": true,
            "name": {
              "el": "Νύμφη ποτήρι 250 ml",
              "en": "FISHER BARREL 300ml"
            },
            "description": {
              "el": "Η Premium Hoppy Lager μπίρα που γεννήθηκε στη Θεσσαλονίκη, προσφέρει μια διαφορετική εμπειρία γεύσης με ανθώδες άρωμα, ήπια πικράδα 5 αρωματικών λυκίσκων και 100% Μακεδονικό κριθάρι αειφόρου παραγωγής. 5% Alc. Hoppy Lager",
              "en": "Heineken is a blonde lager beer with 100% natural ingredients and a small but important feature: A-Yeast. Heineken's unique A-Yeast (high quality yeast) creates the rich taste and subtle fruity notes that have made Heineken special since the 19th century. Ingredients: water, barley malt, hop extract, yeast. 5% alcohol"
            },
            "price": "4,00",
            "image": ""
          },
          {
            "id": 131487,
            "active": true,
            "name": {
              "el": "Νύμφη ποτήρι 400 ml",
              "en": "FISHER BARREL 400ml"
            },
            "description": {
              "el": "Η Premium Hoppy Lager μπίρα που γεννήθηκε στη Θεσσαλονίκη, προσφέρει μια διαφορετική εμπειρία γεύσης με ανθώδες άρωμα, ήπια πικράδα 5 αρωματικών λυκίσκων και 100% Μακεδονικό κριθάρι αειφόρου παραγωγής. 5% Alc. Hoppy Lager",
              "en": "Heineken is a blonde lager beer with 100% natural ingredients and a small but important feature: A-Yeast. Heineken's unique A-Yeast (high quality yeast) creates the rich taste and subtle fruity notes that have made Heineken special since the 19th century. Ingredients: water, barley malt, hop extract, yeast. 5% alcohol"
            },
            "price": "5,00",
            "image": ""
          },
          {
            "id": 131488,
            "active": true,
            "name": {
              "el": "Άλφα 330ml",
              "en": "ALPHA 330ml"
            },
            "description": {
              "el": "Δροσερή, ελαφριά, ξεδιψαστική, πίνεται εύκολα και διαθέτει πλούσιο αφρό. Συνδυάζει ένα λαμπερό χρυσαφί χρώμα και ένα απαλό άρωμα βύνης και μαγιάς. 5% Alc. Ξανθιά Lager",
              "en": "Blonde Light Lager. Cool thirst-quenching, with rich foam, and easy to drink, it fits perfectly with Greek tastes. It combines a bright golden color and a soft aroma of malt and yeast with 5% alcohol content. It is brewed with the same traditional recipe, entirely in Greece, with 100% Greek barley."
            },
            "price": "4.50",
            "image": "/storage/30808/menurio-kazanoba-tapas-bar-pr-gr-2024-11-29-16-58-12.jpeg"
          },
          {
            "id": 131491,
            "active": true,
            "name": {
              "el": "AMSTEL 330ml",
              "en": "AMSTEL 330ml"
            },
            "description": {
              "el": "Γιατί έτσι μας αρέσει! Περιέχει 5% αλκοόλ. Το χρυσό της χρώμα είναι αποτέλεσμα συνδυασμού ανοιχτόχρωμης και σκουρόχρωμης βύνης. Έχει γεμάτη γεύση και άρωμα λυκίσκου και μαγιάς.",
              "en": "Because we like it that way! Contains 5% alcohol. Its golden color is the result of a combination of light and dark malt. It has a full flavor and aroma of hops and yeast."
            },
            "price": "5.00",
            "image": "/storage/catalogimages/MPIO8xmX7rT2u6ukRkLlaukyeK337sRVghLTPrEQ.jpeg"
          },
          {
            "id": 131492,
            "active": true,
            "name": {
              "el": "Amstel Radler Lemon 2% 330ml",
              "en": "AMSTEL RADLER"
            },
            "description": {
              "el": "Αυθεντική μπίρα ΑΜΣΤΕΛ με χυμό λεμονιού και μόνο 2% αλκοόλ. Αυτή είναι η ΑΜΣΤΕΛ Radler Lemon. Μια αναζωογονητική και δροσιστική γεύση, που ξεδιψάει με φυσικό τρόπο. 2% Alc. Radler",
              "en": "AMSTEL RADLER LEMON 2% was created by combining the unsurpassed taste of Amstel with the freshness of Greek lemon juice. It is drunk chilled, contains 2% alcohol and has a naturally cloudy appearance due to the mixing of Amstel beer with Greek lemon juice. With its main characteristics of naturalness and coolness, AMSTEL RADLER LEMON 2% came to pleasantly \"quench\" your thirst at any moment of the day! It has only 35 calories per 100ml."
            },
            "price": "5.00",
            "image": "/storage/28606/menurio-kazanoba-tapas-bar-pr-gr-2024-08-26-15-15-00.jpeg"
          },
          {
            "id": 131493,
            "active": true,
            "name": {
              "el": "AMSTEL FREE",
              "en": "AMSTEL FREE"
            },
            "description": {
              "el": "Η ΑΜΣΤΕΛ FREE 0.0% αποτελεί μία εξαιρετικής ποιότητας δροσιστική μπίρα χωρίς αλκοόλ, φυσικά συστατικά και υπέροχη γεμάτη γεύση, αποτέλεσμα του μοναδικού συνδυασμού από φυσικές βύνες κριθαριού και σιταριού. Είναι η πρώτη μπίρα ελληνικής παραγωγής με 0,0% περιεκτικότητα σε αλκοόλ. Με μόλις 23 θερμίδες ανά 100 ml – λιγότερες από τα αλκοολούχα ποτά και σχεδόν τις μισές από μία μπίρα με αλκοόλ, η ΑΜΣΤΕΛ FREE 0.0% καταρρίπτει τους περιορισμούς και χαρίζει απόλαυση χωρίς όρια!",
              "en": "AMSTEL FREE 0.0% is an excellent quality refreshing beer without alcohol, natural ingredients and a wonderful full flavor, the result of the unique combination of natural barley and wheat malts. It is the first beer of Greek production with 0.0% alcohol content. With only 23 calories per 100 ml – less than alcoholic drinks and almost half of a beer with alcohol, AMSTEL FREE 0.0% breaks down restrictions and gives pleasure without limits!"
            },
            "price": "5,00",
            "image": "/storage/catalogimages/TAxch4UabwuLeOgP6MIce5eeYKCMEfTUyY3HykbG.jpeg"
          },
          {
            "id": 131496,
            "active": true,
            "name": {
              "el": "Heineken Original® 330ml",
              "en": "HEINEKEN 330ml"
            },
            "description": {
              "el": "Για πάνω από 150 χρόνια, η συνεχής δέσμευση της Heineken για ποιότητα την έχει κάνει μια από τις πιο εμβληματικές μάρκες μπίρας στον κόσμο. Όταν βλέπετε το κόκκινο αστέρι πάνω στο πράσινο μπουκάλι, ξέρετε ότι κάθε παγωμένη, δροσιστική γουλιά θα σας προσφέρει αυτή τη γεμάτη και απολαυστική γεύση με τις ήπιες φρουτώδεις νότες. 5% Alc. Ξανθιά Lager",
              "en": "Heineken is one of the most recognizable beers worldwide, but the most important thing for us in Greece is that for the last 35 years it has been our \"Green\". It is a Lager type beer with 5% alcohol."
            },
            "price": "5.50",
            "image": "/storage/catalogimages/5wIp5kEVBD4cuCJnFdl1biLvcVuStatPnwByKMe0.gif"
          },
          {
            "id": 131497,
            "active": true,
            "name": {
              "el": "Heineken 0.0% 330ml",
              "en": "HEINEKEN ZERO 330ml"
            },
            "description": {
              "el": "Ξεχωριστή, ισορροπημένη μπίρα χωρίς αλκοόλ, με αναζωογονητικές φρουτώδεις νότες και απαλό σώμα βύνης. Ζυθοποιείται όπως ακριβώς η αυθεντική Heineken με 100% βύνη και τη μοναδική μαγιά A -YEAST®, για μια υπέροχη γεύση, που μπορεί να προσφέρει μια αληθινή εμπειρία Heineken οποιαδήποτε στιγμή της ημέρας. Η μοναδική μπίρα χωρίς αλκοόλ στην ελληνική αγορά που ζυθοποιείται με τη διαδικασία αφαίρεσης του αλκοόλ, πετυχαίνοντας το καλύτερο δυνατό γευστικό αποτέλεσμα. 0,0% Alc. Ανοιχτόχρωμη Ξανθιά Lager Χωρίς Αλκοόλ",
              "en": "Heineken 0.0 is a distinctive, balanced alcohol-free beer with refreshing fruity notes and a smooth malt body. It is brewed just like the original Heineken with 100% malt and the unique A-Yeast, for a great taste that can provide a true Heineken experience at any time of the day. It is the only alcohol-free beer on the Greek market that is brewed with the alcohol removal process, achieving the best possible taste result. Heineken 0.0 has only 21 calories per 100ml, around 50% less than a regular lager."
            },
            "price": "5.00",
            "image": "/storage/catalogimages/vsfG85gMteX9Bfz7F7ghDFB9lvSOGb3EtcH3OL0k.jpeg"
          },
          {
            "id": 131499,
            "active": true,
            "name": {
              "el": "Μάμος 330ml",
              "en": "DADDY"
            },
            "description": {
              "el": "Υψηλής ποιότητας ζύθος με καταγωγή από τη Πάτρα που παράγεται από εκλεκτές πρώτες ύλες, με αναλλοίωτη την αυθεντική συνταγή του πρώτου Έλληνα διπλωματούχου ζυθοποιού, Πέτρου Μάμου. Μια ελληνική μπίρα που χαρακτηρίζεται από τη μεστή γεύση της, τον πλούσιο αφρό της καθώς και το ιδιαίτερο άρωμα 3 λυκίσκων. 5% Alc. Pilsener",
              "en": "It is a high quality beer, produced from selected raw materials with unchanged original recipe of the first Greek licensed brewer, Petros Mamou. It is characterized by its full taste, its rich foam as well as the special aroma of hops. Ingredients: Water, Barley Malt, Hops, Yeast Contains 5% alcohol"
            },
            "price": "5.00",
            "image": "/storage/28604/menurio-kazanoba-tapas-bar-pr-gr-2024-08-26-15-14-19.jpeg"
          },
          {
            "id": 131502,
            "active": true,
            "name": {
              "el": "Sol 330ml",
              "en": "SUN"
            },
            "description": {
              "el": "Γεννήθηκε το 1899 στο Μεξικό. Ο ήλιος της (SOL) συμβολίζει το ταξίδι στην ελευθερία και με μήνυμα «Taste The Sun», μας προτρέπει να αντλούμε ενέργεια καθημερινά από αυτόν. Η SOL είναι μία lager μπίρα, με 4.2% αλκοόλ, απαλή, δροσιστική και γλυκιά με ελαφρύ πικρό τελείωμα. 4,2% Alc. Exotic Lager",
              "en": "SOL was born in 1899 in Mexico, the year of its independence from the Spanish conquerors. Her sun (SOL) symbolizes the journey to freedom and with the message \"Taste the Sun\", she urges us to draw energy from it every day. SOL is a lager beer, with 4.5% alcohol, smooth, refreshing and sweet with a light bitter finish."
            },
            "price": "6,00",
            "image": "/storage/30810/menurio-kazanoba-tapas-bar-pr-gr-2024-11-29-17-00-07.jpeg"
          },
          {
            "id": 131494,
            "active": false,
            "name": {
              "el": "AMSTEL DARK",
              "en": "AMSTEL DARK"
            },
            "description": {
              "el": "Η Amstel Dark είναι μια μπίρα τύπου lager με 6% αλκοόλ. Παράγεται με βαθύχρωμη βύνη και φίνο αρωματικό λυκίσκο που της προσδίδουν το βαθυκόκκινο χρώμα της και τη μοναδικά γεμάτη και πλούσια γεύση της, ενώ εξακολουθεί να παραμένει ευκολόπιοτη. Απολαμβάνεται σε θερμοκρασία μεταξύ 8-10 C και προσφέρει μια ξεχωριστή εμπειρία στους καταναλωτές τις κρύες νύχτες του χειμώνα.",
              "en": "Amstel Dark is a lager beer with 6% alcohol. It is produced with deep colored malt and fine aromatic hops that give it its deep red color and its uniquely full and rich taste, while still remaining easy to drink. It is enjoyed at a temperature between 8-10 C and offers a special experience to consumers on cold winter nights."
            },
            "price": "4.50",
            "image": "/storage/catalogimages/Ekq246zPewcC45hBRdYQpVrsDAeTTE35f4bsCpuf.jpeg"
          },
          {
            "id": 131495,
            "active": false,
            "name": {
              "el": "Fischer 330ml",
              "en": "FISCHER"
            },
            "description": {
              "el": "Μπίρα υψηλής ποιότητας από την Αλσατία. Η εκλεπτυσμένη αισθητική της Γαλλίας και η μακροχρόνια παράδοση της Γερμανίας στη ζυθοποιία ενώνονται αρμονικά σε μία μπίρα εξαιρετικής ποιότητας, με ξεχωριστό χαρακτήρα χάρη στη μοναδική της γεύση και το διακριτικό αρωματικό προφίλ της. 5% Alc. Ξανθιά Lager",
              "en": "Fischer is a Pilsener type beer, with 5% alcohol content. It is characterized by its light color, the subtle presence of hops in the aroma, its slightly bitter taste and its characteristic aftertaste. Fischer is produced from the best natural ingredients of Alsace: water from underground springs, malt and barley from the fertile plains of the countryside. From 1821 to today, it remains faithful and consistent to the quality that generations of brewers \"built\" and maintained, with the same techniques and methods taught by Jean Fischer."
            },
            "price": "4.50",
            "image": "/storage/28605/menurio-kazanoba-tapas-bar-pr-gr-2024-08-26-15-14-35.jpeg"
          },
          {
            "id": 131501,
            "active": false,
            "name": {
              "el": "Νύμφη 330ml",
              "en": "NYMPH"
            },
            "description": {
              "el": "Η Premium Hoppy Lager μπίρα που γεννήθηκε στη Θεσσαλονίκη, προσφέρει μια διαφορετική εμπειρία γεύσης με ανθώδες άρωμα, ήπια πικράδα 5 αρωματικών λυκίσκων και 100% Μακεδονικό κριθάρι αειφόρου παραγωγής. 5% Alc. Hoppy Lager",
              "en": "NYMPHI is a hoppy lager beer with a golden appearance that, as its name suggests, is produced in Thessaloniki. The combination of 5 hops creates a beer with rich, floral aromas, fruity taste and mild bitter aftertaste. 100% Macedonian barley is used for its production, while the entire process of malting, brewing and bottling takes place in the modern facilities of the Athenian Brewery in Sindo, Thessaloniki."
            },
            "price": "5.00",
            "image": "/storage/30809/menurio-kazanoba-tapas-bar-pr-gr-2024-11-29-16-59-28.jpeg"
          },
          {
            "id": 131503,
            "active": false,
            "name": {
              "el": "BUD",
              "en": "BUD"
            },
            "description": {
              "el": "Μία από τις δημοφιλέστερες μπύρες στο πλανήτη, “The King of Beers”, όπως αναγράφεται στη φιάλη, η Bud παράγεται στις ΗΠΑ από το 1876. Δροσιστική, ελαφριά και φρέσκια αποτελεί την μπύρα προτίμησης εκατομμυρίων ανθρώπων στον πλανήτη.Η Bud περιέχει βύνη κριθαριού,λυκίσκο,μαγιά και νερό, αλλά και ρύζι (για αυτό και έχει τραγανή γεύση).Αλκοόλ 5% vol.",
              "en": "One of the most popular beers on the planet, “The King of Beers”, as it says on the bottle, Bud has been produced in the USA since 1876. Refreshing, light and fresh, it is the beer of choice for millions of people on the planet. Bud contains malted barley, hops , yeast and water, but also rice (that's why it has a crunchy taste). Alcohol 5% vol."
            },
            "price": "5.50",
            "image": "/storage/catalogimages/7UedvTtMSG7ynTohEgq3Is4obDP56zOKJwB44YAd.jpeg"
          },
          {
            "id": 131504,
            "active": false,
            "name": {
              "el": "Erdinger Weiss 500ml",
              "en": "ERDINGER WHITE"
            },
            "description": {
              "el": "Ξανθιά, θολή μπίρα από την καρδιά της Βαυαρίας. Παράγεται σύμφωνα με τον αυστηρό Βαυαρικό νόμο περί αγνότητας των υλικών του 1516. Η παραδοσιακή επαναζύμωση την κάνει ιδιαίτερα αναζωογονητική. Έχει φρουτώδη, ξηρή καθαρή γεύση, πικάντικη επίγευση και άρωμα φρούτων και μαγιάς. 5,3% Alc. Weiss",
              "en": "Blonde, hazy beer from the heart of Bavaria, is now synonymous with Weiss beer. It is produced according to the strict German Law on the Purity of Materials of 1516 and contains only water, malt, hops and yeast. It is not pasteurized, which is why it does not contain additives and preservatives. The traditional re-fermentation that takes place in the bottle makes it particularly refreshing. It has a fruity, dry clean taste, a spicy aftertaste and an aroma of fruit and yeast. Its alcohol content is 5.3%."
            },
            "price": "6.00",
            "image": "/storage/30773/menurio-kazanoba-tapas-bar-pr-gr-2024-11-29-15-24-27.jpeg"
          },
          {
            "id": 131505,
            "active": false,
            "name": {
              "el": "MC FARLAND",
              "en": "MC FARLAND"
            },
            "description": {
              "el": "Κόκκινη μπίρα από την Ιρλανδία που ανήκει στην κατηγορία Red Ale. Μπίρα με έντονο αρωματικό χαρακτήρα, η McFarland μας συστήνει την τέχνη της απόλαυσης. Περιέχει 5,6% αλκοόλ και έχει πλούσιο άρωμα φρούτων, πυκνό αφρό και γλυκόπικρη επίγευση.",
              "en": "Red beer from Ireland belonging to the Red Ale category. Beer with a strong aromatic character, McFarland introduces us to the art of enjoyment. It contains 5.6% alcohol and has a rich fruit aroma, dense foam and bittersweet aftertaste."
            },
            "price": "6,00",
            "image": "/storage/30775/menurio-kazanoba-tapas-bar-pr-gr-2024-11-29-15-30-17.jpeg"
          },
          {
            "id": 131506,
            "active": false,
            "name": {
              "el": "MURPHY’S",
              "en": "MURPHY’S"
            },
            "description": {
              "el": "Μαύρη ιρλανδική μπίρα της κατηγορίας Stout με παράδοση 160 ετών. Η περιεκτικότητά της σε αλκοόλ είναι 4%. Μεστή και απολαυστική, έχει άρωμα καβουρντισμένης βύνης και ελαφριά, ξηρή γεύση. Με το άνοιγμα της φιάλης απελευθερώνεται ένα μείγμα αερίων και δημιουργείται ένας μοναδικός κρεμώδης αφρό.",
              "en": "Black Irish Stout beer with 160 years of tradition. Its alcohol content is 4%. Full-bodied and delightful, it has an aroma of roasted malt and a light, dry taste. Upon opening the bottle, a mixture of gases is released and a unique creamy foam is created."
            },
            "price": "6.00",
            "image": "/storage/30776/menurio-kazanoba-tapas-bar-pr-gr-2024-11-29-15-31-05.jpeg"
          },
          {
            "id": 131507,
            "active": false,
            "name": {
              "el": "STELLA ARTOIS",
              "en": "STELLA ARTOIS"
            },
            "description": {
              "el": "Ένα γνωστό όνομα με συστατικά το αρωματικό σύμπλεγμα κίτρου, λευκών σταφυλιών, ροδάκινου, δημητριακών και λουλουδιών. Έχει ασύγκριτη γεύση, τραγανή, φρέσκια με ελαφριά πικράδα, εξαιρετικό σερβίρισμα που μας θυμίζει το ανεπανάληπτο Στέλλα κρατάω μαχαίρι και χρυσόξανθη παρουσία. Παρασκευάζεται με φυσικά συστατικά. H διαδικασία παρασκευής της αλλά και η συνταγή της δεν έχει αλλάξει με το πέρασμα των χρόνων.Lager, 5.2% alc.",
              "en": "A familiar name with ingredients the aromatic complex of citrus, white grapes, peach, cereal and flowers. It has an incomparable taste, crisp, fresh with a slight bitterness, excellent serving that reminds us of the inimitable Stella I hold a knife and a golden presence. It is made with natural ingredients. Its preparation process and its recipe have not changed over the years. Lager, 5.2% alc."
            },
            "price": "5.50",
            "image": "/storage/catalogimages/2NvkmMGEIkWVpJg52t5ALtoIu4sN4JasbP70wzrB.png"
          },
          {
            "id": 131509,
            "active": false,
            "name": {
              "el": "Strongbow Gold Apple 330ml",
              "en": "STRONGBOW GOLD APPLE"
            },
            "description": {
              "el": "Δροσιστικό και χρυσαφένιο ποτό από ζύμωση μήλων, με γλυκιά, ισορροπημένη γεύση & νότες πράσινου μήλου. Για μεγαλύτερη απόλαυση, σερβίρεται με πάγο. Αλκοόλ: 4,5%",
              "en": "STRONGBOW is an apple spirit that has stood out and is loved worldwide. It is an alcoholic product produced by fermenting the juice of carefully selected apples. It has a sweet taste, is rich in natural aromas and has a 4.5% alcohol content."
            },
            "price": "5.50",
            "image": "/storage/30797/menurio-kazanoba-tapas-bar-pr-gr-2024-11-29-16-35-45.jpeg"
          },
          {
            "id": 131510,
            "active": false,
            "name": {
              "el": "Strongbow Red Berries 330ml",
              "en": "STRONGBOW RED BERRIES"
            },
            "description": {
              "el": "Δροσιστικό ποτό με ζωηρό κόκκινο χρώμα & γλυκιά, ισορροπημένη γεύση. Έχει έντονες νότες ζουμερών κόκκινων φρούτων & επίγευση μήλου. Για μεγαλύτερη απόλαυση, σερβίρεται με πάγο. Αλκοόλ: 4,5%",
              "en": "STRONGBOW is an apple spirit that has stood out and is loved worldwide. It is an alcoholic product produced by fermenting the juice of carefully selected apples. It has a sweet taste, is rich in natural aromas and has a 4.5% alcohol content."
            },
            "price": "5.50",
            "image": "/storage/30798/menurio-kazanoba-tapas-bar-pr-gr-2024-11-29-16-35-57.jpeg"
          },
          {
            "id": 131511,
            "active": false,
            "name": {
              "el": "Μηλοκλέφτης Apple 330ml",
              "en": "APPLE THIEF"
            },
            "description": {
              "el": "Ποτό από ζύμωση μήλων με απροσδόκητα δροσιστική και γλυκιά γεύση, διακριτικό άρωμα μήλου και ξανθό διαυγές χρώμα. Για μεγαλύτερη απόλαυση, σερβίρεται με πάγο. 4,5% Alc. Ποτό από Ζύμωση Μήλων",
              "en": "THE APPLE THIEF looks for the juiciest and crispest apples and when he finds them, he grabs them to prepare his refreshing Cider to share with everyone. It has an unexpectedly refreshing and sweet taste, a subtle apple aroma and a clear blond color."
            },
            "price": "5.50",
            "image": "/storage/28603/menurio-kazanoba-tapas-bar-pr-gr-2024-08-26-15-13-37.jpeg"
          }
        ]
      },
      {
        "id": 131479,
        "active": true,
        "name": {
          "el": "MARMITA CRAFT BEER",
          "en": "Microbrewery."
        },
        "description": {
          "el": "Η Μαρμίτα παράγεται στην Καβάλα",
          "en": "Voreia"
        },
        "image": "/storage/48260/menurio-kazanoba-tapas-bar-pr-gr-2026-04-19-13-58-18.jpeg",
        "notes": [],
        "items": [
          {
            "id": 246426,
            "active": true,
            "name": {
              "el": "Marmita A.P.A.",
              "en": "Marmita A.P.A."
            },
            "description": {
              "el": "Φρέσκια χειροποίητη μπίρα, ξανθού χρώματος, με διακριτικά αρώματα άνθεων και μοσχολέμονου ~ ισορροπημένη πικράδα, με νότες κίτρου και πορτοκαλιού. Η πιο «ευκολόπιοτη» επιλογή του ζυθοποιείου μας, για όλες τις στιγμές της ημέρας …και της νύχτας. 330 ml Alcohol: 5,1%",
              "en": ""
            },
            "price": "6,00",
            "image": "/storage/48262/menurio-kazanoba-tapas-bar-pr-gr-2026-04-19-14-01-34.jpeg"
          },
          {
            "id": 246435,
            "active": true,
            "name": {
              "el": "Marmita Red Ale",
              "en": "Marmita Red Ale"
            },
            "description": {
              "el": "Eπιλέχθηκε από περίπου 60 συνταγές. Θέλοντας να φτιάξουμε μια ήπια και ισορροπημένη μπίρα. 330 ml - Alcohol: 5,7%",
              "en": ""
            },
            "price": "6,00",
            "image": "/storage/48263/menurio-kazanoba-tapas-bar-pr-gr-2026-04-19-14-01-54.jpeg"
          },
          {
            "id": 246436,
            "active": true,
            "name": {
              "el": "Marmita Stout",
              "en": "Marmita Stout"
            },
            "description": {
              "el": "Μία μαύρη μπίρα με έντονο το στοιχείο των καβουρδισμένων βυνών και πλούσια παλέτα γεύσεων, κυρίως, καφέ και σοκολάτας. 330 ml Alcohol: 6,4%",
              "en": ""
            },
            "price": "6,00",
            "image": "/storage/48264/menurio-kazanoba-tapas-bar-pr-gr-2026-04-19-14-02-08.jpeg"
          },
          {
            "id": 246437,
            "active": true,
            "name": {
              "el": "Marmita POWWOW India Pale Ale",
              "en": "Marmita POWWOW India Pale Ale"
            },
            "description": {
              "el": "Έντονη γεύση & άρωμα από ανανά, μαρακούγια, γκρειπφρουτ με ήπίες και ανθικές βοτανικές νότες. Alc. 6% 330 ml",
              "en": ""
            },
            "price": "6,50",
            "image": ""
          }
        ]
      }
    ]
  },
  {
    "id": 6217,
    "order": 8,
    "slug": "s-6217",
    "image": "https://app.menurio.com/storage/19805/menurio-tiflomigha-kafe-potopolio-2024-02-22-13-20-39.jpeg",
    "name": {
      "el": "Κρασιά",
      "en": "Wines"
    },
    "description": {
      "el": "",
      "en": ""
    },
    "categories": [
      {
        "id": 131699,
        "active": true,
        "name": {
          "el": "ΛΕΥΚΑ ΚΡΑΣΙΑ",
          "en": "WHITE WINE"
        },
        "description": {
          "el": "WHITE WINES",
          "en": "WHITE WINES"
        },
        "image": "/storage/47101/menurio-kazanoba-tapas-bar-pr-gr-2026-03-13-12-56-47.jpeg",
        "notes": [],
        "items": [
          {
            "id": 134151,
            "active": true,
            "name": {
              "el": "Μαύρα Νερά",
              "en": "MAURA NERA PASSAS ESTATE (ASSYRTIKO, VIDIAN, SAUVIGNON BLAC)."
            },
            "description": {
              "el": "Ασύρτικο – Βιδιανό – Sauvignon Blanc, Σταυροχώρι Ξάνθης | Passas Winery 750 ml",
              "en": ""
            },
            "price": "",
            "image": "/storage/47057/menurio-kazanoba-tapas-bar-pr-gr-2026-03-11-20-58-45.jpeg"
          },
          {
            "id": 245444,
            "active": true,
            "name": {
              "el": "Μαλαγουζιά Βουρβουκέλη",
              "en": "VOURVOUKELI (MALAGOUZIA)."
            },
            "description": {
              "el": "Μαλαγουζιά 100% / ΠΓΕ Άβδηρα / Κτήμα Βουρβουκέλη 750 ml",
              "en": ""
            },
            "price": "",
            "image": "/storage/47055/menurio-kazanoba-tapas-bar-pr-gr-2026-03-11-20-50-29.jpeg"
          },
          {
            "id": 245446,
            "active": true,
            "name": {
              "el": "Άβδηρος",
              "en": "VOURVOUKELI (MALAGOUZIA)."
            },
            "description": {
              "el": "Παμίτι/Chardonnay, Άβδηρα Ξάνθης | Κτήμα Βουρβουκέλη 750 ml",
              "en": ""
            },
            "price": "",
            "image": "/storage/47079/menurio-kazanoba-tapas-bar-pr-gr-2026-03-13-10-58-14.jpeg"
          },
          {
            "id": 245448,
            "active": true,
            "name": {
              "el": "Chateau Julia",
              "en": "VOURVOUKELI (MALAGOUZIA)."
            },
            "description": {
              "el": "Chardonnay 100%, Αδριανή Δράμας | Κτήμα Κώστα Λαζαρίδη 750 ml",
              "en": ""
            },
            "price": "",
            "image": "/storage/47058/menurio-kazanoba-tapas-bar-pr-gr-2026-03-11-21-02-01.jpeg"
          },
          {
            "id": 245450,
            "active": true,
            "name": {
              "el": "Γεροβασιλείου",
              "en": "VOURVOUKELI (MALAGOUZIA)."
            },
            "description": {
              "el": "Ασύρτικο/Μαλαγουζιά, Επανομή Θεσσαλονίκης | Κτήμα Γεροβασιλείου 750 ml",
              "en": ""
            },
            "price": "",
            "image": "/storage/47086/menurio-kazanoba-tapas-bar-pr-gr-2026-03-13-12-21-02.jpeg"
          },
          {
            "id": 133588,
            "active": false,
            "name": {
              "el": "Joker Λαλίκος",
              "en": "VOURVOUKELI (MALAGOUZIA)."
            },
            "description": {
              "el": "Ημίξηρο, Μοσχάτο 100%, ΠΓΕ Παγγαίο | Αμπελώνες Λαλίκου 750 ml",
              "en": ""
            },
            "price": "",
            "image": "/storage/47056/menurio-kazanoba-tapas-bar-pr-gr-2026-03-11-20-53-20.jpeg"
          },
          {
            "id": 245449,
            "active": false,
            "name": {
              "el": "Θέμα Παυλίδη",
              "en": "VOURVOUKELI (MALAGOUZIA)."
            },
            "description": {
              "el": "Sauvignon Blanc/Ασύρτικο, Κοκκινόγεια Δράμας | Κτήμα Παυλίδη 750 ml",
              "en": ""
            },
            "price": "",
            "image": ""
          },
          {
            "id": 133585,
            "active": false,
            "name": {
              "el": "DOMAINE ΚΩΣΤΑ ΛΑΖΑΡΙΔΗ (ΜΑΛΑΓΟΥΖΙΑ).",
              "en": "DOMAINE KOSTA LAZARIDI (MALAGOUSIA)."
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "34.00",
            "image": "/storage/47088/menurio-kazanoba-tapas-bar-pr-gr-2026-03-13-12-23-09.jpeg"
          },
          {
            "id": 133590,
            "active": false,
            "name": {
              "el": "DRL RIESLING OFF DRY (RIESLING).",
              "en": "DRL RIESLING OFF DRY (RIESLING)."
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "",
            "image": ""
          },
          {
            "id": 133608,
            "active": false,
            "name": {
              "el": "ΑΜΕΘΥΣΤΟΣ ΚΤΗΜΑ Κ. ΛΑΖΑΡΙΔΗ (SAUVIGNON BLANC, ΑΣΥΡΤΙΚΟ).",
              "en": "AMETHISTOS ESTATE K. LAZARIDI (SAUVIGNON BLANC, ASSYRTICO)."
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "",
            "image": ""
          }
        ]
      },
      {
        "id": 131713,
        "active": true,
        "name": {
          "el": "ΕΡΥΘΡΑ ΚΡΑΣΙΑ",
          "en": "RED WINE"
        },
        "description": {
          "el": "RED WINES",
          "en": "RED WINES"
        },
        "image": "/storage/47102/menurio-kazanoba-tapas-bar-pr-gr-2026-03-13-12-59-19.jpeg",
        "notes": [],
        "items": [
          {
            "id": 148226,
            "active": true,
            "name": {
              "el": "Μαύρα Νερά",
              "en": "MAVRA NERA KTIMA PASSAS (MAVROUDI, SYRAH)."
            },
            "description": {
              "el": "Ερυθρός Ξηρός, Μαυρούδι – Syrah, Σταυροχώρι Ξάνθης | Passas Winery 750 ml",
              "en": ""
            },
            "price": "",
            "image": "/storage/47089/menurio-kazanoba-tapas-bar-pr-gr-2026-03-13-12-27-33.jpeg"
          },
          {
            "id": 133635,
            "active": true,
            "name": {
              "el": "Άβδηρος",
              "en": "MV ANTOLIKOS AMELONAS (MAVROUDI, CABERNET SAUVIGNON, MERLOT)."
            },
            "description": {
              "el": "Λημνίο/ Syrah / Παμίτι | Άβδηρα Ξάνθης | Κτήμα Βουρβουκέλη 750 ml",
              "en": ""
            },
            "price": "",
            "image": "/storage/47090/menurio-kazanoba-tapas-bar-pr-gr-2026-03-13-12-32-12.jpeg"
          },
          {
            "id": 148227,
            "active": false,
            "name": {
              "el": "Βασιλική Πορφύρα",
              "en": "EVINOR ESTATE KARAKOSTA (CABERNET SAUVIGNON, MERLOT)."
            },
            "description": {
              "el": "Ημίγλυκο / Παλαιοχώρι Δράμας | Κτήμα Αποστολίδη 750 ml",
              "en": ""
            },
            "price": "",
            "image": "/storage/47091/menurio-kazanoba-tapas-bar-pr-gr-2026-03-13-12-38-12.jpeg"
          },
          {
            "id": 134152,
            "active": false,
            "name": {
              "el": "ΜΑΥΡΑ ΝΕΡΑ ΚΤΗΜΑ ΠΑΣΣΑΣ (SYRAH, ΜΑΥΡΟΥΔΙ)",
              "en": "MAVRA NERA KTIMA PASSAS (MAVROUDI, SYRAH)."
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "",
            "image": ""
          },
          {
            "id": 133719,
            "active": false,
            "name": {
              "el": "ΑΜΕΘΥΣΤΟΣ ΚΤΗΜΑ Κ.ΛΑΖΑΡΙΔΗ (CABERNET SAUVIGNON, MERLOT, ΑΓΙΩΡΓΙΤΙΚΟ).",
              "en": "AMETHISTOS ESTATE K. LAZARIDI (CABERNET SAUVIGNON, MERLOT, AGIORGITIKO)."
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "35.00",
            "image": ""
          },
          {
            "id": 133727,
            "active": false,
            "name": {
              "el": "ΗΔΥΣΜΑ ΔΡΥΟΣ ΚΤΗΜΑ ΤΕΧΝΗ ΟΙΝΟΥ (MERLOT)",
              "en": "EDYSMA OAK ESTATE ART OF WINE (MERLOT)"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "34.50",
            "image": ""
          },
          {
            "id": 133729,
            "active": false,
            "name": {
              "el": "ΕΥΧΕΣ ΕΡΑΤΕΙΝΕΣ ΚΤΗΜΑ ΠΙΕΡΙΑ ΕΡΑΤΕΙΝΗ (CABERNET SAUVIGNON, SYRAH).",
              "en": "EUCHES ERATEINES ESTATE PIERIA ERATEINI (CABERNET SAUVIGNON, SYRAH)."
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "34.00",
            "image": ""
          },
          {
            "id": 133730,
            "active": false,
            "name": {
              "el": "NAΟΥΣΑ ΚΤΗΜΑ ΚΥΡ ΓΙΑΝΝΗ (ΞΙΝΟΜΑΥΡΟ).",
              "en": "NAOUSA ESTATE KYR YIANNI (XINOMAVRO)."
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "27.00",
            "image": ""
          },
          {
            "id": 133731,
            "active": false,
            "name": {
              "el": "ΟΙΝΟΤΡΙΑ ΓΗ ΚΤΗΜΑ Κ.ΛΑΖΑΡΙΔΗ (CABERNET SAUVIGNON, ΑΓΙΩΡΓΙΤΙΚΟ).",
              "en": "WINE LAND K. LAZARIDI ESTATE (CABERNET SAUVIGNON, AGIORGITIKO)."
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "42.00",
            "image": ""
          },
          {
            "id": 133732,
            "active": false,
            "name": {
              "el": "CUVEE ΕΡΥΘΡΟ ΚΤΗΜΑ ΜΕΓΑ ΣΠΗΛΑΙΟ (MAΥΡΟΔΑΦΝΗ, CABERNET SAUVIGNON, ΑΓΙΩΡΓΙΤΙΚΟ).",
              "en": "CUVEE RED ESTATE MEGA SPILAIO (MAVRODAFNI, CABERNET SAUVIGNON, AGIORGITIKO)."
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "30.00",
            "image": ""
          },
          {
            "id": 133733,
            "active": false,
            "name": {
              "el": "EMPHASIS ΑΓΙΩΡΓΙΤΙΚΟ ΚΤΗΜΑ ΠΑΥΛΙΔΗ (ΑΓΙΩΡΓΙΤΙΚΟ).",
              "en": "EMPHASIS AGIORGITIKO ESTATE PAVLIDI (AGIORGITIKO)."
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "36.00",
            "image": ""
          },
          {
            "id": 133734,
            "active": false,
            "name": {
              "el": "ΜΕΘΥΜΩΝ 7 ΚΤΗΜΑ ΝΤΟΥΓΚΟΣ (GRENACHE, SYRAH, ΛΑΜΝΙΩΝΑ).",
              "en": "METHYMON 7 DOUGOS ESTATE (GRENACHE, SYRAH, LAMNIONA)."
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "36.00",
            "image": ""
          },
          {
            "id": 133735,
            "active": false,
            "name": {
              "el": "DOMAINE SYRAH ΚΤΗΜΑ Κ.ΛΑΖΑΡΙΔΗ (SYRAH).",
              "en": "DOMAINE SYRAH ESTATE K. LAZARIDI (SYRAH)."
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "38.00",
            "image": ""
          },
          {
            "id": 133736,
            "active": false,
            "name": {
              "el": "ΝΑΟΥΣΑ ALTA ΚΤΗΜΑ ΘΥΜΙΟΠΟΥΛΟΣ (ΞΙΝΟΜΑΥΡΟ).",
              "en": "NAOUSA ALTA ESTATE THIMIOPOULOS (XINOMAVRO)."
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "30.00",
            "image": ""
          },
          {
            "id": 148223,
            "active": false,
            "name": {
              "el": "MV ΑΝΑΤΟΛΙΚΟΣ ΑΜΕΛΩΝΑΣ (ΜΑΥΡΟΥΔΙ, CABERNET SAUVIGNON, MERLOT). - Copy",
              "en": "MV ANTOLIKOS AMELONAS (MAVROUDI, CABERNET SAUVIGNON, MERLOT)."
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "",
            "image": ""
          }
        ]
      },
      {
        "id": 131722,
        "active": true,
        "name": {
          "el": "ΡΟΖΕ ΚΡΑΣΙΑ",
          "en": "ROSE WINE"
        },
        "description": {
          "el": "ROSE WINES",
          "en": "ROSE WINES"
        },
        "image": "/storage/47103/menurio-kazanoba-tapas-bar-pr-gr-2026-03-13-13-00-21.jpeg",
        "notes": [],
        "items": [
          {
            "id": 134153,
            "active": true,
            "name": {
              "el": "Μαύρα Νερά",
              "en": "MAVRA NERA KTIMA PASSAS (MAVROUDI, SYRAH)."
            },
            "description": {
              "el": "Ροζέ Ημίγλυκο, Μαυρούδι – Syrah, Σταυροχώρι Ξάνθης | Passas Winery 750 ml",
              "en": ""
            },
            "price": "",
            "image": "/storage/47059/menurio-kazanoba-tapas-bar-pr-gr-2026-03-11-21-10-43.jpeg"
          },
          {
            "id": 133745,
            "active": true,
            "name": {
              "el": "Άβδηρος",
              "en": "AVDIROS ROZE ESTATE VOURVOUKELI."
            },
            "description": {
              "el": "Παμίτι / Syrah, Άβδηρα Ξάνθης | Κτήμα Βουρβουκέλη 750 ml",
              "en": ""
            },
            "price": "",
            "image": "/storage/47095/menurio-kazanoba-tapas-bar-pr-gr-2026-03-13-12-45-47.jpeg"
          },
          {
            "id": 245451,
            "active": true,
            "name": {
              "el": "Λαλίκος Variete",
              "en": "AVDIROS ROZE ESTATE VOURVOUKELI."
            },
            "description": {
              "el": "Grenache Rouge, Παλιά Καβάλας | Αμπελώνες Λαλίκου 750 ml",
              "en": ""
            },
            "price": "",
            "image": "/storage/47096/menurio-kazanoba-tapas-bar-pr-gr-2026-03-13-12-46-53.jpeg"
          },
          {
            "id": 133737,
            "active": false,
            "name": {
              "el": "ΕΥΗΝΟΡ ΚΤΗΜΑ ΚΑΡΑΚΩΣΤΑ (SYRAH).",
              "en": "DRY CUVEE APOSTOLIDI ESTATE (AGIORGITIKO, KARAPAPAS)."
            },
            "description": {
              "el": "Ροζέ Ημίγλυκο, Μαυρούδι – Syrah, Σταυροχώρι Ξάνθης | Passas Winery 750 ml",
              "en": ""
            },
            "price": "",
            "image": ""
          },
          {
            "id": 133738,
            "active": false,
            "name": {
              "el": "ΤΕΧΝΗ ΑΛΥΠΙΑΣ ΚΤΗΝΑ ΤΕΧΝΗ ΟΙΝΟΥ (SYRAH, MERLOT, SANGIOVESE, NEBBIOLO, CABERNET S).",
              "en": "ART OF ALPIA ANIMAL ART OF WINE (SYRAH, MERLOT, SANGIOVESE, NEBBIOLO, CABERNET S)."
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "32.00",
            "image": ""
          },
          {
            "id": 133739,
            "active": false,
            "name": {
              "el": "DOMAINE ROSE ΚΤΗΜΑ Κ.ΛΑΖΑΡΙΔΗ (MERLOT, ΑΓΙΩΡΓΙΤΙΚΟ, GRENACHE).",
              "en": "DOMAINE ROSE ESTATE K. LAZARIDI (MERLOT, AGIORGITIKO, GRENACHE)."
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "",
            "image": "/storage/47092/menurio-kazanoba-tapas-bar-pr-gr-2026-03-13-12-41-45.jpeg"
          },
          {
            "id": 133740,
            "active": false,
            "name": {
              "el": "PINOT NOIR ROSE VILLA WOLF (PINOT NOIR).",
              "en": "PINOT NOIR ROSE VILLA WOLF (PINOT NOIR)."
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "",
            "image": ""
          },
          {
            "id": 133741,
            "active": false,
            "name": {
              "el": "ΠΑΜΙΔΙ ΚΤΗΜΑ ΒΟΥΡΒΟΥΚΕΛΗ (ΠΑΜΙΔΙ).",
              "en": "PAMIDI VOURVOUKELI ESTATE (PAMIDI)."
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "33.00",
            "image": ""
          },
          {
            "id": 133742,
            "active": false,
            "name": {
              "el": "ΑΓΚΑΘΩΤΟ ΚΤΗΜΑ ΚΥΡ ΓΙΑΝΝΗ (ΞΙΝΟΜΑΥΡΟ)",
              "en": "AGATHOTO ESTATE KYR YIANNI (XINOMAVRO)"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "36.00",
            "image": ""
          },
          {
            "id": 133743,
            "active": false,
            "name": {
              "el": "IDYLLE D'ACHINOS (SYRAH, GRENACHE, ΑΓΙΩΡΓΙΤΙΚΟ).",
              "en": "IDYLLE D'ACHINOS (SYRAH, GRENACHE, AGIORGITIC)."
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "33.00",
            "image": "/storage/47093/menurio-kazanoba-tapas-bar-pr-gr-2026-03-13-12-44-04.jpeg"
          },
          {
            "id": 133744,
            "active": false,
            "name": {
              "el": "A MUSE KTHMA ΜΟΥΣΩΝ (SAUVIGNON BLANC, ΜΟΥΧΤΑΡΟ).",
              "en": "A MUSE KTHMA MUSEON (SAUVIGNON BLANC, MUCHTARO)."
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "32.00",
            "image": ""
          }
        ]
      },
      {
        "id": 131726,
        "active": true,
        "name": {
          "el": "ΑΦΡΩΔΕΙΣ ΟΙΝΟΙ",
          "en": "SPARKLING WINES"
        },
        "description": {
          "el": "CHAMPAGNES",
          "en": "CHAMPAGNES"
        },
        "image": "/storage/47097/menurio-kazanoba-tapas-bar-pr-gr-2026-03-13-12-49-12.jpeg",
        "notes": [],
        "items": [
          {
            "id": 131727,
            "active": true,
            "name": {
              "el": "ASTI MARTINI 200ml.",
              "en": "PET NAT EAST VINEYARD."
            },
            "description": {
              "el": "",
              "en": "Italian Moschato, Asti, Atelie"
            },
            "price": "7.50",
            "image": "/storage/47098/menurio-kazanoba-tapas-bar-pr-gr-2026-03-13-12-50-20.jpeg"
          },
          {
            "id": 131728,
            "active": true,
            "name": {
              "el": "Atelie Moscato D'asti",
              "en": "AMALIA BRUT TSELEPOY ESTATE."
            },
            "description": {
              "el": "Ιταλικό Μοσχάτο/Asti | Atelie 187 ml",
              "en": ""
            },
            "price": "7.00",
            "image": "/storage/47100/menurio-kazanoba-tapas-bar-pr-gr-2026-03-13-12-53-35.jpeg"
          },
          {
            "id": 131729,
            "active": false,
            "name": {
              "el": "BRUT CUVEE ΚΤΗΜΑ ΚΑΡΑΝΙΚΑ.",
              "en": "BRUT CUVEE ESTATE KARANIKA."
            },
            "description": {
              "el": "",
              "en": "Akakies Rose"
            },
            "price": "36.00",
            "image": ""
          },
          {
            "id": 131730,
            "active": false,
            "name": {
              "el": "PROSECCO MATIU BRUT.",
              "en": "PROSECCO MATTHEW BRUT."
            },
            "description": {
              "el": "",
              "en": "Bubbly rose"
            },
            "price": "32.00",
            "image": ""
          },
          {
            "id": 131731,
            "active": false,
            "name": {
              "el": "LOUIS ROEDERER BRUT.",
              "en": "LOUIS ROEDERER BRUT."
            },
            "description": {
              "el": "",
              "en": "Perhaps the most recognizable Champagne label in the world, and not by chance. It is one of the most friendly and pleasant Champagnes on the market, emphasizing the right balance between the elements that make it up. Elegant yet multi-layered, it is the perfect aperitif, while it can accompany a wide range of fine tastes."
            },
            "price": "120.00",
            "image": ""
          }
        ]
      }
    ]
  },
  {
    "id": 6633,
    "order": 9,
    "slug": "s-6633",
    "image": "https://app.menurio.com/storage/29261/menurio-kazanoba-tapas-bar-pr-gr-2024-09-19-15-31-30.jpeg",
    "name": {
      "el": "Brunch & Breakfast",
      "en": "Brunch & Breakfast"
    },
    "description": {
      "el": "(9:00-17:00)",
      "en": "(9:00-17:00)"
    },
    "categories": [
      {
        "id": 139999,
        "active": true,
        "name": {
          "el": "Breakfast & Brunch",
          "en": "Breakfast & Brunch"
        },
        "description": {
          "el": "",
          "en": ""
        },
        "image": "",
        "notes": [],
        "items": [
          {
            "id": 140010,
            "active": true,
            "name": {
              "el": "Αυγόφετες Jenga tower_ Ζάχαρη, Κανέλα. Σερβίρεται με Πραλίνα Σοκολάτας και μέλι. (2 ατόμων)",
              "en": "Praline Pancake."
            },
            "description": {
              "el": "Egg tarts Jenga tower_ Sugar, Cinnamon. Served with Chocolate Praline and honey. (2 people)",
              "en": "Fluffy Pancake 3 pieces, with chocolate praline, white praline, crispy crumble, pearls and chocolate chips."
            },
            "price": "9,00",
            "image": "/storage/49436/menurio-kazanoba-tapas-bar-pr-gr-2026-05-12-12-56-23.jpeg"
          },
          {
            "id": 235201,
            "active": true,
            "name": {
              "el": "Scrambled eggs Croissant_Τρία Αυγά Χτυπημένα και σερβιρισμένα σε αφράτη φωλιά Γαλλικού κρουασάν, ψιλοκομμένο μπέικον, Hollandaise Sauce, κρέμα γάλακτος, συνοδεύεται με πράσινη σαλάτα",
              "en": "Open Sandwich focaccia crostini"
            },
            "description": {
              "el": "Scrambled eggs Croissant_Three Eggs Beaten and served in a fluffy French croissant nest, chopped bacon, Hollandaise Sauce, sour cream, accompanied by a green salad",
              "en": ""
            },
            "price": "7,50",
            "image": ""
          },
          {
            "id": 241250,
            "active": true,
            "name": {
              "el": "ΤΟΡΤΙΓΙΑ ROLLS_Ομελέτα, Μανιτάρια, Τυρί Κρέμα, Iceberg, Μπέικον, Πούδρα Παρμεζάνας, Hollandaise Sauce.",
              "en": "Open Sandwich focaccia crostini"
            },
            "description": {
              "el": "Tortilla Rolls_Omelette, Mushrooms, Cheese Cream, Iceberg, Bacon, Parmesan Powder, Hollandaise Sauce.",
              "en": ""
            },
            "price": "8,50",
            "image": ""
          },
          {
            "id": 235202,
            "active": true,
            "name": {
              "el": "Pancake Κοτόπουλο_μπέικον, αυγό, Hollandaise Sauce, ζεστή κρέμα Cheddar, τραγανό κοτόπουλο σνίτσελ, Baby Ρόκα",
              "en": "Open Sandwich focaccia crostini"
            },
            "description": {
              "el": "Pancake Chicken_bacon, egg, Hollandaise Sauce, warm Cheddar cream, crispy chicken schnitzel, Baby Arugula",
              "en": ""
            },
            "price": "8,50",
            "image": ""
          },
          {
            "id": 214285,
            "active": true,
            "name": {
              "el": "Pancakes Biscoff_Αφράτα Pancake με πραλίνα Biscoff, τριμμένο μπισκότο",
              "en": "Praline Pancake."
            },
            "description": {
              "el": "Biscoff Pancakes_Fluffy Pancakes with Biscoff praline, crushed biscuits",
              "en": "Fluffy Pancake 3 pieces, with chocolate praline, white praline, crispy crumble, pearls and chocolate chips."
            },
            "price": "8,50",
            "image": "/storage/49437/menurio-kazanoba-tapas-bar-pr-gr-2026-05-12-12-56-52.jpeg"
          },
          {
            "id": 235207,
            "active": true,
            "name": {
              "el": "Κουλούρι Θεσσαλονίκης _τραγανό κουλούρι brioche με κρέμα τυριού στο στεφάνι, τηγανιτό αυγό, γκούντα, μπέικον, baby ρόκα",
              "en": "Open Sandwich focaccia crostini"
            },
            "description": {
              "el": "Thessaloniki bun _crisp brioche bun with cream cheese in the wreath, fried egg, gouda, bacon, baby rocket",
              "en": ""
            },
            "price": "8,00",
            "image": "/storage/49438/menurio-kazanoba-tapas-bar-pr-gr-2026-05-12-12-57-11.jpeg"
          },
          {
            "id": 235205,
            "active": true,
            "name": {
              "el": "Florentina Μορταδέλα _ψωμί αργής ωρίμανσης με φυσικό προζύμι ψημένο σε φούρνο με πέτρα,, σοταρισμένα ντοματίνια με pesto φιστικιού, μορταδέλα Π.Ο.Π, μπαλίτσες φρέσκιας μοτσαρέλας, πούδρα παρμεζάνας, Baby ρόκα.",
              "en": "Open Sandwich focaccia crostini"
            },
            "description": {
              "el": "Florentina Mortadella _slow-ripening bread with natural sourdough baked in a stone oven, sautéed cherry tomatoes with pistachio pesto, PDO mortadella, fresh mozzarella balls, parmesan powder, Baby arugula",
              "en": ""
            },
            "price": "7,00",
            "image": "/storage/43663/menurio-kazanoba-tapas-bar-pr-gr-2025-09-07-10-57-23.jpeg"
          },
          {
            "id": 256221,
            "active": true,
            "name": {
              "el": "Florentina Προσούτο_ψωμί αργής ωρίμανσης με φυσικό προζύμι ψημένο σε φούρνο με πέτρα,, προσούτο, flakes παρμεζάνας, Baby ρόκα, sour cream, ντομάτα",
              "en": "Open Sandwich focaccia crostini"
            },
            "description": {
              "el": "Florentina Prosciutto_slow-ripening bread with natural sourdough baked in a stone oven, prosciutto, parmesan flakes, baby rocket, sour cream, tomato",
              "en": ""
            },
            "price": "7,50",
            "image": ""
          },
          {
            "id": 214286,
            "active": true,
            "name": {
              "el": "Croque Madame_brioche bun, κρέμα τυριού, μπεΪκον, hollandaise sause, τηγανιτό αυγό.",
              "en": "Open Sandwich focaccia crostini"
            },
            "description": {
              "el": "Croque Madame_brioche bun, cream cheese, bacon, hollandaise sauce, fried egg",
              "en": ""
            },
            "price": "7.50",
            "image": ""
          },
          {
            "id": 148219,
            "active": true,
            "name": {
              "el": "Αυγά Βenedict",
              "en": "Pancake benedict"
            },
            "description": {
              "el": "English Muffins, αυγά 6 λεπτών, κίτρινο τυρί, χοιρινό μπούτι & hollandaise sauce",
              "en": ""
            },
            "price": "8.50",
            "image": ""
          },
          {
            "id": 159361,
            "active": true,
            "name": {
              "el": "Chocolate Pancakes_Αφράτα Pancake 3 τεμάχια, με πραλίνα σοκολάτας φουντουκιού και λευκή πραλίνα, μπισκότο, caprice",
              "en": "Praline Pancake."
            },
            "description": {
              "el": "Chocolate Pancakes_Fluffy Pancake 3 pieces, with hazelnut chocolate praline and white praline, biscuit, caprice",
              "en": "Fluffy Pancake 3 pieces, with chocolate praline, white praline, crispy crumble, pearls and chocolate chips."
            },
            "price": "7.50",
            "image": ""
          },
          {
            "id": 235206,
            "active": true,
            "name": {
              "el": "Τοστ",
              "en": "Open Sandwich focaccia crostini"
            },
            "description": {
              "el": "πατημένο ψωμάκι , γκούντα , γαλοπούλα, ντομάτα, φρέσκο βούτυρο",
              "en": ""
            },
            "price": "4,50",
            "image": ""
          },
          {
            "id": 148212,
            "active": false,
            "name": {
              "el": "Breakfast ΠεΪνερλί",
              "en": "Open Sandwich focaccia crostini"
            },
            "description": {
              "el": "Κόκκινη σάλτσα pomodoro, κίτρινο τυρί, μοτσαρέλα, τσένταρ & φέτα συνοδεύεται από τηγανιτό αυγό",
              "en": ""
            },
            "price": "8,00",
            "image": ""
          },
          {
            "id": 148221,
            "active": false,
            "name": {
              "el": "Yoghurt bowl",
              "en": "Greek Yogurt"
            },
            "description": {
              "el": "Σπιτική γκρανόλα, στραγγιστό γιαούρτι, μπανάνα, μαρμελάδα κόκκινα φρούτα του δάσους, ξηροί καρποί",
              "en": ""
            },
            "price": "7,00",
            "image": "/storage/32894/menurio-kazanoba-tapas-bar-pr-gr-2025-03-14-00-00-29.jpeg"
          },
          {
            "id": 148785,
            "active": false,
            "name": {
              "el": "Pancake Γαλοπούλα",
              "en": "Pancake Chicken"
            },
            "description": {
              "el": "Αφράτα pancakes με κίτρινο τυρί, γαλοπούλα, sour cream, τηγανιτό αυγό & hollandaise sauce",
              "en": ""
            },
            "price": "8.50",
            "image": ""
          }
        ]
      }
    ]
  },
  {
    "id": 7126,
    "order": 10,
    "slug": "s-7126",
    "image": "https://app.menurio.com/storage/32905/menurio-kazanoba-tapas-bar-pr-gr-2025-03-14-00-12-46.jpeg",
    "name": {
      "el": "Main Menu",
      "en": "All Day Menu"
    },
    "description": {
      "el": "(14:00-00:00)",
      "en": ""
    },
    "categories": [
      {
        "id": 150778,
        "active": true,
        "name": {
          "el": "ΜΑΙΝ MENU",
          "en": "All Day Menu"
        },
        "description": {
          "el": "",
          "en": ""
        },
        "image": "",
        "notes": [],
        "items": [
          {
            "id": 254536,
            "active": true,
            "name": {
              "el": "Cherry Bowl_Τραγανές κερασοντομάτες, ντάκος χαρουπιού, κοπανιστή Μυκόνου",
              "en": "Couscous Salad"
            },
            "description": {
              "el": "Cherry Bowl_Crispy cherry tomatoes, carob dakos, Mykonos kopanisti",
              "en": ""
            },
            "price": "8,00",
            "image": ""
          },
          {
            "id": 287708,
            "active": true,
            "name": {
              "el": "ΚΟΥΣ-ΚΟΥΣ_Κοτόπουλο, Ψητό Χαλούμι, Φρέσκο Κρεμμύδι, Μάνγκο, Dressing Σουσάμι",
              "en": "Couscous Salad"
            },
            "description": {
              "el": "Cous-Cous_ Chicken, Grilled Halloumi, Fresh Onion, Mango, Sesame Dressing",
              "en": ""
            },
            "price": "9,00",
            "image": ""
          },
          {
            "id": 252046,
            "active": true,
            "name": {
              "el": "Ceasars Bowl_Iceberg, καλαμπόκι, pop corn chicken, μπεΪκον, sauce, τραγανό στεφάνι με σουσάμι",
              "en": "Couscous Salad"
            },
            "description": {
              "el": "Ceasars Bowl_Iceberg, corn, pop corn chicken, bacon, sauce, ραγανό στεφάνι με σουσάμι",
              "en": ""
            },
            "price": "9.50",
            "image": "/storage/49441/menurio-kazanoba-tapas-bar-pr-gr-2026-05-12-13-04-10.jpeg"
          },
          {
            "id": 165086,
            "active": true,
            "name": {
              "el": "Buddha Bowl_Τρίχρωμη κινόα, falafel, pico de gallo, πίκλα κοκκινου λάχανου, sour cream",
              "en": "Couscous Salad"
            },
            "description": {
              "el": "Buddha Bowl_quinoa, falafel, pico de gallo, pickled red cabbage, sour cream",
              "en": ""
            },
            "price": "8.50",
            "image": ""
          },
          {
            "id": 247349,
            "active": true,
            "name": {
              "el": "Καλαμπόκι_Κομμάτια φρέσκου καλαμποκιού γλασαρισμένα με βουτυρο, μέλι, sweet chilli και μπαχαρικά",
              "en": "Kazanova Version Ceasar"
            },
            "description": {
              "el": "Corn_Pieces of fresh corn glazed with butter, honey, sweet chilli, and spices",
              "en": ""
            },
            "price": "7,00",
            "image": "/storage/49409/menurio-kazanoba-tapas-bar-pr-gr-2026-05-11-22-28-43.jpeg"
          },
          {
            "id": 247350,
            "active": true,
            "name": {
              "el": "Squid _Τηγανιτές ροδέλες Καλαμαριού, panko, mouse λευκού ταραμά, pico de gallo",
              "en": "Kazanova Version Ceasar"
            },
            "description": {
              "el": "Squib Game _Τηγανιτές ροδέλες Καλαμαριού, panko, mouse λευκού ταραμά, pico de gallo",
              "en": ""
            },
            "price": "8.50",
            "image": "/storage/49410/menurio-kazanoba-tapas-bar-pr-gr-2026-05-11-22-36-24.jpeg"
          },
          {
            "id": 259076,
            "active": true,
            "name": {
              "el": "Jacket Potato Street_ Ολόκληρη πατάτα στο φούρνο, φρέσκο βούτυρο, κρέμα τυριού, μπέικον, τριμμένη gouda",
              "en": "bravas potatoes"
            },
            "description": {
              "el": "Jacket Potato Street_ Whole baked potato, fresh butter, cream cheese, bacon, grated gouda",
              "en": ""
            },
            "price": "6.50",
            "image": "/storage/49435/menurio-kazanoba-tapas-bar-pr-gr-2026-05-12-12-53-54.jpeg"
          },
          {
            "id": 259077,
            "active": true,
            "name": {
              "el": "Jacket Potato Special_ Ολόκληρη πατάτα στο φούρνο, φρέσκο βούτυρο, μοσχαρίσιος κιμάς, τριμμένη gouda, μοτσαρέλα, καλαμπόκι",
              "en": "bravas potatoes"
            },
            "description": {
              "el": "Jacket Potato Special_ Whole baked potato, fresh butter, ground beef, grated gouda, mozzarella, corn",
              "en": ""
            },
            "price": "7.00",
            "image": "/storage/49439/menurio-kazanoba-tapas-bar-pr-gr-2026-05-12-13-02-57.jpeg"
          },
          {
            "id": 252045,
            "active": true,
            "name": {
              "el": "Πατάτες τσακιστές Τρούφας_Τραγάνες πατάτες με την φλούδα τους, sauce τρούφας, παρμεζάνα & φρέσκα ψητά μανιτάρια",
              "en": "bravas potatoes"
            },
            "description": {
              "el": "Crushed Truffle Potatoes_Crispy potatoes with their skin, truffle sauce, parmesan & fresh grilled mushrooms",
              "en": ""
            },
            "price": "7.00",
            "image": "/storage/49440/menurio-kazanoba-tapas-bar-pr-gr-2026-05-12-13-03-16.jpeg"
          },
          {
            "id": 150785,
            "active": true,
            "name": {
              "el": "Πατάτες τσακιστές Μυκόνου_Τραγάνες πατάτες με την φλούδα τους, μπαχαρικά, κοπανιστή Μυκόνου",
              "en": "bravas potatoes"
            },
            "description": {
              "el": "Crushed Mykonos Potatoes_Crunchy potatoes with their skins, spices, Mykonos kopanisti cheese",
              "en": ""
            },
            "price": "6.50",
            "image": ""
          },
          {
            "id": 274939,
            "active": true,
            "name": {
              "el": "Πατάτες τηγανιτές_Πατάτες με φλούδα και αυλάκι συνοδεύονται με ketchup",
              "en": "bravas potatoes"
            },
            "description": {
              "el": "French fries_Fried potatoes with skin and groove served with ketchup",
              "en": ""
            },
            "price": "6.00",
            "image": ""
          },
          {
            "id": 247348,
            "active": true,
            "name": {
              "el": "Pizza Dog Classic _μαγιονέζα, κέτσαπ, μουστάρδα, μαγιονεζα, καραμελωμένο κρεμμύδι, τραγανό κρεμμύδι",
              "en": "Kazanova Version Ceasar"
            },
            "description": {
              "el": "Pizza Dog Classic – mayonnaise, ketchup, mustard, caramelized onion, crispy onion",
              "en": ""
            },
            "price": "7,00",
            "image": ""
          },
          {
            "id": 247345,
            "active": true,
            "name": {
              "el": "Pizza Dog Cheddar _Χειροποίητη ζύμη Σάλτσα ντομάτας, γκούντα, μοτσαρέλα, Καπνιστή κρέμα Cheddar, ξεροψημένο μπέικον,",
              "en": "Kazanova Version Ceasar"
            },
            "description": {
              "el": "Pizza Dog Cheddar – Handmade dough, tomato sauce, Gouda, mozzarella, smoked Cheddar cream, crispy bacon.",
              "en": ""
            },
            "price": "7.50",
            "image": ""
          },
          {
            "id": 265140,
            "active": true,
            "name": {
              "el": "Hot Dog Special_Coleslaw, sauce bbq, μαγιονέζα, τραγανό κρεμμύδι.",
              "en": "Kazanova Version Ceasar"
            },
            "description": {
              "el": "Hot Dog Special_Coleslaw, BBQ sauce, mayonnaise, crispy onion,brioche lobster bun",
              "en": ""
            },
            "price": "7.00",
            "image": ""
          },
          {
            "id": 252044,
            "active": true,
            "name": {
              "el": "Hot Dog Mexican_μαγιονέζα, χειροποίητη σάλτσα espresso, chips πατάτας, pico de callo, ψωμάκι brioche lobster",
              "en": "Kazanova Version Ceasar"
            },
            "description": {
              "el": "Hot Dog Mexican_mayonnaise, handmade espresso sauce, potato chips, pico de callo, brioche lobster bun",
              "en": ""
            },
            "price": "7,00",
            "image": "/storage/49411/menurio-kazanoba-tapas-bar-pr-gr-2026-05-11-22-37-05.jpeg"
          },
          {
            "id": 232849,
            "active": true,
            "name": {
              "el": "Italian flat bread προσούτο_Σάλτσα ντομάτας, γκούντα, μοτσαρέλα, προσούτο, baby ρόκα, φλούδες παρμεζάνας",
              "en": "Pinsa margherita"
            },
            "description": {
              "el": "Italian flat bread prosciutto_Tomato sauce, gouda, mozzarella, prosciutto, baby arugula, Parmesan flakes",
              "en": "Red sauce san Marzano,mozzarella, basil"
            },
            "price": "8,00",
            "image": "/storage/49412/menurio-kazanoba-tapas-bar-pr-gr-2026-05-11-22-37-24.jpeg"
          },
          {
            "id": 188828,
            "active": true,
            "name": {
              "el": "Italian flat bread Μορταδέλα__Σάλτσα ντομάτας, γκούντα, μοτσαρέλα, pesto φιστικιού, μορταδέλα, παρμεζάνα",
              "en": "Pinsa Carbonara"
            },
            "description": {
              "el": "Italian flat bread Mortadella__Tomato sauce, gouda, mozzarella, pistachio pesto, mortadella, parmesan",
              "en": ""
            },
            "price": "8.00",
            "image": ""
          },
          {
            "id": 156289,
            "active": true,
            "name": {
              "el": "Italian flat bread Chorizo_Σάλτσα ντομάτας, γκούντα, μοτσαρέλα, chorizo, sour cream, σχοινόπρασο",
              "en": "Pinsa Carbonara"
            },
            "description": {
              "el": "Italian flat bread chorizo_Tomato sauce, gouda, mozzarella, chorizo, sour cream, chives",
              "en": ""
            },
            "price": "8,00",
            "image": ""
          },
          {
            "id": 275363,
            "active": true,
            "name": {
              "el": "Italian flat bread Margarita_Σάλτσα ντομάτας, γκούντα, μοτσαρέλα, ντοματίνια, φρέσκα φύλλα βασιλικού, pesto Βασιλικού sour cream, σχοινόπρασο - Copy",
              "en": "Pinsa Carbonara"
            },
            "description": {
              "el": "Italian flat bread Margarita_Tomato sauce, gouda, mozzarella, cherry tomatoes, fresh basil leaves, basil pesto",
              "en": ""
            },
            "price": "7,50",
            "image": ""
          },
          {
            "id": 232843,
            "active": true,
            "name": {
              "el": "Chimichanga_ Τορτίγια, μοσχαρίσιος κιμάς , καλαμπόκι, sour cream, μπαχαρικά και μυρωδικά",
              "en": "Crispy Chicken Burger"
            },
            "description": {
              "el": "Chimichanga_ Tortilla, ground beef, corn, sour cream, spices and herbs",
              "en": "Brioche bread, lettuce, tomato,herb pesto, earnaise, cheese raclette, bacon, fried potatoes"
            },
            "price": "9,50",
            "image": "/storage/49432/menurio-kazanoba-tapas-bar-pr-gr-2026-05-12-12-52-44.jpeg"
          },
          {
            "id": 247346,
            "active": true,
            "name": {
              "el": "Chicken Tacos_Γύρος από μπούτι κοτόπουλο μαριναρισμένο, μουστάρδα, πάπρικα, sour cream, pico de callo, chips πατάτας",
              "en": "Kazanova Version Ceasar"
            },
            "description": {
              "el": "Chicken Tacos_Chicken thigh gyro marinated, mustard, paprika, sour cream, pico de gallo, potato chips",
              "en": ""
            },
            "price": "11.00",
            "image": "/storage/49408/menurio-kazanoba-tapas-bar-pr-gr-2026-05-11-22-28-21.jpeg"
          },
          {
            "id": 232834,
            "active": true,
            "name": {
              "el": "Tacos burger (3 τμχ)_Μοσχαρίσιο Μπιφτέκι, Χειροποίητη Sause, Cheddar, Iceberg, Tex Mex, Πατάτες Στάχυ",
              "en": "Crispy Chicken Burger"
            },
            "description": {
              "el": "Tacos burger (3 pcs)_Beef Patty, Handmade Sauce, Cheddar, Iceberg, Tex Mex, Potato Stalks",
              "en": "Brioche bread, lettuce, tomato,herb pesto, earnaise, cheese raclette, bacon, fried potatoes"
            },
            "price": "11,00",
            "image": ""
          },
          {
            "id": 232803,
            "active": true,
            "name": {
              "el": "Focaccia Club sandwich_Ξεροψημένη Focaccia, Καπνιστή Μπριζόλα, Παρμεζάνα, Μοτσαρέλα, Ντομάτα, Ρόκα, Aioli Sauce, Πατάτες",
              "en": "Chicken Club Sandwich"
            },
            "description": {
              "el": "Focaccia Club Sandwich_Crispy Focaccia, Smoked Steak, Parmesan, Mozzarella, Tomato, Arugula, Aioli Sauce, Potatoes",
              "en": "chicken with mushrooms, lettuce, raclette cheese, emmental, dressing cesar, fried potatoes"
            },
            "price": "9,00",
            "image": "/storage/49449/menurio-kazanoba-tapas-bar-pr-gr-2026-05-12-13-22-38.jpeg"
          },
          {
            "id": 274940,
            "active": true,
            "name": {
              "el": "Classic club sandwich_Καπνιστή Γαλοπούλα, Gouda Ολλανδίας, Μπέικον, Ντομάτα, Μαρούλι, Μαγιονέζα, Πατάτες",
              "en": "Chicken Club Sandwich"
            },
            "description": {
              "el": "Classic club sandwich_Smoked Turkey, Dutch Gouda, Bacon, Tomato, Lettuce, Mayonnaise, Fries",
              "en": "chicken with mushrooms, lettuce, raclette cheese, emmental, dressing cesar, fried potatoes"
            },
            "price": "8,00",
            "image": ""
          },
          {
            "id": 204245,
            "active": true,
            "name": {
              "el": "Ποικιλία τυριών αλλαντικών",
              "en": "Kazanova Version Ceasar"
            },
            "description": {
              "el": "Ποικιλία εκλεκτών τυριών και αλλαντικών, αποξηραμένα φρούτα, κριτσίνα/κράκερς.",
              "en": ""
            },
            "price": "17.00",
            "image": "/storage/49434/menurio-kazanoba-tapas-bar-pr-gr-2026-05-12-12-53-17.jpeg"
          }
        ]
      }
    ]
  },
  {
    "id": 11410,
    "order": 11,
    "slug": "s-11410",
    "image": "https://app.menurio.com/storage/32905/menurio-kazanoba-tapas-bar-pr-gr-2025-03-14-00-12-46.jpeg",
    "name": {
      "el": "ALL DAY MENU",
      "en": "All Day Menu"
    },
    "description": {
      "el": "",
      "en": ""
    },
    "categories": [
      {
        "id": 244974,
        "active": true,
        "name": {
          "el": "ALL DAY MENU",
          "en": "All Day Menu"
        },
        "description": {
          "el": "",
          "en": ""
        },
        "image": "",
        "notes": [],
        "items": [
          {
            "id": 244975,
            "active": true,
            "name": {
              "el": "CEASAR'S SALAD (Caesar's Dressing, Στήθος κοτόπουλο, καλαμπόκι, κρουτόν, πούδρα παρμεζάνας, μπέικον)",
              "en": "Kazanova Version Ceasar"
            },
            "description": {
              "el": "Caesar's Dressing, Chicken Breast, Corn, Crouton, Parmesan Powder, Bacon",
              "en": ""
            },
            "price": "9.00",
            "image": ""
          },
          {
            "id": 244976,
            "active": true,
            "name": {
              "el": "ΠΑΤΑΤΕΣ ΤΗΓΑΝΙΤΕΣ (Πατάτες με φλούδα και αυλάκι, αγιολί sauce, Μπέικον",
              "en": "Kazanova Version Ceasar"
            },
            "description": {
              "el": "French Fries Potatoes, Agioli, bacon",
              "en": ""
            },
            "price": "6.5",
            "image": ""
          },
          {
            "id": 244977,
            "active": true,
            "name": {
              "el": "CLASSIC CLUB SANDWICH (Ξεροψημένο μπριός Καπνιστή Μπριζόλα, Γκούντα, Μοτσαρέλα, Ντομάτα, μαρούλι, αγιολί Sauce, Πατάτες,",
              "en": "Kazanova Version Ceasar"
            },
            "description": {
              "el": "Roasted Brioche, Smoked steak, Gouda cheese, Tomato, Rocket, Aioli sauce, French Fries",
              "en": ""
            },
            "price": "8.00",
            "image": ""
          },
          {
            "id": 244978,
            "active": true,
            "name": {
              "el": "CHICKEN CLUB SANDWICH (Κοτόπουλο στήθος, Cheddar,Μπέικον, Ντομάτα, Μαρούλι, Mayo Sauce, Πατάτες",
              "en": "Kazanova Version Ceasar"
            },
            "description": {
              "el": "Chicken Breast, Cheddar, Bacon, Tomato, Lettuce, Mayo Sauce,French Fries",
              "en": ""
            },
            "price": "9.50",
            "image": ""
          },
          {
            "id": 244979,
            "active": true,
            "name": {
              "el": "CHEESEBURGER (Μοσχαρίσιο Μπιφτέκι, Χειροποίητη Sauce, Αγγουράκι Πίκλα, Cheddar, Iceberg, Ντομάτα, Πατάτες",
              "en": "Kazanova Version Ceasar"
            },
            "description": {
              "el": "Beef Patty, Handmade sauce, Pickled Cucumber,Cheddar, Iceberg, Fries",
              "en": ""
            },
            "price": "11.00",
            "image": ""
          },
          {
            "id": 244980,
            "active": true,
            "name": {
              "el": "CHICKEN BURGER (Μπριός ψωμί, Κοτόπουλο πανέ, Ταρτάρ Sauce, Ντομάτα, Μαρούλι, Τσένταρ, Πατάτες",
              "en": "Kazanova Version Ceasar"
            },
            "description": {
              "el": "Chicken, Tartare Sauce, Tomato, Lettuce,Cheddar, Fries",
              "en": ""
            },
            "price": "10.00",
            "image": ""
          },
          {
            "id": 244981,
            "active": true,
            "name": {
              "el": "Chicken Pop Corn (Τραγάνες Μπουκίες Κοτόπουλου σε σχήμα pop corn, Παρμεζάνα , γλυκιά πάπρικα, Συνοδεύται από sweet curry sauce & sauce μουστάρδας λεμονιού",
              "en": "Kazanova Version Ceasar"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "8.50",
            "image": ""
          },
          {
            "id": 244999,
            "active": true,
            "name": {
              "el": "Pizza Chorizo_Χειροποίητη Ζύμη, Σάλτσα Ντομάτας, Γκούντα, Μοτσαρέλα, Chorizo, Sour Cream, Παρμεζάνα",
              "en": "Pinsa margherita"
            },
            "description": {
              "el": "Pizza Chorizo_Handmade Dough, Tomato Sauce, Gouda-Mozzarella, Chorizo, Sour Cream, Parmesan",
              "en": "Red sauce san Marzano,mozzarella, basil"
            },
            "price": "13.50",
            "image": ""
          },
          {
            "id": 245000,
            "active": true,
            "name": {
              "el": "Pizza Μargarita_Χειροποίητη Ζύμη, Σάλτσα Ντομάτας, Μοτσαρέλα, Παρμεζάνα, Ντομάτα, Pesto Βασιλικού",
              "en": "Pinsa margherita"
            },
            "description": {
              "el": "Pizza Margarita_Handmade Dough, Tomato Sauce, Mozzarella, Parmesan, Tomato, Basil Pesto",
              "en": "Red sauce san Marzano,mozzarella, basil"
            },
            "price": "12.00",
            "image": ""
          },
          {
            "id": 245001,
            "active": true,
            "name": {
              "el": "Pizza Special Χειροποίητη Ζύμη, Σάλτσα Ντομάτας, Πιπεριά, Μπέικον, Ζαμπόν, Μανιτάρια, Μοτσαρέλα, Παρμεζάνα",
              "en": "Pinsa margherita"
            },
            "description": {
              "el": "Pizza Special_Handmade Dough, Tomato Sauce, Pepper, Bacon, Ham, Mushrooms, Mozzarella, Parmesan",
              "en": "Red sauce san Marzano,mozzarella, basil"
            },
            "price": "14,50",
            "image": ""
          },
          {
            "id": 244982,
            "active": false,
            "name": {
              "el": "Tacos Donner",
              "en": "Kazanova Version Ceasar"
            },
            "description": {
              "el": "Flakes κοτόπουλο, μπαχαρικά, pico de gallo, iceberg, αβοκάντο, χειροποίητη sauce τυριού αρωματισμένη με lime",
              "en": ""
            },
            "price": "9.50",
            "image": ""
          },
          {
            "id": 244983,
            "active": false,
            "name": {
              "el": "Chicken Milanese",
              "en": "Couscous Salad"
            },
            "description": {
              "el": "Baby μαρούλι, τραγανό κοτόπουλο, bearnaise, flakes pecorino, πετιμέζι, καρύδια pecan",
              "en": ""
            },
            "price": "9.00",
            "image": ""
          },
          {
            "id": 244984,
            "active": false,
            "name": {
              "el": "Σαλάτα Κινόα ( vegan , νηστίσιμο )",
              "en": "Couscous Salad"
            },
            "description": {
              "el": "Τρικολόρε πιπεριές, τρίχρωμη κινόα, αβοκάντο, φρέσκο τζίντζερ, lime, καβουρδισμένα φουντούκια, vinaigrette εσπεριδοειδών, δυόσμος",
              "en": ""
            },
            "price": "8.50",
            "image": ""
          },
          {
            "id": 244985,
            "active": false,
            "name": {
              "el": "Τηγανιά Μανιταριών ( vegan , νηστίσιμο ) - Copy",
              "en": "bravas potatoes"
            },
            "description": {
              "el": "ποικιλία μανιταριών, τραγάνες πατάτες με την φλούδα τους, φρέσκα μυρωδικά, χειροποίητη sauce vegan mayo honey",
              "en": ""
            },
            "price": "8,50",
            "image": ""
          },
          {
            "id": 244986,
            "active": false,
            "name": {
              "el": "Τηγανιά Μανιταριών ( vegan , νηστίσιμο )",
              "en": "bravas potatoes"
            },
            "description": {
              "el": "ποικιλία μανιταριών, τραγάνες πατάτες με την φλούδα τους, φρέσκα μυρωδικά, χειροποίητη sauce vegan mayo honey",
              "en": ""
            },
            "price": "8,50",
            "image": ""
          },
          {
            "id": 244987,
            "active": false,
            "name": {
              "el": "Πατάτες Bravas",
              "en": "bravas potatoes"
            },
            "description": {
              "el": "Τραγάνες πατάτες με την φλούδα τους, μπαχαρικά, καπνιστή σάλτσα bravas, aioli μυρωδικών",
              "en": ""
            },
            "price": "6.50",
            "image": ""
          },
          {
            "id": 244988,
            "active": false,
            "name": {
              "el": "Focaccia Sandwich",
              "en": "Club Sandwich Focaccia"
            },
            "description": {
              "el": "Τραγανή focaccia ψημένη σε ξυλόφουρνο, μορταδέλα, παρμεζάνα, pesto φιστίκι Αιγίνης , σγουρό μαρούλι",
              "en": ""
            },
            "price": "9.50",
            "image": ""
          },
          {
            "id": 244989,
            "active": false,
            "name": {
              "el": "FOCACCIA CLUB SANDWICH_Ξεροψημένη Focaccia, Καπνιστή Μπριζόλα, Παρμεζάνα, Μοτσαρέλα, Ντομάτα, Ρόκα, Aioli Sauce, Πατάτες",
              "en": "Chicken Club Sandwich"
            },
            "description": {
              "el": "Focaccia Club Sandwich_Roasted Focaccia, Smoked steak, Parmesan, Mozzarella, Tomato, Rocket, Aioli Sauce, French Fries",
              "en": "chicken with mushrooms, lettuce, raclette cheese, emmental, dressing cesar, fried potatoes"
            },
            "price": "9.00",
            "image": ""
          },
          {
            "id": 244990,
            "active": false,
            "name": {
              "el": "CLASSIC CLUB SANDWICH_Καπνιστή Γαλοπούλα, Gouda Ολλανδίας, Μπέικον, Ντομάτα, Μαρούλι, Μαγιονέζα, Πατάτες",
              "en": "Classic Club Sandwich"
            },
            "description": {
              "el": "Classic Club Sandwich_Smoked Τurkey, Dutch Gouda, Bacon, Tomato, Lettuce, Mayonnaise, French Fries",
              "en": "bacon, turkey, raclette cheesec emmental, mao, lettuce, tomato"
            },
            "price": "8.00",
            "image": ""
          },
          {
            "id": 244991,
            "active": false,
            "name": {
              "el": "CHICKEN PITA CLUB SANDWICH_Κoτόπουλο Στήθος, Cheddar, Μπέικον, Ντομάτα, Μαρούλι, Avocado Sauce, Πατάτες",
              "en": "Chicken Club Sandwich"
            },
            "description": {
              "el": "Chicken Pita Club Sandwich_Chicken Breast, Cheddar, Bacon, Tomato, Lettuce, Avocado Sauce, French Fries",
              "en": "chicken with mushrooms, lettuce, raclette cheese, emmental, dressing cesar, fried potatoes"
            },
            "price": "9.50",
            "image": ""
          },
          {
            "id": 244992,
            "active": false,
            "name": {
              "el": "RAINBOW BURGER 4 τμχ_ Mini bun από λαχανικά ( παντζάρι, κολοκύθα, σπανάκι ) , Μοσχαρίσιο Μπιφτέκι, Iceberg, ζάρια ντομάτας, χειροποίητη Sauce, Cheddar, τραγανές πατάτες",
              "en": "Crispy Chicken Burger"
            },
            "description": {
              "el": "RAINBOW BURGER 4 pcs_ Mini bun made from vegetables (beetroot, pumpkin, spinach), Beef Patty, Iceberg lettuce, diced tomatoes, handmade sauce, Cheddar, crispy fries",
              "en": "Brioche bread, lettuce, tomato,herb pesto, earnaise, cheese raclette, bacon, fried potatoes"
            },
            "price": "12,00",
            "image": ""
          },
          {
            "id": 244993,
            "active": false,
            "name": {
              "el": "TACOS BURGER (3 ΤΜΧ)_Μοσχαρίσιο Μπιφτέκι, Χειροποίητη Sause, Αγγουράκι Πίκλα, Cheddar, Iceberg, Tex Mex, Πατάτες Στάχυ",
              "en": "Crispy Chicken Burger"
            },
            "description": {
              "el": "Tacos Burger (3 pcs) _Beef Patty, Handmade Sauce, Pickled Cucumber, Cheddar, Iceberg, Tex Mex, Thin Cut Fries",
              "en": "Brioche bread, lettuce, tomato,herb pesto, earnaise, cheese raclette, bacon, fried potatoes"
            },
            "price": "11,00",
            "image": ""
          },
          {
            "id": 244994,
            "active": false,
            "name": {
              "el": "CHEDDAR BURGER_Xειροποίητο Μοσχαρίσιο Μπιφτέκι, Μανιτάρια σωτέ, Sauce Mayo με Πίκλα Αγγουριού, Nτομάτα, Mαρούλι, Kαπνιστό Χοιρινό Αλλαντικό, Cheddar, Πατάτες",
              "en": "Crispy Chicken Burger"
            },
            "description": {
              "el": "Cheddar Burger_Handmade Beef Patty, Sauté Mushrooms, Sauce Mayo with Cucumber Pickle, Tomato, Lettuce, Smoked Pork Cold Cut, Cheddar, French Fries",
              "en": "Brioche bread, lettuce, tomato,herb pesto, earnaise, cheese raclette, bacon, fried potatoes"
            },
            "price": "11,00",
            "image": ""
          },
          {
            "id": 244995,
            "active": false,
            "name": {
              "el": "ΜΕΞΙΚΑΝΙΚΗ QUESADILLA_Κοτόπουλο, Πιπεριές Τρικολόρε, Καλαμπόκι, Μανιτάρια, Κρέμα Τυριού, Τσένταρ σε Φύλλο Τορτίγιας",
              "en": "Crispy Chicken Burger"
            },
            "description": {
              "el": "Mexican Quesadilla_Chicken, Tricolore Peppers, Corn, Mushrooms, Cheese Cream, Cheddar in Tortilla Leaves",
              "en": "Brioche bread, lettuce, tomato,herb pesto, earnaise, cheese raclette, bacon, fried potatoes"
            },
            "price": "9,50",
            "image": ""
          },
          {
            "id": 244996,
            "active": false,
            "name": {
              "el": "Crispy Chicken Burger",
              "en": "Crispy Chicken Burger"
            },
            "description": {
              "el": "Ψωμί Brioche, μαρούλι, ντομάτα, pesto μυρωδικών, bearnaise, τυρί raclette, ψητό μπέικον, πατάτες τηγανιτές",
              "en": "Brioche bread, lettuce, tomato,herb pesto, earnaise, cheese raclette, bacon, fried potatoes"
            },
            "price": "9,00",
            "image": ""
          },
          {
            "id": 244997,
            "active": false,
            "name": {
              "el": "Smash Burger Τρούφας",
              "en": "Truffle Smash Burger"
            },
            "description": {
              "el": "Ψωμάκι Brioche ,2πλό μοσχαρίσιο Burger, cheddar, μανιτάρια, τρούφα, iceberg",
              "en": ""
            },
            "price": "11,00",
            "image": ""
          },
          {
            "id": 244998,
            "active": false,
            "name": {
              "el": "Smash Cheeseburger",
              "en": "Smash Cheeseburger"
            },
            "description": {
              "el": "2πλό μοσχαρίσιο Burger, ψωμί Brioche, cheddar, μαρούλι, τραγανό κρεμμύδι, μπέικον, mayo chipotle & bbq, πατάτες τηγανιτές",
              "en": "double beef patties, brioche bread, cheddar, lettuce, crispy onion, bacon, mayo chipotle & bbq, fried potatoes"
            },
            "price": "10,00",
            "image": ""
          },
          {
            "id": 245002,
            "active": false,
            "name": {
              "el": "Pinsa Chicken",
              "en": "Pinsa Carbonara"
            },
            "description": {
              "el": "Μπέικον , κρέμα γάλακτος, παρμεζάνα, μανιτάρια, μοτσαρέλα, κρέμα τυριού, κοτόπουλο",
              "en": ""
            },
            "price": "11.50",
            "image": ""
          },
          {
            "id": 245003,
            "active": false,
            "name": {
              "el": "Pinsa Μορταδέλα",
              "en": "Pinsa Carbonara"
            },
            "description": {
              "el": "Pesto φιστικιού, παρμεζάνα, μοτσαρέλα, κρέμα τυριού, μορταδέλα, βασιλικός, ξύσμα λεμονιού",
              "en": ""
            },
            "price": "12.00",
            "image": ""
          },
          {
            "id": 245004,
            "active": false,
            "name": {
              "el": "Pinsa Νηστίσιμη",
              "en": "Pinsa Carbonara"
            },
            "description": {
              "el": "Κόκκινη σάλτσα san Marzano, μοτσαρέλα και γκούντα νηστίσιμα, καλαμπόκι, τρικολόρε πιπεριές, ελιές, λευκό ,λάδι μαϊντανού, ντοματίνια, ρίγανη",
              "en": ""
            },
            "price": "12.50",
            "image": ""
          },
          {
            "id": 245005,
            "active": false,
            "name": {
              "el": "Pinsa meatballs",
              "en": "Pinsa meatballs"
            },
            "description": {
              "el": "Κόκκινη σάλτσα san Marzano, ρίγανη, μοσχαρίσια κεφτεδάκια, πιπέρι, γαλοτύρι",
              "en": "Red sauce san Marzano,oregano, beef meatballs, pepper, katik Domokou"
            },
            "price": "13.00",
            "image": "/storage/32903/menurio-kazanoba-tapas-bar-pr-gr-2025-03-14-00-06-55.jpeg"
          }
        ]
      }
    ]
  },
  {
    "id": 6214,
    "order": 12,
    "slug": "s-6214",
    "image": "https://app.menurio.com/storage/28383/menurio-kazanoba-tapas-bar-pr-gr-2024-08-05-12-46-25.jpeg",
    "name": {
      "el": "Salad's",
      "en": "Chef's Specials"
    },
    "description": {
      "el": "(17:00-00:00)",
      "en": ""
    },
    "categories": [
      {
        "id": 131422,
        "active": false,
        "name": {
          "el": "Salad's",
          "en": "Tapas & Finger"
        },
        "description": {
          "el": "",
          "en": ""
        },
        "image": "",
        "notes": [],
        "items": [
          {
            "id": 214288,
            "active": false,
            "name": {
              "el": "CAESAR'S_Caesar's Dressing, iceberg, chicken pop corn, Καλαμπόκι, Πούδρα Παρμεζάνας, Μπέικον",
              "en": "Tacos Donner"
            },
            "description": {
              "el": "CAESAR'S_Caesar's Dressing, iceberg, chicken pop corn, Corn, Parmesan Powder, Bacon",
              "en": "Homemade chicken gyros, spices, yogurt, smoked paprika, spicy marinated tomato flesh,, cucumber pickles"
            },
            "price": "9,00",
            "image": ""
          },
          {
            "id": 165088,
            "active": false,
            "name": {
              "el": "Cherry Tomatoes",
              "en": "Tacos Donner"
            },
            "description": {
              "el": "Ντοματίνια, παξιμάδι χαρουπιού, κοπανιστή Μυκόνου, κάπαρη, φρέσκος βασιλικός",
              "en": "Homemade chicken gyros, spices, yogurt, smoked paprika, spicy marinated tomato flesh,, cucumber pickles"
            },
            "price": "8,00",
            "image": ""
          },
          {
            "id": 232795,
            "active": false,
            "name": {
              "el": "Kazanova Version Ceasar - Copy",
              "en": "Tacos Donner"
            },
            "description": {
              "el": "Πράσινα σαλατικά, μπισκότο παρμεζάνας, κοτόπουλου, μαύρη τρούφα, καλαμπόκι, κρουτόν, dressing Ceasar",
              "en": "Homemade chicken gyros, spices, yogurt, smoked paprika, spicy marinated tomato flesh,, cucumber pickles"
            },
            "price": "8,00",
            "image": "/storage/40065/menurio-kazanoba-tapas-bar-pr-gr-2025-06-24-15-15-37.jpeg"
          },
          {
            "id": 148786,
            "active": false,
            "name": {
              "el": "Σαλάτα Κους Κους_Κοτόπουλο, Ψητό Χαλούμι, Φρέσκο Κρεμμύδι, Μάνγκο, Dressing Σουσάμι",
              "en": "Meatballs Andalusia"
            },
            "description": {
              "el": "Cous-Cous_ Chicken, Grilled Halloumi, Fresh Onion, Mango, Sesame Dressing",
              "en": "Beef meatballs. Bravas Sauce, peppers, olives, Capers, Warm Bread"
            },
            "price": "9.00",
            "image": ""
          },
          {
            "id": 214331,
            "active": false,
            "name": {
              "el": "Σαλάτα Κινόα,_Αβοκάντο, Ντοματίνια, Τρίχρωμες Πιπεριές, Καρότο, Κολοκυθάκια, Πέστο Βασιλικού, Κοτόπουλο",
              "en": "Meatballs Andalusia"
            },
            "description": {
              "el": "Quinoa , Avocado, Cherry Tomatoes, Tricolore Peppers, Carrot, Zucchini, Basil Pesto, chicken",
              "en": "Beef meatballs. Bravas Sauce, peppers, olives, Capers, Warm Bread"
            },
            "price": "9,00",
            "image": ""
          },
          {
            "id": 148791,
            "active": false,
            "name": {
              "el": "Κατσικίσιες κροκέτες",
              "en": "Goat croquettes"
            },
            "description": {
              "el": "Τραγανό κανταΐφι, φιστίκι Αιγίνης, lemon curt",
              "en": "crispy kataifi, pistachio, lemon curt"
            },
            "price": "8.00",
            "image": "/storage/32897/menurio-kazanoba-tapas-bar-pr-gr-2025-03-14-00-02-44.jpeg"
          }
        ]
      }
    ]
  },
  {
    "id": 11353,
    "order": 13,
    "slug": "s-11353",
    "image": "https://app.menurio.com/storage/46120/menurio-kazanoba-tapas-bar-pr-gr-2025-12-12-11-43-18.jpeg",
    "name": {
      "el": "Βάφλες",
      "en": "Βάφλες"
    },
    "description": {
      "el": "",
      "en": ""
    },
    "categories": [
      {
        "id": 243370,
        "active": true,
        "name": {
          "el": "Βάφλες - Copy",
          "en": "Βάφλες - Copy"
        },
        "description": {
          "el": "",
          "en": ""
        },
        "image": "",
        "notes": [
          {
            "el": "Βάφλες",
            "en": ""
          },
          {
            "el": "Γλυκά",
            "en": ""
          }
        ],
        "items": [
          {
            "id": 243372,
            "active": true,
            "name": {
              "el": "Βάφλα με σοκολάτα και μπισκότο.",
              "en": "Βάφλα με σοκολάτα και μπισκότο."
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "5,50",
            "image": "/storage/46262/menurio-kazanoba-tapas-bar-pr-gr-2025-12-20-14-47-18.jpeg"
          },
          {
            "id": 243373,
            "active": true,
            "name": {
              "el": "Βάφλα Lila.",
              "en": "Βάφλα Lila."
            },
            "description": {
              "el": "Πραλίνα σοκολάτας , πραλίνα φράουλα , λευκή πραλίνα και παγωτό βανίλιας.",
              "en": ""
            },
            "price": "7,50",
            "image": "/storage/46263/menurio-kazanoba-tapas-bar-pr-gr-2025-12-20-14-47-47.jpeg"
          },
          {
            "id": 243374,
            "active": true,
            "name": {
              "el": "Βάφλα Βiscoff.",
              "en": "Βάφλα Βiscoff."
            },
            "description": {
              "el": "Bάφλα με πραλίνα biscoff, τριμμένο μπισκότο και παγωτό κανέλας.",
              "en": ""
            },
            "price": "8,00",
            "image": "/storage/46265/menurio-kazanoba-tapas-bar-pr-gr-2025-12-20-14-48-23.jpeg"
          },
          {
            "id": 243377,
            "active": true,
            "name": {
              "el": "Βάφλα Bueno.",
              "en": "Βάφλα Bueno."
            },
            "description": {
              "el": "Βάφλα με πραλίνα σοκολάτας , πραλίνα bueno, μπισκότο και παγωτό βανίλιας.",
              "en": ""
            },
            "price": "7,50",
            "image": "/storage/46264/menurio-kazanoba-tapas-bar-pr-gr-2025-12-20-14-48-05.jpeg"
          },
          {
            "id": 243376,
            "active": false,
            "name": {
              "el": "Σουφλε σοκολάτας με παγωτό βανίλια Μαγαδασκάρης",
              "en": "Σουφλε σοκολάτας με παγωτό βανίλια Μαγαδασκάρης"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "6,50",
            "image": "/storage/46261/menurio-kazanoba-tapas-bar-pr-gr-2025-12-20-14-38-05.jpeg"
          },
          {
            "id": 243378,
            "active": false,
            "name": {
              "el": "Cheesecake Αγριοκέρασο.",
              "en": "Cheesecake Αγριοκέρασο."
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "5,50",
            "image": "/storage/46259/menurio-kazanoba-tapas-bar-pr-gr-2025-12-20-14-36-27.jpeg"
          },
          {
            "id": 243379,
            "active": false,
            "name": {
              "el": "Cheesecake Biscoff",
              "en": "Cheesecake Biscoff"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "7.00",
            "image": "/storage/46260/menurio-kazanoba-tapas-bar-pr-gr-2025-12-20-14-37-05.jpeg"
          },
          {
            "id": 243380,
            "active": false,
            "name": {
              "el": "Παραδοσιακή πορτοκαλόπιτα.",
              "en": "Παραδοσιακή πορτοκαλόπιτα."
            },
            "description": {
              "el": "Παραδοσιακή πορτοκαλόπιτα με βανίλια μαδαγασκάρης",
              "en": ""
            },
            "price": "6.50",
            "image": "/storage/46257/menurio-kazanoba-tapas-bar-pr-gr-2025-12-20-14-34-31.jpeg"
          },
          {
            "id": 243381,
            "active": false,
            "name": {
              "el": "Σοκολατόπιτα με παγωτό βανίλια Μαγαδασκάρης.",
              "en": "Σοκολατόπιτα με παγωτό βανίλια Μαγαδασκάρης."
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "6,50",
            "image": "/storage/46256/menurio-kazanoba-tapas-bar-pr-gr-2025-12-20-14-34-08.jpeg"
          },
          {
            "id": 243382,
            "active": false,
            "name": {
              "el": "Creme Broulee",
              "en": "Creme Broulee"
            },
            "description": {
              "el": "",
              "en": ""
            },
            "price": "6.50",
            "image": "/storage/46255/menurio-kazanoba-tapas-bar-pr-gr-2025-12-20-14-28-59.jpeg"
          }
        ]
      }
    ]
  },
  {
    "id": 7127,
    "order": 14,
    "slug": "s-7127",
    "image": "https://app.menurio.com/storage/32906/menurio-kazanoba-tapas-bar-pr-gr-2025-03-14-00-13-35.jpeg",
    "name": {
      "el": "Chef's Sweets",
      "en": "Chef's Sweets"
    },
    "description": {
      "el": "Σε περίπτωση αλλεργίας η δυσανεξίας παρακαλούμε ενημερώστε τον σερβιτόρο",
      "en": ""
    },
    "categories": [
      {
        "id": 150789,
        "active": true,
        "name": {
          "el": "Chef's Sweets",
          "en": "Chef's Sweets"
        },
        "description": {
          "el": "",
          "en": ""
        },
        "image": "",
        "notes": [],
        "items": [
          {
            "id": 232797,
            "active": true,
            "name": {
              "el": "Σοκολατόπιτα σε σούπα σοκολάτας και παγωτό βανίλια Μαδαγασκάρης",
              "en": "Crema Catalana"
            },
            "description": {
              "el": "Chocolate pie in chocolate soup and Madagascar vanilla ice cream",
              "en": ""
            },
            "price": "6,50",
            "image": "/storage/49442/menurio-kazanoba-tapas-bar-pr-gr-2026-05-12-13-05-13.jpeg"
          },
          {
            "id": 232798,
            "active": true,
            "name": {
              "el": "Pavlova_Μπεζέδες Ξάνθης, γκανάζ λευκής σοκολάτας, μαρμελάδα κόκκινων φρούτων, φρέσκα φρούτα, καραμελωμένοι ξηροί καρποί",
              "en": "Deconstructed apple pie"
            },
            "description": {
              "el": "Pavlova_Xanthi meringue, white chocolate ganache, red fruit jam, fresh fruit, caramelized nuts",
              "en": ""
            },
            "price": "7,00",
            "image": ""
          },
          {
            "id": 208994,
            "active": true,
            "name": {
              "el": "Lila Pause_Γκανάζ σοκολάτας & φράουλας, τριμμένο μπισκότο, σιρόπι φράουλας και παγωτό βανίλια",
              "en": "Deconstructed apple pie"
            },
            "description": {
              "el": "Lila Pause Chocolate and strawberry ganache, crushed biscuit, strawberry syrup and vanilla ice cream",
              "en": ""
            },
            "price": "6,50",
            "image": "/storage/49413/menurio-kazanoba-tapas-bar-pr-gr-2026-05-11-22-38-11.jpeg"
          },
          {
            "id": 150792,
            "active": false,
            "name": {
              "el": "Σουφλέ σοκολάτας με Παγωτό Βανίλια Μαδαγασκάρης",
              "en": "Crema Catalana"
            },
            "description": {
              "el": "Chocolate souffle with Madagascar Vanilla Ice-Cream",
              "en": ""
            },
            "price": "6.00",
            "image": ""
          },
          {
            "id": 232801,
            "active": false,
            "name": {
              "el": "New York cheesecake Αγριοκέρασο ή Φρούτα του Δάσους ή καραμέλα ή Λεμόνι",
              "en": "Crema Catalana"
            },
            "description": {
              "el": "New York cheesecake Wild cherry or Forest fruits or Caramel or Lemon",
              "en": ""
            },
            "price": "5.50",
            "image": "/storage/46029/menurio-kazanoba-tapas-bar-pr-gr-2025-12-05-20-49-46.jpeg"
          },
          {
            "id": 150790,
            "active": false,
            "name": {
              "el": "Dubai Chocolate sphere",
              "en": "Dubai Chocolate sphere"
            },
            "description": {
              "el": "Καραμελωμένο κανταΐφι, πραλίνα φιστίκι, λευκή σοκολάτα, γκανάζ σοκολάτας Nyangbo 68% Valrhona",
              "en": ""
            },
            "price": "8.00",
            "image": "/storage/32906/menurio-kazanoba-tapas-bar-pr-gr-2025-03-14-00-13-35.jpeg"
          },
          {
            "id": 208995,
            "active": false,
            "name": {
              "el": "Summer Pavlova",
              "en": "Dubai Chocolate sphere"
            },
            "description": {
              "el": "Τραγανοί μπεζέδες, παγωτό Pavlova, φρέσκα φρούτα καραμελωμένα φουντούκια, σαντιγί, couli φράουλα.",
              "en": ""
            },
            "price": "8.00",
            "image": ""
          },
          {
            "id": 150791,
            "active": false,
            "name": {
              "el": "Crumble Μήλου",
              "en": "Deconstructed apple pie"
            },
            "description": {
              "el": "Crumble με μήλο, αλμυρή καραμέλα, παγωτό κανέλα.",
              "en": ""
            },
            "price": "7.00",
            "image": ""
          },
          {
            "id": 232800,
            "active": false,
            "name": {
              "el": "Παγωτό Βανίλια Μαδαγασκάρης ή Σοκολάτα",
              "en": "Deconstructed apple pie"
            },
            "description": {
              "el": "Ice-Cream Madagascar Vanilla or Chocolate",
              "en": ""
            },
            "price": "2,50",
            "image": ""
          }
        ]
      }
    ]
  }
];
