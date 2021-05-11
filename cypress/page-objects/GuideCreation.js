/// <reference types="cypress"/>
export class GuideCreation {

    become_Guide(){
        cy.get('.become-a-guide > a').click()           
    }
    become_Guide_Page(){
        cy.get('.bag-button > .btn').click()
    }
    fill_Form_For_Guide(val,val1,val2,val3){
        cy.get('#signupform-first_name').type(val)
        cy.get('#signupform-last_name').type(val1)
        cy.get('#signupform-email').type(val2)
        cy.get('#signupform-phone_number').type(val3)
        cy.get('#signupform-timezone').select('(UTC-04:00) Georgetown, La Paz, Manaus, San Juan')
        cy.get('#states').select('Florida')
        cy.get('#signupform-terms').check()
        cy.get('#signupform-password').type('password{enter}')
    }
}