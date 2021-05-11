/// <reference types="cypress"/>

export class WhatweOfferPage{

    select_WhatweOffer_When_Logout(){
        cy.get('#mainNav > :nth-child(4) > a').click()
    }

    select_WhatweOffer_When_Login(){
        cy.get('#mainNav > :nth-child(3) > a').click()
    }    

}