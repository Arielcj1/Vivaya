/// <reference types="cypress"/>

import { Commons } from "../../../Commons/Common";


Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  describe('Admin Recording option',()=>{
    const commons = new Commons()

    beforeEach(()=>{
      commons.open_Admin_Site()
      commons.set_Admin_Credentials()
      
    })

    it('Verify Recording page in Admin Site', () => {
        cy.get(':nth-child(6) > [href="#"] > :nth-child(2)').click()
        cy.get('.menu-open > .treeview-menu > :nth-child(7) > a > span').click()

        cy.get('h1').should('contain','Recording Library') 
        cy.get(':nth-child(1) > .form-group > .control-label').should('contain','Guide Name')
        cy.get(':nth-child(2) > .form-group > .control-label').should('contain','Event Name')
        cy.get(':nth-child(5) > .form-group > .control-label').should('contain','Visible')
        cy.get(':nth-child(6) > .form-group > .control-label').should('contain','Offering')
        cy.get(':nth-child(3) > .form-group > .control-label').should('contain','From Date')
        cy.get(':nth-child(4) > .form-group > .control-label').should('contain','To Date')
    })



  })