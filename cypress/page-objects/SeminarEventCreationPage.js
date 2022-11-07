///<reference types="cypress"/>

export class SeminarEventCreationPage{

    add_Seminar_Event_Name(value){
        cy.get('#eventform-name').type(value)
    }

    add_Description(value){
               
        cy.iframe('.cke_wysiwyg_frame').click()
        cy.iframe('.cke_wysiwyg_frame').type(value)   
        
    }

    add_Custom_Number_Of_Days(value){
        var moment = require('moment');
        const todayDate = moment().add(value, 'days').format('MMM-DD-YYYY')
        const typeDate = cy.get('#eventform-startdate').type(todayDate)
    }

    custom_End_Time(value){
        cy.get(':nth-child(7) > .form-group > .col-sm-9 > .bootstrap-timepicker > .input-group-addon').click()
        for(let n=0; n<value; n++){
            cy.get(':nth-child(7) > .form-group > .col-sm-9 > .bootstrap-timepicker > .bootstrap-timepicker-widget > table > tbody > :nth-child(1) > :nth-child(1) > a > .glyphicon').click()
        }
        cy.get('.control-label').click()

    }

    select_Existing_Seminar(value){
        cy.get('#seminar_id').select(value)
    }

    select_Assign_Guide(value){
        cy.get('#eventform-assign_guide').type(value)
    }

    add_EventSeminar_Price(value){
        cy.get('#eventform-price').type(value)
    }

    select_Add_Button(){
        cy.get('#btnCreateEvent').click()
    }

    select_Done(){
        cy.get('.box-footer > .btn-primary').click()
    }

    //Are you ready to publish this seminar?
    select_Save_for_Later(){
        cy.get('#seminar-later').click()
    }

    select_Yes(){
        cy.get('#seminar-done').click()
    }

}