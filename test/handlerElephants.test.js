const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Testa se não for passado nenhum parametro retorne undefined', () => {
    expect(handlerElephants()).toBe(undefined);
  });
  it('Testa se a quantidade de elefantes dado na string "count" retorna 4', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('Testa se passado string "names" retorna ["Ilana", "Orval", "Bea", "Jefferson"]', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
  it('Testa se passado string "averageAge" retorna a média de idade (10.5)', () => {
    expect(handlerElephants('averageAge')).toBe(10.5);
  });
  it('Testa se passado uma string nula, retorna null', () => {
    expect(handlerElephants(' ')).toEqual(null);
  });
  it('Testa se passado um Objeto vazio retorna "Parâmetro inválido, é necessário uma string"', () => {
    expect(handlerElephants({})).toEqual('Parâmetro inválido, é necessário uma string');
  });
  it('Testa se passado o parâmetro "location" retorna a localização dos elefantes', () => {
    expect(handlerElephants('location')).toBe('NW');
  });
});


