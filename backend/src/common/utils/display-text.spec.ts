import { titleCase } from './display-text';
it('title cases human text and preserves embedded URLs and email addresses', () => {
  expect(titleCase('LEATHER SEATS, ONE OWNER')).toBe('Leather Seats, One Owner');
  expect(titleCase('VISIT https://EXAMPLE.com/Aa OR Sales@Dealer.co.za')).toBe('Visit https://EXAMPLE.com/Aa Or Sales@Dealer.co.za');
  expect(titleCase("o'brien motors mercedes-benz x5")).toBe("O'Brien Motors Mercedes-Benz X5");
});
it('keeps abbreviations such as BMW in capitals', () => {
  expect(titleCase('BMW X5 FROZEN WHITE')).toBe('BMW X5 Frozen White');
  expect(titleCase('BMW Mbombela')).toBe('BMW Mbombela');
  expect(titleCase('bmw tygervalley')).toBe('BMW Tygervalley');
  expect(titleCase('GWM HAVAL 4X4 SUV')).toBe('GWM Haval 4X4 SUV');
  expect(titleCase('VW Cape Town CBD')).toBe('VW Cape Town CBD');
  expect(titleCase('Full service history, FSH, DSG gearbox')).toBe('Full Service History, FSH, DSG Gearbox');
  expect(titleCase('contact us for it')).toBe('Contact Us For It');
});
