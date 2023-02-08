/// <reference types="cypress"/>

import { HomePage } from "../../../page-objects/Home";
import {Dashboard} from "../../../page-objects/Dashboard";
import {EventCreationPage} from "../../../page-objects/EventCreationPage"
import {Commons} from "../../../Commons/Common"

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });


describe('Events Creation', ()=>{
    const homePage = new HomePage()
    const dashboard = new Dashboard()
    const eventCreationPage = new EventCreationPage()
    const commons = new Commons()    

    beforeEach(()=>{
        commons.open_Web_Site()
        //dashboard.go_to_Dashboard_From_Menu()
    })

    it.skip('Create Workshop Event', () => {
        
        homePage.select_Login()
        commons.set_Guide_Credentials_One()
        homePage.submit_Credentials()
        
        cy.get(':nth-child(1) > .dashboard-box > :nth-child(5) > .count').invoke('text').then((text) =>{
             cy.log(text)
            if(text != 0){
                cy.wait(300)
                cy.get('.cancel-event').click()
                cy.get('.btn-success').click({force:true})
                 //dashboard.cancel_Created_Event_Workshop()
                 cy.get('#w2-success-0').should('contain', 'Event has been canceled.')
            }
            else{
                 //dashboard.add_NewEvent()
                 dashboard.add_Workshop()
                 eventCreationPage.add_EventName('Workshop1')
                 cy.wait(2000)
                 eventCreationPage.add_Description('This is a Test Workshop')
                 eventCreationPage.add_Custom_Number_Of_Days(2)
                 eventCreationPage.add_Price('40')
                 cy.wait(500)
                 eventCreationPage.press_Add()
                 cy.get('#w2-success-0').should('contain', 'Events have been created.')
            }
        })
    })

    it('Buy the workshop as Guest', () => {
        cy.wait(1200)
        cy.contains('Workshop1').click({force:true})
        cy.contains('Buy Workshop').click({force:true})
        cy.get('.position-relative > .btn').click({force:true})
        cy.get('#guestprebuyeventform-first_name').type('GuestWorkshop')
        cy.get('#guestprebuyeventform-last_name').type('LastName')
        cy.get('#guestprebuyeventform-email').type('guestworkshop@test.com')

        //Card
        cy.get('.n-group > .form-control').type('Auto Mation')
        cy.get(':nth-child(2) > .input-group > .form-control').type('4242424242424242')
        cy.get('.expiration-date > .form-group > .form-control').type('0225')
        cy.get('.security-code > .form-group > .input-group > .form-control').type('123')
        

        
   })

    it('Cancel Workshop Event', () => {
        
        homePage.select_Login()
        commons.set_Guide_Credentials_One()
        homePage.submit_Credentials()

        cy.wait(1200)
        cy.get(':nth-child(1) > .dashboard-box > :nth-child(5) > .count').invoke('text').then((text) =>{
            cy.log(text)
           if(text != 0){
            cy.wait(300)
            cy.get('.cancel-event').click({force:true})
            cy.wait(100)
            cy.get('.btn-success').click({force:true})
                //dashboard.cancel_Created_Event_Workshop()
                cy.get('#w2-success-0').should('contain', 'Event has been canceled.')
           }
           else{
            cy.wait(100)
                }
       })
   })

    it('Create Class Event', () =>{
        
        homePage.select_Login()
        commons.set_Guide_Credentials_One()
        homePage.submit_Credentials()

        cy.get(':nth-child(1) > .dashboard-box > :nth-child(4) > .count').invoke('text').then((text)=>{
            cy.log(text)
            if(text != 0){
                cy.get('.cancel-event').click({force:true})
            cy.wait(100)
            cy.get('.btn-success').click({force:true})
                //dashboard.cancel_Created_Event_class()
                cy.get('#w2-success-0').should('contain', 'Event has been canceled.') 
            }
            else{
                //dashboard.add_NewEvent()
                dashboard.add_Class()
                eventCreationPage.add_EventName('Class1')
                cy.wait(2000)
                eventCreationPage.add_Description('This is a Test Class')
                eventCreationPage.add_Custom_Number_Of_Days(2)
                eventCreationPage.custom_Start_Time(7)
                cy.wait(500)
                eventCreationPage.press_Add()
                cy.get('#w2-success-0').should('contain', 'Events have been created.')
            }
        })
    })
    it('Cancel Class Event', () =>{
        
        homePage.select_Login()
        commons.set_Guide_Credentials_One()
        homePage.submit_Credentials()

        cy.wait(1200)
        cy.get(':nth-child(1) > .dashboard-box > :nth-child(4) > .count').invoke('text').then((text)=>{
            cy.log(text)
            if(text != 0){
                cy.get('.cancel-event').click({force:true})
            cy.wait(100)
            cy.get('.btn-success').click({force:true})
                //dashboard.cancel_Created_Event_class()
                cy.get('#w2-success-0').should('contain', 'Event has been canceled.') 
            }
            else{
                cy.wait(100)
                 }
        })
    })

    it('Create and Cancel One on One', () =>{
        
        homePage.select_Login()
        commons.set_Guide_Credentials_One()
        homePage.submit_Credentials()

        cy.get(':nth-child(7) > .count').invoke('text').then((text)=>{
            cy.log(text)
            if(text != 0){
                cy.get('.cancel-event').click({force:true})
                cy.wait(100)
                cy.get('.btn-success').click({force:true})
                //dashboard.cancel_Created_Event_one_on_one()
                cy.get('#w2-success-0').should('contain', 'Event has been canceled.') 
            }
            else{
                //dashboard.add_NewEvent()
                dashboard.add_One_One()
                eventCreationPage.add_EventName('One-One')
                cy.wait(2000)
                eventCreationPage.add_Description('This is a Test for One on One')
                eventCreationPage.add_Custom_Number_Of_Days(2)
                eventCreationPage.custom_Start_Time(7)
                cy.get('#eventform-session_offering_id > :nth-child(1) > .custom-control-label').click({force:true})
                //cy.xpath('/html/body/div[2]/div[2]/div/div/div/form/div[10]/div/div/div[1]/label/input').click()
                //cy.xpath('/html/body/div[2]/div[2]/div/div/div/form/div[10]/div/div/div[2]/label/input').click()
                eventCreationPage.press_Add()
                cy.wait(1000)
                //cy.get('#w1-success-0').should('contain', 'Events have been created.')
                //cy.contains('Events have been created.').should('be.visible')
                cy.get('.cancel-event').click({force:true})
                cy.wait(100)
                cy.get('.btn-success').click({force:true})
                //dashboard.cancel_Created_Event_one_on_one()
                //cy.get('#w1-success-0').should('contain', 'Event has been canceled.') 
            }
        })    
    })
    
})