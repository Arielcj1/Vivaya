/// <reference types = "cypress"/>

import {Commons} from "../../../Commons/common"
import {SeminarPage} from "../../../page-objects-admin/SeminarPage"
import { HomePage } from "../../../page-objects/Home";
import {Dashboard} from "../../../page-objects/Dashboard";
import {SeminarCreationPage} from "../../../page-objects/SeminarCreationPage"

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
})

describe('Verify Seminar Page admin', ()=>{
    const commons = new Commons()
    const homePage = new HomePage()
    const dashboard = new Dashboard()
    const seminars = new SeminarCreationPage()
    const seminarPage = new SeminarPage()

    beforeEach(()=>{
        commons.open_Admin_Site()
        commons.set_Admin_Credentials()
    })

    it.skip('Test elements are present in Seminar page',()=>{
        seminarPage.select_Seminar_Option()
        seminarPage.select_Seminar_List()
        //verify elements
        cy.get('h1').should('contain', 'Seminars')
        cy.get(':nth-child(1) > .form-group > .control-label').should('have.text','Guide Name')
        cy.get('#seminarsearch-guidename').should('be.visible')
        cy.get(':nth-child(2) > .form-group > .control-label').should('have.text','Seminar Name')
        cy.get('#seminarsearch-name').should('be.visible')
        cy.get(':nth-child(3) > .form-group > .control-label').should('have.text','From Date')
        cy.get('#seminarsearch-fromdate').should('be.visible')
        cy.get(':nth-child(4) > .form-group > .control-label').should('have.text','To Date')
        cy.get('#seminarsearch-todate').should('be.visible')
        cy.get(':nth-child(5) > .form-group > .control-label').should('have.text','Public')
        cy.get('#seminarsearch-public').should('be.visible')

        cy.get('.box-footer > .btn').should('be.visible').and('have.text', 'Search')
        cy.get(':nth-child(3) > .box-title').should('be.visible').and('have.text', 'List')
        cy.get('[style="width:50px;"] > .desc').should('be.visible').and('have.text', 'Id')
        cy.get(':nth-child(2) > .desc').should('be.visible').and('have.text', 'Name')
        cy.get('thead > tr > :nth-child(3)').should('be.visible').and('have.text', 'Guide Name')
        cy.get('thead > tr > :nth-child(4)').should('be.visible').and('have.text', 'Start Date')
        cy.get('thead > tr > :nth-child(5)').should('be.visible').and('have.text', 'End Date')
        cy.get('thead > tr > :nth-child(6)').should('be.visible').and('have.text', 'Published')

    })

    it.skip('Create a Seminar in Website', ()=>{
        commons.open_Web_Site()
        homePage.select_Login()
        commons.set_Guide_Credentials_One()
        homePage.submit_Credentials()
        dashboard.go_to_Dashboard_From_Menu()
        dashboard.select_Add_Seminar()
        seminars.type_Seminar_Name("Seminar Manu")
        seminars.add_Description("This is a Seminar for Automation Proj")
        seminars.add_Custom_Start_Date(8)
        seminars.add_Custom_End_Date(15)
        seminars.select_Main_Offering('Yoga')
        seminars.add_Seminar_Price(150)
        seminars.select_Allow_Independent_Events()
        seminars.select_Publish_Button()

        cy.get('#w0-success-0').should('contain', 'Seminar has been created.')
        cy.get('h4 > a').should('contain', 'Seminar Manu')

    })  
    
    it.skip('Test elements are present in Seminar page',()=>{
        seminarPage.select_Seminar_Option()
        seminarPage.select_Seminar_List()
        seminarPage.search_A_Seminar('Seminar Manu')
        seminarPage.click_Search_Button()
        cy.get('tbody > tr > :nth-child(2)').should('be.visible').and('contain.text', 'Seminar Manu')
        cy.wait(3000)
        //delete the seminar and veirfy semianr is deleted
        seminarPage.select_TrashIcon()
        seminarPage.search_A_Seminar('Seminar Manu')
        seminarPage.click_Search_Button()
        cy.get('.empty').should('be.visible').and('contain.text', 'No results found.')
    })    

    it('Verify elements in Refunds page',()=>{
        seminarPage.select_Seminar_Option()
        seminarPage.select_Refunds_Option()
        //Verify elements are visible
        cy.get('h1').should('contain', 'Refunds')
        cy.get(':nth-child(1) > .form-group > .control-label').should('have.text','First Name')
        cy.get('#seminarrefundsearch-firstname').should('be.visible')
        cy.get(':nth-child(2) > .form-group > .control-label').should('have.text','Last Name')
        cy.get('#seminarrefundsearch-lastname').should('be.visible')
        cy.get(':nth-child(3) > .form-group > .control-label').should('have.text','Email')
        cy.get('#seminarrefundsearch-email').should('be.visible')
        cy.get(':nth-child(4) > .form-group > .control-label').should('have.text','Seminar Name')
        cy.get('#seminarrefundsearch-seminarname').should('be.visible')
        cy.get(':nth-child(5) > .form-group > .control-label').should('have.text','Refund Status')
        cy.get('#seminarrefundsearch-refundstatus').should('be.visible')
        cy.get('.box-footer > .btn').should('be.visible').and('have.text', 'Search')
        cy.get(':nth-child(3) > .box-title').should('be.visible').and('have.text', 'List')

        cy.get('tr > :nth-child(1) > a').should('be.visible').and('have.text', 'User ID')
        cy.get('tr > :nth-child(2) > a').should('be.visible').and('have.text', 'First Name')
        cy.get('tr > :nth-child(3) > a').should('be.visible').and('have.text', 'Last Name')
        cy.get('tr > :nth-child(4) > a').should('be.visible').and('have.text', 'Email')
        cy.get('tr > :nth-child(5) > a').should('be.visible').and('have.text', 'Seminar Name')
        cy.get('tr > :nth-child(6) > a').should('be.visible').and('have.text', 'Price')
        cy.get('[style="width:50px;"]').should('be.visible').and('have.text', 'Refund Status')
    })
})    