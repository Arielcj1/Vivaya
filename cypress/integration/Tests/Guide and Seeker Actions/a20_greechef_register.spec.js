/// <reference types = "cypress"/>

import {Commons} from "../../../Commons/common"
import {SeekerCreation} from "../../../page-objects/SeekerCreation"
import {ReferralPage} from "../../../page-objects-admin/ReferralPage"
import {SeekerPage} from "../../../page-objects-admin/SeekerPage"

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
})

describe('Admin Referral Page', ()=>{
    const commons = new Commons()
    const seekerCreation = new SeekerCreation()
    const referralPage = new ReferralPage()
    const seekerpage = new SeekerPage()

      it('Go to a GreenChef Link', ()=>{
        cy.visit('https://stage.vivayalive.com/signup/seeker/form?greenchef=true')//referral link of a test user 
        seekerCreation.type_First_Name('Green')
        seekerCreation.type_Last_Name('Chef')
        seekerCreation.type_Seeker_Email('GreenChef@automation.com')
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

    it('Seeker elimination from admin',()=>{
        commons.open_Admin_Site()
        commons.set_Admin_Credentials()
        seekerpage.select_Seeker_Option()
        seekerpage.select_Seeker_List()
        seekerpage.type_Seeker_Email('GreenChef@automation.com')
        seekerpage.select_Seeker_options('5') //num 5 for elimination 
        cy.get('#w3-success').should('contain', 'Seeker removed completely successful')
    })
})