// this is a comment test 
/// <reference types="cypress"/>

import { Commons } from "../../../Commons/Common";
import { EventsPage } from "../../../page-objects-admin/EventsPage";
import { GuidePage } from "../../../page-objects-admin/GuidePage";
import { Dashboard } from "../../../page-objects/Dashboard";
import { EventCreationPage } from "../../../page-objects/EventCreationPage";
import { HomePage } from "../../../page-objects/Home";


Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });


  describe('Create Influencer Guide',()=>{
    const commons = new Commons()
    const guidePage = new GuidePage()
    const eventsPage = new EventsPage()
    const homePage = new HomePage()
    const dashboard = new Dashboard()
    const eventCreationPage = new EventCreationPage()

    beforeEach(()=>{
      commons.open_Admin_Site()
      
    })

    it('Verify that a guide can become an influencer by checking the checkbox from admin', ()=>{
      commons.set_Admin_Credentials()
      guidePage.select_Guide_Option()
      guidePage.select_Guide_New()
      guidePage.type_About_Me('about me')
      guidePage.type_Mantra('mantra')
      guidePage.type_Philosiphy('philosophy')
      guidePage.type_Guide_Firstname('guide')
      guidePage.type_Guide_Lastname('test')
      guidePage.type_Guide_Email('influencerGuide@automation.com')
      guidePage.type_Guide_Number('+59172744400')
      guidePage.select_TimeZone('(UTC-04:00) La Paz')

      guidePage.select_Guide_State('Texas')
      guidePage.upload_guide_photo()

      guidePage.type_Guide_Password('password')
      guidePage.type_Guide_ConfirmPassword('password')
      guidePage.type_Revenue_Percentage('65')
      cy.get('#guide-one_on_one_session_price').type('80')

      guidePage.type_Price_OneOne('100')
      cy.get('#guide-tiktok_url').type('https://tiktok.com/yoga')
      cy.get('#guide-influencer > :nth-child(1) > input').click()  //Check Influencer option
      cy.get('#guide-influencer_donate > :nth-child(1) > input').click()  //Check Donate option
      cy.get('#guide-influencer_video_url').type('https://www.youtube.com/watch?v=I9RDYqSXjHA')
      cy.get('#guide-influencer_description').type('Yoga for beginner')

      cy.get('.box-footer > .btn').click()     //Click on Save button
      
      cy.get('#w2-success').should('contain', 'Guide successfully added')
    })

    it('Verify that the influencer guide data can be edited from Admin.', () => {
      commons.set_Admin_Credentials()
      guidePage.select_Guide_Option()
      
      guidePage.select_Guide_List()
      guidePage.find_EmailGuide('influencerGuide@automation.com', '2') //num 2 for edition
      guidePage.type_About_Me('About me automation edited')
      guidePage.type_Mantra('Mantra automation edited')
      guidePage.type_Guide_Firstname('NameAut')
      guidePage.type_Guide_Lastname('LastNameAut')
      guidePage.type_Philosiphy('Philosophy automation edited')
      guidePage.type_Revenue_Percentage('66')
      guidePage.type_Price_OneOne('105')
      cy.get('#guide-influencer_description').clear().type('Yoga for beginner EDITED')
      cy.get('.box-footer > .btn').click()     //Click on Update button
      cy.get('#w2-success').should('contain', 'Guide successfully updated')

      //guidePage.select_Guide_Option()
      //  guidePage.select_Guide_List()
        guidePage.find_EmailGuide('influencerGuide@automation.com', '1') //num 1 for offering
        guidePage.add_New_Offering()
        guidePage.select_Guide_Offer('Kula Yoga')
        guidePage.type_Guide_YearsTeaching('3{enter}')
        cy.get('#w1-success').should('contain', 'Guide Offering successfully added')
    })

    it('Verify that the events created from Admin become Free Event.', () => {
      commons.set_Admin_Credentials()
      eventsPage.select_Events_Option()
      eventsPage.select_Events_New()
      eventsPage.type_Event_Name('Free Class')
      eventsPage.type_Description_Event('Automation description for free event class')
      eventsPage.type_Start_Date()
      eventsPage.type_Start_Time('7')
      eventsPage.type_End_Time('9')
      eventsPage.type_Event_Guide('NameAut')
      eventsPage.type_Event_Focus('All your body')
      eventsPage.type_Event_HowToComePrepared('Auto test how to come prepared')
      cy.get('#w2-success').should('contain','Events have been created.')
    })

    it('Verify that the events created from the dashboard become Free Events.' , ()=> {
      commons.open_Web_Site()
      homePage.select_Login()
      commons.set_Guide_Influencer()
      homePage.submit_Credentials()

      cy.wait(3000)
      cy.get(':nth-child(2) > :nth-child(2) > :nth-child(5) > .btn').click()
      //cy.get(':nth-child(5) > .btn').click()
      eventCreationPage.add_EventName('Class Free event')
      cy.wait(2000)
      eventCreationPage.add_Description('This is a Test Class')
      eventCreationPage.add_Custom_Number_Of_Days(2)
      eventCreationPage.custom_Start_Time(5)
      eventCreationPage.press_Add()
      cy.get('#w3-success-0').should('contain','Events have been created.')
      
    })

    it('Verify that description and video can be added to the influencer guide.' , ()=> {
      commons.open_Web_Site()
      homePage.select_Login()
      commons.set_Guide_Influencer()
      homePage.submit_Credentials()
      dashboard.select_Edit_Contact_Info()

      cy.get(':nth-child(21) > .col-8 > h3').should('contain','Influencer Info')
      cy.get('.field-guideapplicationstep4-influencer_description > .col-md-2').should('contain','Description')
    })

    it('Create Workshop Event', () => {
      commons.open_Web_Site()
      homePage.select_Login()
      commons.set_Guide_Influencer()
      homePage.submit_Credentials()
      
      dashboard.add_Workshop()
      eventCreationPage.add_EventName('Workshop1')
      cy.wait(2000)
      eventCreationPage.add_Description('This is a Test Workshop')
      eventCreationPage.add_Custom_Number_Of_Days(3)
      eventCreationPage.add_Price('40')
      cy.wait(500)
      eventCreationPage.press_Add()
      cy.get('#w3-success-0').should('contain', 'Events have been created.')

      
    })

    it('Verify that the active influencer guide is displayed on the Homepage in Featured Events.' , ()=> {
      commons.open_Web_Site()
      cy.get('.featured-guides > .container > .text-center').should('contain', 'Featured Events')
      cy.contains('Nameaut Lastnameaut').should('be.visible')
      cy.contains('Free Class').should('be.visible')
      cy.contains('workshop1').should('be.visible')
    })

    it('Verify that there is a donate button in the Guide Profile.' , ()=> {
      commons.open_Web_Site()
      cy.get('#mainNav > :nth-child(4) > .nav-link').click()
      cy.get('#guidesearch-q').type('Nameaut{enter}')
      cy.wait(2000)
      cy.get('.img-circle').click()
      cy.wait(1000)
      cy.get(':nth-child(3) > .btn').should('contain','DONATE')
      cy.wait(1000)
      cy.get('.guide-view > :nth-child(3) > .btn').click()
      cy.get('.donation-container > h3').should('contain','Your Contribution is Appreciated')
    })

  })