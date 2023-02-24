/// <reference types="cypress"/>


describe('Funcionalidade Produto', ()=>{

beforeEach(()=>{
    cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
});

    it('Deve selecionar produto da lista', ()=>{
        cy.get('[class="product-block grid"]').contains('Abominable Hoodie').click()

    });

    it.only('Deve selecionar produto ao carrinho', ()=>{
        var qndCarrinho = 4
        

        cy.get('[class="product-block grid"]')
        .contains('Abominable Hoodie').click()
        cy.wait(3000)
        cy.get('.button-variable-item-XS').click()
        cy.get('.button-variable-item-Blue').click()
        cy.get('.input-text').clear().type(qndCarrinho)
        cy.get('.single_add_to_cart_button').click()
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain' , qndCarrinho)
        cy.get('.woocommerce-message')
        .should('contain' , qndCarrinho + ' × “Abominable Hoodie” foram adicionados no seu carrinho.')

    });

});