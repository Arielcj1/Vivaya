/// <reference types="cypress"/>

import { HomePage } from "../../../page-objects/Home";
import {Dashboard} from "../../../page-objects/Dashboard";
import {EventCreationPage} from "../../../page-objects/EventCreationPage"
import {GuidesPage} from "../../../page-objects/GuidesPage"
import {Commons} from "../../../Commons/Common";
import {EventDetailPage} from "../../../page-objects/EventDetailPage"
import {SchedulePage} from "../../../page-objects/SchedulePage"

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

describe('Booking Event from Guide', ()=> {
    const homePage = new HomePage()
    const dashboard = new Dashboard()
    const eventCreationPage = new EventCreationPage()
    const commons = new Commons()
    const guidesPage = new GuidesPage()
    const eventDetailPage = new EventDetailPage()
    const schedulePage = new SchedulePage()                 


    beforeEach(()=>{
        
        commons.open_Web_Site()
        cy.wait(4000)
        
    })

    it('Create an Event as a Guide', ()=>{
       homePage.select_Login()
       commons.set_Guide_Credentials_One()
       homePage.submit_Credentials()
       dashboard.add_NewEvent()
       dashboard.add_Class()
       eventCreationPage.add_EventName('class test')
       cy.wait(2000)
       eventCreationPage.add_Description('This is a class test')
       eventCreationPage.add_Custom_Number_Of_Days(1)
       eventCreationPage.custom_Start_Time(30)
       eventCreationPage.press_Add()
       homePage.logout_Account()
    })

    it('Book and cancel an event from Seeker', ()=>{
        homePage.select_Login()
        commons.set_Seeker_Credentials_One()
        homePage.submit_Credentials()
        cy.wait(2000)
        guidesPage.select_Guide_Tab_when_Login()
        guidesPage.perform_a_Search('manu rex')
        cy.wait(3000)
        cy.get('.img').click()
        cy.scrollTo(0, 600)   
        guidesPage.select_an_event()
        eventDetailPage.book_Event_from_EventDetail()
        cy.wait(1000)
        eventDetailPage.popup_thanks()
        eventDetailPage.cancel_Event_from_EventDetail()
        eventDetailPage.confirm_Cancelation_from_EventDetail()
    })

    it('Book an event from Schedule page', ()=>{
        homePage.select_Login()
        commons.set_Seeker_Credentials_One()
        homePage.submit_Credentials()
        cy.wait(2000)
        schedulePage.select_Schedule_Tab_When_Login()  
        cy.wait(3000)
        schedulePage.select_NextDay_AfterCurrent_In_Schedule()
        schedulePage.select_specific_Event('class test')
        cy.wait(1000)
        eventDetailPage.popup_thanks()
        /*eventDetailPage.select_Back_To_Schedule()
        schedulePage.select_NextDay_AfterCurrent_In_Schedule()
        cy.wait(2000)
        schedulePage.select_Cancel_From_Schedule()
        schedulePage.confirm_Cancelation_From_Schedule()
        cy.get('#w0-success-0').should('contain', 'Event has been canceled.')*/
    })

    it ('Guide delete the Event from his Dashboard',()=>{
       homePage.select_Login()
       commons.set_Guide_Credentials_One()
       homePage.submit_Credentials()
       dashboard.go_to_Dashboard_From_Menu()
       dashboard.cancel_Created_Event()
       cy.get('#w1-success-0').should('contain', 'Event has been canceled.')
       
    })

})