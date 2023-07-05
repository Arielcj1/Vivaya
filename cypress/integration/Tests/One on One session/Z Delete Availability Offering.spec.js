/// <reference types="cypress"/>

import { HomePage } from "../../../page-objects/Home";
import {Commons} from "../../../Commons/Common"
import { Dashboard } from "../../../page-objects/Dashboard";
import { OneoOneAvailability } from "../../../page-objects/OneoOneAvailability";
import { OneoOneOfferingPage } from "../../../page-objects/OneoOneOfferingPage";
import { EventsPage } from "../../../page-objects-admin/EventsPage";

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

describe('Booking 1-1 session with Guest', ()=>{
    const commons = new Commons()
    const homePage = new HomePage()
    const dashboard = new Dashboard()
    const oneoneAvailability = new OneoOneAvailability()
    const oneoneOfferingPage = new OneoOneOfferingPage()
    const eventsPage = new EventsPage()

    beforeEach(()=>{
        commons.open_Web_Site()
    })

    it.skip('Delete 1-1 Session events from Admin', () => {
        commons.open_Admin_Site()
        commons.set_Admin_Credentials()

        eventsPage.select_Events_Option()
        eventsPage.select_Events_List()
        cy.get('#eventsearch-guidename').type('manu')
        cy.get('#eventsearch-name').type('1-1 Session')
        cy.get('.box-footer > .btn').click()
        cy.wait(2000)
        cy.xpath('/html/body/div[1]/div/section[2]/div/div/div/div/div[3]/div/table/tbody/tr/td[10]/a[3]/span').click()
        cy.get('#w2-success').should('contain','Event has been canceled')
    })

    it.skip('Delete Guide Availability time', () => {
        homePage.select_Login()
        commons.set_Guide_Credentials_One()
        homePage.submit_Credentials()
        cy.wait(1000)
        dashboard.select_Set_1o1_Availability()
        //cy.get(':nth-child(3) > :nth-child(5) > .btn').click()
        cy.get('h1.text-center').should('contain','Calendar')
        cy.wait(1000)
        oneoneAvailability.click_ADD_Availability()
        cy.get('h2.text-center').should('contain', 'Set 1-1 Availability')

        oneoneAvailability.mark_Checkbox_Days()
        cy.wait(1000)
        oneoneAvailability.click_Set_Availability()
        cy.wait(1000)
        cy.visit('https://stage.vivayalive.com/dashboard')
        dashboard.select_Set_1o1_Availability()
        //cy.get(':nth-child(3) > :nth-child(5) > .btn').click()
        cy.get('.button-wrapper > .btn').should('contain','+ ADD AVAILABILITY')
        
    })

    it('Delete 1-1 Offerings', () => {
        homePage.select_Login()
        commons.set_Guide_Credentials_One()
        homePage.submit_Credentials()

        cy.wait(1000)
        dashboard.select_Set_1o1_Offering()
        cy.get('h1.text-center').should('contain', '1-1 Offerings')
        cy.wait(1000)
        cy.get(':nth-child(1) > .panel > :nth-child(1) > .text-left > .btn-remove').click()
        cy.get('.btn-success').click()
        cy.get('#w3-success-0').should('contain', 'Price and duration of the offer successfully removed')
        cy.wait(1000)
        cy.get(':nth-child(1) > .panel > .row > .text-left > .btn-remove').click()
        cy.get('.btn-success').click()
        cy.get('#w3-success-0').should('contain', 'Price and duration of the offer successfully removed')
        cy.wait(1000)
        oneoneOfferingPage.click_On_Remove()
        cy.get('#w3-success-0').should('contain', 'Price and duration of the offer successfully removed')
        cy.wait(2000)
    })

    
})