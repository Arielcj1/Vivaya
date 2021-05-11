/// <reference types="cypress"/>
export class SeekerPage {
    select_Seeker_Option(){
        cy.get(':nth-child(3) > [href="#"] > :nth-child(2)').click()
    }
    select_Seeker_List(){
        cy.get('.menu-open > .treeview-menu > :nth-child(1) > a').click()
    }
    type_Seeker_Email(value){
        cy.get('#seekersearch-email').type(value+'{enter}')
        cy.wait(2000)
    }
    select_Seeker_options(value){
        cy.xpath('//*[@id="w2"]/table/tbody/tr/td[11]/a['+value+']/span').click()
    }
}