///<reference types="cypress"/>

export class ThankyouPage{

    Verify_purchase(){
        cy.get('.order-summary').should('contain.text','Purchase Confirmation')
    }

    Verify_item(){
        cy.get(':nth-child(2) > .col-md-8').should('contain.text','SEMINAR: SEMINAR AUTOMATION 1')
    }

    Verify_price(){

        cy.get('.col-md-2 > h4').should('contain.text','$150.00')
    }

    Press_GoToDashboard(){
        cy.get('a > .btn').click()
    }
}