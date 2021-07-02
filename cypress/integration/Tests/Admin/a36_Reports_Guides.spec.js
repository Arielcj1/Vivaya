/// <reference types="cypress"/>
import {Commons} from "../../../Commons/Common"
import {ReportsTab} from "../../../page-objects-admin/ReportsTab"

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  })

describe('This tests verify Guide reports within Reports tab', ()=>{
    const commons = new Commons()
    const reports = new ReportsTab()

    beforeEach(()=>{
        commons.open_Admin_Site()
        commons.set_Admin_Credentials()
    })

    it('Verify Guide Reports manin page',()=>{
        reports.select_Reports_Tab()
        reports.select_Guides_Option()
        cy.get('h1').should('contain', 'Reports')
        cy.get(':nth-child(1) > :nth-child(1) > .form-group > .control-label').should('be.visible').and('have.text', 'First Name')
        cy.get('#reportssearch-first_name').should('be.visible')
        cy.get(':nth-child(2) > .form-group > .control-label').should('be.visible').and('have.text', 'Last Name')
        cy.get('#reportssearch-last_name').should('be.visible')
        cy.get(':nth-child(3) > .form-group > .control-label').should('be.visible').and('have.text', 'From Date')
        cy.get('#reportssearch-fromdate').should('be.visible')
        cy.get(':nth-child(4) > .form-group > .control-label').should('be.visible').and('have.text', 'To Date')
        cy.get('#reportssearch-todate').should('be.visible')
        cy.get(':nth-child(2) > .col-sm-3 > .form-group > .control-label').should('be.visible').and('have.text', 'Email')
        cy.get('#reportssearch-email').should('be.visible')
        cy.get('.box-footer > .btn').should('be.visible').and('have.text', 'Search')
        cy.get('body > div > div > section.content > div > div > div > div > div:nth-child(3) > h3').should('have.text','List')
        cy.get('[style="width:50px;"] > a').should('be.visible').and('have.text', 'User Id')
        cy.get('thead > tr > :nth-child(2)').should('be.visible').and('have.text', 'First Name')
        cy.get('thead > tr > :nth-child(3)').should('be.visible').and('have.text', 'Last Name')
        cy.get('thead > tr > :nth-child(4)').should('be.visible').and('have.text', 'Email')
        cy.get('thead > tr > [style="text-align:center;"]').should('be.visible').and('have.text', 'Earned cash')
    
    })

    it('Verify Guide Report details page ', ()=>{
        reports.select_Reports_Tab()
        reports.select_Guides_Option()
        let reDate = new RegExp('^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$')
        let reNum = new RegExp('/^[0-9]*$/')
        let reText = new RegExp('/^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]+$/g')

        cy.get('#reportssearch-first_name').type('Harvey')
        cy.get('.box-footer > .btn').click()
        cy.wait(2000)
        cy.get('#w1 > table > tbody > tr > td:nth-child(6) > a:nth-child(1) > span').click()
        cy.get('h1').should('be.visible').contains('Report details for guide: Harvey Deutch')
        cy.get(':nth-child(1) > .form-group > .control-label').should('be.visible').and('have.text', 'From Date')
        cy.get(':nth-child(2) > .form-group > .control-label').should('be.visible').and('have.text', 'To Date')
        cy.get('#reportsearch-fromdate').should('be.visible').and('contains', reDate)
        cy.get('#reportsearch-todate').should('be.visible').and('contains', reDate)
        cy.get('#w0 > div.box-footer > button').should('be.visible').and('have.text', 'Search')
        cy.get('#w0 > div.box-footer > a').should('be.visible')

        //Verify Guide Details section
        cy.get('.row > :nth-child(1) > .box-header > .box-title').should('be.visible').and('have.text', 'Guide Details')
        cy.get('#w1 > tbody > :nth-child(1) > th').should('be.visible').and('have.text', 'User Id')
        cy.get('#w1 > tbody > :nth-child(1) > td').should('contains', reNum)
        cy.get('#w1 > tbody > :nth-child(2) > th').should('be.visible').and('have.text', 'Guide name')
        cy.get('#w1 > tbody > :nth-child(2) > td').should('contains', reText)
        cy.get('#w1 > tbody > :nth-child(3) > th').should('be.visible').and('have.text', 'Email')
        cy.get('#w1 > tbody > :nth-child(3) > td').should('contains', reText)
        cy.get('#w1 > tbody > :nth-child(4) > th').should('be.visible').and('have.text', 'Total earned')
        cy.get('#w1 > tbody > :nth-child(4) > td').should('contains', reText)

        cy.get(':nth-child(2) > .box-header > .box-title').should('be.visible').and('have.text', 'Legend')
        cy.get('#w2 > tbody > :nth-child(1) > th').should('be.visible').and('have.text', 'PP')
        cy.get('#w2 > tbody > :nth-child(1) > td').should('contains', reText)
        cy.get('#w2 > tbody > :nth-child(2) > th').should('be.visible').and('have.text', 'WRP')
        cy.get('#w2 > tbody > :nth-child(2) > td').should('contains', reText)
        cy.get('#w2 > tbody > :nth-child(3) > th').should('be.visible').and('have.text', 'CRP')
        cy.get('#w2 > tbody > :nth-child(3) > td').should('contains', reText)
        cy.get('#w2 > tbody > :nth-child(4) > th').should('be.visible').and('have.text', 'OOORP')
        cy.get('#w2 > tbody > :nth-child(4) > td').should('contains', reText)
        cy.get(':nth-child(5) > th').should('be.visible').and('have.text', 'CEFP')
        cy.get('#w2 > tbody > :nth-child(5) > td').should('contains', reText)
        cy.get(':nth-child(6) > th').should('be.visible').and('have.text', 'PPCTM')
        cy.get('#w2 > tbody > :nth-child(6) > td').should('contains', reText)
        cy.get(':nth-child(7) > th').should('be.visible').and('have.text', 'D')
        cy.get('#w2 > tbody > :nth-child(7) > td').should('contains', reText)
        cy.get(':nth-child(8) > th').should('be.visible').and('have.text', 'A')
        cy.get('#w2 > tbody > :nth-child(8) > td').should('contains', reText)

        //Verify Details
        cy.get(':nth-child(3) > .col-xs-12 > .box > :nth-child(1) > .box-title')
        cy.get('thead > tr > :nth-child(1)').should('be.visible').and('have.text', 'Seeker Name')
        cy.get('thead > tr > :nth-child(2)').should('be.visible').and('have.text', 'Event Name')
        cy.get('thead > tr > :nth-child(3)').should('be.visible').and('have.text', 'Email')
        cy.get('thead > tr > :nth-child(4)').should('be.visible').and('have.text', 'Date of class')
        cy.get('thead > tr > :nth-child(5)').should('be.visible').and('have.text', "Length of class (min)")
        cy.get('thead > tr > :nth-child(6)').should('be.visible').and('have.text', 'Type')
        cy.get('thead > tr > :nth-child(7)').should('be.visible').and('have.text', 'Offering')
        cy.get('thead > tr > :nth-child(8)').should('be.visible').and('have.text', 'Package')
        cy.get('thead > tr > :nth-child(9)').should('be.visible').and('have.text', 'Package price')
        cy.get('thead > tr > :nth-child(10)').should('be.visible').and('have.text', "Guide's cash")
        cy.get('thead > tr > :nth-child(11)').should('be.visible').and('have.text', 'Payment formula')

    })
})