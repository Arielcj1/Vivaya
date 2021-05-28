///<reference types="cypress"/>
export class SeminarPage {

    select_Seminar_Option(){
        cy.get(':nth-child(7) > [href="#"] > :nth-child(2)').click()
    }

    select_Seminar_List(){
        cy.get('.menu-open > .treeview-menu > :nth-child(1) > a').click()
    }

    search_A_Seminar(value){
        cy.get('#seminarsearch-name').type(value)
    }

    click_Search_Button(){
        cy.get('.box-footer > .btn').click()
    }
    //After perfom a search for specific Seminar, the user select the first Trash icon
    //in order to delete the seminar founded    
    select_TrashIcon(){
        cy.xpath("//span[@class='glyphicon glyphicon-trash']").click()
    }

    select_Refunds_Option(){
        cy.get('.menu-open > .treeview-menu > :nth-child(2) > a').click()
    }
    
}