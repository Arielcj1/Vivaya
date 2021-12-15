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

    go_To_About_BottomBar(){
        cy.get('.menu-mobile-footer-part > :nth-child(1) > #footernav > :nth-child(1) > .nav-link').click()
    }

    go_To_FAQ(){
        cy.get('.menu-mobile-footer-part > :nth-child(1) > #footernav > :nth-child(2) > .nav-link').click()
    }

    go_To_BecomeaGuide_From_Bottom(){
        cy.get('.menu-mobile-footer-part > :nth-child(1) > #footernav > :nth-child(4) > .nav-link').click()
    }

    go_To_Workshops_From_Bottom(){
        cy.get('.menu-mobile-footer-part > :nth-child(1) > #footernav > :nth-child(5) > .nav-link').click()
    }

    go_To_Seminars_From_Bottom(){
        cy.get('.menu-mobile-footer-part > :nth-child(1) > #footernav > :nth-child(6) > .nav-link').click()
    }

    go_To_Blog_From_Bottom(){
        cy.get('.menu-mobile-footer-part > :nth-child(1) > #footernav > :nth-child(7) > .nav-link').click()
    }

    go_To_Contact_From_Bottom(){
        cy.get('.menu-mobile-footer-part > :nth-child(1) > #footernav > :nth-child(8) > .nav-link').click()
    }

    go_To_PPolicy_From_Bottom(){
        cy.get('.menu-mobile-footer-part > :nth-child(1) > #footernav > :nth-child(9) > .nav-link').click()
    }

    go_To_TermsConditions_From_Bottom(){
        cy.get('.menu-mobile-footer-part > :nth-child(1) > #footernav > :nth-child(10) > .nav-link').click()
    }
    go_to_first_responders(){
        cy.get('.menu-mobile-footer-part > :nth-child(1) > #footernav > :nth-child(3) > .nav-link').click()
    }



}