/// <reference types="cypress"/>

export class Home {
    
    go_To_Schedule_TopBar(){
        cy.get('.open').click()
        cy.get('#mainNav > :nth-child(2) > a').click()
    }

    go_To_Guides_TopBar(){
        cy.get('.open').click()
        cy.get('#mainNav > :nth-child(3) > a').click()
    }

    go_To_WhatWeOffer_TopBar(){
        cy.get('.open').click()
        cy.get('#mainNav > :nth-child(4) > a').click()
    }

}