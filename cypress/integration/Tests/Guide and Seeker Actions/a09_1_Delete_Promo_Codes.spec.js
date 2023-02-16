/// <reference types="cypress"/>

import { Commons } from "../../../Commons/Common";
import { PromotionPage } from "../../../page-objects-admin/PromotionPage";

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

    it('Delete the promotion', ()=>{
        promotionPage.select_Promotions_Option()
        promotionPage.select_Promotion_List()
        promotionPage.find_Element_List_Promo('4') //num 4 para eliminar, posicion de xpath
        cy.get('#w0-success').should('be.visible')
    })

    it('Delete the Free Book promotion', ()=>{
        promotionPage.select_Promotions_Option()
        cy.wait(2000)
        promotionPage.select_List_Free_Book_Promotion()
        cy.get(':nth-child(1) > :nth-child(6) > .glyphicon-remove').click()
        
        cy.get('#w0-success').should('be.visible')
    })

})