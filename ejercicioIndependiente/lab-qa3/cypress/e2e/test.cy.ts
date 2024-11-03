import '../../node_modules/cypress-xpath';

describe('Login', function() {

  beforeEach(function() {
    cy.visit('https://www.bnventadebienes.com/properties/search');
  });
  
  afterEach(function() {
    cy.reload();
  });

  it('buscar sin filtro', () => {
    cy.visit('https://www.bnventadebienes.com/properties/search');

    cy.xpath('/html/body/div[3]/div[4]/form/div/div[2]/div[2]/button')
      .click();
  });

  it('que el minimo de precio sea mayor al maximo ', () => {
    cy.xpath('  /html/body/div[3]/div[4]/form/div/div[1]/div[8]/div/input')
      .type( '9999');
      cy.xpath(' /html/body/div[3]/div[4]/form/div/div[1]/div[9]/div/input')
      .type( '373');
      cy.xpath('/html/body/div[3]/div[4]/form/div/div[2]/div[2]/button')
      .click();
    cy.contains('El precio en "Desde" debe ser menor a el precio en "Hasta"');
  });

  it('que el minimo de tamanno sea mayor al maximo ', () => {
    cy.xpath('  /html/body/div[3]/div[4]/form/div/div[1]/div[6]/div/input')
      .type( '9999');
      cy.xpath(' /html/body/div[3]/div[4]/form/div/div[1]/div[7]/div/input')
      .type( '373');
      cy.xpath('/html/body/div[3]/div[4]/form/div/div[2]/div[2]/button')
      .click();
    cy.contains('El tamaño en "Desde" debe ser menor a el tamaño en "Hasta".');
  });

  it('que solo permita poner numeros en el precio minimo', () => {
    cy.xpath('  /html/body/div[3]/div[4]/form/div/div[1]/div[8]/div/input')
      .type( 'Pruebaozu');
    cy.xpath('  /html/body/div[3]/div[4]/form/div/div[1]/div[8]/div/input').should('have.value', '');

  });

});
