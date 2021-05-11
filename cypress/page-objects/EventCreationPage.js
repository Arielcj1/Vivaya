/// <reference types="cypress"/>

export class EventCreationPage {
    
    add_EventName (value){
        const eventName = cy.get('#eventform-name').type(value)
        return this
      
    }

    add_Description(value){
               
        cy.iframe('.cke_wysiwyg_frame').click()
        cy.iframe('.cke_wysiwyg_frame').type(value)   
        
    }

    add_Date(){
        var moment = require('moment');
        const todayDate = moment().add(3, 'days').format('MMM-DD-YYYY')
        const typeDate = cy.get('#eventform-startdate').type(todayDate)
        return this
    }

    add_Price(value){
        const addPrice = cy.get('#eventform-workshop_price').type(value)
        return this
    }

    press_Add(){
        const pressAddButton = cy.get('#btnCreateEvent').click()
        return this
    }

    add_Current_Date(){
        var moment = require('moment');
        const todayDate = moment().format('MMM-DD-YYYY')
        const typeDate = cy.get('#eventform-startdate').type(todayDate)
    }

    add_Current_Date_PlusOne_Day(){
        var moment = require('moment');
        const todayDate = moment().add(1, 'days').format('MMM-DD-YYYY')
        const typeDate = cy.get('#eventform-startdate').type(todayDate)
    }

    add_Custom_Number_Of_Days(value){
        
        var moment = require('moment');
        const todayDate = moment().add(value, 'days').format('MMM-DD-YYYY')
        const typeDate = cy.get('#eventform-startdate').type(todayDate)
    }

    custom_Start_Time(value){
        cy.get('.bootstrap-timepicker > .input-group-addon').click()
        for(let n=0; n<value; n++){
            cy.get('tbody > :nth-child(1) > :nth-child(3) > a').click()
        }
    }

    press_Update_After_Edit(){
        cy.get('.box-footer > .btn').click()
    }    

    //Set Repeater options

    select_Repeater_Checkbox(){
        cy.get('#eventform-repeatevent').click()
    }

    add_Custom_Start_Date(value){
        var moment = require('moment');
        const customDate = moment().add(value, 'days').format('MMM-DD-YYYY')
        const typeDate = cy.get('#eventform-startdate').type(customDate)
    }

    add_Custom_End_Date(value){
        var moment = require('moment');
        const customDate = moment().add(value, 'days').format('MMM-DD-YYYY')
        const typeDate = cy.get('#eventform-enddate').type(customDate)
    }

    select_Repeater_Daily(){
        cy.get('#eventform-repeats').select('Daily')
    }

    select_Repeater_Weekly(){
        cy.get('#eventform-repeats').select('Weekly')
    }

    select_Repeater_Weekday(){
        cy.get('#eventform-repeats').select('Select Weekday')
    }

    select_Weekday_Sunday(){
        cy.get('#eventform-weekdays > :nth-child(1) > label > input').click()
    }
    
    select_Weekday_Monday(){
        cy.get(':nth-child(2) > label > input').click()
    }

    select_Weekday_Tuesday(){
        cy.get(':nth-child(3) > label > input').click()
    }

    select_Weekday_Wednesday(){
        cy.get(':nth-child(4) > label > input').click()
    }

    select_Weekday_Thursday(){
        cy.get(':nth-child(5) > label > input').click()             
    }

    select_Weekday_Friday(){
        cy.get(':nth-child(6) > label > input').click()
    }

    select_Weekday_Saturday(){
        cy.get(':nth-child(7) > label > input').click()
    }


}