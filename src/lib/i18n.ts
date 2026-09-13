export type Locale = 'el' | 'en';

const STRINGS: Record<Locale, Record<string, string>> = {
  el: {
    tapasBar: 'TAPAS BAR · Pr·gr · Ξάνθη',
    heroSub:
      'Το ίδιο αγαπημένο μενού του Kazanoba — ξανασχεδιασμένο σε γυαλί, φως και βάθος. Καφέδες, cocktails, κρασιά, brunch & tapas.',
    explore: 'Εξερεύνηση μενού',
    all: 'Όλα',
    searchPh: 'Αναζήτηση… π.χ. mojito, freddo, ceasar',
    searchMobilePh: 'Αναζήτηση πιάτου ή ποτού…',
    sections: 'ενότητες',
    dishes: 'πιάτα & ποτά',
    currencyNote: 'Τιμές σε € · EL/EN',
    noResults: 'Δεν βρέθηκε τίποτα για αυτή την αναζήτηση.',
    noResultsHint: 'Δοκίμασε “freddo”, “spritz”, “ceasar” ή καθάρισε το φίλτρο.',
    clear: 'Καθαρισμός',
    source: 'Πηγή μενού',
    reimagined: 'Reimagined με Apple Vision design — γυαλί, blur & φως. Το περιεχόμενο προέρχεται από το επίσημο Menurio μενού.',
    openOriginal: 'Άνοιγμα πρωτοτύπου',
    poweredBy: 'Διαχειρίζεται από Payload CMS (EL/EN, SQLite τοπικά)',
    liveSrc: 'Ζωντανά δεδομένα από το CMS',
    snapshotSrc: 'Ενσωματωμένο στιγμιότυπο (το CMS δεν απάντησε)'
  },
  en: {
    tapasBar: 'TAPAS BAR · Pr·gr · Xanthi',
    heroSub:
      'The same beloved Kazanoba menu — reimagined in glass, light and depth. Coffees, cocktails, wines, brunch & tapas.',
    explore: 'Explore menu',
    all: 'All',
    searchPh: 'Search… e.g. mojito, freddo, ceasar',
    searchMobilePh: 'Search a dish or drink…',
    sections: 'sections',
    dishes: 'dishes & drinks',
    currencyNote: 'Prices in € · EL/EN',
    noResults: 'Nothing found for this search.',
    noResultsHint: 'Try “freddo”, “spritz”, “ceasar” or clear the filter.',
    clear: 'Clear',
    source: 'Menu source',
    reimagined: 'Reimagined with Apple Vision design — glass, blur & light. Content mirrors the official Menurio menu.',
    openOriginal: 'Open original',
    poweredBy: 'Managed by Payload CMS (EL/EN, local SQLite)',
    liveSrc: 'Live data from the CMS',
    snapshotSrc: 'Bundled snapshot (CMS unreachable)'
  }
};

export function t(locale: Locale, key: string): string {
  return STRINGS[locale]?.[key] ?? key;
}
