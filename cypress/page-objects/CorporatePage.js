/// <reference types="cypress"/>
export class CorporatePage {

    select_Corporate_As_Loggedout(){
        cy.get('#mainNav > :nth-child(6) > a').click()
    }

    type_Corporate_Email(value){
        cy.get('.container-banner > .container > #corporate-entry-form > .form-group > #corporateentryform-emailfrontend').type(value)
    }

    select_register_Now(){
        cy.get('.container-banner > .container > #corporate-entry-form > .form-group > #corporateentryform-emailfrontend').type('{enter}')
    }

    //Step one to Email sign up
    type_First_Name(value){
        cy.get('#corporatesignupform-first_name').type(value)
    }
    type_Last_Name(value){
        cy.get('#corporatesignupform-last_name').type(value)
    }
    type_Company_Name(value){
        cy.get('#corporatesignupform-company_name').type(value)
    }

    continue_From_Step1(){
        cy.get('#continueStep1').click()
    }

    select_Day_From_Calendly_Calendar(){
        cy.iframe('#calendly-schedule > iframe').click('#page-region > div > div > div > div > div > div > div > div > div.calendar.k1wAD0GFi1._1W9lXCFKII.DD7-Wme_6w > div.calendar-table-wrapper > table > tbody > tr:nth-child(3) > td:nth-child(5) > button')
    }

}