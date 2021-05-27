/// <reference types="cypress"/>
export class GuestPage {
  
    select_Guest_Option(){
        cy.get(':nth-child(4) > [href="#"] > :nth-child(2)').click()
    }

    select_Guest_List(){
        cy.get('.menu-open > .treeview-menu > :nth-child(1) > a > span').click()
    }

}