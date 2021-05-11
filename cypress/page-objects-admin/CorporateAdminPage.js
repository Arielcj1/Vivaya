/// <reference types="cypress"/>
export class CorporateAdminPage {

    select_Corporate_Option(){
        cy.get(':nth-child(14) > [href="#"] > :nth-child(2)').click()
    }

    select_Corporate_List(){
        cy.get('.menu-open > .treeview-menu > :nth-child(1) > a > span').click()
    }

    select_Add_New_Corporate(){
        cy.get('.content > .btn').click()
    }

    type_Corporate_Name(value){
        cy.get('#corporate-name').type(value)
    }

    type_Corporate_Domain(value){
        cy.get('#corporate-domain').type(value)
    }

    type_Corporate_Address(value){
        cy.get('#corporate-address').type(value)
    }

    type_Corporate_PhoneNumber(value){
        cy.get('#corporate-phone_number').type(value)
    }

    type_Corporate_ContactName(value){
        cy.get('#corporate-contact_name').type(value)
    }

    type_Corporate_ContactEmail(value){
        cy.get('#corporate-contact_email').type(value)
    }

    add_Corporate_From_Form(){
        cy.get('.box-footer > .btn').click()
    }

    update_Corporate_From_Form(){
        cy.get('.box-footer > .btn').click()
    }

    
}