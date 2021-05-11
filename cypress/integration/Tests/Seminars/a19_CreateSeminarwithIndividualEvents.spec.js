/// <reference types="cypress"/>

import { HomePage } from "../../../page-objects/Home";
import {Dashboard} from "../../../page-objects/Dashboard";
import {Commons} from "../../../Commons/Common"
import {SeminarCreationPage} from "../../../page-objects/SeminarCreationPage"
import {SeminarEventCreationPage} from "../../../page-objects/SeminarEventCreationPage"

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });


describe('Seminar Creation, Cancelation and Seminar Event creation',
{
    retries: {
      runMode: 2,
      openMode: 2,
    }
  }, ()=>{
    const homePage = new HomePage()
    const dashboard = new Dashboard()
    const commons = new Commons()
    const seminars = new SeminarCreationPage()
    const seminarEvent = new SeminarEventCreationPage()

    beforeEach(()=>{
        commons.open_Web_Site()
        
    })

    /*after(()=>{
        homePage.logout_Account()
    
    })*/
    it('Create Seminar', async()=>{
        homePage.select_Login()
        commons.set_Guide_Credentials_One()
        homePage.submit_Credentials()
        cy.wait(3000)
        dashboard.select_Add_Seminar()
        seminars.type_Seminar_Name("Seminar Automation")
        seminars.add_Description("This is a Seminar for Automation Proj")
        seminars.add_Custom_Start_Date(8)
        seminars.add_Custom_End_Date(15)
        seminars.select_Main_Offering('Yoga')
        seminars.add_Seminar_Price(150)
        seminars.select_Allow_Independent_Events()
        seminars.select_Publish_Button()

        cy.get('#w0-success-0').should('contain', 'Seminar has been created.')
        cy.get('h4 > a').should('contain', 'Seminar Automation')
        
        dashboard.add_NewEvent()
        dashboard.add_Seminar_Event()
        seminarEvent.add_Seminar_Event_Name('Seminar Event test one')
        seminarEvent.add_Description('This is a seminar Event for testing')
        seminarEvent.add_Custom_Number_Of_Days(10)
        seminarEvent.custom_End_Time(2)
        seminarEvent.select_Existing_Seminar('Seminar Automation')
        seminarEvent.select_Assign_Guide('Ariel Guide')
        cy.get('.tt-suggestion').click()
        seminarEvent.add_EventSeminar_Price(50)
        seminarEvent.select_Add_Button()
        cy.get('#w0-success-0').should('contain', 'Events have been created.')

        dashboard.add_NewEvent()
        dashboard.add_Seminar_Event()
        seminarEvent.add_Seminar_Event_Name('Seminar Event test two')
        seminarEvent.add_Description('This is another seminar Event for testing')
        seminarEvent.add_Custom_Number_Of_Days(11)
        seminarEvent.custom_End_Time(2)
        seminarEvent.select_Existing_Seminar('Seminar Automation')
        seminarEvent.select_Assign_Guide('Ariel Guide')
        cy.get('.tt-suggestion').click()
        seminarEvent.add_EventSeminar_Price(40)
        seminarEvent.select_Add_Button()
        cy.get('#w0-success-0').should('contain', 'Events have been created.')

        //delete seminar
        seminars.select_Cancel_Seminar()
        cy.get('#w0-success-0').should('contain', 'Seminar has been cancelled.')
     })

     
     
})     
