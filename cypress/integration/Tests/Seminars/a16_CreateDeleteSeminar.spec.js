/// <reference types="cypress"/>

import { HomePage } from "../../../page-objects/Home";
import {Dashboard} from "../../../page-objects/Dashboard";
import {Commons} from "../../../Commons/Common"
import {SeminarCreationPage} from "../../../page-objects/SeminarCreationPage"

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });


describe('Seminar Creation, Cancelation and Seminar Event creation',
{
    retries: {
      runMode: 2,
      openMode: 2,
    }
  }, ()=>{
    const homePage = new HomePage()
    const dashboard = new Dashboard()
    const commons = new Commons()
    const seminars = new SeminarCreationPage()

    beforeEach(()=>{
        commons.open_Web_Site()
       
    })

    /*after(()=>{
        homePage.logout_Account()
    
    })*/
    it('Create a Seminar', ()=>{
        homePage.select_Login()
        commons.set_Guide_Credentials_One()
        homePage.submit_Credentials()
        cy.wait(1500)
        dashboard.select_Add_Seminar()
        seminars.type_Seminar_Name("Seminar Automation")
        seminars.add_Description("This is a Seminar for Automation Proj")
        seminars.add_Custom_Start_Date(8)
        seminars.add_Custom_End_Date(15)
        seminars.select_Main_Offering('Yoga')
        seminars.add_Seminar_Price(150)
        seminars.select_Allow_Independent_Events()
        seminars.select_Save_Progress()

        cy.get('#w2-success-0').should('contain', 'Seminar has been created.')
        cy.get('h4 > a').should('contain', 'Seminar Automation')
        
     })

     it('Edit a Seminar', ()=>{
      homePage.select_Login()
      commons.set_Guide_Credentials_One()
      homePage.submit_Credentials()
      //dashboard.go_to_Dashboard_From_Menu()
            
      //Edit Seminar
      seminars.select_Edit_Seminar()
      cy.get('#seminar-name').clear()
      seminars.type_Seminar_Name("Seminar Automation Edited")
      //seminars.select_Publish_Button()
      seminars.select_Save_Progress()
      cy.get('#w2-success-0').should('contain', 'Seminar has been updated.')
      cy.get('h4 > a').should('contain', 'Seminar Automation Edited')
      
   })

   it('Delete a Seminar', ()=>{
    homePage.select_Login()
    commons.set_Guide_Credentials_One()
    homePage.submit_Credentials()
    //dashboard.go_to_Dashboard_From_Menu()
    
    //Cancel the Seminar
    seminars.select_Cancel_Seminar()
    cy.get('#w2-success-0').should('contain', 'Seminar has been cancelled.')
 })

})     

    