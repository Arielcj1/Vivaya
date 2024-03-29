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
        cy.get('.custom-control-label').click({force:true})
    }

    select_Save_Progress(){
        //cy.get('.box-footer > .btn-primary').click({force:true})
        cy.get('[name="submitact"]').click({force:true})
    }

    select_Cancel_Seminar(){
        cy.get('.cancel-seminar').click({force:true})
        cy.get('.btn-success').click({force:true})
    }

    select_Edit_Seminar(){
        //cy.get('.edit-event').click({force:true})
        cy.xpath('/html/body/div[2]/div[3]/div/div[2]/div[7]/div/div[1]/div/div/div[4]/a[2]').click({force:true})
        
    }

    select_Add_Event(){
        cy.get('.another-evt').click()
    }
    
}