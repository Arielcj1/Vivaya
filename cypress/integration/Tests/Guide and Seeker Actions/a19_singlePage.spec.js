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
        seekerCreation.select_Free_trial_option()
    })

   

    it('Seeker creation from web page', ()=>{
        if(homePage.verificarExistenciaElemento('.site-container','#seekersinglesignupform-cardholder')){
            seekerCreation.type_First_Name('Auto')
            seekerCreation.type_Last_Name('Mation')


        }
        else{
        
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
        cy.wait(500)
        cy.get('h1').should('contain','Schedule')

        }

        
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









