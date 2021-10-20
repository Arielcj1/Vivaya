/// <reference types="cypress"/>
export class Gympass {

    select_gympass(){
        cy.get(':nth-child(14) > [href="#"] > :nth-child(2)').click({force:true})
    }

    select_list(){

        cy.get('.menu-open > .treeview-menu > :nth-child(1) > a > span').click({force:true})
    }

    select_selected_guides(){
        cy.get('.menu-open > .treeview-menu > :nth-child(2) > a > span').click({force:true})
    }

    select_import_seeker(){
        cy.get('.menu-open > .treeview-menu > :nth-child(3) > a > span').click({force:true})
    }

    fill_guide_gympass(value){
        cy.get('#selectedguidesearch-email').type(value)
    }
    
    click_button(){
        cy.get('.box-footer > .btn').click({force:true})
    }

    add_guide_gympass(){
        cy.get('#w2 > .btn').click({force:true})
    }

    delete_guide_gympass(){
        cy.xpath('/html/body/div[1]/div/section[2]/div/div/div/div/div[5]/div/table/tbody/tr/td[4]/a[2]/span').click({force:true})
    }

    search_event_gympass(value){
        cy.get('#eventsearch-name').type(value)
    }

    button_search_gympass(){
        cy.get('.box-footer > .btn').click({force:true})
    }


     
     }
     