/// <reference types="cypress"/>
export class ReportsTab {

select_Reports_Tab(){
    cy.get(':nth-child(9) > [href="#"] > :nth-child(2)').click()
}

//Add custom Date in Guide Reports
custom_Date_From_Date_Guide(){
    var moment = require('moment');
    const todayDate = moment().subtract(1, 'month').format('MMM-DD-YYYY')
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

select_GymPass_Option(){
    cy.get('.menu-open > .treeview-menu > :nth-child(2) > a > span').click()
}

select_Corporate_Lvl3(){
    cy.get('.menu-open > .treeview-menu > :nth-child(3) > a > span').click()
}

//Membership option
select_Membership_Option(){
    cy.get('.menu-open > .treeview-menu > :nth-child(4) > a').click()
}

//Most active seekers option
select_Most_Active_Seekers(){
    cy.get('.menu-open > .treeview-menu > :nth-child(6) > a').click()
}

//Seekers dropping
select_Seekers_Dropping(){
    cy.get('.menu-open > .treeview-menu > :nth-child(7) > a').click()
}

//Free Trial Converted

select_Free_Trial_Converted_Option(){
    cy.get('.treeview-menu > :nth-child(8) > a').click()
}

//Active Guides

select_Active_Guides_Option(){
    cy.get('.treeview-menu > :nth-child(9) > a').click()
}

select_Promotional_Report(){
    cy.get('.treeview-menu > :nth-child(10) > a > span').click()
}

 // Most Viewed Events
 select_Most_Viewed_Events(){
    cy.get('.treeview-menu > :nth-child(11) > a').click()
 }   

 // Seekers who spent more
 select_Seeker_Who_Spent_More(){
    cy.get('.treeview-menu > :nth-child(12) > a').click()
 }

 //Seeker who Cancelled
 select_Seeker_Who_Cancelled(){
    cy.get('.treeview-menu > :nth-child(13) > a').click()
 }

 //Most revenued events
 select_Most_Revenued_Events(){
    cy.get('.treeview-menu > :nth-child(14) > a').click()
 }

 //Corporate Level One
 select_Corporate_Lvl_One(){
    cy.get('.treeview-menu > :nth-child(15) > a').click()
 }

}
