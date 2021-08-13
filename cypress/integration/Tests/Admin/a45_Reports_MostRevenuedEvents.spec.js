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
        reports.select_Most_Revenued_Events()
        cy.get('h1').should('contain', "Last Month's Most Revenued Events")
        cy.get(':nth-child(1) > .form-group > .control-label').should('be.visible').and('have.text', 'From Date')
        cy.get('#reportsearch-fromdate').should('be.visible')
        cy.get(':nth-child(2) > .form-group > .control-label').should('be.visible').and('have.text', 'To Date')
        cy.get('#reportsearch-todate').should('be.visible')
        cy.get('.box-footer > .btn').should('be.visible').and('have.text', 'Search')

        //Verify List elements
        cy.get(':nth-child(2) > .box-title').should('be.visible').and('have.text', 'List')

        cy.get('[style="width:50px;"]').should('be.visible').and('have.text', 'Id Event')
        cy.get('[data-key="0"] > :nth-child(1)').contains(/^[0-9]*$/)
        cy.get('thead > tr > :nth-child(2)').should('be.visible').and('have.text', 'Name')
        cy.get('[data-key="0"] > :nth-child(2) > a').click()
        cy.url().should('include', '/events/view?id=')
        cy.go('back')
        cy.get('thead > tr > :nth-child(3)').should('be.visible').and('have.text', 'Start Date')
        cy.get('[data-key="0"] > :nth-child(3)').should('be.visible')
        cy.get('thead > tr > :nth-child(4)').should('be.visible').and('have.text', 'Guide Name')
        cy.get('[data-key="0"] > :nth-child(4)').contains(/[a-zA-Z0-9&._-]/)
        cy.get('thead > tr > :nth-child(5)').should('be.visible').and('have.text', 'Free Seekers Participated')
        cy.get('[data-key="0"] > :nth-child(5)').contains(/^[0-9]*$/)
        cy.get('thead > tr > :nth-child(6)').should('be.visible').and('have.text', 'Seekers Participated')
        cy.get('[data-key="0"] > :nth-child(6)').contains(/^[0-9]*$/)
        cy.get('thead > tr > :nth-child(7)').should('be.visible').and('have.text', 'Type')
        cy.get('[data-key="0"] > :nth-child(7)').each(x => {
            expect(x.text()).to.be.oneOf([
              "Class",
              "Workshop",
              "1-1 Session"
                ]);
             });

        cy.get('#w1 > :nth-child(2)').should('be.visible')
        cy.get('.summary').should('be.visible')     
    })
    
})