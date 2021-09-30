/// <reference types = "cypress"/>

import {Commons} from "../../../Commons/common"
import {SeekerPage} from "../../../page-objects-admin/SeekerPage"
import {HomePage} from "../../../page-objects/Home"
import {SeekerCreation} from "../../../page-objects/SeekerCreation"

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
})

describe('Seeker Page admin', ()=>{
    const commons = new Commons()
    const seekerpage = new SeekerPage()
    const homePage = new HomePage()
    const seekerCreation = new SeekerCreation()
    beforeEach(()=>{
        commons.open_Admin_Site()
        commons.set_Admin_Credentials()
    })

    it('Verify elements within Seeker page',()=>{
        seekerpage.select_Seeker_Option()
        seekerpage.select_Seeker_List()
        //Verify Search seekers elements
        cy.get('h1').should('contain', 'Seekers')
        cy.get(':nth-child(1) > :nth-child(1) > .form-group > .control-label').should('have.text','First name')
        cy.get('#seekersearch-first_name').should('be.visible')
        cy.get(':nth-child(1) > :nth-child(2) > .form-group > .control-label').should('have.text', 'Last name')
        cy.get('#seekersearch-last_name').should('be.visible')
        cy.get(':nth-child(3) > .form-group > .control-label').should('have.text','Email')
        cy.get('#seekersearch-email').should('be.visible')
        cy.get(':nth-child(4) > .form-group > .control-label').should('have.text','Status')
        cy.get('#seekersearch-status').should('be.visible')
        cy.get(':nth-child(2) > :nth-child(1) > .form-group > .control-label').should('have.text','Corporate')
        cy.get('#seekersearch-corporate').should('be.visible')
        cy.get(':nth-child(2) > :nth-child(2) > .form-group > .control-label').should('have.text','Is Corporate')
        cy.get('#seekersearch-iscorporate').should('be.visible')
        cy.get('.box-footer > .btn').should('be.visible').and('have.text', 'Search')

        //Verify List of Seekers Elements
        cy.get('.box > :nth-child(3) > :nth-child(2)').should('be.visible').and('have.text', 'List')
        cy.get('[style="width:50px;"]').should('be.visible').and('have.text', 'ID')
        cy.get('tr > :nth-child(2) > a').should('be.visible').and('have.text', 'First Name')
        cy.get('tr > :nth-child(3) > a').should('be.visible').and('have.text', 'Last Name')
        cy.get('tr > :nth-child(4) > a').should('be.visible').and('have.text', 'Email')
        cy.get('tr > :nth-child(5) > a').should('contain', 'Registration Date')
        cy.get('thead > tr > :nth-child(6)').should('contain','Current Membership')
        cy.get('tr > :nth-child(7) > a').should('be.visible').and('have.text', 'Auto Renewal')
        cy.get('[style="text-align:center;width:140px;"]').should('contain','Auto Renewal Canceled')
        cy.get('[style="text-align:center;width:160px;"]').should('be.visible').and('have.text', 'Free Trial Registration Status')
        cy.get('tr > :nth-child(10) > a').should('be.visible').and('have.text', 'Admin Status')
        cy.get('thead > tr > :nth-child(11)').should('contain', 'Corporate')
    })

    it('Seeker creation from admin',()=>{
        seekerpage.select_Seeker_Option()
        seekerpage.select_Seeker_New()
        seekerpage.type_Seeker_FirstName('SeekerAuto')
        seekerpage.type_Seeker_LastName('Mation')
        seekerpage.type_New_Seeker_Email('quiroga.rosasrafael@gmail.com')
        cy.get('#user-phone_number').type('+59176405837')
        seekerpage.select_Seeker_TimeZone('(UTC-04:00) La Paz')
        seekerpage.type_Seeker_Password('password')
        cy.get('#w3-success').should('contain', 'Seeker successfully added')
    })

    it('Adding card to the New Seeker', ()=>{
        commons.open_Web_Site()
        homePage.select_Login()
        commons.set_Generic_Seeker('quiroga.rosasrafael@gmail.com', 'password')
        seekerCreation.type_Card_Name('Auto Mation')
        seekerCreation.type_Card_Number('4242424242424242')
        seekerCreation.type_Card_ExpDate('0225')
        seekerCreation.type_Security_Code('123')
        seekerCreation.type_ZipCode('1234')
        cy.get('.seeker-registration-content > h2').should('contain', 'Thank You')
    })

    it('Verify Membership selected on seeker page', ()=>{
        commons.open_Web_Site()
        homePage.select_Login()
        commons.set_Generic_Seeker('quiroga.rosasrafael@gmail.com', 'password')
        cy.get(':nth-child(1) > .dashboard-box > div > :nth-child(2)').should('contain', 'Days Until Start Of Your Monthly Unlimited Membership')
    })

    it('Seeker edition from admin', ()=>{
        seekerpage.select_Seeker_Option()
        seekerpage.select_Seeker_List()
        seekerpage.type_Seeker_Email('quiroga.rosasrafael@gmail.com')
        seekerpage.select_Seeker_options('2') //num 2 for edition
        seekerpage.type_Seeker_FirstName('NameEdited')
        seekerpage.type_Seeker_LastName('MationEdited')
        seekerpage.type_Seeker_Password('password2')
        cy.get('#w3-success').should('contain', 'Seeker successfully updated')
    })

    it('Seeker elimination from admin',()=>{
        seekerpage.select_Seeker_Option()
        seekerpage.select_Seeker_List()
        seekerpage.type_Seeker_Email('quiroga.rosasrafael@gmail.com')
        seekerpage.select_Seeker_options('5') //num 5 for elimination 
        cy.get('#w3-success').should('contain', 'Seeker removed completely successful')
    })

    it('Adding subscription expired User from admin',()=>{
        seekerpage.select_Seeker_Option()
        seekerpage.select_Seeker_List()
        seekerpage.type_Seeker_Email('milton.paredes.mp@gmail.com')
        seekerpage.select_Seeker_options('3') //num 3 for subcriptions
        seekerpage.button_New_Suscription()
        seekerpage.select_Membership('5 PACK ($55.00)')
        seekerpage.button_add_Membership()
        cy.contains('Subscription successfully added').should('contain', 'Subscription successfully added')
    })
})

describe('Verify creation and Refund it', ()=>{
    const commons = new Commons()
    const homepage = new HomePage()
    const seekerPage = new SeekerPage()
    it('Verify subscription added from web page',()=>{
        commons.open_Web_Site()
        homepage.select_Login()
        commons.set_Seeker_Credentials_Two()
        homepage.submit_Credentials()
        cy.contains('5 PACK').should('contain', '5 PACK')
    })
    it('Refund new subscription', ()=>{
        commons.open_Admin_Site()
        commons.set_Admin_Credentials()
        seekerPage.select_Seeker_Option()
        seekerPage.select_Seeker_List()
        seekerPage.type_Seeker_Email('milton.paredes.mp@gmail.com')
        seekerPage.select_Seeker_options('3')
        seekerPage.refund_Button()
        cy.xpath('//*[@id="w0"]/table/tbody/tr[1]/td[7]/label').should('contain', 'Refunded')
    })
})