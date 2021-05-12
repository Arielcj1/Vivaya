/// <reference types = "cypress"/>

import {Commons} from "../../../Commons/common"
import {HomePage} from "../../../page-objects/Home"
import {GuideCreation} from "../../../page-objects/GuideCreation"

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
})

describe('Guide creation, Edition from Vivaya page', ()=>{
    const commons = new Commons()
    const homePage = new HomePage()
    const guidecreation = new GuideCreation()

    beforeEach(()=>{
        commons.open_Web_Site()
    })

    it('Guide creation from web page', ()=>{
        guidecreation.become_Guide()
        guidecreation.become_Guide_Page()
        guidecreation.fill_Form_For_Guide('Auto','Guide','tomascoca39@gmail.com','2019789745')
    })//phone_number code is a blocker
})