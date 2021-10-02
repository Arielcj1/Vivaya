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
    it('Verify the Seeker who cancelled their Membership',()=>{
        reports.select_Reports_Tab()
        reports.select_Seeker_Who_Cancelled()
        
        cy.get('h1').should('contain', 'Seekers who cancelled their Membership')
        cy.get(':nth-child(1) > :nth-child(1) > .form-group > .control-label').should('be.visible').and('have.text', 'First Name')
        cy.get('#reportsearch-first_name').should('be.visible')
        cy.get(':nth-child(1) > :nth-child(2) > .form-group > .control-label').should('be.visible').and('have.text', 'Last Name')
        cy.get('#reportsearch-last_name').should('be.visible')
        cy.get(':nth-child(3) > .form-group > .control-label').should('be.visible').and('have.text', 'Email')
        cy.get('#reportsearch-email').should('be.visible')
        cy.get(':nth-child(2) > :nth-child(1) > .form-group > .control-label').should('be.visible').and('have.text', 'From Date')
        cy.get('#reportsearch-fromdate').should('be.visible')
        cy.get(':nth-child(2) > :nth-child(2) > .form-group > .control-label').should('be.visible').and('have.text', 'To Date')
        cy.get('#reportsearch-todate').should('be.visible') 
        cy.get('.box-footer > .btn').should('be.visible').and('have.text', 'Search')

        //verify list elements
        cy.get(':nth-child(3) > .box-title').should('be.visible').and('have.text', 'List')

        cy.get('[style="width:50px;"] > a').should('be.visible').and('have.text', 'Seeker Id')
        cy.get('[data-key="0"] > :nth-child(1)').contains(/^[0-9]*$/)
        cy.get('thead > tr > :nth-child(2)').should('be.visible').and('have.text', 'Full Name')
        cy.get('[data-key="0"] > :nth-child(2) > a').click()
        cy.url().should('include', '/seekers/view?id=')
        cy.go('back')
        cy.get('thead > tr > :nth-child(3)').should('be.visible').and('have.text', 'Email')
        cy.get('[data-key="0"] > :nth-child(3)').contains(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
        cy.get('thead > tr > :nth-child(4)').should('be.visible').and('have.text', 'Last Membership')
        cy.get('[data-key="0"] > :nth-child(4)').contains(/[a-zA-Z0-9&._-]/)
        cy.get('thead > tr > :nth-child(5)').should('be.visible').and('have.text', 'Expiry Date')
        cy.get('[data-key="0"] > :nth-child(5)').should('be.visible')
        cy.get('thead > tr > :nth-child(6)').should('be.visible').and('have.text', 'Autopayment')
        cy.get('[data-key="0"] > :nth-child(6)').contains(/[a-zA-Z0-9&._-]/)
        cy.get('thead > tr > :nth-child(7)').should('be.visible').and('have.text', 'Canceled Date')
        //cy.get('#w1 > :nth-child(2)').should('be.visible')
        cy.get('.summary').should('be.visible')
    })
  })    