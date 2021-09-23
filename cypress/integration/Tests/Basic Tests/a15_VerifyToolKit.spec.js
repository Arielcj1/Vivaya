/// <reference types="cypress"/>

import { HomePage } from "../../../page-objects/Home";
import {Dashboard} from "../../../page-objects/Dashboard"
import {Commons} from "../../../Commons/Common"
import {Toolkit} from "../../../page-objects-admin/Toolkit"

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

describe('Verify the Elements within Dashboard', ()=>{
    const homePage = new HomePage()
    const dashBoard = new Dashboard()
    const commons = new Commons()
    const toolkit = new Toolkit()
   
    beforeEach(()=>{
        
        
        //cy.wait(4000)
        
    })

    after(()=>{
    //    homePage.logout_Account()
    
    })
    
    it('Verify Toolkit from WebSite', () => {  
        
        commons.open_Web_Site()
        homePage.select_Login()
        commons.set_Guide_Credentials_One()
        homePage.submit_Credentials()
        
        dashBoard.select_toolkit()
        cy.get('.col-sm-9 > .dashboard-box > h3').should('contain', 'My Toolkit')
        
    })

    it('Verify Toolkit from dashboard Guides', () => {  
        
        commons.open_Admin_Site()
        commons.set_Admin_Credentials()
        toolkit.Open_toolkit_admin()
        cy.get('h1').should('contain', 'Guides Toolkit')
   
    })
    it('Verify create "folder" in WebSite from Admin', () => {  
        
        commons.open_Admin_Site()
        commons.set_Admin_Credentials()
        toolkit.Open_toolkit_admin()
        toolkit.create_folder_toolkit('automation folder')
        toolkit.search_folder_created('automation folder')

   
    })

    it('Verify that we can enter to the "folder" created', () => {  
        
        commons.open_Admin_Site()
        commons.set_Admin_Credentials()
        toolkit.Open_toolkit_admin()
        toolkit.click_folder_created('automation folder')
        cy.get('.box-header').first().should('include.text','My Toolkit/automation folder')

   
    })
    

})