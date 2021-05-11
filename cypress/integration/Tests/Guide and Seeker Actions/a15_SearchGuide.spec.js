/// <reference types="cypress"/>

import {GuidesPage} from "../../../page-objects/GuidesPage"
import {Commons} from "../../../Commons/Common"
import { HomePage } from "../../../page-objects/Home";

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });


describe('Search a Guide', ()=> {

    const guidesPage = new GuidesPage()
    const commons = new Commons()
    const homePage = new HomePage()

    beforeEach(()=>{
        commons.open_Web_Site()
        cy.wait(4000)
        
    })

    it('Search a Guide Logged out',()=>{
        guidesPage.select_Guide_Tab()
        guidesPage.perform_a_Search('Ariel Guide')
        cy.wait(3000)
        cy.get('#w0 > div.row > div > a.img > img').click()
        cy.get('h1').contains('Ariel Guide')
        
    })

    it('Search a guide with Loged in  User',()=>{
        homePage.select_Login()
        commons.set_Seeker_Credentials_One()
        homePage.submit_Credentials()
        cy.wait(2000)
        guidesPage.select_Guide_Tab_when_Login()
        guidesPage.perform_a_Search('Ariel Guide')
        cy.wait(3000)
        cy.get('#w0 > div.row > div > a.img > img').click()
        cy.get('h1').contains('Ariel Guide')
    })


})    