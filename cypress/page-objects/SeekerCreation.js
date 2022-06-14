/// <reference types="cypress"/>

export class SeekerCreation{

    select_Free_trial_option(){
        cy.get('.menu > :nth-child(1) > .btn').click()
    }
    type_First_Name(value){
        //cy.get('#signupform-first_name').type(value)
        cy.get('#seekersinglesignupform-first_name').type(value)
    }
    type_Last_Name(value){
        //cy.get('#signupform-last_name').type(value)
        cy.get('#seekersinglesignupform-last_name').type(value)
    }
    type_Seeker_Email(value){
        //cy.get('#signupform-email').type(value)
        cy.get('#seekersinglesignupform-email').type(value)
    }
    // select_Time_Zone(value){
    //     cy.get('#signupform-timezone').select(value)
    // }
    type_Seeker_Password(value){
        //cy.get('#signupform-password').type(value+'{enter}')
        cy.get('#seekersinglesignupform-password').type(value)
    }
    marking_Checkbox(){
        cy.get('.custom-control-label').click({force:true})
    }
    //Create Card Page
    type_Card_Name(value){
        //cy.get('.n-group > .form-control').type(value)
        cy.get('#seekersinglesignupform-cardholder').type(value)
    }
    type_Card_Number(value){
        //cy.get('.cn-group > .input-group > .form-control').type(value)
        cy.get('#seekersinglesignupform-cardnumber').type(value)
    }
    type_Card_ExpDate(value){
        //cy.get('.expiration-date > .form-group > .form-control').type(value)
        cy.get('#seekersinglesignupform-expiration').type(value)
    }
    type_Security_Code(value){
        //cy.get('.security-code > .form-group > .input-group > .form-control').type(value)
        cy.get('#seekersinglesignupform-cvc').type(value)
    }
    type_ZipCode(value){
        //cy.get('.zc-group > .form-control').type(value)
        cy.get('#stripe-form-submit').click({force:true})
    }

    seeker_Account(){
        cy.get('.uname').click({force:true})
        cy.get('#accountNav > ul li:nth-child(3) >a').click({force:true})
    }
    
    seeker_dashboard(){
        cy.get('.uname').click({force:true})
        cy.get('#accountNav > ul > li > ul > li:nth-child(1) > a').click({force:true})
    }
    seeker_Account_Edition(val,val1){
        cy.get('#accountinformationform-first_name').clear().type(val)
        cy.get('#accountinformationform-last_name').clear().type(val1)
        //cy.get('#accountinformationform-country').select('Bolivia')
        //cy.get('#address-address_one').type(val2)
        //cy.get('#address-address_two').type(val3)
        //cy.get('#address-city').type(val4)
        //cy.get('#address-country').type(val5)
        //cy.get('#address-zip_code').type(val6+'{enter}')
        cy.get('.text-center > .btn').click({force:true})
    }
    promo_code_option(){
        cy.get('#promoCollapse').click()
    }

    type_promo_code(value){
        cy.get('input[name=corporate-code]').type(value+'{enter}')

    }

    Fill_promo_code(value1){
        //cy.get('.col-md-7 > .form-control').type(value1)
        cy.get('#seekersinglesignupform-discountcode').type(value1)
        cy.get('#apply-code').click()
        //cy.get('.col-md-5 > .btn').click()
    }

    Press_Become_guide_menu(){
        cy.get('.become-a-guide > .nav-link').click({force:true})
    }

    Press_become_guide_from_quicklink(){
        cy.get('#seeker-become-a-guide').click({force:true})
    }

    A_B_Testing(){
        cy.xpath('/html/body/div[2]/div[2]/div/div/div[1]/div[2]/form/div[4]/div/div[1]/div[1]/div[1]/h2').invoke('text').then((text) =>{
            cy.log(text)
            if(text == 'Choose Your Subscription Plan'){
                cy.log('Single Page')
            }else cy.log('Form page')
        })
    }

    

}