/// <reference types="cypress"/>

export class SeekerCreationSingle{

    type_First_Name_Single(value){
        cy.get('#seekersinglesignupform-first_name').type(value)
    }
    type_Last_Name_Single(value){
        cy.get('#seekersinglesignupform-last_name').type(value)
    }
    type_Seeker_Email_Single(value){
        cy.get('#seekersinglesignupform-email').type(value)
    }
    type_Seeker_Password_Single(value){
        cy.get('#seekersinglesignupform-password').type(value)
    }
    select_Membership_3Pack(){
        cy.get('.label-membership.low > .s-radio').click()
    }
    //Apply promo code
    promo_code_option(){
        cy.get('#promoCollapse').click()
    }
    type_promo_code(value){
        cy.get('#seekersinglesignupform-discountcode').type(value)
    }
    apply_Code(){
        cy.get('#apply-code').click()
    }


    //Credit Card Data
    type_Card_Name_Single(value){
        cy.get('#seekersinglesignupform-cardholder').type(value)
    }
    type_Card_Number_Single(value){
        cy.get('#seekersinglesignupform-cardnumber').type(value)
    }
    type_Card_ExpDate_Single(value){
        cy.get('#seekersinglesignupform-expiration').type(value)
    }
    type_Security_Code_Single(value){
        cy.get('#seekersinglesignupform-cvc').type(value)
    }

    marking_Checkbox(){
        cy.get('.custom-control-label').click({force:true})
    }

    click_On_Submit(){
        cy.get('#stripe-form-submit').click()
    }
}