/// <reference types="cypress"/>
import {Commons} from "../../../Commons/Common"
import {Gympass} from "../../../page-objects-admin/Gympass"

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  })

  describe('Verify Delete guide to Gympass', ()=>{
    const commons = new Commons()
    const gympass = new Gympass()

    beforeEach(()=>{
        commons.open_Admin_Site()
        commons.set_Admin_Credentials()
    })
    it('Verify delete guide to gympass from Admin',()=>{
        gympass.select_gympass()
        gympass.select_selected_guides()
        gympass.delete_guide_gympass()
        cy.get('#w2-success').should('contain','Guide was successfully removed from Gympass')

        
        
    })

  })        