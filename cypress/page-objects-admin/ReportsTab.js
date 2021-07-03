/// <reference types="cypress"/>
export class ReportsTab {

select_Reports_Tab(){
    cy.get(':nth-child(9) > [href="#"] > :nth-child(2)').click()
}

//Add custom Date in Guide Reports
custom_Date_From_Date_Guide(){
    var moment = require('moment');
    const todayDate = moment().subtract(30, 'days').format('MMM-DD-YYYY')
    const typeDate = cy.get('#reportssearch-fromdate').type(todayDate)
}

custom_Date_From_Date_Membership(){
    var moment = require('moment');
    const todayDate = moment().subtract(30, 'days').format('MMM-DD-YYYY')
    const typeDate = cy.get('#reportsearch-fromdate').type(todayDate)
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

//Seekers dropping
select_Seekers_Dropping(){
    cy.get('.menu-open > .treeview-menu > :nth-child(6) > a > span').click()
}

//Free Trial Converted

select_Free_Trial_Converted_Option(){
    cy.get('.treeview-menu > :nth-child(7) > a > span').click()
}

//Active Guides

select_Active_Guides_Option(){
    cy.get('.treeview-menu > :nth-child(8) > a > span').click()
}

 // Most Viewed Events
 select_Most_Viewed_Events(){
    cy.get('.treeview-menu > :nth-child(9) > a > span').click()
 }   

 // Seekers who spent more
 select_Seeker_Who_Spent_More(){
    cy.get('.treeview-menu > :nth-child(10) > a > span').click()
 }

}
