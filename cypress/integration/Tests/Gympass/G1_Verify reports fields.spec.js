/// <reference types="cypress"/>
import {Commons} from "../../../Commons/Common"
import {Gympass} from "../../../page-objects-admin/Gympass"

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  })

  describe('Verify the reports of Gympass', ()=>{
    const commons = new Commons()
    const gympass = new Gympass()

    beforeEach(()=>{
        commons.open_Admin_Site()
        commons.set_Admin_Credentials()
    })
    it('Verify the Report of "List"',()=>{
        gympass.select_gympass()
        gympass.select_list()

        cy.get(':nth-child(1) > .form-group > .control-label').should('contain','Guide Name')
        cy.get(':nth-child(2) > .form-group > .control-label').should('contain','Event Name')
        cy.get(':nth-child(3) > .form-group > .control-label').should('contain','From Date')
        cy.get(':nth-child(4) > .form-group > .control-label').should('contain','To Date')
        cy.get(':nth-child(5) > .form-group > .control-label').should('contain','Status')
        cy.get(':nth-child(6) > .form-group > .control-label').should('contain','Zoom Status')

        //button
        cy.get('.box-footer > .btn').should('contain','Search')

        //table
        cy.get('[style="width:50px;"] > a').should('contain','ID')
        cy.get('tr > :nth-child(2) > a').should('contain','Event Name')
        cy.get('thead > tr > :nth-child(3)').should('contain','Guide Name')
        cy.get('tr > :nth-child(4) > a').should('contain','Start Date')
        cy.get('tr > :nth-child(5) > a').should('contain','Status')
        cy.get('tr > :nth-child(6) > a').should('contain','Zoom Status')
        cy.get('thead > tr > :nth-child(7)').should('contain','Gympass')

    })
    it('Verify the Report of "Selected Guide"',()=>{
        gympass.select_gympass()
        gympass.select_selected_guides()

        cy.get('.control-label').should('contain','Email')
        cy.get('#selectedguidesearch-email').should('be.visible')

        //Buttons
        cy.get('.box-footer > .btn').should('contain','Search')

        //Table
        cy.get('thead > tr > :nth-child(1)').should('contain','First Name')
        cy.get('tr > :nth-child(2)').should('contain','Last Name')
        cy.get('tr > :nth-child(3)').should('contain','Email')

    })

    it('Verify the Report of "Import Seeker Details"',()=>{
        gympass.select_gympass()
        gympass.select_import_seeker()

        cy.get('h1').should('contain','Import Seeker Details')
        cy.get('.control-label').should('contain','File')
        cy.get('#gympassseekerdetailsformmodel-file').should('be.visible')

        cy.get('#w0 > .btn').should('contain','import')




    })

  })        