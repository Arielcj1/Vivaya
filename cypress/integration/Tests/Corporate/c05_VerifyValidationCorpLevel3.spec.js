/// <reference types="cypress"/>

import {Commons} from "../../../Commons/Common"
import {CorporateAdminPage } from "../../../page-objects-admin/CorporateAdminPage"
import {CorporatePage} from "../../../page-objects/CorporatePage"


Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  })

  describe('Tests to verify validations in Corporates level3',()=>{
    const commons = new Commons()
    const admin_corporate = new CorporateAdminPage()
    const corporate = new CorporatePage()

    beforeEach(()=>{
        
        commons.open_Admin_Site()
        //cy.wait(4000)
        
    })

    it('Verify validation in Corporation Level3',()=>{
        commons.set_Admin_Credentials()
        admin_corporate.select_Corporate_Option()
        admin_corporate.select_Corporate_level3()
        cy.get('.box-footer > .btn').click()
        cy.get('.field-promotion-name > .help-block').should('contain','Name cannot be blank.')
        cy.get('.field-promotion-code > .help-block').should('contain','Code cannot be blank.')
        cy.get(':nth-child(3) > .form-group > .help-block').should('contain','Select Corporate Name cannot be blank.')
        cy.get('.field-promotion-price > .help-block').should('contain','Price cannot be blank.')

    })
       
})   
  



