/// <reference types="cypress"/>

import {Commons} from "../../../Commons/Common"
import {CorporatePage} from "../../../page-objects/CorporatePage"
import {CorporateAdminPage } from "../../../page-objects-admin/CorporateAdminPage"
import {CorporatePromotionPage} from "../../../page-objects-admin/CorporatePromotionPage"

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  })

  describe('Tests to verify the Corporate creation, edition and Deletion',()=>{
    const commons = new Commons()
    const corporate = new CorporatePage()
    const admin_corporate = new CorporateAdminPage()
    const admin_promo_code = new CorporatePromotionPage()

    it('The Corp user creates his Corporation from the Front end',()=>{
        commons.open_Web_Site()
        corporate.select_Corporate_As_Loggedout()
        corporate.type_email_corporate_webSite('manu@automation2.com')
        corporate.click_contact_us()
        corporate.type_First_Name('manu')
        corporate.type_Last_Name('automation')
        corporate.type_Company_Name('Automation corp')
        //corporate.type_email_corporate('manu@automation2.com')
        corporate.type_message_corporate('this is a message test')
        corporate.continue_From_Step2()
        cy.wait(500)
        //Step2
        cy.get('.step3').should('be.visible')
        cy.get('.col-md-7 > h3').should('contain','Thank you for sending your details. We look forward to sharing VIVAYA with you! To book a Demo click on the link below.')
        cy.get('[href="/site/index"]').should('contain','Finish')
        cy.xpath('/html/body/div[2]/div[2]/div/div/div[1]/div[1]/div[2]/a[2]').should('contain','Book a demo')
        cy.xpath('/html/body/div[2]/div[2]/div/div/div[1]/div[1]/div[2]/a[2]').click({froce:true})
        cy.wait(300)
        //step3
        cy.get('.step2').should('be.visible')
        cy.get('h4').should('contain','Introduction to VIVAYA for Business')
        cy.get('.info-step2 > :nth-child(1)').should('contain','Learn about VIVAYA’s LIVE interactive, real-time platform for your teams. Together, we will determine the best options for your company to meet your specific business needs')

        //Calendly
        cy.get('#calendly-schedule > iframe').should('be.visible')
        
    })

    it('Verify that the Corporate is created from the Frontend, after that edited and deleted by the Admin',()=>{
        commons.open_Admin_Site()
        commons.set_Admin_Credentials()
        admin_corporate.select_Corporate_Option()
        admin_corporate.select_Corporate_List()
        //edit the corporate Info and Update
        admin_corporate.select_the_corporate(2) //num 2 for edit
        admin_corporate.type_Corporate_Address('address automation')
        admin_corporate.type_Corporate_PhoneNumber('73575915')
        admin_corporate.update_Corporate_From_Form()
        admin_corporate.select_the_corporate(3) //num 3 for delete
        cy.get('#w0-success').should('contain', 'Corporate successfully deleted')
    })
})   
  


