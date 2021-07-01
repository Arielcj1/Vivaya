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
    
    it('Verify the Membership report',()=>{
        reports.select_Reports_Tab()
        reports.select_Membership_Option()

         //Search memberships in a custom date range
        
         cy.get('#reportsearch-fromdate').click()
         cy.get('#reportsearch-fromdate').clear()
         reports.custom_Date_From_Date_Membership()
         cy.get(':nth-child(3) > .col-xs-12 > .box > .box-header > .box-title').click()
         cy.get('#w0 > div.box-footer > button').click()

        cy.get('h1').should('contain', 'Membership Report')
        cy.get('#w0 > div.box-body > div > div:nth-child(1) > div > label').should('be.visible').and('have.text', 'From Date')
        cy.get('#reportsearch-fromdate').should('be.visible')
        cy.get('#w0 > div.box-body > div > div:nth-child(2) > div > label').should('be.visible').and('have.text', 'To Date')
        cy.get('#reportsearch-todate').should('be.visible')
        cy.get('#w0 > div.box-footer > button').should('be.visible').and('have.text', 'Search')


        cy.get(':nth-child(2) > .col-xs-12 > .box > .box-header > .box-title').should('be.visible').and('have.text', 'Custom details')
        cy.get('.box-body > .table > thead > tr > :nth-child(1)').should('be.visible').and('have.text', 'Membership Id')
        cy.get('.box-body > .table > tbody > :nth-child(1) > :nth-child(1)').contains(/^[0-9]*$/)
        cy.get('.box-body > .table > thead > tr > :nth-child(2)').should('be.visible').and('have.text', 'Event Type')
        cy.get('.box-body > .table > tbody > :nth-child(1) > :nth-child(2)').contains(/^[0-9]*$/)
        cy.get('.box-body > .table > thead > tr > :nth-child(3)').should('be.visible').and('have.text', 'Title')
        cy.get('.box-body > .table > tbody > :nth-child(1) > :nth-child(3)').contains(/^([a-zA-Z_$][a-zA-Z\\d_$]*)$/)
        cy.get('.box-body > .table > thead > tr > :nth-child(4)').should('be.visible').and('have.text', 'Price')
        cy.get('.box-body > .table > tbody > :nth-child(1) > :nth-child(4)').should('be.visible')
        cy.get('.box-body > .table > thead > tr > :nth-child(5)').should('be.visible').and('have.text', 'Sold Package')
        cy.get('.box-body > .table > tbody > :nth-child(1) > :nth-child(5)').contains(/^[0-9]*$/)
        cy.get('.box-body > .table > thead > tr > :nth-child(6)').should('be.visible').and('have.text', 'Total ($)')
        cy.get('.box-body > .table > tbody > :nth-child(1) > :nth-child(6)').contains(/^[1-9]\d*(\.\d+)?$/)
        cy.get('.box-body > .table > tfoot > tr > :nth-child(2)').should('be.visible')

        cy.get(':nth-child(3) > .col-xs-12 > .box > .box-header > .box-title').should('be.visible').and('have.text', 'Membership Report')

        cy.get('#w1 > .table > thead > tr > :nth-child(1)').should('be.visible').and('have.text', 'Id')
        cy.get('[data-key="0"] > :nth-child(1)').contains(/^[0-9]*$/)
        cy.get('#w1 > .table > thead > tr > :nth-child(2)').should('be.visible').and('have.text', 'Title')
        cy.get('[data-key="0"] > :nth-child(2)').should('be.visible')
        cy.get('#w1 > .table > thead > tr > :nth-child(3)').should('be.visible').and('have.text', 'Sold Packages')
        cy.get('[data-key="0"] > :nth-child(3)').contains(/^[0-9]*$/)
        cy.get('#w1 > .table > thead > tr > :nth-child(4)').should('be.visible').and('have.text', 'Refunds')
        cy.get('[data-key="0"] > :nth-child(4)').contains(/^[0-9]\d*(\.\d+)?$/)
        cy.get('#w1 > .table > thead > tr > :nth-child(5)').should('be.visible').and('have.text', 'Total Sold Packages')
        cy.get('[data-key="0"] > :nth-child(5)').contains(/^[0-9]*$/)
        cy.get('#w1 > .table > thead > tr > :nth-child(6)').should('be.visible').and('have.text', 'Price ($)')
        cy.get('[data-key="0"] > :nth-child(6)').contains(/^[0-9]\d*(\.\d+)?$/)
        cy.get('thead > tr > :nth-child(7)').should('be.visible').and('have.text', 'Total ($)')
        cy.get('[data-key="0"] > :nth-child(7)').contains(/^[0-9]\d*(\.\d+)?$/)


    })

})  