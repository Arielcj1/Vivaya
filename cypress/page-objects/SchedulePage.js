/// <reference types="cypress"/>
export class SchedulePage {
  
    select_Schedule_Tab_When_Logout(){
      cy.get('#mainNav > :nth-child(2) > a').click({force:true})
    }

    select_Schedule_Tab_When_Login(){
      //cy.get('#mainNav > :nth-child(1) > a').click({force:true})
      cy.xpath('/html/body/div[2]/div[2]/ul/li[1]/div/a[1]').click({force:true})
      
    }

    select_NextDay_AfterCurrent_In_Schedule(){
      cy.get('.slick-current > a').click({force:true})
    }

    select_specific_Event(value){
      cy.get('.site-container').contains(value).click({force:true})
      cy.get('a.btn').click({force:true})
      
    }

    select_Cancel_From_Schedule(){
      cy.get('p > .btn').click({force:true})

    }

    confirm_Cancelation_From_Schedule(){
      cy.get('.btn-success').click({force:true})
    }



}