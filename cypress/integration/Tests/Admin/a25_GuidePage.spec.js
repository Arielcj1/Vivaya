/// <reference types = "cypress"/>

import {Commons} from "../../../Commons/common"
import {GuidePage} from "../../../page-objects-admin/GuidePage"

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
})

describe('Guide Page admin', ()=>{
    const commons = new Commons()
    const guidePage = new GuidePage()

    beforeEach(()=>{
        commons.open_Admin_Site()
        commons.set_Admin_Credentials()
    })
    
     it('Verify the elements within Guide page',()=>{
        guidePage.select_Guide_Option()
        guidePage.select_Guide_List()
        //Verify all elements within the page
        cy.get('h1').should('contain', 'Guides')
        cy.get(':nth-child(1) > :nth-child(1) > .form-group > .control-label').should('have.text','First Name')
        cy.get('#guidesearch-first_name').should('be.visible')
        cy.get(':nth-child(1) > :nth-child(2) > .form-group > .control-label').should('have.text','Last Name')
        cy.get('#guidesearch-last_name').should('be.visible')
        cy.get(':nth-child(1) > :nth-child(3) > .form-group > .control-label').should('have.text','Email')
        cy.get('#guidesearch-email').should('be.visible')
        cy.get(':nth-child(4) > .form-group > .control-label').should('have.text','Status')
        cy.get('#guidesearch-status').should('be.visible')
        cy.get(':nth-child(2) > :nth-child(1) > .form-group > .control-label').should('have.text','Wizard Completed')
        cy.get('#guidesearch-wizard_completed').should('be.visible')
        cy.get(':nth-child(2) > :nth-child(2) > .form-group > .control-label').should('have.text','Show On Homepage')
        cy.get('#guidesearch-show_on_homepage').should('be.visible')
        cy.get(':nth-child(2) > :nth-child(3) > .form-group > .control-label').should('have.text','Approved as Guide')
        cy.get('#guidesearch-approved').should('be.visible')
        cy.get('.box-footer > .btn').should('be.visible').and('have.text', 'Search')
        cy.get('body > div > div > section.content > div > div > div > div > div:nth-child(3) > h3').should('have.text','List')
        cy.get('[style="width:50px;"] > a').should('be.visible').and('have.text', 'User ID')
        cy.get('tr > :nth-child(2) > a').should('be.visible').and('have.text', 'First Name')
        cy.get('tr > :nth-child(3) > a').should('be.visible').and('have.text', 'Last Name')
        cy.get('tr > :nth-child(4) > a').should('be.visible').and('have.text', 'Email')
        cy.get('tr > :nth-child(5) > a').should('be.visible').and('have.text', 'Registration Date')
        cy.get('tr > :nth-child(6) > a').should('be.visible').and('have.text', 'Show On Homepage')
        cy.get('tr > :nth-child(7) > a').should('be.visible').and('have.text', 'Wizard Completed')
        cy.get('tr > :nth-child(8) > a').should('be.visible').and('have.text', 'Approved as Guide')
        cy.get('thead > tr > :nth-child(9)').should('be.visible').and('have.text', 'Status')
    })

    it('Guide creation from admin', ()=>{
        guidePage.select_Guide_Option()
        guidePage.select_Guide_New()
        guidePage.type_About_Me('about me')
        guidePage.type_Mantra('mantra')
        guidePage.type_Philosiphy('philo')
        guidePage.type_Guide_Firstname('guide')
        guidePage.type_Guide_Lastname('test')
        guidePage.type_Guide_Email('callecarla354@gmail.com')
        guidePage.type_Guide_Number('+59172744457')
        guidePage.select_TimeZone('(UTC-04:00) Georgetown, La Paz, Manaus, San Juan')
        //guidePage.select_TimeZone('Bolivia')
        guidePage.select_Guide_State('Texas')
        guidePage.upload_guide_photo()
        guidePage.upload_guide_Liability()
        guidePage.type_Liability_Exp('05/05/2022')
        guidePage.type_Guide_Password('password')
        guidePage.type_Guide_ConfirmPassword('password')
        guidePage.type_Revenue_Percentage('65')
        guidePage.check_Classes_Guide()
        guidePage.type_Price_OneOne('100{enter}')
        cy.get('#w2-success').should('contain', 'Guide successfully added')
    })

    it('Guide Edition from admin', ()=>{
        guidePage.select_Guide_Option()
        guidePage.select_Guide_List()
        guidePage.find_EmailGuide('callecarla354@gmail.com', '2') //num 2 for edition
        guidePage.type_About_Me('About me automation edited')
        guidePage.type_Mantra('Mantra automation edited')
        guidePage.type_Guide_Firstname('NameAut')
        guidePage.type_Guide_Lastname('LasrNameAut')
        guidePage.type_Philosiphy('Philosophy automation edited')
        guidePage.type_Revenue_Percentage('66')
        guidePage.type_Price_OneOne('105{enter}')
        cy.get('#w2-success').should('contain', 'Guide successfully updated')
    })

    it('Create, Edit and delete offering', ()=>{
        guidePage.select_Guide_Option()
        guidePage.select_Guide_List()
        guidePage.find_EmailGuide('callecarla354@gmail.com', '1') //num 1 for offering
        guidePage.add_New_Offering()
        guidePage.select_Guide_Offer('Kula Yoga')
        guidePage.type_Guide_YearsTeaching('3{enter}')
        cy.get('#w1-success').should('contain', 'Guide Offering successfully added')
        guidePage.offer_Options('1') //num 1 for edition
        guidePage.select_Guide_Offer('Yoga Nidra')
        guidePage.type_Guide_YearsTeaching('5{enter}')
        cy.get('#w1-success').should('contain', 'Guide offering successfully updated')
        guidePage.offer_Options('2') //num 2 for delete
        cy.get('#w1-success').should('contain', 'Offering successfully deleted')
    })

    it('Guide elimination', ()=>{
        guidePage.select_Guide_Option()
        guidePage.select_Guide_List()
        guidePage.find_EmailGuide('callecarla354@gmail.com', '3') //num 3 for elimination
        cy.get('#w2-success').should('contain', 'Guide successfully deleted')
    })
})
