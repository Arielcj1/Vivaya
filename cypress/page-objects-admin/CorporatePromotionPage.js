/// <reference types="cypress"/>
export class CorporatePromotionPage {

    select_Corporate_Promotions_From_List(){
        cy.get('.menu-open > .treeview-menu > :nth-child(3) > a > span').click()
    }

    select_Corporate_Promotion(){
        cy.get('.treeview-menu > .active > a > span').click()
    }

    select_Create_New_Promo(){
        cy.get('.content > .btn').click()
    }

    type_Promotion_Name(value){
        cy.get('#promotion-name').type(value)
    }

    type_Promotion_Code(value){
        cy.get('#promotion-code').type(value)
    }

    type_Promotion_Domain_Name(value){ //corporate automation uno - automation.com
        cy.get('#w1').type(value)
        //cy.get('#tt-42828d28-5904-65b1-8558-e13db73b84d6').click()
    }

    type_Promotion_Discount(value){
        cy.get('#promotion-discount').type(value)
    }

    select_Add_Promtion_Button(){
        cy.get('.box-footer > .btn').click()
    }


}