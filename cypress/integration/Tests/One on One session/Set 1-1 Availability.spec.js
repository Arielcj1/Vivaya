/// <reference types="cypress"/>

import { HomePage } from "../../../page-objects/Home";
import {Dashboard} from "../../../page-objects/Dashboard";
import {Commons} from "../../../Commons/Common"
import { OneoOneOfferingPage } from "../../../page-objects/OneoOneOfferingPage";
import { OneoOneAvailability } from "../../../page-objects/OneoOneAvailability";

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });


describe('SET 1-1 Availability', ()=>{
    const commons = new Commons()
    const homePage = new HomePage()
    const dashboard = new Dashboard()
    const oneoneAvailability = new OneoOneAvailability()

    beforeEach(()=>{
        commons.open_Web_Site()
        homePage.select_Login()
        commons.set_Guide_Credentials_One()
        homePage.submit_Credentials()
    })

    it('Verify that pressing the "SET 1-1 AVAILABILITY" button redirects us to the calendar view', () => {
        cy.get(':nth-child(5) > .btn').should('contain', 'Set 1-1 Availability')
        
        dashboard.select_Set_1o1_Availability()
        cy.get('h1.text-center').should('contain','Calendar')
        cy.wait(1000)
    })

    it('Verify that pressing "+ADD AVAILABILITY" displays the Set 1-1 Availability popup.', () => {
        dashboard.select_Set_1o1_Availability()
        cy.get('h1.text-center').should('contain','Calendar')
        cy.wait(1000)
        oneoneAvailability.click_ADD_Availability()
        cy.get('h2.text-center').should('contain', 'Set 1-1 Availability')
        cy.wait(3000)

        oneoneAvailability.mark_Checkbox_Days()
        oneoneAvailability.set_Time_Availability()
        oneoneAvailability.click_Set_Availability()
        cy.get('#w3-success-0').should('contain', 'Availabilities successfully saved.')
        
    })

    it.skip('Delete Availability days', () => {
        dashboard.select_Set_1o1_Availability()
        cy.get('h1.text-center').should('contain','Calendar')
        cy.wait(1000)
        oneoneAvailability.click_ADD_Availability()
        cy.get('h2.text-center').should('contain', 'Set 1-1 Availability')

        oneoneAvailability.mark_Checkbox_Days()
    })
})