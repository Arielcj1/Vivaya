/// <reference types="cypress"/>

import { HomePage } from "../../../page-objects/Home";
import {Dashboard} from "../../../page-objects/Dashboard";
import {Commons} from "../../../Commons/Common"
import { OneoOneOfferingPage } from "../../../page-objects/OneoOneOfferingPage";

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });


describe('SET 1-1 Offerings', ()=>{
    const commons = new Commons()
    const homePage = new HomePage()
    const dashboard = new Dashboard()
    const oneoneOfferingPage = new OneoOneOfferingPage()


    beforeEach(()=>{
        commons.open_Web_Site()
        homePage.select_Login()
        commons.set_Guide_Credentials_One()
        homePage.submit_Credentials()
    })

    it.skip('Add a new offer and then delete it', () => {
        cy.wait(1000)
        dashboard.select_Set_1o1_Offering()
        cy.get('h1.text-center').should('contain', '1-1 Offerings')
        oneoneOfferingPage.click_Add_Another()
        oneoneOfferingPage.select_Offer('Shamanic Healing')
        oneoneOfferingPage.set_Duration('3')       //three clicks for 60 min
        oneoneOfferingPage.set_Price('60')
        oneoneOfferingPage.click_On_Save_Button()
        cy.get('#w3-success-0').should('contain','Offer price and duration successfully saved')
        cy.wait(2000)
        //Remove offering 
        oneoneOfferingPage.click_On_Remove()
        cy.get('#w3-success-0').should('contain', 'Price and duration of the offer successfully removed')
        cy.wait(2000)
    })

    it.skip('Verify that you can select offering, add duration and price', () =>{
        cy.wait(1000)
        dashboard.select_Set_1o1_Offering()
        cy.get('h1.text-center').should('contain', '1-1 Offerings')
        oneoneOfferingPage.click_Add_Another()
        oneoneOfferingPage.verify_labels_OfferingPage()
        oneoneOfferingPage.select_Offer('Power Yoga')
        oneoneOfferingPage.set_Duration('2')   //two clicks for 45 min
 
        oneoneOfferingPage.set_Price('40')
        oneoneOfferingPage.click_On_Save_Button()
        cy.get('#w3-success-0').should('contain','Offer price and duration successfully saved')

    })

    it.skip('Verify that offering can be repeated and add other offerings', () => {
        cy.wait(1000)
        dashboard.select_Set_1o1_Offering()
        cy.get('h1.text-center').should('contain', '1-1 Offerings')
        oneoneOfferingPage.click_Add_Another()
        oneoneOfferingPage.select_Offer('Power Yoga')
        oneoneOfferingPage.set_Duration('3')       //three clicks for 60 min
        oneoneOfferingPage.set_Price('60')
        oneoneOfferingPage.click_On_Save_Button()
        cy.get('#w3-success-0').should('contain','Offer price and duration successfully saved')
        cy.wait(2000)
        //Add another offering
        oneoneOfferingPage.click_Add_Another()
        oneoneOfferingPage.select_Offer('Reiki')
        oneoneOfferingPage.set_Duration('3')       //three clicks for 60 min
        oneoneOfferingPage.set_Price('60')
        oneoneOfferingPage.click_On_Save_Button()
        cy.get('#w3-success-0').should('contain','Offer price and duration successfully saved')
        cy.wait(4000)
    })


    it('Verify that to go to the 1-1 Offerings page you can go to the Edit Profile and the 1-1 Offerings tab.', () => {
        dashboard.select_Edit_Profile()
        cy.get('h1').should('contain', 'Account Information')
        cy.wait(1500)
        oneoneOfferingPage.select_1o1_Offering_Tab()
        cy.get('h1.text-center').should('contain', '1-1 Offerings')
        cy.wait(1500)
    })

    it('', () => {
        
    })

})