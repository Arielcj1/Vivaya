/// <reference types="cypress"/>

export class WhatweOfferPage{

    select_WhatweOffer_When_Logout(){
        //cy.get('#mainNav > :nth-child(4) > a').click()
        cy.get('#w2 > [href="/offerings"]').click({force:true})
    }

    select_WhatweOffer_When_Login(){
        //cy.get('#mainNav > :nth-child(3) > a').click()
        cy.get('#w1 > [href="/offerings"]').click({force:true})
    }    

}