/// <reference types="cypress"/>

import {Commons} from "../../../Commons/Common"
import {CorporatePage} from "../../../page-objects/CorporatePage"
import {CorporateAdminPage } from "../../../page-objects-admin/CorporateAdminPage"
import {CorporatePromotionPage} from "../../../page-objects-admin/CorporatePromotionPage"

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  })

  describe('Tests to verify the Corporate creation existing',()=>{
    const commons = new Commons()
    const corporate = new CorporatePage()
    const admin_corporate = new CorporateAdminPage()
    const admin_promo_code = new CorporatePromotionPage()

    it('Create the corporate from Website',()=>{
        commons.open_Web_Site()
        corporate.select_Corporate_As_Loggedout()
        corporate.type_Corporate_Email('manu@automation.com')
        corporate.select_register_Now()
        cy.get('h2.text-center').should('contain','Email Sign up Process Page')
                
    })

    it('Verify that the email already registration',()=>{
        commons.open_Web_Site()
        corporate.select_Corporate_As_Loggedout()
        corporate.type_Corporate_Email('manu@automation.com')
        corporate.select_register_Now()
        cy.get('.text').should('include.text','was already registered, but the steps for registering the Corporation were not completed, do you want to continue ?')
        cy.get('.text > a').should('contain','Any questions?')

                
    })

    it('Verify a new Corporate',()=>{
        commons.open_Web_Site()
        corporate.select_Corporate_As_Loggedout()
        corporate.type_Corporate_Email('manu@automation.com')
        corporate.select_register_Now()
        cy.xpath('/html/body/div[2]/div[2]/div/div/div[2]/a[1]').click({force:true})  
        corporate.type_First_Name('manu')
        corporate.type_Last_Name('automation')
        corporate.type_Company_Name('Automation corp2')
        corporate.continue_From_Step1()
        cy.wait(500)
        cy.get('#calendly-schedule > iframe').should('be.visible')
        
    })

    it('Verify that the email, when the corporate already existing',()=>{
        commons.open_Web_Site()
        corporate.select_Corporate_As_Loggedout()
        corporate.type_Corporate_Email('manu@automation.com')
        corporate.select_register_Now()
        cy.wait(500)
        cy.get('.text').should('include.text','but the steps for the registration of the Corporation were not completed, do you want to continue with another account ?')
        cy.xpath('/html/body/div[2]/div[2]/div/div/div[2]/a[1]').click({force:true})  
        cy.get('h2.text-center').should('contain','Email Sign up Process Page')  

    })
})   
  


