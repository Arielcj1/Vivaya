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
    it('Verify the Report for the most revenued events',()=>{
        reports.select_Reports_Tab()
        reports.select_Corporate_Lvl_One()
        cy.get('h1').should('contain', 'Level One Corporate')
        cy.get(':nth-child(1) > .form-group > .control-label').should('be.visible').and('have.text', 'From Date')
        cy.get('#reportsearch-fromdate').should('be.visible')
        cy.get(':nth-child(2) > .form-group > .control-label').should('be.visible').and('have.text', 'To Date')
        cy.get('#reportsearch-todate').should('be.visible')

        //Verify the List
        cy.get('.box > .box-header > .box-title').should('be.visible').and('have.text', 'List of level one corporate')

        cy.get('thead > tr > :nth-child(1)').should('be.visible').and('have.text', 'Id')
        cy.get('[data-key="0"] > :nth-child(1)').contains(/^[0-9]*$/)
        cy.get('thead > tr > :nth-child(2)').should('be.visible').and('have.text', 'Name')
        cy.get('[data-key="0"] > :nth-child(2)').contains(/[a-zA-Z0-9&._-]/)
        cy.get('thead > tr > :nth-child(3)').should('be.visible').and('have.text', 'Domain')
        cy.get('[data-key="0"] > :nth-child(3)').contains(/[a-zA-Z0-9&._-]/)
        cy.get('thead > tr > :nth-child(4)').should('be.visible').and('have.text', 'Active Employees')
        cy.get('[data-key="0"] > :nth-child(4)').contains(/^[0-9]*$/)
        cy.get('thead > tr > :nth-child(5)').should('be.visible').and('have.text', 'Classes Booked')
        cy.get('[data-key="0"] > :nth-child(5)').contains(/^[0-9]*$/)
        cy.get('thead > tr > :nth-child(6)').should('be.visible').and('have.text', 'Workshops Purchased')
        cy.get('[data-key="0"] > :nth-child(6)').contains(/^[0-9]*$/)
        cy.get('thead > tr > :nth-child(7)').should('be.visible').and('have.text', 'Memberships Purchased')
        cy.get('[data-key="0"] > :nth-child(7)').contains(/^[0-9]*$/)
        cy.get('thead > tr > :nth-child(8)').should('be.visible').and('have.text', 'Packages Purchased')
        cy.get('[data-key="0"] > :nth-child(8)').contains(/^[0-9]*$/)
        cy.get('thead > tr > :nth-child(9)').should('be.visible').and('have.text', 'Percentage of Offerings Booked')
        cy.get('[data-key="0"] > :nth-child(9) > .offer-items').contains(/[a-zA-Z0-9&._-]/)
    })
  })        