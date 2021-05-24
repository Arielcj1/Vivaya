/// <reference types="cypress"/>

export class SeekerCreation{

    select_Free_trial_option(){
        cy.get('.menu > :nth-child(1) > .btn').click()
    }
    type_First_Name(value){
        cy.get('#signupform-first_name').type(value)
    }
    type_Last_Name(value){
        cy.get('#signupform-last_name').type(value)
    }
    type_Seeker_Email(value){
        cy.get('#signupform-email').type(value)
    }
    select_Time_Zone(value){
        cy.get('#signupform-timezone').select(value)
    }
    type_Seeker_Password(value){
        cy.get('#signupform-password').type(value+'{enter}')
    }
    marking_Checkbox(){
        cy.get('#signupform-terms').check()
    }
    type_Card_Name(value){
        cy.get('.n-group > .form-control').type(value)
    }
    type_Card_Number(value){
        cy.get('.cn-group > .input-group > .form-control').type(value)
    }
    type_Card_ExpDate(value){
        cy.get('.expiration-date > .form-group > .form-control').type(value)
    }
    type_Security_Code(value){
        cy.get('.security-code > .form-group > .input-group > .form-control').type(value)
    }
    type_ZipCode(value){
        cy.get('.zc-group > .form-control').type(value)
        cy.get('#stripe-form-submit').click()
    }

    seeker_Account(){
        cy.get('.uname').click({force:true})
        cy.get('#accountNav > ul li:nth-child(2) >a').click({force:true})
    }
    seeker_Account_Edition(val,val1,val2,val3,val4,val5,val6){
        cy.get('#accountinformationform-first_name').clear().type(val)
        cy.get('#accountinformationform-last_name').clear().type(val1)
        //cy.get('#accountinformationform-country').select('Bolivia')
        cy.get('#address-address_one').type(val2)
        cy.get('#address-address_two').type(val3)
        cy.get('#address-city').type(val4)
        cy.get('#address-country').type(val5)
        cy.get('#address-zip_code').type(val6+'{enter}')
    }
}