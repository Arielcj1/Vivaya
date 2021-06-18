/// <reference types="cypress"/>
export class ReportsTab {

select_Reports_Tab(){
    cy.get(':nth-child(9) > [href="#"] > :nth-child(2)').click()
}

select_Guides_Option(){
    cy.get('.menu-open > .treeview-menu > :nth-child(1) > a > span').click()
}

}
