/// <reference types="cypress"/>

import {Commons} from "../../../Commons/Common"
import {ZoomRecordingsPage} from "../../../page-objects-admin/ZoomRecordingsPage"
import {EventsPage} from "../../../page-objects-admin/EventsPage"

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  })

describe('Test and Verify Zoom page',()=>{
    const commons = new Commons()
    const eventsPage = new EventsPage()
    const zoomRPage = new ZoomRecordingsPage()

    beforeEach(()=>{
        commons.open_Admin_Site()
        commons.set_Admin_Credentials()
    })
    it('Verify Elements within Zoom recordings page',()=>{
        eventsPage.select_Events_Option()
        zoomRPage.select_Zoom_Recordings_Option()

        cy.get('h1').should('contain', 'Events')
        cy.get(':nth-child(1) > .form-group > .control-label').should('have.text','Guide Name')
        cy.get('#eventsearch-guidename').should('be.visible')
        cy.get(':nth-child(2) > .form-group > .control-label').should('have.text','Event Name')
        cy.get('#eventsearch-name').should('be.visible')
        cy.get(':nth-child(3) > .form-group > .control-label').should('have.text','From Date')
        cy.get('#eventsearch-fromdate').should('be.visible')
        cy.get(':nth-child(4) > .form-group > .control-label').should('have.text','To Date')
        cy.get('#eventsearch-todate').should('be.visible')
        cy.get(':nth-child(5) > .form-group > .control-label').should('have.text','Status')
        cy.get('#eventsearch-status').should('be.visible')
        cy.get(':nth-child(6) > .form-group > .control-label').should('have.text','Zoom Status')
        cy.get('#eventsearch-zoom_status').should('be.visible')
        cy.get('.box-footer > .btn').should('be.visible').and('have.text', 'Search')
        cy.get(':nth-child(3) > .box-title').should('be.visible').and('have.text', 'List')
        
        //Verify List elements
        cy.get('[style="width:50px;"] > a').should('be.visible').and('contain.text', 'ID')
        cy.get('tr > :nth-child(2) > a').should('be.visible').and('contain.text', 'Event Name')
        cy.get('thead > tr > :nth-child(3)').should('be.visible').and('contain.text', 'Guide Name')
        cy.get('tr > :nth-child(4) > a').should('be.visible').and('contain.text', 'Start Date')
        cy.get('thead > tr > :nth-child(5)').should('be.visible').and('contain.text', 'Zoom  Link')
        cy.get('thead > tr > :nth-child(6)').should('be.visible').and('contain.text', 'Time  Avaliable')
        cy.xpath("//tbody[1]/tr[1]//a[.='Save']").should('be.visible').and('contain.text', 'Save')
    
    })

    it('Search an Event and Verify Zoom options',()=>{
        eventsPage.select_Events_Option()
        zoomRPage.select_Zoom_Recordings_Option()

        //Search Harvey's events to verify the recording elements
        zoomRPage.type_Guide_Name('Harvey')
        //zoomRPage.substract_Custom_From_Date(0)
        cy.get('#eventsearch-fromdate').clear().type('Jan-01-2021')
        zoomRPage.type_Current_Date()
        zoomRPage.click_Search_Button()
        cy.wait(3000)

        cy.get('#w1').should('be.visible')
        cy.xpath('//*[@id="w1"]/table/tbody/tr[1]/td[5]/div/a').should('be.visible').and('contain.text', 'View Recording 1')
        cy.get('#w1 > table > tbody > tr:nth-child(1) > td:nth-child(5) > div > a').should('have.attr', 'href').and('include', 'https://vivaya.zoom.us/rec/play')

        cy.xpath('//*[@id="w1"]/table/tbody/tr[1]/td[5]/div/a').click() //select first View recording in the list
        
    })
        
})  
