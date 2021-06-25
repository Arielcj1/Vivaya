/// <reference types = "cypress"/>

import {Commons} from "../../../Commons/common"
import {SeekerCreation} from "../../../page-objects/SeekerCreation"
import {HomePage} from "../../../page-objects/Home"
import {SeekerPage} from "../../../page-objects-admin/SeekerPage"

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
})

describe('Seeker creation, Edition from Vivaya page', ()=>{
    const commons = new Commons()
    const seekerCreation = new SeekerCreation()
    const homePage = new HomePage()
    const seekerpage = new SeekerPage()

    beforeEach(()=>{
        commons.open_Web_Site()
    })

    it('Seeker creation from web page', ()=>{
        seekerCreation.select_Free_trial_option()
        seekerCreation.type_First_Name('Auto')
        seekerCreation.type_Last_Name('Mation')
        seekerCreation.type_Seeker_Email('pedrasasmota.luis@gmail.com')
        seekerCreation.select_Time_Zone('(UTC-04:00) Georgetown, La Paz, Manaus, San Juan')
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
        commons.set_Generic_Seeker('pedrasasmota.luis@gmail.com', 'password')
        cy.get(':nth-child(1) > .dashboard-box > div > :nth-child(2)').should('contain', 'Days Until Start Of Your Monthly Unlimited Membership')
    })

    it('Seeker edition from Account', ()=>{
        homePage.select_Login()
        commons.set_Generic_Seeker('pedrasasmota.luis@gmail.com', 'password')
        seekerCreation.seeker_Account()
        seekerCreation.seeker_Account_Edition('AutoEdited','MationEdition','Address1','Address2','Cochabamba','Bolivia','13452')
    })

    



    it('Seeker elimination from admin', ()=>{
        commons.open_Admin_Site()
        commons.set_Admin_Credentials()
        seekerpage.select_Seeker_Option()
        seekerpage.select_Seeker_List()
        seekerpage.type_Seeker_Email('pedrasasmota.luis@gmail.com')
        seekerpage.select_Seeker_options('5') // num 5 for elimination from DB
        cy.get('#w3-success').should('contain', 'Seeker removed completely successful')
    })
})
