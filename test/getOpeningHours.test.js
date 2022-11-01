const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Testa se não passado argumentos retorna um objeto com a agenda padrão', () => {
    expect(getOpeningHours()).toEqual({
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    });
  });
  it('Testa se "Monday" retorna "The zoo is closed"', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toBe('The zoo is closed');
  });
  it('Testa se "Wednesday" retorna "The zoo is closed"', () => {
    expect(getOpeningHours('Wednesday', '09:00-PM')).toBe('The zoo is closed');
  });
  it('Testa se "Tuesday" retorna "The zoo is open"', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe('The zoo is open');
  });
  it('Testa se passado o horario "L9:00-AM" retorna "The abbreviation must be "AM" or "PM""', () => {
    expect(() => getOpeningHours('Tuesday', 'L9:00-PM')).toThrowError('The hour should represent a number');
  });
  it('Testa se passado o horario "09:LC-PM" retorna "The abbreviation must be "AM" or "PM""', () => {
    expect(() => getOpeningHours('Tuesday', '09:LC-PM')).toThrowError('The minutes should represent a number');
  });
  it('Testa se passado o horario "09:00-LC" retorna "The abbreviation must be "AM" or "PM""', () => {
    expect(() => getOpeningHours('Tuesday', '09:00-LC')).toThrowError('The abbreviation must be \'AM\' or \'PM\'');
  });
  it('Testa se o horario não estiver no formato 0-12H, deve retornar "The hour must be between 0 and 12"', () => {
    expect(() => getOpeningHours('Monday', '14:00-AM')).toThrowError('The hour must be between 0 and 12');
  });
  it('Testa se os minutos não estiverem no intervalo 0-59, deve retornar "The minutes must be between 0 and 59"', () => {
    expect(() => getOpeningHours('Monday', '10:72-AM')).toThrowError('The minutes must be between 0 and 59');
  });
  it('testa se o dia passado é válido, deve retornar "The day must be valid. Example: Monday"', () => {
    expect(() => getOpeningHours('Wed', '09:00-AM')).toThrowError(new Error('The day must be valid. Example: Monday'));
  });
});
