/**
 * Abbreviations that always show in capitals, even when the source text is all lower or all upper case.
 * Common English words (us, it, am…) are left out on purpose so ordinary sentences are not changed.
 */
const ABBREVIATIONS = new Set([
  // Makes and brands
  'bmw', 'vw', 'gwm', 'mg', 'byd', 'jac', 'jmc', 'ldv', 'baic', 'dfsk', 'faw', 'gac', 'ktm', 'amg', 'ud', 'jlr', 'gm',
  // Vehicle terms
  'suv', 'mpv', 'lcv', 'ev', 'phev', 'hev', '4x4', '4x2', '4wd', '2wd', 'awd', 'fwd', 'rwd', 'cvt', 'dct', 'dsg', 'abs', 'esp', 'ebd',
  'gti', 'gts', 'tdi', 'tsi', 'tfsi', 'crdi', 'vvt', 'led', 'gps', 'usb', 'dvd', 'cd', 'hid', 'drl', 'pdc', 'srs', 'aux',
  // Places and organisations
  'cbd', 'rsa', 'sa', 'za', 'uk', 'usa', 'kzn', 'vat', 'id', 'cc',
]);
const LINK = /(https?:\/\/\S+|[\w.+-]+@[\w.-]+\.[a-z]{2,})/gi;
const WORD = /[\p{L}\p{N}]+/gu;

/**
 * Title case human-readable text while preserving embedded contact links and abbreviations.
 * "BMW Mbombela" stays "BMW Mbombela"; "BMW X5 FROZEN WHITE" becomes "BMW X5 Frozen White".
 * When the source mixes cases, short words it writes in capitals (FSH, DSG…) are kept as written.
 */
export function titleCase(value: string): string {
  const mixed = /\p{Ll}/u.test(value.replace(LINK, '')) && /\p{Lu}/u.test(value.replace(LINK, ''));
  return value.split(LINK).map((part, i) => i % 2 ? part : part.replace(WORD, (word) => {
    const lower = word.toLocaleLowerCase('en-ZA');
    if (ABBREVIATIONS.has(lower)) return lower.toLocaleUpperCase('en-ZA');
    // Short capitalised words in mixed-case text are abbreviations the dealer wrote on purpose (FSH, DSG, AMG).
    if (mixed && word.length > 1 && word.length <= 4 && word === word.toLocaleUpperCase('en-ZA') && /\p{L}/u.test(word)) return word;
    return lower.replace(/\p{L}/u, (letter) => letter.toLocaleUpperCase('en-ZA'));
  })).join('');
}
