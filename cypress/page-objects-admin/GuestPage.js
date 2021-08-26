/// <reference types="cypress"/>
export class GuestPage {
  
    select_Guest_Option(){
        cy.get(':nth-child(4) > [href="#"] > :nth-child(2)').click()
    }

    select_Guest_List(){
        cy.get('.menu-open > .treeview-menu > :nth-child(1) > a > span').click()
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


}