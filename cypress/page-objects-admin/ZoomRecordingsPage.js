/// <reference types="cypress"/>
export class ZoomRecordingsPage {

    select_Zoom_Recordings_Option(){
        cy.get('.menu-open > .treeview-menu > :nth-child(2) > a').click()
    }

    type_Guide_Name(value){
        cy.get('#eventsearch-guidename').type(value)
    }
    
    substract_Custom_From_Date(value){
        var moment = require('moment');
        const customDate = moment().subtract(value, 'months').format('MMM-DD-YYYY')
        cy.get('#eventsearch-fromdate').clear()
        const typeDate = cy.get('#eventsearch-fromdate').type(customDate)
    }

    //Type the current Date within To Date field
    type_Current_Date(){
        var moment = require('moment');
        const currentDate = moment().format('MMM-DD-YYYY')
        cy.get('#eventsearch-todate').clear()
        cy.get('#eventsearch-todate').type(currentDate)
    
    }
    
    click_Search_Button(){
        cy.get('.box-footer > .btn').click()
    }    


    
}