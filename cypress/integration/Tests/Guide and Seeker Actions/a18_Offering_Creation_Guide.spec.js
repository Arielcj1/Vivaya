/// <reference types="cypress"/>

import {Commons} from "../../../Commons/Common"
import {Dashboard} from "../../../page-objects/Dashboard"
import {GuidePage} from "../../../page-objects-admin/GuidePage"
import {HomePage} from "../../../page-objects/Home"
import {OfferingPage} from "../../../page-objects/OfferingPage"

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  })

  describe('Creation of offering from Guide Page',()=>{
    const commons = new Commons()
    const dashboard = new Dashboard()
    const guidepage = new GuidePage()
    const homepage = new HomePage()
    const offeringpage = new OfferingPage()

    it('Create offering from Guide page', ()=>{
        commons.open_Web_Site()
        homepage.select_Login()
        commons.set_Guide_Credentials_One()
        homepage.submit_Credentials()
        dashboard.select_Edit_My_Offerings()
        offeringpage.Request_add_offering()
        offeringpage.Select_Offering('Kula Yoga')
        offeringpage.type_Years_Teaching('3')
        offeringpage.check_Certified()
        //offeringpage.upload_File()
        offeringpage.name_of_Program('Kula')
        offeringpage.number_Of_Hours('2')
        cy.get('#w1-success-0').should('contain', 'Offer successfully submited')
    })

    it('Approve all pending Offerings', ()=>{
        commons.open_Admin_Site()
        commons.set_Admin_Credentials()
        guidepage.select_Guide_Option()
        guidepage.select_Guide_List()
        guidepage.find_EmailGuide('manurex@manu.com', '1')
        guidepage.check_Pending_and_Approve_Offerings()
        cy.get('#w1-success').should('contain', 'Guide offering successfully updated')
    })

    it('Delete the new Offering added',()=>{
        commons.open_Admin_Site()
        commons.set_Admin_Credentials()
        guidepage.select_Guide_Option()
        guidepage.select_Guide_List()
        guidepage.find_EmailGuide('manurex@manu.com', '1')
        cy.wait(1500)
        guidepage.delete_New_Offering('Kula Yoga')
        cy.get('#w1-success').should('contain', 'Offering successfully deleted')
    })
})