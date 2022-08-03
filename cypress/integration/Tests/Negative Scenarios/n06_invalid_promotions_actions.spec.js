/// <reference types="cypress"/>

import {Commons} from "../../../Commons/Common"
import {PromotionPage} from "../../../page-objects-admin/PromotionPage"
import {SeekerCreation} from "../../../page-objects/SeekerCreation"


Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  })

describe('Negative scenarios for Promotions', ()=>{
    const commons = new Commons()
    const promotionPage = new PromotionPage()
    const seekerCreation = new SeekerCreation()

    beforeEach(()=>{
        commons.open_Admin_Site()
        commons.set_Admin_Credentials()
    })

    it('Verify validation of fields of Promotions', ()=>{
        promotionPage.select_Promotions_Option()
        promotionPage.select_Promotion_New()
        cy.get('.box-footer > .btn').click({force:true})
        cy.get('.field-promotion-name > .help-block').should('contain','Name cannot be blank.')
        cy.get('.field-promotion-code > .help-block').should('contain','Code cannot be blank.')
        cy.get('.field-promotion-discount > .help-block').should('contain','Discount cannot be blank.')
        cy.get('.field-promotion-expiration_date > .help-block').should('contain','Expiration Date cannot be blank.')


    })

    
    it('Verify validation of fields of Promotions of Promo Auto Renewal', ()=>{
        promotionPage.select_Promotions_Option()
        promotionPage.select_PromoRenewal_New()
        cy.get('.box-footer > .btn').click({force:true})
        cy.get('.field-promotion-name > .help-block').should('contain','Name cannot be blank.')
        cy.get('.field-promotion-code > .help-block').should('contain','Code cannot be blank.')
        cy.get('.field-promotion-discount > .help-block').should('contain','Discount cannot be blank.')
        cy.get('.field-promotion-times_limit_use > .help-block').should('contain','Limit number of uses cannot be blank.')
        cy.get('.field-promotion-expiration_date > .help-block').should('contain','Expiration Date cannot be blank.')

    })

       
    it('Verify validation of fields of Promotions of Promo Trial Extended', ()=>{
        promotionPage.select_Promotions_Option()
        promotionPage.select_Promo_Trial_extended()
        cy.get('.box-footer > .btn').click({force:true})
        cy.get('.field-promotion-name > .help-block').should('contain', 'Name cannot be blank.')
        cy.get('.field-promotion-code_aliases > .help-block').should('contain', 'Code Aliases cannot be blank.')
        //cy.get('.field-promotion-code > .help-block')
        cy.get('.field-promotion-times_limit_use > .help-block').should('contain', 'Limit number of uses cannot be blank.')
        cy.get('.field-promotion-expiration_date > .help-block').should('contain', 'Expiration Date cannot be blank.')

    })
    
          

})