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
        cy.wait(500)
        cy.get('.col-md-9 > .dashboard-box > h3').should('contain', 'My Toolkit')
        
    })

    it('Verify Toolkit from Admin', () => {  
        
        commons.open_Admin_Site()
        commons.set_Admin_Credentials()
        toolkit.Open_toolkit_admin()
        cy.get('h1').should('contain', 'Guides Toolkit')
   
    })
    it('Verify create "folder" in WebSite from Admin', () => {  
        
        commons.open_Admin_Site()
        commons.set_Admin_Credentials()
        toolkit.Open_toolkit_admin()
        cy.wait(500)
        toolkit.create_folder_toolkit('automation folder')
        toolkit.search_folder_created('automation folder')
        cy.get('#w1-success').should('contain','The Folder successfully created')

   
    })

    it('Verify validation when we create a "new folder"', () => {  
        
        commons.open_Admin_Site()
        commons.set_Admin_Credentials()
        toolkit.Open_toolkit_admin()
        cy.wait(500)
        toolkit.create_folder_toolkit('automation folder')
        cy.wait(1000)
        cy.get('.field-toolkitform-foldername > .help-block').should('contain','The name of the folder already exists')

   
    })
    it('Verify validation when we create a "new folder" witout name', () => {  
        
        commons.open_Admin_Site()
        commons.set_Admin_Credentials()
        toolkit.Open_toolkit_admin()
        cy.wait(500)
        cy.get('#modal-btn-toolkit').click({force:true})
        cy.wait(500)
        cy.get('#submit-create-folder').click({force:true})
        cy.get('.field-toolkitform-foldername > .help-block').should('contain','Folder Name cannot be blank.')


        

   
    })

    it('Verify that we can enter to the "folder" created', () => {  
        
        commons.open_Admin_Site()
        commons.set_Admin_Credentials()
        toolkit.Open_toolkit_admin()
        toolkit.click_folder_created('automation folder')
        cy.get('.box-header').first().should('include.text','My Toolkit/automation folder')

   
    })
    it('Verify that we can delete the "folder"', () => {  
        
        commons.open_Admin_Site()
        commons.set_Admin_Credentials()
        toolkit.Open_toolkit_admin()
        cy.get(':nth-child(2) > :nth-child(3) > a > .glyphicon').click({force:true})
        cy.get('#w1-success').should('contain','The Folder successfully deleted')

   
    })
    

})