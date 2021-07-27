/// <reference types = "cypress"/>

import {Commons} from "../../../Commons/common"
import {Dashboard} from "../../../page-objects/Dashboard";
import {SeekerCreation} from "../../../page-objects/SeekerCreation"
import {HomePage} from "../../../page-objects/Home"
import {SeekerPage} from "../../../page-objects-admin/SeekerPage"
import {MembershipPage} from "../../../page-objects/MembershipPage"

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
})

describe('Seeker creation, Edition from Vivaya page', ()=>{
    const commons = new Commons()
    const seekerCreation = new SeekerCreation()
    const homePage = new HomePage()
    const seekerpage = new SeekerPage()
    const dashboard = new Dashboard()
    const membershipPage = new MembershipPage()

    beforeEach(()=>{
        commons.open_Web_Site()
    })

    it('Seeker creation from web page', ()=>{
        seekerCreation.select_Free_trial_option()
        seekerCreation.type_First_Name('Auto')
        seekerCreation.type_Last_Name('Mation')
        seekerCreation.type_Seeker_Email('userautorenewal@gmail.com')
        seekerCreation.marking_Checkbox()
        seekerCreation.type_Seeker_Password('password')
        seekerCreation.type_Card_Name('Auto Mation')
        seekerCreation.type_Card_Number('4242424242424242')
        seekerCreation.type_Card_ExpDate('0225')
        seekerCreation.type_Security_Code('123')
        seekerCreation.type_ZipCode('1234')
        cy.get('.seeker-registration-content > h2').should('contain', 'Thank You')
    })

    it('Verify Membership selected on seeker page', ()=>{
        homePage.select_Login()
        commons.set_Generic_Seeker('userautorenewal@gmail.com', 'password')
        cy.get(':nth-child(1) > .dashboard-box > div > :nth-child(2)').should('contain', 'Days Until Start Of Your Monthly Unlimited Membership')
    })

    it('Verify Cancel FreeTrial', ()=>{
        homePage.select_Login()
        commons.set_Generic_Seeker('userautorenewal@gmail.com', 'password')
        dashboard.cancel_autorenewal()
        cy.get('#w0-success-0').should('include.text','Your Monthly Unlimited Membership has been cancelled')
        //cy.get('#w0-success-0').should('contain','Your Monthly Unlimited Membership has been cancelled. You can continue participating in all classes of your Free 14 Day Trial')
                
    })

    it('Verify buy of Membership', ()=>{
        homePage.select_Login()
        commons.set_Generic_Seeker('userautorenewal@gmail.com', 'password')
        cy.wait(3000) 
        membershipPage.select_MShip_Tab()
        membershipPage.select_Subscribe_3Pack()
        cy.wait(3000)
        cy.get('.product > :nth-child(2) > h4').should('contain','Monthly 3 Pack Membership')
        membershipPage.selec_checkout()
        cy.get('.order-summary').should('be.visible')
        //dasboard
        cy.get('a > .btn').click({force:true})
        cy.get('.dashboard-events > :nth-child(2) > :nth-child(3)').should('include.text','Auto Renewal')        
       
    })
    it('Verify Cancel MemberShip', ()=>{
        homePage.select_Login()
        commons.set_Generic_Seeker('userautorenewal@gmail.com', 'password')
        dashboard.cancel_autorenewal()
        cy.get('#w0-success-0').should('contain','Your Monthly 3 Pack Membership has been cancelled.')
        cy.get('.dashboard-events > :nth-child(2) > :nth-child(3)').should('include.text', 'Valid until')

       })
     

    it('Seeker elimination from admin', ()=>{
        commons.open_Admin_Site()
        commons.set_Admin_Credentials()
        seekerpage.select_Seeker_Option()
        seekerpage.select_Seeker_List()
        seekerpage.type_Seeker_Email('userautorenewal@gmail.com')
        seekerpage.select_Seeker_options('5') // num 5 for elimination from DB
        cy.get('#w3-success').should('contain', 'Seeker removed completely successful')
    })

})
