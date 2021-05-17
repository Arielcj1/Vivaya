/// <reference types="cypress"/>
export class SeekerPage {
    select_Seeker_Option(){
        cy.get(':nth-child(3) > [href="#"] > :nth-child(2)').click()
    }
    select_Seeker_List(){
        cy.get('.menu-open > .treeview-menu > :nth-child(1) > a').click()
    }
    select_Seeker_New(){
        cy.get('.menu-open > .treeview-menu > :nth-child(2) > a').click()
    }
    type_Seeker_FirstName(value){
        cy.get('#user-first_name').clear().type(value)
    }
    type_Seeker_LastName(value){
        cy.get('#user-last_name').clear().type(value)
    }
    type_New_Seeker_Email(value){
        cy.get('#user-email').type(value)
    }
    select_Seeker_TimeZone(value){
        cy.get('#user-timezone').select(value)
    }
    type_Seeker_Password(value){
        cy.get('#user-newpassword').clear().type(value)
        cy.wait(500)
        cy.get('#user-newpasswordconfirm').clear().type(value+'{enter}')
    }
    click_Add_Seeker(){
        cy.get('.box-footer > .btn').click()
    }
    type_Seeker_Email(value){
        cy.get('#seekersearch-email').type(value+'{enter}')
        cy.wait(2000)
    }
    select_Seeker_options(value){
        cy.xpath('//*[@id="w2"]/table/tbody/tr/td[11]/a['+value+']/span').click()
    }
}