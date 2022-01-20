/// <reference types = "cypress"/>

import {Commons} from "../../../Commons/common"
import {GuestPage} from "../../../page-objects-admin/GuestPage"
import {SeekerPage} from "../../../page-objects-admin/SeekerPage"

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
})

describe('Negative scenarios for GUEST', ()=>{
    const commons = new Commons()
    const guestpage = new GuestPage()
    const seekerPage = new SeekerPage()

    beforeEach(()=>{
        commons.open_Admin_Site()
        commons.set_Admin_Credentials()
    })

    it('Verify "No result found from Admin"',()=>{
       guestpage.select_Guest_Option()
       guestpage.select_Guest_List()
       guestpage.make_a_Search_by_email('automation')
       cy.get('.empty').should('contain','No results found.')
       
    })

    it('Verify validation in fields from Admin',()=>{
        guestpage.select_Guest_Option()
        guestpage.select_Guest_List()
        guestpage.guests_Options('1')
        cy.get('.box-footer > .btn').click()
        cy.get('.field-guest-firstname > .help-block').should('contain','First Name cannot be blank.')
        cy.get('.field-guest-lastname > .help-block').should('contain','Last Name cannot be blank.')
      
     })


    })    
