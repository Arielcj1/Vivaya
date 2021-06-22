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

    it('Verify the Most Active Seekers report',()=>{
        reports.select_Reports_Tab()
        reports.select_Most_Active_Seekers()

        cy.get('h1').should('contain', 'Report of the most active seekers')
        cy.get('#w0 > div.box-body > div:nth-child(1) > div > label').should('be.visible').and('have.text', 'From Date')
        cy.get('#reportsearch-fromdate').should('be.visible')
        cy.get('#w0 > div.box-body > div:nth-child(2) > div > label').should('be.visible').and('have.text', 'To Date')
        cy.get('#reportsearch-todate').should('be.visible')
        cy.get('#w0 > div.box-footer > button').should('be.visible').and('have.text', 'Search')

        cy.get(':nth-child(2) > .col-xs-12 > .box > .box-header > .box-title').should('be.visible').and('have.text', 'Active Seeker List')
        cy.get('tr > :nth-child(1) > a').should('be.visible').and('have.text', 'Id')
        cy.get('[data-key="0"] > :nth-child(1)').contains(/^[0-9]*$/)
        cy.get('thead > tr > :nth-child(2)').should('be.visible').and('have.text', 'Full Name')
        cy.get('[data-key="0"] > :nth-child(2) > .profile-link').click()
        cy.url().should('include', '/seekers/view?id=')
        cy.go('back')
        cy.get('thead > tr > :nth-child(3)').should('be.visible').and('have.text', 'Email')
        cy.get('[data-key="0"] > :nth-child(3)').contains(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
        cy.get('thead > tr > :nth-child(4)').should('be.visible').and('have.text', 'Booked Quantity')
        cy.get('[data-key="0"] > :nth-child(4)').contains(/^[0-9]*$/)
        cy.get('thead > tr > :nth-child(5)').should('be.visible').and('have.text', 'Class Participated')
        cy.get('[data-key="0"] > :nth-child(5)').contains(/^[0-9]*$/)
        cy.get('thead > tr > :nth-child(6)').should('be.visible').and('have.text', 'Seeker Registration Date')

        cy.get('[data-key="0"] > :nth-child(6)').should('be.visible')
        cy.get('thead > tr > :nth-child(7)').should('be.visible').and('have.text', 'Last Membership')
        cy.get('[data-key="0"] > :nth-child(7)').contains(/[a-zA-Z0-9&._-]/)

    })    

  })    