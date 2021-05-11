/// <reference types="cypress"/>
export class MembershipPage {
  
    select_MShip_Tab(){
        //cy.get('#mainNav > :nth-child(2) > a').click()
        cy.visit('https://stage.vivayalive.com/membership')
    }

    select_Subscribe_3Pack(){
        cy.get('.slick-current > .membership-timebased-list-item > .membership-timebased-list-item-content > .btn').click()
    }

    select_Subscribe_5Pack(){
        cy.get('[data-slick-index="1"] > .membership-timebased-list-item > .membership-timebased-list-item-content > .btn').click()
    }

    select_Monthly_Unlimited(){
        cy.get('[data-slick-index="2"] > .membership-timebased-list-item > .membership-timebased-list-item-content > .btn').click()
    }

    select_Annual_Unlimited(){
        cy.get('[data-slick-index="3"] > .membership-timebased-list-item > .membership-timebased-list-item-content > .btn').click()
    }

    //Packages

    select_Buy_1Class(){
        cy.get('.slick-current > .membership-list-item > .btn').click()
    }

    select_Buy_5Pack(){
        cy.get('[data-slick-index="1"] > .membership-list-item > .btn').click()
    }

    select_Buy_10Pack(){
        cy.get('[data-slick-index="2"] > .membership-list-item > .btn').click()
    }
}