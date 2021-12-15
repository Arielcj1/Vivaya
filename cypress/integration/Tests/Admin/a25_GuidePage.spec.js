/// <reference types = "cypress"/>

import {Commons} from "../../../Commons/common"
import {GuidePage} from "../../../page-objects-admin/GuidePage"
import {HomePage} from "../../../page-objects/Home"
import {GuidesPage} from "../../../page-objects/GuidesPage"
import {SeekerCreation} from "../../../page-objects/SeekerCreation"
import {SeekerPage} from "../../../page-objects-admin/SeekerPage"

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
})

describe('Guide Page admin', ()=>{
    const commons = new Commons()
    const guidePage = new GuidePage()
    const home = new HomePage()
    const guideweb = new GuidesPage()
    const seekercreation = new SeekerCreation()
    const seekerpage = new SeekerPage()

    beforeEach(()=>{
        commons.open_Admin_Site()
        
    })
    
     it('Verify the elements within Guide page',()=>{
        commons.set_Admin_Credentials()
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
        commons.set_Admin_Credentials()
        guidePage.select_Guide_Option()
        guidePage.select_Guide_New()
        guidePage.type_About_Me('about me')
        guidePage.type_Mantra('mantra')
        guidePage.type_Philosiphy('philo')
        guidePage.type_Guide_Firstname('guide')
        guidePage.type_Guide_Lastname('test')
        guidePage.type_Guide_Email('callecarla354@gmail.com')
        guidePage.type_Guide_Number('+59172744457')
        guidePage.select_TimeZone('(UTC-04:00) La Paz')
        //guidePage.select_TimeZone('Bolivia')
        guidePage.select_Guide_State('Texas')
        guidePage.upload_guide_photo()
        //guidePage.upload_guide_Liability()
        //guidePage.type_Liability_Exp('05/05/2022')
        guidePage.type_Guide_Password('password')
        guidePage.type_Guide_ConfirmPassword('password')
        guidePage.type_Revenue_Percentage('65')
        //guidePage.check_Classes_Guide()
        guidePage.type_Price_OneOne('100{enter}')
        cy.get('#w2-success').should('contain', 'Guide successfully added')
    })

    it('Verify Offerings and Events page from Admin list', ()=>{
        commons.set_Admin_Credentials()
        guidePage.select_Guide_Option()
        guidePage.select_Guide_List()
        cy.get('#guidesearch-first_name').type('manu')
        cy.get('#guidesearch-last_name').type('rex')
        cy.get('.box-footer > .btn').click()
        cy.wait(2000)
        cy.get('#w1 > table > tbody > tr > td:nth-child(10) > a:nth-child(1) > span').click()
        //Verify elements
        cy.get('body > div.wrapper > div > section.content-header > h1').should('be.visible').contains('Guide: manu rex')
        cy.get(':nth-child(1) > .box-body > .box-title').should('be.visible').contains('Offerings')
        cy.get('tr > :nth-child(1) > a').should('be.visible').and('have.text', 'Offer')
        cy.get('tr > :nth-child(2) > a').should('be.visible').and('have.text', 'Years Teaching')
        cy.get('tr > :nth-child(3) > a').should('be.visible').and('have.text', 'Certified')
        cy.get('thead > tr > :nth-child(4) > a').should('be.visible').and('have.text', 'Certificate File')
        cy.get('tr > :nth-child(5) > a').should('be.visible').and('have.text', 'Name of Program')
        cy.get('tr > :nth-child(6) > a').should('be.visible').and('have.text', 'Number of Hours')
        cy.get('tr > :nth-child(7) > a').should('be.visible').and('have.text', 'Certification')
        cy.get('tr > :nth-child(8) > a').should('be.visible').and('have.text', 'Include in Profile?')
        cy.get('tr > :nth-child(9) > a').should('be.visible').and('have.text', 'Approved')
    })

    it('Verify events by using View list of Guide events button', ()=>{
        commons.set_Admin_Credentials()
        guidePage.select_Guide_Option()
        guidePage.select_Guide_List()
        cy.get('#guidesearch-first_name').type('manu')
        cy.get('#guidesearch-last_name').type('rex')
        cy.get('.box-footer > .btn').click()
        cy.wait(2000)
        cy.get('#w1 > table > tbody > tr > td:nth-child(10) > a:nth-child(1) > span').click()
        cy.get('.box-body > .btn').click()
        //Verify elemets within Event's guide page
        cy.get('body > div.wrapper > div > section.content-header > h1').should('be.visible').contains('Events for guide: manu rex')
        cy.get(':nth-child(1) > .form-group > .control-label').should('be.visible').and('have.text', 'Event Name')
        cy.get('#eventsearch-name').should('be.visible')
        cy.get(':nth-child(2) > .form-group > .control-label').should('be.visible').and('have.text', 'From Date')
        cy.get('#eventsearch-fromdate').should('be.visible')
        cy.get(':nth-child(3) > .form-group > .control-label').should('be.visible').and('have.text', 'To Date')
        cy.get('#eventsearch-todate').should('be.visible')
        cy.get(':nth-child(4) > .form-group > .control-label').should('be.visible').and('have.text', 'Status')
        cy.get('#eventsearch-status').should('be.visible')
        cy.get(':nth-child(5) > .form-group > .control-label').should('be.visible').and('have.text', 'Zoom Status')
        cy.get('#eventsearch-zoom_status').should('be.visible')
        cy.get('.box-footer > .btn').should('be.visible').and('have.text', 'Search')

        cy.get('tr > :nth-child(1) > a').should('be.visible').and('have.text', 'ID')
        cy.get('tr > :nth-child(2) > a').should('be.visible').and('have.text', 'Event Name')
        cy.get('thead > tr > :nth-child(3)').should('be.visible').and('have.text', 'Record')
        cy.get('thead > tr > :nth-child(4)').should('contain', 'Switchboard')
        cy.get('thead > tr > :nth-child(5)').should('be.visible').and('have.text', 'Guide Name')
        cy.get('tr > :nth-child(6) > a').should('be.visible').and('have.text', 'Start Date')
        cy.get('tr > :nth-child(7) > a').should('be.visible').and('have.text', 'Status')
        cy.get('tr > :nth-child(8) > a').should('be.visible').and('have.text', 'Zoom Status')
    })

    it('Guide Edition from admin', ()=>{
        commons.set_Admin_Credentials()
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

    it('Create, Edit offering', ()=>{
        commons.set_Admin_Credentials()
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
         })

    it('Delete Offering', ()=>{
        commons.set_Admin_Credentials()
        guidePage.select_Guide_Option()
        guidePage.select_Guide_List()
        guidePage.find_EmailGuide('callecarla354@gmail.com', '1') //num 1 for offering
         
        guidePage.offer_Options('2') //num 2 for delete
        cy.get('#w1-success').should('contain', 'Offering successfully deleted')

               
    })

    it('Verify that Guide changes to Seeker', ()=>{
        commons.open_Web_Site()
        home.select_Login()
        home.fill_Email('callecarla354@gmail.com')
        cy.wait(1500)
        home.fill_Password('password')
        home.submit_Credentials()
        cy.wait(2000)
        guideweb.select_close_modal()
        guideweb.select_create_seeker_account()
        guideweb.fill_account_seeker('callecarla2@gmail.com')
        seekercreation.type_Card_Name('Auto Mation')
        seekercreation.type_Card_Number('4242424242424242')
        seekercreation.type_Card_ExpDate('0225')
        seekercreation.type_Security_Code('123')
        seekercreation.type_ZipCode('1234')
        //Change to Seeker
        cy.get('.wrap > :nth-child(3) > .alert').should('be.visible')
        guideweb.Select_Switch_to_seeker()
        cy.wait(1000)
        cy.get(':nth-child(1) > .dashboard-box > h3').should('be.visible')
        //Change to Guide
        guideweb.Select_Switch_to_Guide()
        cy.get('strong').should('be.visible')
               
    })


    
    it('Guide elimination', ()=>{
        commons.set_Admin_Credentials()
        guidePage.select_Guide_Option()
        guidePage.select_Guide_List()
        guidePage.find_EmailGuide('callecarla354@gmail.com', '3') //num 3 for elimination
        cy.get('#w2-success').should('contain', 'Guide successfully deleted')
    })

     
    it('Seeker elimination', ()=>{
        commons.set_Admin_Credentials()
        seekerpage.select_Seeker_Option()
        seekerpage.select_Seeker_List()
        seekerpage.type_Seeker_Email('callecarla2@gmail.com')
        seekerpage.select_Seeker_options('5') //num 5 for elimination 
        cy.get('#w3-success').should('contain', 'Seeker removed completely successful')
    })

   
})
