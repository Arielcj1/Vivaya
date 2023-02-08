/// <reference types="cypress"/>

import { Commons } from "../../../Commons/Common";


Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  describe('Recording Page',()=>{
    const commons = new Commons()

    beforeEach(()=>{
      commons.open_Web_Site()
      
    })

    it.skip('Verify that user can go to the Recording page', () => {
        cy.visit('https://stage.vivayalive.com/recordings')
        //cy.xpath('/html/body/div[2]/div[1]/ul/li[2]/div/a[1]').click()    schedule
        //cy.xpath('/html/body/div[2]/div[1]/ul/li[2]/div/a[2]').click()      //Recording
        //cy.get('.dropdown-toggle').click()
        //cy.get('.dropdown-toggle').click()

        //cy.get('[href="/recordings"]').click()

        cy.get('#banner').should('contain','Recordings')
        //cy.get('#mainNav > :nth-child(1) > .nav-link').click()
    })

    it.skip('Verify that a class can be searched for by name with the Search class name browser.', () => {
      cy.visit('https://stage.vivayalive.com/recordings')
      cy.get('#eventsearch-q').type('test class stage').wait(2000).type('{enter}')
      //cy.contains('test class stage').should('be.visible')
      cy.wait(3000)
      cy.get('#eventsearch-q').clear()
      cy.get('.col-lg-2 > .btn').click()
    })

    it.skip('Verify that a guide can be found with the Find guide search.', () => {
      cy.visit('https://stage.vivayalive.com/recordings')
      cy.get('.twitter-typeahead > #w0').type('GuideD Delga')
      cy.xpath('/html/body/div[2]/div[3]/div/form/div[1]/div[1]/div/div[2]/div/div[1]/span/div/div/div').click()
      cy.get('.col-lg-2 > .btn').click()
      //cy.xpath('/html/body/script[37]').should('be.visible').and('have.text', 'GuideD Delga')
      cy.get(':nth-child(1) > .text-capitalize > .g-name').should('be.visible').and('have.text', 'GuideD Delga')
    })

    it('Verify that you can filter by Main Offering with the Offering filter.', () => {
      cy.visit('https://stage.vivayalive.com/recordings')
      cy.get('.CaptionCont').click()
      cy.get(':nth-child(1) > label').click()
      cy.wait(3000)
      cy.get('.CaptionCont').click()
      cy.get('#reset-select-offering').click()
      cy.get('.CaptionCont').click()
    })

  })