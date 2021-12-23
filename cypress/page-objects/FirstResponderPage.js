/// <reference types="cypress"/>
export class FirstResponderPage {

    select_FirstResponders_When_LoggedOut(){
        cy.get('.col-xl-9 > #footernav > :nth-child(3) > .nav-link').click()
    }

    select_FirstResponders_When_LogIn(){
        cy.get('.col-xl-9 > #footernav > :nth-child(2) > .nav-link').click()
    }    

    select_Register_Button(){
        cy.get('.free-months > .btn').click()
    }
}