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
        cy.get('thead > tr > :nth-child(5)').should('be.visible').and('contain.text', 'Zoom Link')
        cy.get('thead > tr > :nth-child(6)').should('be.visible').and('contain.text', 'Time Avaliable')
        cy.xpath("//tbody[1]/tr[1]//a[.='Save']").should('be.visible').and('contain.text', 'Save')
    
    })
        
})  
