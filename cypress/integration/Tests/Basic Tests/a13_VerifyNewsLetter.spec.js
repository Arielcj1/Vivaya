/// <reference types="cypress"/>

import {Commons} from "../../../Commons/Common"
import { HomePage } from "../../../page-objects/Home";
import {SchedulePage } from "../../../page-objects/SchedulePage";

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  describe('Tests to confirm the correct rediection to Schedule and elements',()=>{
    const homePage = new HomePage()
    const schedulePage = new SchedulePage()
    const commons = new Commons()

    beforeEach(()=>{
        
        commons.open_Web_Site()
        //cy.wait(4000)
        
    })

        it('Verify the NewsLetter',()=>{
            homePage.Fill_newsletter('Automation','test','automation@test.com')
            cy.get('h2.text-center').should('contain', 'Newsletter')
           
    })

    



  })