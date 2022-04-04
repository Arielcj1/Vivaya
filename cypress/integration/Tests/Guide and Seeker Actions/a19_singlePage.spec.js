/// <reference types = "cypress"/>

import {Commons} from "../../../Commons/common"
import {SeekerCreation} from "../../../page-objects/SeekerCreation"
import {HomePage} from "../../../page-objects/Home"
import {SeekerPage} from "../../../page-objects-admin/SeekerPage"
import {GuideCreation} from "../../../page-objects/GuideCreation"
import {GuidesPage} from "../../../page-objects/GuidesPage"
import {GuidePage} from "../../../page-objects-admin/GuidePage"
import { SeekerCreationSingle } from "../../../page-objects/SeekerCreationSingle"

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
})

describe('Seeker creation, Edition from Vivaya page', ()=>{
    const commons = new Commons()
    const seekerCreation = new SeekerCreation()
    const homePage = new HomePage()
    const seekerpage = new SeekerPage()
    const seekerCreationSingle = new SeekerCreationSingle()
    const guidecreation = new GuideCreation()
    const guideweb = new GuidesPage()
    const guidepage = new GuidePage()

    beforeEach(()=>{
        commons.open_Web_Site()
        seekerCreation.select_Free_trial_option()
    })

   

    it('Seeker creation from web page', ()=>{
        cy.visit('https://stage.vivayalive.com/signup/seeker/single')
        homePage.verificarExistenciaElemento('.site-container','#seekersinglesignupform-cardholder')
        
    })

 
    it('Seeker elimination from admin', ()=>{
        commons.open_Admin_Site()
        commons.set_Admin_Credentials()
        seekerpage.select_Seeker_Option()
        seekerpage.select_Seeker_List()
        seekerpage.type_Seeker_Email('single@automation.com ')
        seekerpage.select_Seeker_options('5') // num 5 for elimination from DB
        cy.get('#w3-success').should('contain', 'Seeker removed completely successful')
    })

   

    
})









