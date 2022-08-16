/// <reference types="cypress"/>

import {Commons} from "../../../Commons/Common"
import {SeekerCreation} from "../../../page-objects/SeekerCreation"
import {SeekerPage} from "../../../page-objects-admin/SeekerPage"


Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  })

describe('Verify Seeker for Automation', ()=>{
    const commons = new Commons()
    const seekerCreation = new SeekerCreation()
    const seekerPage = new SeekerPage()

    beforeEach(()=>{
        commons.open_Admin_Site()
        commons.set_Admin_Credentials()
    })

    it('Verify Automation seeker', ()=>{
        seekerPage.select_Seeker_Option()
        seekerPage.select_Seeker_List()
        cy.get('#seekersearch-last_name').type('Yoon{enter}')
        cy.wait(2500)
        cy.get('.summary > :nth-child(2)').invoke('text').then((text)=>{
            if(text == 1){
                commons.open_Web_Site()
                seekerCreation.select_Free_trial_option()
                seekerCreation.type_First_Name('Auto')
                seekerCreation.type_Last_Name('Yoon')
                seekerCreation.type_Seeker_Email('automation@test.com')
                //seekerCreation.select_Time_Zone('(UTC-04:00) Georgetown, La Paz, Manaus, San Juan')
                seekerCreation.marking_Checkbox()
                seekerCreation.type_Seeker_Password('password')
                seekerCreation.type_Card_Name('Auto Mation')
                seekerCreation.type_Card_Number('4242424242424242')
                seekerCreation.type_Card_ExpDate('0225')
                seekerCreation.type_Security_Code('123')
                seekerCreation.type_ZipCode('1234')
                cy.get('.seeker-registration-content > h2').should('contain', 'Thank You')
            }
        })
    })
    
})