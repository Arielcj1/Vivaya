/// <reference types="cypress"/>

export class PricingPage{

    select_Pricing_When_Logout(){
        cy.get('#mainNav > :nth-child(5) > a').click({force:true})
    }

    select_Pricing_When_Login(){
        cy.get('#mainNav > :nth-child(4) > a').click({force:true})
    }    

    select_Suscribe_Monthly_3Pack(){
        cy.get('.slick-current > .membership-timebased-list-item > .membership-timebased-list-item-content > .btn').click({force:true})
    }

    select_Suscribe_Monthly_5Pack(){
        cy.get('[data-slick-index="1"] > .membership-timebased-list-item > .membership-timebased-list-item-content > .btn').click({force:true})
    }

    select_Subscribe_Unlilmited_Monthly(){
        cy.get('[data-slick-index="2"] > .membership-timebased-list-item > .membership-timebased-list-item-content > .btn').click({force:true})

    }

    select_Subscribe_Unlimited_Annual(){
        cy.get('[data-slick-index="3"] > .membership-timebased-list-item > .membership-timebased-list-item-content > .btn').click({force:true})
    }

    buy_OneClass_Package(){
        cy.get('.slick-current > .membership-list-item > .btn').click({force:true})
    }

    buy_5Pack_Package(){
        cy.get('[data-slick-index="1"] > .membership-list-item > .btn').click({force:true})
    }

    buy_10Pack_Package(){
        cy.get('[data-slick-index="1"] > .membership-list-item > .btn').click({force:true})
    }

}