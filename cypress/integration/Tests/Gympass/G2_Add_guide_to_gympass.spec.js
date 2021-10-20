/// <reference types="cypress"/>
import {Commons} from "../../../Commons/Common"
import {Gympass} from "../../../page-objects-admin/Gympass"

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  })

  describe('Verify add guide to Gympass', ()=>{
    const commons = new Commons()
    const gympass = new Gympass()

    beforeEach(()=>{
        commons.open_Admin_Site()
        commons.set_Admin_Credentials()
    })
    it('Verify add guide to gympass from Admin',()=>{
        gympass.select_gympass()
        gympass.select_selected_guides()

        gympass.fill_guide_gympass('manurex@manu.com')
        gympass.click_button()
        cy.wait(300)
        gympass.add_guide_gympass()
        
    })

  })        