/// <reference types="cypress"/>
export class ReferralPage {
  
    select_Referral_Option(){
        cy.get(':nth-child(10) > [href="#"] > :nth-child(2)').click()
    }
    select_Referral_Tracking(){
        cy.get('.menu-open > .treeview-menu > :nth-child(1) > a > span').click()
    }
    select_Referral_Referred_Users(){
        cy.get('.menu-open > .treeview-menu > :nth-child(2) > a > span').click()
    }
    select_Referral_Referred_Income_Received(){
        cy.get('.menu-open > .treeview-menu > :nth-child(3) > a > span').click()
    }
    //search fields
    type_First_name(value){
        cy.get('#referralreportsearch-first_name').type(value)
    }
    type_Last_name(value){
        cy.get('#referralreportsearch-last_name').type(value)
    }
    type_Email(value){
        cy.get('#referralreportsearch-email').type(value)
    }
    select_Type(value){
        cy.get('#referralreportsearch-type').select(value)
    }
    type_Last_Membership(value){
        cy.get('#referralreportsearch-last_membership').type(value)
    }
    search_Button(){
        cy.get('.box-footer > .btn').click()
        cy.wait(1500)
    }
    select_the_result(){
        cy.get('[style="text-align:center;"] > a > .glyphicon').click()
    }
}