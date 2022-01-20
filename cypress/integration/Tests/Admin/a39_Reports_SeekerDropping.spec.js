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
    
    it('Verify the Seekers report',()=>{
        reports.select_Reports_Tab()
        reports.select_Seekers_Dropping()

        cy.get('h1').should('contain', 'Seekers Dropping')
        cy.get('.control-label').should('be.visible').and('have.text', 'Period Time')

        cy.get('#reportsearch-periodtime').select('3').should('have.value', '3')
        cy.get('#reportsearch-periodtime').select('2').should('have.value', '2')
        cy.get('#reportsearch-periodtime').select('1').should('have.value', '1')
        cy.get('.box-footer > .btn').should('be.visible').and('have.text', 'Search')

        cy.get('.box > .box-header > .box-title').should('be.visible').and('have.text', 'Seekers Dropping List')

        cy.get('.table > thead > tr > :nth-child(1)').should('be.visible').and('have.text', 'Id')
        cy.get('[data-key="0"] > :nth-child(1)').contains(/^[0-9]*$/)
        cy.get('.table > thead > tr > :nth-child(2)').should('be.visible').and('have.text', 'Full Name')

        cy.get('[data-key="0"] > :nth-child(2) > .profile-link').click()
        cy.url().should('include', '/seekers/view?id=')
        cy.go('back')

        cy.get('thead > tr > :nth-child(3)').should('be.visible').and('have.text', 'Email')
        cy.get('[data-key="0"] > :nth-child(3)').contains(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
        cy.get('thead > tr > :nth-child(4)').should('be.visible').and('have.text', 'Last Membership')
        cy.get('[data-key="0"] > :nth-child(4)').contains(/[a-zA-Z0-9&._-]/)
        cy.get('thead > tr > :nth-child(5)').should('be.visible').and('have.text', 'Date Last Class')
        cy.get('[data-key="0"] > :nth-child(5)').should('be.visible')
       

    })    
    

  })    
  