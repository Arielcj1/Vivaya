/// <reference types = "cypress"/>

import {Commons} from "../../../Commons/common"
import {SeekerCreation} from "../../../page-objects/SeekerCreation"
import {SeekerPage} from "../../../page-objects-admin/SeekerPage"
import {HomePage} from "../../../page-objects/Home"

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
})

describe('Admin Referral Page', ()=>{
    const commons = new Commons()
    const seekerCreation = new SeekerCreation()
    const seekerpage = new SeekerPage()    
    const homePage = new HomePage()

      it('Go to a GreenChef Link and create a new seeker', ()=>{
        cy.visit('https://stage.vivayalive.com/signup/seeker/form?greenchef=true')//referral link of a test user 
        cy.get('.title-subscription > :nth-child(2) > .badge').should('include.text','Risk free 30 day trial')
        seekerCreation.type_First_Name('Green')
        seekerCreation.type_Last_Name('Chef')
        seekerCreation.type_Seeker_Email('automation@greenchef.com')
        //seekerCreation.select_Time_Zone('(UTC-04:00) Georgetown, La Paz, Manaus, San Juan')
        seekerCreation.type_Seeker_Password('password')
        seekerCreation.marking_Checkbox()
        seekerCreation.type_Card_Name('Auto Mation')
        seekerCreation.type_Card_Number('4242424242424242')
        seekerCreation.type_Card_ExpDate('0225')
        seekerCreation.type_Security_Code('123')
        seekerCreation.type_ZipCode('1234')
        cy.wait(2000)
        cy.get('.seeker-registration-content > h2').should('contain', 'Thank You')

    })

    it('Review that seeker has 30 days trial', ()=>{
        commons.open_Web_Site()
        homePage.select_Login()
        commons.set_Generic_Seeker('automation@greenchef.com', 'password')
        seekerCreation.seeker_dashboard()
        cy.get('.col-md-3 > .dashboard-box > div > .count').should('contain','30')
    })

    it('Seeker elimination from admin',()=>{
        commons.open_Admin_Site()
        commons.set_Admin_Credentials()
        seekerpage.select_Seeker_Option()
        seekerpage.select_Seeker_List()
        seekerpage.type_Seeker_Email('automation@greenchef.com')
        seekerpage.select_Seeker_options('5') //num 5 for elimination 
        cy.get('#w3-success').should('contain', 'Seeker removed completely successful')
    })
})