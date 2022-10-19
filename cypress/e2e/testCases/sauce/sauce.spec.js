import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('a logged user is on products page', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('[data-test="username"]').type(Cypress.env('USERNAME'));
    cy.get('[data-test="password"]').type(Cypress.env('PASSWORD'));
    cy.get('#login-button').click();
    cy.get('.title').should('have.text', 'Products');
});

When('the user add to cart the {string} product', (productName) => {
    cy.get('.inventory_item_name').contains(productName).parentsUntil('.inventory_item').as('product');
    cy.get('@product').find('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
});

When('going to the shopping cart', () => {
    cy.get('.shopping_cart_link').click();
});

Then('the user must visualize the product into the cart', () => {
    cy.get('@product').find('.inventory_item_name').invoke('text').then((text) => {
        cy.get('.inventory_item_name').should('have.text', text);
    });
    cy.get('@product').find('.inventory_item_price').invoke('text').then((text) => {
        cy.get('.inventory_item_price').should('have.text', text);
    });
});