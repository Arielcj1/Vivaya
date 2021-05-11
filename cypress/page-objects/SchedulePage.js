/// <reference types="cypress"/>
export class SchedulePage {
  
    select_Schedule_Tab_When_Logout(){
      cy.get('#mainNav > :nth-child(2) > a').click()
    }

    select_Schedule_Tab_When_Login(){
      cy.get('#mainNav > :nth-child(1) > a').click()
      
    }

    select_NextDay_AfterCurrent_In_Schedule(){
      cy.get('.slick-current > a').click()
    }

    select_specific_Event(value){
      cy.get('.site-container').contains(value).click()
      cy.get('a.btn').click()
      
    }

    select_Cancel_From_Schedule(){
      cy.get('p > .btn').click()

    }

    confirm_Cancelation_From_Schedule(){
      cy.get('.btn-success').click()
    }



}