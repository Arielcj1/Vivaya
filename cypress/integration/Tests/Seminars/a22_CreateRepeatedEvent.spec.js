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
        homePage.select_Login()
        commons.set_Guide_Credentials_One()
        homePage.submit_Credentials()
        
    })

    /*after(()=>{
        homePage.logout_Account()
    
    })*/
    it('Create a recurrent Daily Class', () => { 
        cy.wait(3000) 
        dashboard.add_NewEvent()
        dashboard.add_Class()
        eventCreationPage.add_EventName('Class1')
        cy.wait(2000)
        eventCreationPage.add_Description('This is a Test Class')
        eventCreationPage.select_Repeater_Checkbox()
        eventCreationPage.add_Custom_Start_Date(3)
        eventCreationPage.add_Custom_End_Date(10)
        eventCreationPage.select_Repeater_Daily()
        eventCreationPage.press_Add()
        cy.wait(5000)
        //dashboard.cancel_Several_Events_AtOnce()
    
       
    });

    it.skip('Create a recurrent Weekly Class', () => { 
        cy.wait(3000)  
        dashboard.add_NewEvent()
        dashboard.add_Class()
        eventCreationPage.add_EventName('Class1')
        cy.wait(2000)
        eventCreationPage.add_Description('This is a Test Class')
        eventCreationPage.select_Repeater_Checkbox()
        eventCreationPage.add_Custom_Start_Date(3)
        eventCreationPage.add_Custom_End_Date(10)
        eventCreationPage.select_Repeater_Weekly()
        eventCreationPage.press_Add()
        dashboard.cancel_Several_Events_AtOnce()
       
    });

})