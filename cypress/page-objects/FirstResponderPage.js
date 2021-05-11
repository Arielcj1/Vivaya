/// <reference types="cypress"/>
export class FirstResponderPage {

    select_FirstResponders_When_LoggedOut(){
        cy.get('#mainNav > :nth-child(7) > a').click()
    }

    select_FirstResponders_When_LogIn(){
        cy.get('#mainNav > :nth-child(6) > a').click()
    }    

    select_Register_Button(){
        cy.get('.free-months > .btn').click()
    }
}