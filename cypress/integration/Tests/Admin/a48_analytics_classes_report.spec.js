/// <reference types="cypress"/>
import {Commons} from "../../../Commons/Common"
import {Analytics} from "../../../page-objects-admin/Analytics"

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  })

  describe('This tests verify the "Classes Report" in Analytics', ()=>{
    const commons = new Commons()
    const analytics = new Analytics()

    beforeEach(()=>{
        commons.open_Admin_Site()
        commons.set_Admin_Credentials()
    })
    it('Verify the Report of "Classes Report"',()=>{
        analytics.select_analytics()
        analytics.select_classes_report()

        cy.get('#reportView > .control-label').should('contain','Report View')
        cy.get('#dataanalysissearch-reportview').contains(/[a-zA-Z0-9&._-]/)
        cy.get(':nth-child(2) > .form-group > .control-label').should('contain','Start Date')
        cy.get('#startDate').contains(/^[0-9]*$/)
        cy.get(':nth-child(3) > .form-group > .control-label').should('contain','End Date')
        cy.get('#endDate').contains(/^[0-9]*$/)

        //Buttons

        cy.get('[href="/site-analytics/export-csv?filename=most-booked-offering-report.csv&isSecondary=1"]').should('contain','Export most booked offerings to CSV')
        cy.get('[href="/site-analytics/export-csv?filename=classes-report.csv"]').should('contain','Export total bookings to CSV')
        cy.get('.btn-primary').should('contain','Search')

        //Graphics
        //pie
        cy.get('#pieChart').should('be.visible')
        cy.get('#w1 > .table > thead > tr > :nth-child(1)').should('contain','Offering')
        cy.get('#w1 > .table > thead > tr > :nth-child(2)').should('contain','Total Bookings')

        //area
        cy.get('#areaChart').should('be.visible')
        cy.get('#w2 > .table > thead > tr > :nth-child(1)').should('contain','Date')
        cy.get('#w2 > .table > thead > tr > :nth-child(2)').should('contain','Total Seekers Booked On Events')

    })
  })        