/// <reference types="cypress"/>
export class AdminMembershipPage {
  
    select_Membership_Option(){
        cy.get(':nth-child(8) > [href="#"] > :nth-child(2)').click()
    }
    select_Membership_List(){
        cy.get('.menu-open > .treeview-menu > :nth-child(1) > a > span').click()
    }
    click_On_AddNew(){
        cy.get('.box-tools > .btn').click()
    }
    type_Title(value){
        cy.get('#membershipsearch-title').type(value+'{enter}')
        cy.wait(1000)
    }
    type_Price(value){
        cy.get('#membershipsearch-price').type(value+'{enter}')
        cy.wait(1000)
    }
    select_Membership_Type(value){
        cy.get('#membershipsearch-type').select(value+'{enter}')
        cy.wait(1000)
    }
    select_Membership_Language(value){
        cy.get('#membershipsearch-language').select(value+'{enter}')
        cy.wait(1000)
    }
    //Add new view
    type_New_Membership_Name(value){
        cy.get('#membership-title').clear().type(value)
    }
    type_Membership_Body(value){
        cy.iframe('.cke_wysiwyg_frame').click()
        cy.iframe('.cke_wysiwyg_frame').clear().type(value)
    }
    check_Offer(value){
        cy.wait(500)
        cy.get('#membershipformmodel-offers > :nth-child('+value+') > input').check()//1. Yoga, 3. Meditation, 5. Coaching
    }
    check_Event_Type(value){
        cy.wait(500)
        cy.get('#membershipformmodel-event_types > :nth-child('+value+') > input').check()//1. class, 3. workshop, 5. 1-1 sesion
    }
    type_Price(value){
        cy.get('#membership-price').clear().type(value)
    }
    type_Valid_For(value){
        cy.get('#membership-valid_for').clear().type(value)
    }
    select_Type(value){
        cy.get('#add-membershipformmodel-type').select(value)
    }
    select_Purchase_Type(value){
        cy.get('#membership-purchase_type').select(value)
    }
    date_Valid_Until(value){
        var moment = require('moment');
        const customDate = moment().add(value, 'days').format('MMM-DD-YYYY')
        const typeDate = cy.get('#membership-expiration_date').type(customDate)
    }
    type_Quantity(value){
        cy.get('#add-membershipformmodel-pack').clear().type(value+'{enter}') //this line will save all changes
    }
    //for edition
    select_Membership_option(value){
        cy.xpath('//*[@id="w1"]/table/tbody/tr/td[9]/a['+value+']/span').click()//1 edition, 2 delete
    }
}
