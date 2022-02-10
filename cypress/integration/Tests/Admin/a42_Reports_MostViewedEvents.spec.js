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
        reports.select_Most_Viewed_Events()
        cy.get('#usermembershipeventsearch-fromdate').clear().type('01-Jan-2021')
        cy.get('.row > :nth-child(2) > :nth-child(2)').click({force:true})
        cy.get('.box-footer > .btn').click()
        cy.wait(500)
        cy.get('h1').should('contain', 'Most Viewed Events')
        cy.get(':nth-child(1) > .form-group > .control-label').should('be.visible').and('have.text', 'From Date')
        cy.get(':nth-child(2) > .form-group > .control-label').should('be.visible').and('have.text', 'To Date')
        cy.get('#usermembershipeventsearch-fromdate').should('be.visible')
        cy.get('#usermembershipeventsearch-todate').should('be.visible')
        cy.get('#w0 > div.box-footer > button').should('be.visible').and('have.text', 'Search')
        cy.get(':nth-child(3) > .box-title').should('be.visible').and('have.text', 'List')

        cy.get('[style="width:50px;"] > a').should('be.visible').and('have.text', 'Id Event')
        cy.get('[data-key="0"] > :nth-child(1)').contains(/^[0-9]*$/)
        cy.get('thead > tr > :nth-child(2)').should('be.visible').and('have.text', 'Name')
        cy.get('[data-key="0"] > :nth-child(2)').should('be.visible')
        cy.get('[data-key="0"] > :nth-child(2) > a').click()
        cy.url().should('include', '/events/view?id=')
        cy.go('back')
        cy.get('tr > :nth-child(3) > a').should('contain','Start Date')
        cy.get('[data-key="0"] > :nth-child(3)').should('be.visible')
        cy.get('tr > :nth-child(4) > a').should('be.visible').and('have.text', 'Guide Name')
        cy.get('[data-key="0"] > :nth-child(4)').contains(/[a-zA-Z0-9&._-]/)
        cy.get('tr > :nth-child(5) > a').should('be.visible').and('have.text', 'Free Seekers Participated')
        cy.get('[data-key="0"] > :nth-child(5)').contains(/^[0-9]*$/)
        cy.get('tr > :nth-child(6) > a').should('be.visible').and('have.text', 'Seekers Participated')
        cy.get('[data-key="0"] > :nth-child(6)').contains(/^[0-9]*$/)
        cy.get('tr > :nth-child(7) > a').should('be.visible').and('have.text', 'Type')

        cy.get('[data-key="0"] > :nth-child(7)').each(x => {
          expect(x.text()).to.be.oneOf([
            "Class",
            "Workshop",
            "1-1 Session"
              ]);
           });
    })        

  })    