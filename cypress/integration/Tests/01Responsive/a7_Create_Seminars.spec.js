/// <reference types="cypress"/>

import {Commons} from "../../../Commons/Common"
import { HomePage } from "../../../page-objects/Home";
import {Dashboard} from "../../../page-objects/Dashboard";
import {EventCreationPage} from "../../../page-objects/EventCreationPage"
import {SeminarCreationPage} from "../../../page-objects/SeminarCreationPage"


Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });


describe('Elements verification in responsive mode for Events creation', ()=>{

    const commons = new Commons()
    const homePage = new HomePage()
    const dashboard = new Dashboard()
    const eventCreationPage = new EventCreationPage()
    const seminars = new SeminarCreationPage()

    context('Iphone 12Pro resolution', () => {
        
        beforeEach(() => {
        
          cy.viewport(390, 844)
          commons.open_Web_Site()
          commons.login_As_Guide_Mobile()
        })

        it('Verify Elements in Guide Dashboard after create a class', ()=>{
            //cy.get(':nth-child(4) > .btn').click()
            cy.wait(3000)
            dashboard.select_Add_Seminar()
            //cy.get(':nth-child(2) > .btn').click()
            seminars.type_Seminar_Name("Seminar Automation")
            seminars.add_Description("This is a Seminar for Automation Proj")
            seminars.add_Custom_Start_Date(8)
            //seminars.add_Custom_End_Date(15)
            cy.get('#seminar-price').click()
                 var moment = require('moment');
                 const endDate = moment().add(15, 'days').format('MMM-DD-YYYY')
                 const typeDate = cy.get('#seminar-enddate').type(endDate)
                 cy.get('.custom-control-label').click({force:true})
            seminars.select_Main_Offering('Yoga')
            seminars.add_Seminar_Price(150)
            seminars.select_Allow_Independent_Events()
            //seminars.select_Publish_Button()
            seminars.select_Save_Progress()
    
            cy.get('#w2-success-0').should('contain', 'Seminar has been created.')
            cy.get('h4 > a').should('contain', 'Seminar Automation')

            cy.wait(2000)
            seminars.select_Cancel_Seminar()
            cy.get('#w2-success-0').should('contain', 'Seminar has been cancelled.')

        })
        
    })
    
})    