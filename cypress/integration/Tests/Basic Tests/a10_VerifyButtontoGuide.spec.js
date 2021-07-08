/// <reference types="cypress"/>

import { HomePage } from "../../../page-objects/Home";
import {Dashboard} from "../../../page-objects/Dashboard"
import {Commons} from "../../../Commons/Common"
import {SeekerCreation} from "../../../page-objects/SeekerCreation"


Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  describe('Verify the "Become to Guide" Buttons', ()=>{
    const homePage = new HomePage()
    const dashBoard = new Dashboard()
    const commons = new Commons()
    const seekerpage = new SeekerCreation()
   
    beforeEach(()=>{
        
        commons.open_Web_Site()
        homePage.select_Login()
        commons.set_Seeker_Credentials_One()
        homePage.submit_Credentials()
        
        
    })

   
    it('Verify the Button "Become Guide"',()=>{
       seekerpage.Press_Become_guide_menu()
       cy.url().should('eq', 'https://stage.vivayalive.com/become-a-guide')
       cy.get('.col-md-9 > .text-blue').should('be.visible')
        
    })

    it('Verify the Button "Become Guide" from quick link',()=>{
        seekerpage.Press_become_guide_from_quicklink()
        cy.url().should('eq', 'https://stage.vivayalive.com/signup/add-guide-account-from-seeker')
        cy.get('[style="margin-bottom: 25px"]').should('be.visible')
         
     })
})