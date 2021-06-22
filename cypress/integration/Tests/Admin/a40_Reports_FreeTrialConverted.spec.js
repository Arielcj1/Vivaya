/// <reference types="cypress"/>
import {Commons} from "../../../Commons/Common"
import {ReportsTab} from "../../../page-objects-admin/ReportsTab"

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  })

  describe('This tests verify the different kind of reports within Reports tab', ()=>{
    const commons = new Commons()
    const reports = new ReportsTab()

    beforeEach(()=>{
        commons.open_Admin_Site()
        commons.set_Admin_Credentials()
    })
    
    it('Verify the Free Trials Converted report',()=>{
        reports.select_Reports_Tab()
        reports.select_Free_Trial_Converted_Option()
        cy.get('h1').should('contain', 'Free Trial Converted')
        cy.get(':nth-child(1) > .form-group > .control-label').should('be.visible').and('have.text', 'From Date')
        cy.get(':nth-child(2) > .form-group > .control-label').should('be.visible').and('have.text', 'To Date')
        cy.get('#reportsearch-fromdate').should('be.visible')
        cy.get('#reportsearch-todate').should('be.visible')
        cy.get('#w0 > div.box-footer > button').should('be.visible').and('have.text', 'Search')
        cy.get('tbody > :nth-child(1) > th').should('be.visible').and('have.text', 'Free trial registrations')
        cy.get('[style="margin-top: 10px"] > .table > tbody > :nth-child(1) > td').contains(/^[0-9]*$/)
        cy.get(':nth-child(2) > th').should('be.visible').and('have.text', 'Converted seekers')
        cy.get('[style="margin-top: 10px"] > .table > tbody > :nth-child(2) > td').contains(/^[0-9]*$/)
        cy.get(':nth-child(3) > th').should('be.visible').and('have.text', 'Percentage of converted seekers')
        cy.get('[style="margin-top: 10px"] > .table > tbody > :nth-child(3) > td').contains(/^((100)|(\d{1,2}(.\d*)?))%$/)

        cy.get('.box > .box-header > .box-title').should('be.visible').and('have.text', 'List of Free Trial converted to Membership')
        cy.get('thead > tr > :nth-child(1)').should('be.visible').and('have.text', 'Id')
        cy.get('[data-key="0"] > :nth-child(1)').contains(/^[0-9]*$/)
        cy.get('thead > tr > :nth-child(2)').should('be.visible').and('have.text', 'Full Name')
        cy.get('[data-key="0"] > :nth-child(2) > .profile-link').click()
        cy.url().should('include', '/seekers/view?id=')
        cy.go('back')
        cy.get('thead > tr > :nth-child(3)').should('be.visible').and('have.text', 'Email')
        cy.get('[data-key="0"] > :nth-child(3)').contains(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
        cy.get('thead > tr > :nth-child(4)').should('be.visible').and('have.text', 'Membership Converted')
        cy.get('[data-key="0"] > :nth-child(4)').contains(/[a-zA-Z0-9&._-]/)
        cy.get('thead > tr > :nth-child(5)').should('be.visible').and('have.text', 'Date Converted')
        cy.get('[data-key="0"] > :nth-child(5)').should('be.visible')
    
    })

  })    