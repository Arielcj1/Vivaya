/// <reference types="cypress"/>

import {Commons} from "../../../Commons/Common"
import {PromotionPage} from "../../../page-objects-admin/PromotionPage"


Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  })

describe('Promotions page', ()=>{
    const commons = new Commons()
    const promotionPage = new PromotionPage()

    beforeEach(()=>{
        commons.open_Admin_Site()
        commons.set_Admin_Credentials()
    })

    it('Create a promotion code', ()=>{
        promotionPage.select_Promotions_Option()
        promotionPage.select_Promotion_New()
        promotionPage.type_Promotion_Name('AutCode')
        promotionPage.type_Promotion_Code_Name('AUTCOD')
        promotionPage.type_Promotion_Discount('35')
        promotionPage.type_Promotion_ExpDate('12')
        promotionPage.type_Promotion_Limit('10')
        cy.get('#w0-success').should('contain','Promotion has been ceaterd.')
    })

    it('Edit the promotion code', ()=>{
        promotionPage.select_Promotions_Option()
        promotionPage.select_Promotion_List()
        promotionPage.find_Element_List_Promo('2') // num 2 para editar, es la posicion en el xpath
        promotionPage.type_Promotion_Code_Name('CODEEDITED')
        promotionPage.type_Promotion_Discount('37')
        promotionPage.type_Promotion_ExpDate('10')
        promotionPage.type_Promotion_Limit('12')
        cy.get('#w0-success').should('contain','Promotion has been updated.')
    })

    it('Delete the promotion', ()=>{
        promotionPage.select_Promotions_Option()
        promotionPage.select_Promotion_List()
        promotionPage.find_Element_List_Promo('4') //num 4 para eliminar, posicion de xpath
        cy.get('#w0-success').should('contain','Promotion successfully deleted')
    })

    it('Create a Promo Auto Renewal', ()=>{
        promotionPage.select_Promotions_Option()
        promotionPage.select_PromoRenewal_New()
        promotionPage.type_Promotion_Name('AutCode')
        promotionPage.type_Promotion_Code_Name('AUTCOD')
        promotionPage.type_Promotion_Discount('35')
        promotionPage.type_Promotion_ExpDate('12')
        promotionPage.type_Promotion_Limit('10')
        cy.get('#w0-success').should('contain','Promotion auto renewal has been created.')
    })

    it('Edit a Promo Auto Renewal', ()=>{
        promotionPage.select_Promotions_Option()
        promotionPage.select_PromoRenewal_List()
        promotionPage.find_Element_List_Promo_Renewal('2') // num 2 para editar, es la posicion en el xpath
        promotionPage.type_Promotion_Code_Name('CODEEDITED')
        promotionPage.type_Promotion_Discount('37')
        promotionPage.type_Promotion_ExpDate('10')
        promotionPage.type_Promotion_Limit('12')
        cy.get('#w0-success').should('contain','Promotion has been updated.')
    })

    it('Delete a Promo Auto Renewal', ()=>{
        promotionPage.select_Promotions_Option()
        promotionPage.select_PromoRenewal_List()
        promotionPage.find_Element_List_Promo_Renewal('4') //num 4 para eliminar, posicion de xpath
        cy.get('#w0-success').should('contain','Promotion successfully deleted')
    })
})