/// <reference types="cypress"/>

import {Commons} from "../../../Commons/Common"
import {PromotionPage} from "../../../page-objects-admin/PromotionPage"
import {SeekerCreation} from "../../../page-objects/SeekerCreation"
import {HomePage} from "../../../page-objects/Home"
import {SeekerPage} from "../../../page-objects-admin/SeekerPage"


Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  })

describe('Promotions page', ()=>{
    const commons = new Commons()
    const promotionPage = new PromotionPage()
    const seekerCreation = new SeekerCreation()
    const homePage = new HomePage()
    const seekerpage = new SeekerPage()

    beforeEach(()=>{
        commons.open_Admin_Site()
        commons.set_Admin_Credentials()
    })

    it.skip('Create a promotion code', ()=>{
        promotionPage.select_Promotions_Option()
        promotionPage.select_Promotion_New()
        promotionPage.type_Promotion_Name('AutCode')
        promotionPage.type_Promotion_Code_Name('AUTCOD')
        promotionPage.type_Promotion_Discount('35')
        promotionPage.type_Promotion_ExpDate('12')
        promotionPage.type_Promotion_Limit('10')
        cy.get('#w0-success').should('contain','Promotion has been created.')
    })

    it.skip('Edit the promotion code', ()=>{
        promotionPage.select_Promotions_Option()
        promotionPage.select_Promotion_List()
        promotionPage.find_Element_List_Promo('2') // num 2 para editar, es la posicion en el xpath
        promotionPage.type_Promotion_Code_Name('CODEEDITED')
        promotionPage.type_Promotion_Discount('37')
        promotionPage.type_Promotion_ExpDate('10')
        promotionPage.type_Promotion_Limit('12')
        cy.get('#w0-success').should('contain','Promotion has been updated.')
    })

    it.skip('Delete the promotion', ()=>{
        promotionPage.select_Promotions_Option()
        promotionPage.select_Promotion_List()
        promotionPage.find_Element_List_Promo('4') //num 4 para eliminar, posicion de xpath
        cy.get('#w0-success').should('be.visible')
    })

    it.skip('Create a Promo Auto Renewal', ()=>{
        promotionPage.select_Promotions_Option()
        promotionPage.select_PromoRenewal_New()
        promotionPage.type_Promotion_Name('AutCode')
        promotionPage.type_Promotion_Code_Name('AUTCOD')
        promotionPage.type_Promotion_Discount('35')
        promotionPage.type_Promotion_ExpDate('12')
        promotionPage.type_Promotion_Limit('10')
        cy.get('#w0-success').should('contain','Promotion auto renewal has been created.')
    })

    it.skip('Edit a Promo Auto Renewal', ()=>{
        promotionPage.select_Promotions_Option()
        promotionPage.select_PromoRenewal_List()
        promotionPage.find_Element_List_Promo_Renewal('2') // num 2 para editar, es la posicion en el xpath
        promotionPage.type_Promotion_Code_Name('CODEEDITED')
        promotionPage.type_Promotion_Discount('37')
        promotionPage.type_Promotion_ExpDate('10')
        promotionPage.type_Promotion_Limit('12')
        cy.get('#w0-success').should('contain','Promotion has been updated.')
    })

    it.skip('Delete a Promo Auto Renewal', ()=>{
        promotionPage.select_Promotions_Option()
        promotionPage.select_PromoRenewal_List()
        promotionPage.find_Element_List_Promo_Renewal('4') //num 4 para eliminar, posicion de xpath
        cy.get('#w0-success').should('be.visible')
    })

    it.skip('Create a Promo Trial Extended', ()=>{
        promotionPage.select_Promotions_Option()
        promotionPage.select_Promo_Trial_extended()
        promotionPage.type_Promotion_Name('AutCode')
        promotionPage.type_Promotion_Code_Name_free('AUTCOD')
        promotionPage.type_Promotion_Limit('9')
        promotionPage.type_Promotion_ExpDate_trial('22-Jul-2025')
        promotionPage.save_promotion()
        cy.get('#w0-success').should('be.visible')

    })
    it.skip('EDIT a Promo Trial Extended', ()=>{
        promotionPage.select_Promotions_Option()
        promotionPage.select_Promo_Trial_extended_list()
        promotionPage.find_Element_List_Promo_trial_Extended('2')
        promotionPage.type_Promotion_Code_Name_free('EXTENDED')
        promotionPage.type_Promotion_Limit('10')
        promotionPage.save_promotion()
        cy.get('#w0-success').should('be.visible')
       

    })

    it.skip('Create seeker using the Trial Extended', ()=>{
       commons.open_Web_Site()
       seekerCreation.select_Free_trial_option()

        seekerCreation.type_First_Name('Auto')
        seekerCreation.type_Last_Name('Mation')
        seekerCreation.type_Seeker_Email('trialextended@gmail.com')
        seekerCreation.type_Seeker_Password('password')
        //seekerCreation.select_Time_Zone('(UTC-04:00) Georgetown, La Paz, Manaus, San Juan')
        
        seekerCreation.promo_code_option()
        seekerCreation.Fill_promo_code('EXTENDED')
        cy.wait(1500)
        seekerCreation.type_Card_Name('Auto Mation')
        seekerCreation.type_Card_Number('4242424242424242')
        seekerCreation.type_Card_ExpDate('0225')
        seekerCreation.type_Security_Code('123')
        seekerCreation.marking_Checkbox()
        seekerCreation.type_ZipCode('1234')

        cy.get('.seeker-registration-content > h2').should('contain', 'Thank You')
        cy.wait(500)
        cy.get('h1').should('contain','Schedule')
        //cy.get('.seeker-registration-content > h2').should('be.visible')
        //cy.wait(1500)
        //seekerCreation.seeker_dashboard()
        //cy.get(':nth-child(1) > .dashboard-box > div > .count').should('contain', '24')
      
        })
        
    it.skip('Verify days of the trial', ()=>{
        commons.open_Web_Site()
        homePage.select_Login()
        commons.set_Generic_Seeker('trialextended@gmail.com', 'password')
        cy.get(':nth-child(1) > .dashboard-box > div > .count').should('contain', '24')
       
         })

    it.skip('Delete a Promo Trial Extended', ()=>{
        promotionPage.select_Promotions_Option()
        promotionPage.select_Promo_Trial_extended_list()
        promotionPage.find_Element_List_Promo_trial_Extended('4')
        cy.get('#w0-success').should('be.visible')
    
    
        })

    it.skip('Seeker elimination from admin', ()=>{
            commons.open_Admin_Site()
            commons.set_Admin_Credentials()
            seekerpage.select_Seeker_Option()
            seekerpage.select_Seeker_List()
            seekerpage.type_Seeker_Email('trialextended@gmail.com')
            seekerpage.select_Seeker_options('5') // num 5 for elimination from DB
            cy.get('#w3-success').should('contain', 'Seeker removed completely successful')
        })    


        it('Create a Promo Trial Extended for influencer', ()=>{
            promotionPage.select_Promotions_Option()
            promotionPage.select_Promo_Trial_extended()
            promotionPage.type_Promotion_Name('AutCode')
            promotionPage.type_Promotion_Code_Name_free('codesx1,codesx2')
            promotionPage.type_Promotion_Limit('9')
            cy.wait(200)
            promotionPage.type_Promotion_ExpDate_trial('28-Sep-2025')
            cy.wait(200)
            promotionPage.select_tagAC('influencer')

            promotionPage.save_promotion()
            cy.get('#w0-success').should('be.visible')
    
        })

        it('Create seeker using the Code', ()=>{
            cy.visit('https://stage.vivayalive.com/signup/seeker/form?promocode=codesx2')//link promotion code
            seekerCreation.type_First_Name('seeker')
            seekerCreation.type_Last_Name('influencer')
            seekerCreation.type_Seeker_Email('influencer@seeker.com')
            cy.get('.your-membership').should('contain','Your Free Trial')
            cy.get('.monthly-unlimited-box > .panel-body > .p-free-trial > .left').should('contain','Total Due Now (Free trial + PROMO EXTENDED)')
            seekerCreation.type_Seeker_Password('password')
            cy.get('.custom-control-label').click({force:true})
            cy.get('#corporate-form-submit').click({force:true})
            cy.wait(1500)
            cy.get('.seeker-registration-content > h2').should('contain', 'Thank You')
            
        })

        it('Verify days of the free trial influencer', ()=>{
            commons.open_Web_Site()
            homePage.select_Login()
            commons.set_Generic_Seeker('influencer@seeker.com', 'password')
            cy.get(':nth-child(1) > .dashboard-box > div > .count').should('contain', '23')
           
             })

        it('Verify that the code only have one use', ()=>{
                cy.visit('https://stage.vivayalive.com/signup/seeker/form?promocode=codesx2')//link promotion code
                
                cy.get('#w2-error-0').should('contain','The promotion code has been used before.')
            })

        it('Seeker influencer elimination from admin', ()=>{
                commons.open_Admin_Site()
                commons.set_Admin_Credentials()
                seekerpage.select_Seeker_Option()
                seekerpage.select_Seeker_List()
                seekerpage.type_Seeker_Email('influencer@seeker.com')
                seekerpage.select_Seeker_options('5') // num 5 for elimination from DB
                cy.get('#w3-success').should('contain', 'Seeker removed completely successful')
            }) 

        it('Delete a Promo Trial Extended type influencer', ()=>{
                promotionPage.select_Promotions_Option()
                promotionPage.select_Promo_Trial_extended_list()
                promotionPage.find_Element_List_Promo_trial_Extended('4')
                cy.get('#w0-success').should('be.visible')
            
            
                })

})