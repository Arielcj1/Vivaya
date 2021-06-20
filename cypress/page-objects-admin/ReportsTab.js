/// <reference types="cypress"/>
export class ReportsTab {

select_Reports_Tab(){
    cy.get(':nth-child(9) > [href="#"] > :nth-child(2)').click()
}

select_Guides_Option(){
    cy.get('.menu-open > .treeview-menu > :nth-child(1) > a > span').click()
}

//Membership option
select_Membership_Option(){
    cy.get('.menu-open > .treeview-menu > :nth-child(2) > a > span').click()
}

//Most active seekers option
select_Most_Active_Seekers(){
    cy.get('.menu-open > .treeview-menu > :nth-child(5) > a > span').click()
}

select_Seekers_Dropping(){
    cy.get('.treeview-menu > :nth-child(6) > a').click()
}

}
