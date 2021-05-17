/// <reference types="cypress"/>

import { HomePage } from "../../../page-objects/Home";
import {Dashboard} from "../../../page-objects/Dashboard"
import {Commons} from "../../../Commons/Common"

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

describe('Verify the Elements within Dashboard', ()=>{
    const homePage = new HomePage()
    const dashBoard = new Dashboard()
    const commons = new Commons()
   
    beforeEach(()=>{
        
        commons.open_Web_Site()
        //cy.wait(4000)
        
    })

    after(()=>{
        homePage.logout_Account()
    
    })
    
    it('Test links within Guide Dashboard', () => {  
        homePage.select_Login()
        commons.set_Guide_Credentials_One()
        homePage.submit_Credentials()
        
        dashBoard.select_UpcomingEvents()
        cy.url().should('eq', 'https://stage.vivayalive.com/dashboard/upcoming')

        cy.go('back')
        dashBoard.select_One_One_Availability()
        cy.url().should('eq', 'https://stage.vivayalive.com/dashboard/calendar')

        cy.go('back')
        dashBoard.select_Add_Seminar()
        cy.url().should('eq', 'https://stage.vivayalive.com/seminars/add')

        cy.go('back')
        dashBoard.select_View_FullClass_History()
        cy.url().should('eq', 'https://stage.vivayalive.com/dashboard/history')

        cy.go('back')
        dashBoard.select_View_Public_Profile()
        cy.url().should('contain', 'https://stage.vivayalive.com/guides')

        cy.go('back')
        dashBoard.select_Contact_Vivaya()
        cy.url().should('eq', 'https://stage.vivayalive.com/site/contact')

        /*cy.go('back')
        dashBoard.select_Write_Blog()
        cy.url().should('eq', 'https://stage.vivayalive.com/blog/write')*/

        cy.go('back')
        dashBoard.select_Edit_My_Offerings()
        cy.url().should('eq', 'https://stage.vivayalive.com/account/offerings')

        cy.go('back')
        dashBoard.select_Update_LInsurance()
        cy.url().should('eq', 'https://stage.vivayalive.com/account/liability-insurance')

        cy.go('back')
        dashBoard.select_Edit_Password()
        cy.url().should('eq', 'https://stage.vivayalive.com/account')

        cy.go('back')
        dashBoard.select_Edit_Contact_Info()
        cy.url().should('eq', 'https://stage.vivayalive.com/account/profile')

        /*cy.go('back')
        dashBoard.select_Edit_Profile_Left_Section()
        cy.url().should('eq', 'https://stage.vivayalive.com/account')*/

        
        cy.go('back')
        dashBoard.select_Public_Profile_Left_Section()
        cy.url().should('contains', 'https://stage.vivayalive.com/guides')

        //cy.go('back')
        //dashBoard.select_Seeker_Account_Left_Section()
        //cy.url().should('eq', 'https://stage.vivayalive.com/signup/add-seeker-account-from-guide')

       
    })

    it('Verify links within Seeker Dashboard',()=>{
        homePage.select_Login()
        commons.set_Seeker_Credentials_One()
        homePage.submit_Credentials()

        dashBoard.select_Book_More()
        cy.url().should('eq', 'https://stage.vivayalive.com/schedule')

        cy.go('back')
        dashBoard.select_View_FullClass_History()
        cy.url().should('eq', 'https://stage.vivayalive.com/dashboard/history')

        cy.go('back')
        dashBoard.select_Shopping_Cart()
        cy.url().should('eq', 'https://stage.vivayalive.com/cart')

        cy.go('back')
        dashBoard.select_My_Password()
        cy.url().should('eq', 'https://stage.vivayalive.com/account')

        cy.go('back')
        dashBoard.select_Contact_Vivaya_Seeker()
        cy.url().should('eq', 'https://stage.vivayalive.com/site/contact')

        cy.go('back')
        dashBoard.select_My_Referral()
        cy.url().should('contains', 'https://stage.vivayalive.com/dashboard/referral-detail')

        cy.go('back')
        dashBoard.select_My_Account_Seeker()
        cy.url().should('eq', 'https://stage.vivayalive.com/account')
 
        cy.go('back')
        dashBoard.select_Payment_Info()
        cy.url().should('eq', 'https://stage.vivayalive.com/account/edit-cc')

        cy.go('back')
        dashBoard.select_Edit_Profile_Left_Section_Seeker()
        cy.url().should('eq', 'https://stage.vivayalive.com/account')


    })

})