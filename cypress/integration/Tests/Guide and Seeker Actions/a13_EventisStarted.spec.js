/// <reference types="cypress"/>
import{HomePage} from "../../../page-objects/Home"
import {Dashboard} from "../../../page-objects/Dashboard";
import {EventDetailPage} from "../../../page-objects/EventDetailPage"
import {Commons} from "../../../Commons/Common"

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

 describe ('Start event from Guide side and Join from Seeker side',()=>{
    const homePage = new HomePage()
    const dashboard = new Dashboard()
    const eventDetailPage = new EventDetailPage()
    const commons = new Commons()

    beforeEach(()=>{
        commons.open_Web_Site()
        //cy.wait(4000)
        
    })

    it('Start Event as Guide', ()=>{
        homePage.select_Login()
        commons.set_Guide_Credentials_One()
        homePage.submit_Credentials()
        cy.wait(6000)
        dashboard.press_Start_Event_Button()
        cy.xpath('//*[@id="fbStart"]').should('contain', 'Rejoin Event')
        homePage.logout_Account()
    })

    it('Seeker Book and Join Event',()=>{
        homePage.select_Login()
        commons.set_Seeker_Credentials_One()
        homePage.submit_Credentials()
        cy.wait(3000)
        homePage.go_Home()
        cy.scrollTo(0, 1300)   
        homePage.select_First_Event_Upcoming_Section()
        cy.wait(1000)
        cy.contains('Book Class').click()
        homePage.go_Home()
        cy.scrollTo(0, 1300) 
        cy.wait(5000)
        homePage.join_Event_From_Home()
        cy.get('.join-event').should('contain', 'Join Event')
    })
 }) 
 