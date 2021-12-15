/// <reference types="cypress"/>

import {Commons} from "../../../Commons/Common"
import {Home} from "../../../page-objects-mobile/Home"

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });


describe('Elements verification in responsive mode for bottom bar options', ()=>{

    const commons = new Commons()
    const home = new Home()
    context('Iphone 12Pro resolution', () => {
        
        beforeEach(() => {
          
          cy.viewport(390, 844)
          commons.open_Web_Site()
        })

        it('Verify Elements in About Page', ()=>{
          home.go_To_About_BottomBar()
          cy.get('#banner').should('be.visible').and('contain.text', 'Streaming good vibes')
          cy.get('.orange-text-color').should('be.visible').and('contain.text', 'VIVAYA')
          cy.get('.margin-top-70 > :nth-child(2)').should('be.visible')
          cy.get('.margin-top-70 > :nth-child(3)').should('be.visible')
          cy.get('.leadership > h3').should('be.visible').and('contain.text', 'VIVAYA Leadership')
          cy.get('.offset-md-2 > h4').should('be.visible').and('contain.text', 'Florian Hartmann')  
        })

        it('Verify elemnts in FAQ page', ()=>{
          home.go_To_FAQ()
          cy.get('.text-center').should('be.visible').and('contain.text', 'FAQs')
          cy.get('.container > :nth-child(2)').should('be.visible').and('contain.text', 'Free Trial & Membership')
          cy.get('.container > :nth-child(3)').should('be.visible')
          cy.get('.container > :nth-child(5)').should('be.visible').and('contain.text', 'Taking a Class')
          cy.get('.container > :nth-child(6)').should('be.visible')
          cy.get('.container > :nth-child(8)').should('be.visible').and('contain.text', 'Reimbursement & Cancellation')
          cy.get('.container > :nth-child(9)').should('be.visible')
          cy.get('.container > :nth-child(11)').should('be.visible').and('contain.text', 'About VIVAYA')
          cy.get('.container > :nth-child(12)').should('be.visible')

        })

        it('Verify elements in Become a Guide page', ()=>{
            home.go_To_BecomeaGuide_From_Bottom()
            cy.get('.col-md-7 > .title').should('be.visible')
            cy.get('.col-md-7 > .btn-content > .btn').should('be.visible')
            cy.get('.container > .title').should('contain','FAQs')
            cy.get('.guide-description > .title').should('contain','Looking forward to have you join our community!')
            //signature
            cy.get('.signature > img').should('be.visible')
            cy.get('.guide-description > .btn-content > .btn').should('be.visible')
        })

        it('Verify Workshops page', ()=>{
            home.go_To_Workshops_From_Bottom()
            cy.get('#banner').should('be.visible').and('contain.text','Find your next VIVAYA Workshop')
            cy.url().should('eq', 'https://stage.vivayalive.com/workshops')
        })

        it('Verify Seminar Page', ()=>{
            home.go_To_Seminars_From_Bottom()
            cy.get('#banner').should('be.visible').and('contain.text','Seminars')
            cy.url().should('eq', 'https://stage.vivayalive.com/seminars')
        })

        it('Verify Blog Page', ()=>{
            home.go_To_Blog_From_Bottom()
            cy.get(':nth-child(1) > .col-12 > p').should('contain','VIVAYA’s Journal is the one space for our readers to get to know our guides, yoga class differences, health and fitness, wellness, nutrition and more all in a chic, contemporary location specializing in all things yoga and wellness.')
            cy.url().should('eq', 'https://stage.vivayalive.com/blog/')
        })

        it('Verify Contact Page', ()=>{
            home.go_To_Contact_From_Bottom()
            cy.get('h1').should('be.visible').and('contain.text','Contact')
            cy.get(':nth-child(1) > p').should('be.visible').and('contain.text','If you have business inquiries or other questions, please fill out the following form to contact us. Thank you.')
            //cy.get('.field-contactform-name > .control-label').should('be.visible').and('contain.text','Name')
            cy.get('#contactform-name').should('be.visible')
            //cy.get('.field-contactform-email > .control-label').should('be.visible').and('contain.text','Email')
            cy.get('#contactform-email').should('be.visible')
            //cy.get('.field-contactform-subject > .control-label').should('be.visible').and('contain.text','Subject')
            cy.get('#contactform-subject').should('be.visible')
            //cy.get('.field-contactform-body > .control-label').should('be.visible').and('contain.text','Body')
            cy.get('#contactform-body').should('be.visible')
            //cy.get('#contactform-verifycode-image').should('be.visible')
            //cy.get('#contactform-verifycode').should('be.visible')
            cy.get('.btn-content > .btn').should('be.visible')
        })

        it('Verify Privacy Policy Page', ()=>{
            home.go_To_PPolicy_From_Bottom()
            cy.get('.text-center').should('be.visible').and('contain.text','Privacy Policy')
            cy.get('.wrap > .container > div > :nth-child(2)').should('be.visible')
            cy.get('.container > div > :nth-child(3)').should('be.visible')
            cy.get('.container > div > :nth-child(4)').should('be.visible')
            cy.get('div > :nth-child(8)').should('be.visible')
            cy.get('div > :nth-child(10)').should('be.visible')
            cy.get('div > :nth-child(11)').should('be.visible')
            cy.get('div > :nth-child(13)').should('be.visible')
            cy.get('div > :nth-child(14)').should('be.visible')
            cy.get('div > :nth-child(15)').should('be.visible')
            cy.get('div > :nth-child(18)').should('be.visible')
            cy.get('div > :nth-child(19)').should('be.visible')
            cy.get('div > :nth-child(21)').should('be.visible')
            cy.get('div > :nth-child(22)').should('be.visible')
            cy.get('div > :nth-child(25)').should('be.visible')
            cy.get('div > :nth-child(28)').should('be.visible')
            cy.get('div > :nth-child(29)').should('be.visible')
            cy.get('div > :nth-child(32)').should('be.visible')
            cy.get('div > :nth-child(36)').should('be.visible')
            cy.get('div > :nth-child(39)').should('be.visible')
            cy.get('div > :nth-child(40)').should('be.visible')
            cy.get(':nth-child(43)').should('be.visible')
            cy.get(':nth-child(49)').should('be.visible')
            cy.get(':nth-child(51)').should('be.visible')
            cy.get(':nth-child(52)').should('be.visible')
            cy.get(':nth-child(54)').should('be.visible')
            cy.get(':nth-child(56)').should('be.visible')
            cy.get(':nth-child(58)').should('be.visible')
            cy.get(':nth-child(62)').should('be.visible')
            cy.get(':nth-child(66)').should('be.visible')
            cy.get(':nth-child(69)').should('be.visible')
            cy.get(':nth-child(73)').should('be.visible')
            cy.get(':nth-child(76)').should('be.visible')
            cy.get(':nth-child(79)').should('be.visible')
            cy.get(':nth-child(82)').should('be.visible')
            cy.get(':nth-child(92)').should('be.visible')
            cy.get(':nth-child(93) > strong').should('be.visible')
        })    

        it('Verify Terms and Conditions Page', ()=>{
            home.go_To_TermsConditions_From_Bottom()
            cy.get('.text-center').should('be.visible').and('contain.text','Terms & Conditions')
            cy.get('.wrap > .container > div > :nth-child(1)').should('be.visible')
            cy.get('.container > div > :nth-child(4)').should('be.visible')
            cy.get('div > :nth-child(7)').should('be.visible')
            cy.get('div > :nth-child(10)').should('be.visible')
            cy.get('div > :nth-child(11)').should('be.visible')
            cy.get('div > :nth-child(12)').should('be.visible')
            cy.get('div > :nth-child(13)').should('be.visible')
            cy.get('div > :nth-child(16)').should('be.visible')
            cy.get('div > :nth-child(19)').should('be.visible')
            cy.get('div > :nth-child(22)').should('be.visible')
            cy.get('div > :nth-child(23)').should('be.visible')
            cy.get('div > :nth-child(26)').should('be.visible')
            cy.get('div > :nth-child(30)').should('be.visible')
            cy.get('div > :nth-child(32)').should('be.visible')
            cy.get(':nth-child(33) > li').should('be.visible')
            cy.get(':nth-child(35) > :nth-child(1)').should('be.visible')
            cy.get(':nth-child(35) > :nth-child(2)').should('be.visible')
            cy.get(':nth-child(37) > li').should('be.visible')
            cy.get(':nth-child(39) > li').should('be.visible')
            cy.get('div > :nth-child(42)').should('be.visible')
            cy.get(':nth-child(45)').should('be.visible')
            cy.get(':nth-child(48)').should('be.visible')
            cy.get(':nth-child(51)').should('be.visible')
            cy.get(':nth-child(52)').should('be.visible')
            cy.get(':nth-child(55)').should('be.visible')
            cy.get(':nth-child(59) > :nth-child(1)').should('be.visible')
            cy.get(':nth-child(59) > :nth-child(4)').should('be.visible')
            cy.get(':nth-child(62)').should('be.visible')
            cy.get(':nth-child(63)').should('be.visible')
            cy.get(':nth-child(72)').should('be.visible')
            cy.get(':nth-child(83)').should('be.visible')
            cy.get(':nth-child(86)').should('be.visible')
            cy.get(':nth-child(92)').should('be.visible')
            cy.get(':nth-child(95)').should('be.visible')
            cy.get(':nth-child(96)').should('be.visible')
            cy.get(':nth-child(97)').should('be.visible')
            cy.get(':nth-child(98)').should('be.visible')
            cy.get(':nth-child(108)').should('be.visible')
            cy.get(':nth-child(118)').should('be.visible')
            cy.get(':nth-child(124)').should('be.visible')
            cy.get(':nth-child(127)').should('be.visible')
            cy.get(':nth-child(138)').should('be.visible')
            cy.get(':nth-child(139) > :nth-child(1) > ul > :nth-child(1)').should('be.visible')
            cy.get(':nth-child(141)').should('be.visible')
            cy.get(':nth-child(142)').should('be.visible')
            cy.get(':nth-child(143)').should('be.visible')
            cy.get(':nth-child(145) > :nth-child(1) > ul > :nth-child(4)').should('be.visible')
            cy.get(':nth-child(150)').should('be.visible')
            cy.get(':nth-child(152)').should('be.visible')
            cy.get(':nth-child(158)').should('be.visible')
            cy.get(':nth-child(159)').should('be.visible')
            cy.get(':nth-child(160)').should('be.visible')
            cy.get(':nth-child(161)').should('be.visible')

        })    
    })

})