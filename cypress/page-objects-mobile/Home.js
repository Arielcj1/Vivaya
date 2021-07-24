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

    go_To_Pricing_TopBar(){
        cy.get('.open').click()
        cy.get('#mainNav > :nth-child(5) > a').click()
    }

    go_To_Corporate_TopBar(){
        cy.get('.open').click()
        cy.get('#mainNav > :nth-child(6) > a').click()
    }

    go_To_FResponders_TopBar(){
        cy.get('.open').click()
        cy.get('#mainNav > li:nth-child(7) > a').click()
    }

    go_To_BecomeaGuide_TopBar(){
        cy.get('.open').click()
        cy.get('.become-a-guide > a').click()
    }

}