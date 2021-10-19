/// <reference types="cypress"/>
export class Analytics {

   select_analytics(){
    cy.get(':nth-child(18) > [href="#"] > :nth-child(2)').click({force:true})
   }

   select_member_growth(){
    cy.get('.menu-open > .treeview-menu > :nth-child(1) > a > span').click({force:true})
   }

   select_classes_report(){
    cy.get('.menu-open > .treeview-menu > :nth-child(2) > a > span').click({force:true})
   }
    
   select_taken_classes_report(){
    cy.get('.menu-open > .treeview-menu > :nth-child(3) > a > span').click({force:true})
   }

   select_guides_report(){
    cy.get('.menu-open > .treeview-menu > :nth-child(4) > a > span').click({force:true})
   }
    
    
    }
    