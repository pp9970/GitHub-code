/// <reference types = "cypress" />


describe('SauceLab',()=>{

    before(()=>{
        cy.visit("https://www.saucedemo.com/v1/")
        cy.get("#user-name").type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click({force : true})
    })

    

    it('productAddToCard',()=>{
        cy.get('.inventory_item_name').eq(0).click({force:true});
        cy.get('button.btn_primary.btn_inventory').click({force:true});
        cy.get('#shopping_cart_container123').click({force:true});
    })

    it('loginTest',()=>{
        cy.visit("https://www.saucedemo.com/v1/")
        cy.get("#user-name").type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click({force : true})
    })


})