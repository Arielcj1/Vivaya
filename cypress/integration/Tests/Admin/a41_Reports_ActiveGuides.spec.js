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
    
    it('Verify the most Active Guides report',()=>{
        reports.select_Reports_Tab()
        reports.select_Active_Guides_Option()
        cy.get('h1').should('contain', 'Active Guides')
        cy.get(':nth-child(1) > .form-group > .control-label').should('be.visible').and('have.text', 'From Date')
        cy.get(':nth-child(2) > .form-group > .control-label').should('be.visible').and('have.text', 'To Date')
        cy.get('#reportsearch-fromdate').should('be.visible')
        cy.get('#reportsearch-todate').should('be.visible')
        cy.get('#w0 > div.box-footer > button').should('be.visible').and('have.text', 'Search')
        cy.get('.box > .box-header > .box-title').should('be.visible').and('have.text', 'Active Guide List')

        cy.get('thead > tr > :nth-child(1)').should('be.visible').and('have.text', 'Id')
        cy.get('[data-key="0"] > :nth-child(1)').contains(/^[0-9]*$/)
        cy.get('thead > tr > :nth-child(2)').should('be.visible').and('have.text', 'Guide Name')
        cy.get('[data-key="0"] > :nth-child(2) > a').click()
        cy.url().should('include', '/events/index?guideId=')
        cy.go('back')
        cy.get('thead > tr > :nth-child(3)').should('be.visible').and('have.text', 'Email')
        cy.get('[data-key="0"] > :nth-child(3)').contains(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
        cy.get('thead > tr > :nth-child(4)').should('be.visible').and('have.text', 'Number of Events')
        cy.get('[data-key="0"] > :nth-child(4)').contains(/^[0-9]*$/)
        cy.get('thead > tr > :nth-child(5)').should('be.visible').and('have.text', 'Date of Last Event')
        cy.get('[data-key="0"] > :nth-child(5)').should('be.visible')
        cy.get('thead > tr > :nth-child(6)').should('be.visible').and('have.text', 'Title of Last Event')
        cy.get('[data-key="0"] > :nth-child(6)').contains(/[a-zA-Z0-9&._-]/)
    })
    
  })    