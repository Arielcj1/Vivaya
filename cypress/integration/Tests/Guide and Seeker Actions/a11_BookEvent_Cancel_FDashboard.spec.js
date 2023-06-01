/// <reference types="cypress"/>

import { HomePage } from "../../../page-objects/Home";
import {Dashboard} from "../../../page-objects/Dashboard";
import {EventCreationPage} from "../../../page-objects/EventCreationPage"
import {SchedulePage} from "../../../page-objects/SchedulePage"
import {EventDetailPage} from "../../../page-objects/EventDetailPage" 
import {Commons} from "../../../Commons/Common"
import {GuidesPage} from "../../../page-objects/GuidesPage"

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

describe('Booking Event and Cancel the Event from Seeker Dashboard', ()=> {
    const homePage = new HomePage()
    const dashboard = new Dashboard()
    const eventCreationPage = new EventCreationPage()
    const schedulePage = new SchedulePage()
    const eventDetailPage = new EventDetailPage()
    const commons = new Commons()
    const guidesPage = new GuidesPage()

    beforeEach(()=>{
        
        commons.open_Web_Site()
        //cy.wait(4000)
        
    })

    /*after(()=>{
        homePage.logout_Account()
    
    })*/

    it('Create an Event as a Guide', ()=>{
        homePage.select_Login()
        commons.set_Guide_Credentials_One()
        homePage.submit_Credentials()
        //dashboard.add_NewEvent()
        dashboard.add_Class()
        eventCreationPage.add_EventName('class test')
        cy.wait(2000)
        eventCreationPage.add_Description('This is a class test')
        eventCreationPage.add_Custom_Number_Of_Days(1)
        eventCreationPage.custom_Start_Time(10)
        eventCreationPage.press_Add()
        
     })

     it('Book and cancel an event from Seeker Dashboard', ()=>{
        homePage.select_Login()
        commons.set_Seeker_Credentials_One()
        homePage.submit_Credentials()
        cy.wait(2000)
        guidesPage.select_Guide_Tab_when_Login()
        guidesPage.perform_a_Search('Manu rex')
        cy.wait(3000)
        cy.get('.img').click()
        cy.scrollTo(0, 600)
        guidesPage.select_an_event()   
        cy.wait(1500)
        //cy.get('#w0 > div > div.col-md-3.vertical-align.col-xs-6.sm-block').click()
        eventDetailPage.book_Event_from_EventDetail()
        cy.wait(1000)
        eventDetailPage.popup_thanks()
        dashboard.go_to_Dashboard_From_Menu()
        dashboard.cancel_Event_As_Seeker()
        dashboard.confirm_Cancelation_From_Dashboard()
        cy.get('#w3-success-0').should('contain', 'Event has been canceled.')
    })

    it('Guide delete the Event from his Dashboard',()=>{
        homePage.select_Login()
        commons.set_Guide_Credentials_One()
        homePage.submit_Credentials()
        dashboard.cancel_Created_Event()
        cy.get('#w3-success-0').should('contain', 'Event has been canceled.')
        
     })

})