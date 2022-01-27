/// <reference types="cypress"/>
import {Commons} from "../../../Commons/Common"
import {Analytics} from "../../../page-objects-admin/Analytics"

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  })

  describe('This tests verify the "Taken Classes Report" in Analytics', ()=>{
    const commons = new Commons()
    const analytics = new Analytics()

    beforeEach(()=>{
        commons.open_Admin_Site()
        commons.set_Admin_Credentials()
    })
    it('Verify the Report of "Taken Classes Report"',()=>{
        analytics.select_analytics()
        analytics.select_taken_classes_report()

        cy.get('#reportView > .control-label').should('contain','Report View')
        cy.get('#dataanalysissearch-reportview').contains(/[a-zA-Z0-9&._-]/)
        cy.get(':nth-child(2) > .form-group > .control-label').should('contain','Member Type')
        cy.get('#dataanalysissearch-membertype').contains(/[a-zA-Z0-9&._-]/)
        cy.get(':nth-child(3) > .form-group > .control-label').should('contain','Start Date')
        cy.get('#startDate').contains(/^[0-9]*$/)
        cy.get(':nth-child(4) > .form-group > .control-label').should('contain','End Date')
        cy.get('#endDate').contains(/^[0-9]*$/)

        //Buttons
        cy.get('.btn-success').should('contain','Export to CSV')
        cy.get('.btn-primary').should('contain','Search')

        //Graphics
        cy.get('#areaChart').should('be.visible')
        cy.get('thead > tr > :nth-child(1)').should('contain','Date')
        cy.get('thead > tr > :nth-child(2)').should('include.text','Classes  Taken')
    })
  })        