import '../../node_modules/cypress-xpath';

describe('Login', function() {

  beforeEach(function() {
    cy.visit('https://www.bnventadebienes.com/properties/search');
  });
  
  afterEach(function() {
    cy.reload();
  });
  //Nombre:Busqueda sin filtro
  //Objetivo:Buscar sin ningun filtro las propiedades
  //Datos de prueba: NA
  //Resultado Esperado: Que muestre propiedades
  
  it('buscar sin filtro', () => {
    cy.visit('https://www.bnventadebienes.com/properties/search');

    cy.xpath('/html/body/div[3]/div[4]/form/div/div[2]/div[2]/button')
      .click();
  });

  //Nombre:Minimo precio no puede ser mayor a Maximo precio
  //Objetivo:Asegurarse que no se pueda poner un precio minimo mayor al precio maximo
  //Datos de prueba: 999 en minimo 373 en maximo
  //Resultado Esperado: Que salte un error
  
  it('que el minimo de precio sea mayor al maximo ', () => {
    cy.xpath('  /html/body/div[3]/div[4]/form/div/div[1]/div[8]/div/input')
      .type( '9999');
      cy.xpath(' /html/body/div[3]/div[4]/form/div/div[1]/div[9]/div/input')
      .type( '373');
      cy.xpath('/html/body/div[3]/div[4]/form/div/div[2]/div[2]/button')
      .click();
    cy.contains('El precio en "Desde" debe ser menor a el precio en "Hasta"');
  });

  //Nombre:Minimo tamanno no puede ser mayor a Maximo tamanno
  //Objetivo:Asegurarse que no se pueda poner un tamanno minimo mayor al tamanno maximo
  //Datos de prueba: 999 en minimo 373 en maximo
  //Resultado Esperado: Que salte un error
  it('que el minimo de tamanno sea mayor al maximo ', () => {
    cy.xpath('  /html/body/div[3]/div[4]/form/div/div[1]/div[6]/div/input')
      .type( '9999');
      cy.xpath(' /html/body/div[3]/div[4]/form/div/div[1]/div[7]/div/input')
      .type( '373');
      cy.xpath('/html/body/div[3]/div[4]/form/div/div[2]/div[2]/button')
      .click();
    cy.contains('El tamaño en "Desde" debe ser menor a el tamaño en "Hasta".');
  });

  //Nombre:Minimo precio no puede tener valores que no sean numeros como valor
  //Objetivo:Asegurarse que no se pueda poner una entrada invalida en el minimo precio
  //Datos de prueba: Pruebaozu
  //Resultado Esperado: Que no se escriban los datos
  
  it('que solo permita poner numeros en el precio minimo', () => {
    cy.xpath('  /html/body/div[3]/div[4]/form/div/div[1]/div[8]/div/input')
      .type( 'Pruebaozu');
    cy.xpath('  /html/body/div[3]/div[4]/form/div/div[1]/div[8]/div/input').should('have.value', '');

  });

});
