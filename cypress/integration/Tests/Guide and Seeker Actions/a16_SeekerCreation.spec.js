/// <reference types = "cypress"/>

import {Commons} from "../../../Commons/common"
import {SeekerCreation} from "../../../page-objects/SeekerCreation"
import {HomePage} from "../../../page-objects/Home"
import {SeekerPage} from "../../../page-objects-admin/SeekerPage"
import {GuideCreation} from "../../../page-objects/GuideCreation"
import {GuidesPage} from "../../../page-objects/GuidesPage"
import {GuidePage} from "../../../page-objects-admin/GuidePage"

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
})

describe('Seeker creation, Edition from Vivaya page', ()=>{
    const commons = new Commons()
    const seekerCreation = new SeekerCreation()
    const homePage = new HomePage()
    const seekerpage = new SeekerPage()
    const guidecreation = new GuideCreation()
    const guideweb = new GuidesPage()
    const guidepage = new GuidePage()

    beforeEach(()=>{
        commons.open_Web_Site()
    })

    it('Seeker creation from web page', ()=>{
        seekerCreation.select_Free_trial_option()
        seekerCreation.type_First_Name('Auto')
        seekerCreation.type_Last_Name('Mation')
        seekerCreation.type_Seeker_Email('pedrasasmota.luis@gmail.com')
        //seekerCreation.select_Time_Zone('(UTC-04:00) Georgetown, La Paz, Manaus, San Juan')
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

    it('Verify that Seeker changes to Guide', ()=>{
        homePage.select_Login()
        commons.set_Generic_Seeker('pedrasasmota.luis@gmail.com', 'password')
        seekerpage.select_create_guide()
        seekerpage.fill_fieds_for_guide('pedrasasmota.guide@gmail.com','2019789748')
        guidecreation.fill_class_for_guide('5','5')
        guidecreation.fill_class_choose('3','3')
        cy.wait(1500)
        guidecreation.Check_type_of_class()
        guidecreation.Fill_information_guide()
        guidecreation.fill_Liability_Insurance()
        cy.wait(1500)
        cy.get('h1.text-center').should('be.visible')
        // go to seeker
        guideweb.Select_Switch_to_seeker()
        cy.get('.col-sm-3 > .dashboard-box > h3').should('be.visible')
        //go to Guide
        guideweb.Select_Switch_to_Guide()
        cy.get('h1.text-center').should('be.visible')
        
   })
 
    
    it('Activate Guide created from seeker', ()=>{
        commons.open_Admin_Site()
        commons.set_Admin_Credentials()
        guidepage.select_Guide_Option()
        guidepage.select_Guide_List()
        guidepage.find_EmailGuide('pedrasasmota.guide@gmail.com', '2')
        guidepage.Approve_Guide()
        cy.get('#w2-success').should('be.visible')
        
    })
    
    it('Verify that Guide is activated', ()=>{
        commons.open_Web_Site()
        homePage.select_Login()
        commons.put_credentials_guide('pedrasasmota.guide@gmail.com','password')
        cy.get('.guide-reminder > .btn').click()
        cy.get('.col-sm-9 > :nth-child(2) > h3').should('be.visible')
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

    it('Guide elimination from admin', ()=>{
        commons.open_Admin_Site()
        commons.set_Admin_Credentials()
        guidepage.select_Guide_Option()
        guidepage.select_Guide_List()
        guidepage.find_EmailGuide('pedrasasmota.guide@gmail.com', '3') //num 3 for elimination
        cy.get('#w2-success').should('contain', 'Guide successfully deleted')
    })
})
