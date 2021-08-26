/// <reference types = "cypress"/>

import {Commons} from "../../../Commons/common"
import {OfferingsPage} from "../../../page-objects-admin/OfferingsPage"
import {Dashboard} from "../../../page-objects/Dashboard"
import {HomePage} from "../../../page-objects/Home"
import {OfferingPage} from "../../../page-objects/OfferingPage"

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
})

describe('Negative scenarios for Offerings', ()=>{
    const commons = new Commons()
    const offeringsPage = new OfferingsPage()
    const dashboard = new Dashboard()
    const homepage = new HomePage()
    const offeringpage = new OfferingPage()

    beforeEach(()=>{
        
    })


    it('Verify validation of the fields the Offerings from Admin', ()=>{
        commons.open_Admin_Site()
        commons.set_Admin_Credentials()
        offeringsPage.select_Offering_Option()
        offeringsPage.select_Offering_New()
        offeringsPage.save_New_Offer()
        cy.get('.field-offer-name > .help-block').should('contain','Name cannot be blank.')
        cy.get('.field-offer-slug > .help-block').should('contain','Slug cannot be blank.')

    })

    it('Verify validation of the fields the Offerings from Web Site', ()=>{
        commons.open_Web_Site()
        homepage.select_Login()
        commons.set_Guide_Credentials_One()
        homepage.submit_Credentials()
        dashboard.select_Edit_My_Offerings()
        offeringpage.Request_add_offering()
        cy.get(':nth-child(7) > .btn').click({force:true})
        //error
        cy.get('.error-summary > ul > :nth-child(1)').should('contain','Offer cannot be blank.')
        cy.get('.error-summary > ul > :nth-child(2)').should('contain','Years Teaching cannot be blank.')
        //fields
        cy.get('.col-sm-5 > .form-group > .col-sm-12 > .help-block').should('contain','Offer cannot be blank.')
        cy.get('.col-sm-4 > .form-group > .col-sm-12 > .help-block').should('contain','Years Teaching cannot be blank.')


    })
})