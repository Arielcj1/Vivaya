/// <reference types="cypress"/>
export class CartPage {

    select_Checkout(){
        cy.get('.col-md-12 > .btn').click()
    }

    select_Confirm_Purchase(){
        cy.get('#stripe-form-submit').click()
    }

    select_Go_ToDashboard_AfterPurchase(){
        cy.get('a > .btn').click()
    }

    select_Remove_Class(){
        cy.get(':nth-child(2) > :nth-child(2) > .remove-button').click()
    }

    select_Remove_Packs(){
        cy.get(':nth-child(4) > :nth-child(2) > .remove-button').click()
    }

    select_Remove_Single_Pack(){
        cy.get('.remove-button').click()
    }

    confirm_Remove_From_Cart(){
        cy.get('.btn-success').click()
    }

}









