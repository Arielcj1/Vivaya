///<reference types = "cypress"/>

import {Commons} from "../../../Commons/common"
import {HomePage} from "../../../page-objects/Home"
import {GuideCreation} from "../../../page-objects/GuideCreation"
import {GuidePage} from "../../../page-objects-admin/GuidePage"


Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
})

describe('Guide creation, Edition from Vivaya page', ()=>{
    const commons = new Commons()
    const homePage = new HomePage()
    const guidecreation = new GuideCreation()
    const guidepage = new GuidePage()

    beforeEach(()=>{
        commons.open_Web_Site()
    })

    it('Guide creation from web page', ()=>{
        guidecreation.become_Guide()
        guidecreation.become_Guide_Page()
        guidecreation.fill_Form_For_Guide('Auto','Guide','tomascoca39@gmail.com','2019789745')
        guidecreation.fill_class_for_guide('5','5')
        guidecreation.fill_class_choose('3','3')
        guidecreation.Check_type_of_class()
        guidecreation.Fill_information_guide()
        guidecreation.fill_Liability_Insurance()
        cy.get('h1.text-center').should('be.visible')
    })
    it('Activate Guia', ()=>{
      commons.open_Admin_Site()
      commons.set_Admin_Credentials()
      guidepage.select_Guide_Option()
      guidepage.select_Guide_List()
      guidepage.find_EmailGuide('tomascoca39@gmail.com', '2')
      guidepage.Approve_Guide()
      cy.get('#w2-success').should('be.visible')


    })

    
    it('Guide elimination', ()=>{
        commons.open_Admin_Site()
        commons.set_Admin_Credentials()
        guidepage.select_Guide_Option()
        guidepage.select_Guide_List()
        guidepage.find_EmailGuide('tomascoca39@gmail.com', '3') //num 3 for elimination
        cy.get('#w2-success').should('contain', 'Guide successfully deleted')
    })
})