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

describe('Create Event Running', ()=> {
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
        eventCreationPage.custom_Start_Time(8)
        eventCreationPage.press_Add()
        
     })

    /*it('Guide delete the Event from his Dashboard',()=>{
        homePage.select_Login()
        commons.set_Guide_Credentials_One()
        homePage.submit_Credentials()
        dashboard.cancel_Created_Event()
        cy.get('#w0-success-0').should('contain', 'Event has been canceled.')
     })*/

   

})    