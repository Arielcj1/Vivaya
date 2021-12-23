/// <reference types="cypress"/>

export class BottomBar{

    select_About_Link(){
        cy.get('.col-xl-9 > #footernav > :nth-child(1) > .nav-link').click()
    }

    select_FAQ(){
        cy.get('.col-xl-9 > #footernav > :nth-child(2) > .nav-link').click()
    }
    
    select_BecomeAGuide_Link(){
        cy.get('.col-xl-9 > #footernav > :nth-child(4) > .nav-link').click()
    }

    select_Worshops_Link(){
        cy.get('.col-xl-9 > #footernav > :nth-child(5) > .nav-link').click()
    }

    select_Seminars_Link(){
        cy.get('.col-xl-9 > #footernav > :nth-child(6) > .nav-link').click()
    }

    select_Blog_Link(){
        cy.get('.col-xl-9 > #footernav > :nth-child(7) > .nav-link').click()
    }

    select_Contact_Link(){
        cy.get('.col-xl-9 > #footernav > :nth-child(8) > .nav-link').click()
    }

    select_PrivacyPolicy_Link(){
        cy.get('.col-xl-9 > #footernav > :nth-child(9) > .nav-link').click()
    }

    select_TermsConditions_Link(){
        cy.get('.col-xl-9 > #footernav > :nth-child(10) > .nav-link').click()
    }

    select_first_responders_link(){
        cy.get('.col-xl-9 > #footernav > :nth-child(3) > .nav-link').click()
    }

}