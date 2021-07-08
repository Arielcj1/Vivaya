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
    it('Verify the seeker who spent more',()=>{
        reports.select_Reports_Tab()
        reports.select_Seeker_Who_Spent_More()

        cy.get('h1').should('contain', 'Seekers who Spent more Money')
        cy.get(':nth-child(1) > .form-group > .control-label').should('be.visible').and('have.text', 'From Date')
        cy.get(':nth-child(2) > .form-group > .control-label').should('be.visible').and('have.text', 'To Date')
        cy.get('#reportsearch-fromdate').should('be.visible')
        cy.get('#reportsearch-todate').should('be.visible')
        cy.get('#w0 > div.box-footer > button').should('be.visible').and('have.text', 'Search')
        cy.get(':nth-child(3) > .box-title').should('be.visible').and('have.text', 'List')

        cy.get('[style="width:50px;"]').should('be.visible').and('have.text', 'Seeker Id')
        cy.get('[data-key="0"] > :nth-child(1)').contains(/^[0-9]*$/)
        cy.get('thead > tr > :nth-child(2)').should('be.visible').and('have.text', 'First Name')
        cy.get('[data-key="0"] > :nth-child(2)').contains(/[a-zA-Z0-9&._-]/)
        cy.get('[data-key="0"] > :nth-child(2) > a').click()
        cy.url().should('include', '/seekers/view?id=')
        cy.go('back')
        cy.get('thead > tr > :nth-child(3)').should('be.visible').and('have.text', 'Last Name')
        cy.get('[data-key="0"] > :nth-child(3)').contains(/[a-zA-Z0-9&._-]/)
        cy.get('thead > tr > :nth-child(4)').should('be.visible').and('have.text', 'Total Spent')
        cy.get('[data-key="0"] > :nth-child(4)').contains(/^[0-9]+(\.[0-9]{1,2})?$/)
    })    
})