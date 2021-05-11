/// <reference types="cypress"/>

export class BecomeAGuidePage{

    select_Become_A_Guide_Page(){
        cy.get('.become-a-guide > a').click()
    }
 

}