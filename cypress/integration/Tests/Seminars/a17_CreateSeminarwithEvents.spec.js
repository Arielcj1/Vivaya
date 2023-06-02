/// <reference types="cypress"/>

import { HomePage } from "../../../page-objects/Home";
import {Dashboard} from "../../../page-objects/Dashboard";
import {Commons} from "../../../Commons/Common"
import {SeminarCreationPage} from "../../../page-objects/SeminarCreationPage"
import {SeminarEventCreationPage} from "../../../page-objects/SeminarEventCreationPage"

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });


describe('Seminar Creation, Cancelation and Seminar Eevnt creation',
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
    it('Create Seminar', ()=>{

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
        seminars.select_Save_Progress()

        cy.get('#w3-success-0').should('contain', 'Seminar has been created.')
        cy.get('h4 > a').should('contain', 'Seminar Automation')
       
     })

     it('Create Seminar Event related to a previous seminar', ()=>{
      homePage.select_Login()
      commons.set_Guide_Credentials_One()
      homePage.submit_Credentials()
      cy.wait(3000)
      //add seminar event
      seminars.select_Edit_Seminar()
      cy.wait(1500)
      seminars.select_Add_Event()
      seminarEvent.add_Seminar_Event_Name('Seminar Event test one')
      seminarEvent.add_Description('This is a seminar Event for testing')
      seminarEvent.add_Custom_Number_Of_Days(10)
      seminarEvent.custom_End_Time(2)
      //seminarEvent.select_Existing_Seminar('Seminar Automation')
      seminarEvent.select_Assign_Guide('Manu rex')
      cy.get('.tt-suggestion').click({force:true})
      seminarEvent.add_EventSeminar_Price(50)
      //seminarEvent.select_Add_Button()
      seminarEvent.select_Done()
      cy.wait(1500)
      seminarEvent.select_Save_for_Later()
      cy.get('#w3-success-0').should('contain', 'Events have been created.')
     
      
   })


   it('Cancel Seminar Event', ()=>{

    homePage.select_Login()
    commons.set_Guide_Credentials_One()
    homePage.submit_Credentials()
    cy.wait(3000)
    //Cancel the Seminar
    seminars.select_Cancel_Seminar()
    cy.get('#w3-success-0').should('contain', 'Seminar has been cancelled.')
    
 })
})     

    