/// <reference types="cypress"/>

import { Commons } from "../../../Commons/Common";
import { PromotionPage } from "../../../page-objects-admin/PromotionPage";


Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });


 describe('Create Promo code 50% and 100%',()=>{
    const commons = new Commons()
    const promotionPage = new PromotionPage()


    beforeEach(()=>{
        commons.open_Admin_Site()
        commons.set_Admin_Credentials()
    })

    it.skip('Create List Promotion code of 50% ', ()=>{
        promotionPage.select_Promotions_Option()
        promotionPage.select_Promotion_New()
        promotionPage.type_Promotion_Name('AutCode')
        promotionPage.type_Promotion_Code_Name('AUTGUEST')
        promotionPage.type_Promotion_Discount('50')
        promotionPage.type_Promotion_ExpDate('12')
        promotionPage.type_Promotion_Limit('10')
        cy.wait(5000)
        cy.get('#w0-success').should('contain','Promotion has been created.')
    })

    it('Create Free Book Promotion code 100% ', ()=>{
        promotionPage.select_Promotions_Option()
        promotionPage.select_New_Free_Book_Promotion()
        promotionPage.type_Promotion_Name('Free Code Test')
        promotionPage.type_Promotion_Code_Name('FREECODE')
        promotionPage.type_Promotion_ExpDate('12')
        promotionPage.select_Event_Types()
        cy.wait(3000)
        promotionPage.save_promotion()
        cy.get('#w0-success').should('contain','Promotion free book has been created.')
    })

})