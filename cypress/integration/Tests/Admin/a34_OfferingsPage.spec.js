/// <reference types = "cypress"/>

import {Commons} from "../../../Commons/common"
import {OfferingsPage} from "../../../page-objects-admin/OfferingsPage"

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
})

describe('Offering page', ()=>{
    const commons = new Commons()
    const offeringsPage = new OfferingsPage()

    beforeEach(()=>{
        commons.open_Admin_Site()
        commons.set_Admin_Credentials()
    })

    it('Verify elements within Offering page',()=>{
        offeringsPage.select_Offering_Option()
        offeringsPage.select_Offering_List()
        cy.get('h1').should('contain', 'Offerings')
        cy.get('.box-tools > .btn').should('contain', 'Add new')
    })

    it('Add a new  Parent Offer', ()=>{
        offeringsPage.select_Offering_Option()
        offeringsPage.select_Offering_New()
        offeringsPage.type_Offer_name('Parent')
        offeringsPage.type_Offer_slug('Automation')
        offeringsPage.type_Offer_Content('This is an automation test')
        offeringsPage.check_Is_Parent()
        offeringsPage.upload_Offer_Picture('guide.jpg')
        offeringsPage.type_Meta_Title('Auto Yoga')
        offeringsPage.type_Meta_Description('This is an automation meta description')
        offeringsPage.save_New_Offer()
        cy.get('#w1-success').should('contain', 'Offer has been created.')
    })

    it('View the Parent offer created', ()=>{
        offeringsPage.select_Offering_Option()
        offeringsPage.select_Offering_List()
        offeringsPage.search_The_Last_Offer_Created()// Check wheter we have mora than 10 records
        offeringsPage.select_The_Last_Offer_Created('1') // num 1 for View
        cy.get('.box-header > .box-title').should('contain', 'Parent')
    })

    it('Edit a Parent offer', ()=>{
        offeringsPage.select_Offering_Option()
        offeringsPage.select_Offering_List()
        offeringsPage.search_The_Last_Offer_Created()// Check wheter we have mora than 10 records
        offeringsPage.select_The_Last_Offer_Created('2') // num 2 for edition
        offeringsPage.type_Offer_Content('This is an automation test EDITED')
        offeringsPage.upload_Offer_Picture('blog.jpg')
        offeringsPage.type_Meta_Title('Auto Yoga EDITED')
        offeringsPage.type_Meta_Description('This is an automation meta description EDITED')
        offeringsPage.save_New_Offer()
        cy.get('#w1-success').should('contain', 'Offer has been updated.')
    })

    it('Add Many new records of "Child Offer"',()=>{
        offeringsPage.select_Offering_Option()
        cy.wait(1000)
        for(var e=1; e<=5; e++){
            offeringsPage.select_Offering_New()
            offeringsPage.type_Offer_name('Child'+e)
            offeringsPage.type_Offer_slug('Childauto'+e)
            offeringsPage.type_Offer_Content('This is an automation test for a child offer')
            offeringsPage.select_Parent_Offer('Parent')
            offeringsPage.upload_Offer_Picture('guide.jpg')
            offeringsPage.type_Meta_Title('Auto Yoga'+e)
            offeringsPage.type_Meta_Description('This is an automation meta description')
            cy.wait(1000)
            offeringsPage.save_New_Offer()
            cy.get('#w1-success').should('contain', 'Offer has been created.')
        }
    })

    it('View a Child offer', ()=>{
        cy.wait(1000)
        offeringsPage.select_Offering_Option()
        offeringsPage.select_Offering_List()
        offeringsPage.search_The_Last_Offer_Created()// Check wheter we have mora than 10 records
        offeringsPage.select_The_Last_Offer_Created('1') // num 1 for view
        offeringsPage.options_For_Child_Offer('1') // 1 for view, always catch the first child
        cy.get('.box-title').should('contain', 'Child1')
    })

    it('Edit a Child offer', ()=>{
        cy.wait(1000)
        offeringsPage.select_Offering_Option()
        offeringsPage.select_Offering_List()
        offeringsPage.search_The_Last_Offer_Created()// Check wheter we have mora than 10 records
        offeringsPage.select_The_Last_Offer_Created('1') // num 1 for view
        offeringsPage.options_For_Child_Offer('2') // 2 for edition, always catch the first child
        offeringsPage.type_Offer_Content('This is an automation test EDITED')
        offeringsPage.upload_Offer_Picture('blog.jpg')
        offeringsPage.type_Meta_Title('Auto Yoga child EDITED')
        offeringsPage.type_Meta_Description('This is an automation meta description EDITED')
        offeringsPage.save_New_Offer()
        cy.get('#w1-success').should('contain', 'Offer has been updated.')
    })

    it('Delete all records of "Child offer"', ()=>{
        offeringsPage.select_Offering_Option()
        offeringsPage.select_Offering_List()
        for(var e=1; e<=5; e++){
            offeringsPage.search_The_Last_Offer_Created()// Check wheter we have mora than 10 records
            offeringsPage.select_The_Last_Offer_Created('1') // num 1 for view
            offeringsPage.options_For_Child_Offer('3') // 1 for delete, always catch the first child
            cy.get('#w1-success').should('contain', 'Offer successfully deleted')
        }
    })

    it('Delete the Parent Offer', ()=>{
        offeringsPage.select_Offering_Option()
        offeringsPage.select_Offering_List()
        offeringsPage.search_The_Last_Offer_Created()// Check wheter we have mora than 10 records
        offeringsPage.select_The_Last_Offer_Created('3') // num 3 for elimination
        cy.get('#w1-success').should('contain', 'Offer successfully deleted')
    })
})