/// <reference types="cypress"/>
export class GuestPage {
  
    select_Guest_Option(){
        cy.get(':nth-child(4) > [href="#"] > :nth-child(2)').click({force:true})
    }

    select_Guest_List(){
        cy.get('.menu-open > .treeview-menu > :nth-child(1) > a > span').click({force:true})
    }

    select_guest_add(){
        cy.get('.menu-open > .treeview-menu > :nth-child(2) > a > span').click({force:true})
    }
    
    make_a_Search_by_email(value){
        cy.get('#guestsearch-email').type(value+'{enter}')
        cy.wait(1500)
    }
    type_Guest_Name(value){
        cy.get('#guest-name').clear().type(value)
    }
    type_Guest_email(value){
        cy.get('#guest-email').clear().type(value+'{enter}')
    }
    guests_Options(value){
        cy.xpath('//*[@id="w1"]/table/tbody/tr[1]/td[5]/a['+value+']/span').click()
    }
    type_Guest_Name_clear(value){
        cy.get('#guest-name').clear()
    }
    type_Guest_email_clear(value){
        cy.get('#guest-email').clear().type('{enter}')
    }

    fill_guest_name(value){
        cy.get('#guest-firstname').type(value)
    }

    fill_guest_lastname(value){
        cy.get('#guest-lastname').type(value)
    }



}