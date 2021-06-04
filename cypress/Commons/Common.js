/// <reference types="cypress"/>
export class Commons {

    open_Web_Site(){
        cy.visit('https://stage.vivayalive.com')
    }

    open_Admin_Site(){
        cy.visit('https://admin.stage.vivayalive.com')
    }

    set_Guide_Credentials_One(){
        cy.get('#loginform-email').type("manurex@manu.com")
        cy.wait(2000)
        cy.get('#loginform-password').type("perrodelmal")
    }

    set_Seeker_Credentials_One(){
        cy.get('#loginform-email').type("horcosio@gmail.com")
        cy.wait(2000)
        cy.get('#loginform-password').type("perrodelmal")
    }

    set_Seeker_Credentials_Two(){ //Thi user have the free trial plan expired and Autorenewal cancelled
        cy.get('#loginform-email').type("milton.paredes.mp@gmail.com")
        cy.wait(2000)
        cy.get('#loginform-password').type("password")
    }

    set_Admin_Credentials(){
        cy.get('#loginform-email').type('manu@manu.com')
        cy.get('#loginform-password').type('perrodelmal')
        cy.get('.btn').click()
    }

    set_Generic_Seeker(value, value1){
        cy.get('#loginform-email').type(value)
        cy.wait(2000)
        cy.get('#loginform-password').type(value1+'{enter}')
    }

}