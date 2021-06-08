/// <reference types="cypress"/>
export class AdministratorsPage {

    select_Administrators_Option(){
        cy.get(':nth-child(2) > [href="#"] > :nth-child(2)').click()
    }

    select_List_Administrators(){
        cy.get('.menu-open > .treeview-menu > :nth-child(1) > a').click()
    }

    click_Add_New_Button(){
        cy.get('.box-tools > .btn').click()
    }

    type_First_Name(value){
        cy.get('#admin-first_name').type(value)
    }

    type_Last_Name(value){
        cy.get('#admin-last_name').type(value)
    }

    type_Email(value){
        cy.get('#admin-email').type(value)
    }

    type_Password(value){
        cy.get('#admin-newpassword').type(value)
    }

    type_Confirm_Password(value){
        cy.get('#admin-newpasswordconfirm').type(value)
    }

    select_Active_Status(){
        cy.get('#admin-status').select('Active')
        
    }

    click_Add_Button(){
        cy.get('.box-footer > .btn').click()
    }

    perform_Search_Admin_By_Name(value){
        cy.get('#adminsearch-first_name').type(value)
        cy.get('.box-footer > .btn').click()
    }

    click_Update_Button(){
        cy.get('.btn-primary').click()
    }





}