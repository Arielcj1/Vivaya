/// <reference types="cypress"/>
export class SeminarCreationPage {

    type_Seminar_Name(value){
        cy.get('#seminar-name').type(value)
    }

    add_Description(value){
               
        cy.iframe('.cke_wysiwyg_frame').click()
        cy.iframe('.cke_wysiwyg_frame').type(value)   
        
    }

    add_Custom_Start_Date(value){
            var moment = require('moment');
            const startDate = moment().add(value, 'days').format('MMM-DD-YYYY')
            const typeDate = cy.get('#seminar-startdate').type(startDate)
        
    }

    add_Custom_End_Date(value){
        var moment = require('moment');
        const endDate = moment().add(value, 'days').format('MMM-DD-YYYY')
        const typeDate = cy.get('#seminar-enddate').type(endDate)
    
}

    select_Main_Offering(value){
    
        cy.get('#seminar-offer_id').select(value)
    }

    add_Seminar_Price(value){
        cy.get('#seminar-price').type(value)
    }

    select_Allow_Independent_Events(){
        cy.get('#seminar-independent_events').click()
    }

    select_Publish_Button(){
        cy.get('.box-footer > .btn-primary').click()
    }

    select_Cancel_Seminar(){
        cy.get('.cancel-seminar').click()
        cy.get('.btn-success').click()
    }

    select_Edit_Seminar(){
        cy.get('.edit-event').click()
    }
    
}