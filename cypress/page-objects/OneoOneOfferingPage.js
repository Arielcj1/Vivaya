/// <reference types="cypress"/>

export class OneoOneOfferingPage{
    click_Add_Another(){
        cy.get('#addNewOfferPrice').click()
    }

    verify_labels_OfferingPage(){
        cy.get(':nth-child(1) > .form-group > .visible-xs').should('contain', 'Offering')
        cy.get(':nth-child(2) > .form-group > .visible-xs').should('contain', 'Duration - Hours : Minutes')
        cy.get(':nth-child(3) > .form-group > .visible-xs').should('contain', 'Price per Session')
    }

    select_Offer(value){
        cy.get('#guidepricedurationoneone-guide_offer_id').select(value)
    }

    set_Duration(value){
        //cy.get('.input-group-addon')
        //cy.get('#guidepricedurationoneone-duration_hr_min').type(value)
        cy.get('.input-group-addon').click()
        for (let i = 0; i<value; i++){
            cy.get('tbody > :nth-child(1) > :nth-child(3) > a').click()
        }
    }

    set_Price(value){
        cy.get('#guidepricedurationoneone-price').type(value)
    }

    click_On_Save_Button(){
        cy.get('#form-signup > .text-center > .btn').click()
    }

    click_On_Remove(){
        cy.get('.btn-remove').click()
        cy.wait(1000)
        cy.get('.btn-success').click()
    }

    select_1o1_Offering_Tab(){
        cy.get('.secondary-menu > .nav > :nth-child(4) > .nav-link').should('contain', '1-1 Offerings')
        cy.get('.secondary-menu > .nav > :nth-child(4) > .nav-link').click()
    }

}