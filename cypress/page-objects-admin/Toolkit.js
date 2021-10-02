/// <reference types="cypress"/>
export class Toolkit {
  
    Open_toolkit_admin(){
        cy.get(':nth-child(18) > [href="#"]').click({force:true})
        cy.get('.menu-open > .treeview-menu > li > a').click({force:true})


    }
    
    create_folder_toolkit(value){
        cy.get('#modal-btn-toolkit').click({force:true})
        cy.get('#folder-name').type(value)
        cy.get('.modal-footer > .btn-primary').click({force:true})
    }
    
    search_folder_created(value){
        cy.contains(value).first().should('be.visible')
    }
    
    click_folder_created(value){
        cy.contains(value).first().click({force:true})
        cy.wait(1000)
    }
}