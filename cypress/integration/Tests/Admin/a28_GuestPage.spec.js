/// <reference types = "cypress"/>

import {Commons} from "../../../Commons/common"
import {GuestPage} from "../../../page-objects-admin/GuestPage"
import {HomePage} from "../../../page-objects/Home"

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
})

describe('Guest page is displayed correctly', ()=>{
    const commons = new Commons()
    const guestpage = new GuestPage()
    const homePage = new HomePage()

    beforeEach(()=>{
        commons.open_Admin_Site()
        commons.set_Admin_Credentials()
    })

    it('Verify element within Guest page',()=>{
       guestpage.select_Guest_Option()
       guestpage.selecct_Guest_List()
       //Verify elemnts within the page
       cy.get('h1').should('contain', 'Guests')
       cy.get(':nth-child(1) > .form-group > .control-label').should('have.text','Name')
       cy.get('#guestsearch-name').should('be.visible')
       cy.get(':nth-child(2) > .form-group > .control-label').should('have.text','Email')
       cy.get('#guestsearch-email').should('be.visible')
       cy.get(':nth-child(3) > .form-group > .control-label').should('have.text','Is Converted')
       cy.get('#guestsearch-is_converted').should('be.visible')
       cy.get('.box-footer > .btn').should('be.visible').and('have.text', 'Search')
       cy.get(':nth-child(3) > .box-title').should('be.visible').and('have.text', 'List')
       cy.get('[style="width:50px;"] > a').should('be.visible').and('have.text', 'Id')
       cy.get('tr > :nth-child(2) > a').should('be.visible').and('have.text', 'Name')
       cy.get('tr > :nth-child(3) > a').should('be.visible').and('have.text', 'Email')
       cy.get('tr > :nth-child(4) > a').should('be.visible').and('have.text', 'Is Converted') 
       
    })

    it('Verify the Convertion of a Guest user to a Seeker',()=>{
      guestpage.select_Guest_Option()
      guestpage.select_Guest_List()
      guestpage.make_a_Search_by_email('guest@user.com')
      cy.xpath('//*[@id="w1"]/table/tbody/tr[1]/td[4]/label').should('contain', 'Yes')
    })
})    