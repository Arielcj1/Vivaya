/// <reference types="cypress"/>

import { HomePage } from "../../../page-objects/Home";
import {Dashboard} from "../../../page-objects/Dashboard";
import {EventCreationPage} from "../../../page-objects/EventCreationPage"
import {EventDetailPage} from "../../../page-objects/EventDetailPage" 
import {GuideProfilePage} from "../../../page-objects/GuideProfilePage"
import {Commons} from "../../../Commons/Common"

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

describe('Booking Events', ()=> {
    const homePage = new HomePage()
    const dashboard = new Dashboard()
    const eventCreationPage = new EventCreationPage()
    const guideProfilePage = new GuideProfilePage()
    const eventDetailPage = new EventDetailPage()
    const commons = new Commons()

    beforeEach(()=>{
        
        commons.open_Web_Site()
        //cy.wait(8000)
        
    })

    /*after(()=>{
        homePage.logout_Account()
    
    })*/

    it('Create an Event as a Guide', ()=>{
        homePage.select_Login()
        commons.set_Guide_Credentials_One()
        homePage.submit_Credentials()
        dashboard.add_NewEvent()
        dashboard.add_Class()
        eventCreationPage.add_EventName('Class1')
        eventCreationPage.add_Description('This is a class test')
        eventCreationPage.add_Current_Date()
        eventCreationPage.custom_Start_Time(5)
        eventCreationPage.press_Add()
        
     })
    it.skip('Book the Last Event from Home page', ()=>{
        homePage.select_Login()
        commons.set_Seeker_Credentials_One()
        homePage.submit_Credentials()
        cy.wait(3000)
        homePage.go_Home()
        cy.scrollTo(0, 1400)   
        homePage.select_First_Event_Upcoming_Section()
        eventDetailPage.book_Event_from_EventDetail()
        eventDetailPage.cancel_Event_from_EventDetail()
        eventDetailPage.confirm_Cancelation_from_EventDetail()
        
    })

    it.skip('Guide delete the Event from his Dashboard',()=>{
        homePage.select_Login()
        commons.set_Guide_Credentials_One()
        homePage.submit_Credentials()
        dashboard.cancel_Created_Event()
        cy.get('#w0-success-0').should('contain', 'Event has been canceled.')
     })

})    