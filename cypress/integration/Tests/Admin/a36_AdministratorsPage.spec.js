/// <reference types="cypress"/>

import {Commons} from "../../../Commons/Common"
import {AdministratorsPage} from "../../../page-objects-admin/AdministratorsPage"

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  })

  describe('Events page', ()=>{
    const commons = new Commons()
    const adminsPage = new AdministratorsPage()

    beforeEach(()=>{
        commons.open_Admin_Site()
        
    })
     
    it('Verify the Administrators page elements',()=>{
        commons.set_Admin_Credentials()
        adminsPage.select_Administrators_Option()
        adminsPage.select_List_Administrators()

        cy.get('h1').should('contain', 'Administrators')
        cy.get(':nth-child(1) > .form-group > .control-label').should('have.text','First name')
        cy.get(':nth-child(2) > .form-group > .control-label').should('have.text','Last name')
        cy.get(':nth-child(3) > .form-group > .control-label').should('have.text','Email')
        cy.get(':nth-child(4) > .form-group > .control-label').should('have.text','Status')
        cy.get('#adminsearch-first_name').should('be.visible')
        cy.get('#adminsearch-last_name').should('be.visible')
        cy.get('#adminsearch-email').should('be.visible')
        cy.get('#adminsearch-status').should('be.visible')
        cy.get('.box-footer > .btn').should('be.visible').and('have.text', 'Search')
        cy.get(':nth-child(3) > .box-title').should('be.visible').and('have.text', 'List')

        //verify list elements
        cy.get('[style="width:50px;"] > a').should('be.visible').and('have.text', 'ID')
        cy.get('tr > :nth-child(2) > a').should('be.visible').and('have.text', 'First name')
        cy.get('tr > :nth-child(3) > a').should('be.visible').and('have.text', 'Last name')
        cy.get('tr > :nth-child(4) > a').should('be.visible').and('have.text', 'Email')
        cy.get('thead > tr > [style="text-align:center;"] > a').should('be.visible').and('have.text', 'Status')

    })

    it('Create a new Admin',()=>{
        commons.set_Admin_Credentials()
        adminsPage.select_Administrators_Option()
        adminsPage.select_List_Administrators()
        adminsPage.click_Add_New_Button()
        cy.get('.box-title').should('be.visible').and('have.text', 'Add new Admin')

        adminsPage.type_First_Name('Admin tester')
        adminsPage.type_Last_Name('Tester one')
        adminsPage.type_Email('admintester@admin.com')
        adminsPage.type_Password('passw123')
        adminsPage.type_Confirm_Password('passw123')
        adminsPage.select_Active_Status()
        adminsPage.click_Add_Button()
        cy.wait(2000)

    })
     
    it('Login with the last Administrator created', ()=>{
        cy.get('#loginform-email').clear()
        cy.get('#loginform-email').type('admintester@admin.com')
        cy.get('#loginform-password').clear()
        cy.get('#loginform-password').type('passw123')
        
        cy.get('.btn').click()
    })

    it('Search the last admin created and edit some values',()=>{

        cy.get('#loginform-email').clear()
        cy.get('#loginform-email').type('admintester@admin.com')
        cy.get('#loginform-password').clear()
        cy.get('#loginform-password').type('passw123') 
        cy.get('.btn').click()

        adminsPage.select_Administrators_Option()
        adminsPage.select_List_Administrators()

        adminsPage.perform_Search_Admin_By_Name('Admin tester')
        cy.wait(3000)
        cy.get('td:nth-of-type(6) .glyphicon-pencil').click()

        cy.get('#admin-first_name').clear()
        adminsPage.type_First_Name('Admin automation')
        cy.get('#admin-last_name').clear()
        adminsPage.type_Last_Name('Tester automation')
        cy.get('#admin-email').clear()
        adminsPage.type_Email('admintester1@admin.com')
        cy.get('#admin-newpassword').clear()
        adminsPage.type_Password('passw1234')
        cy.get('#admin-newpasswordconfirm').clear()
        adminsPage.type_Confirm_Password('passw1234')
        adminsPage.select_Active_Status()
        adminsPage.click_Update_Button()
        cy.wait(2000)
        

    })

    it('Search the edited Administrator and Delete it',()=>{
       
        commons.set_Admin_Credentials()
        adminsPage.select_Administrators_Option()
        adminsPage.select_List_Administrators()

        adminsPage.perform_Search_Admin_By_Name('Admin automation')
        cy.wait(3000)
        //Delete the administrator after perfrom a search
        cy.get('.glyphicon-trash').click()
        cy.get('.alert-success').should('be.visible').and('contain.text', 'Admin successfully deleted')
    })

  })