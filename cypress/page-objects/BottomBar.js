/// <reference types="cypress"/>

export class BottomBar{

    select_About_Link(){
        cy.get('.col-lg-9 > #footernav > :nth-child(1) > a').click()
    }

    select_FAQ(){
        cy.get('.col-lg-9 > #footernav > :nth-child(2) > a').click()
    }
    
    select_BecomeAGuide_Link(){
        cy.get('.col-lg-9 > #footernav > :nth-child(3) > a').click()
    }

    select_Worshops_Link(){
        cy.get('.col-lg-9 > #footernav > :nth-child(4) > a').click()
    }

    select_Seminars_Link(){
        cy.get('.col-lg-9 > #footernav > :nth-child(5) > a').click()
    }

    select_Blog_Link(){
        cy.get('.col-lg-9 > #footernav > :nth-child(6) > a').click()
    }

    select_Contact_Link(){
        cy.get('.col-lg-9 > #footernav > :nth-child(7) > a').click()
    }

    select_PrivacyPolicy_Link(){
        cy.get('.col-lg-9 > #footernav > :nth-child(8) > a').click()
    }

    select_TermsConditions_Link(){
        cy.get('.col-lg-9 > #footernav > :nth-child(9) > a').click()
    }

}