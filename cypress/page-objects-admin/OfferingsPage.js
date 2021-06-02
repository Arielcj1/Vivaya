/// <reference types="cypress"/>
export class OfferingsPage {
  
    select_Offering_Option(){
        cy.get(':nth-child(13) > [href="#"] > :nth-child(2)').click()
    }
    select_Offering_List(){
        cy.get('.menu-open > .treeview-menu > :nth-child(1) > a > span').click()
    }
    select_Offering_New(){
        cy.get('.menu-open > .treeview-menu > :nth-child(2) > a > span').click()
    }
    //Add new offering - fields
    type_Offer_name(value){
        cy.get('#offer-name').type(value)
    }
    type_Offer_slug(value){
        cy.get('#offer-slug').clear().type(value)
    }
    type_Offer_Content(value){
        cy.iframe('.cke_wysiwyg_frame').click()
        cy.iframe('.cke_wysiwyg_frame').clear().type(value)
    }
    select_Parent_Offer(value){
        cy.get('#offer-parent_id').select(value)
    }
    check_Is_Parent(){
        cy.get('#isParent').check()
    }
    upload_Offer_Picture(value){
        cy.get('input[id=offer-picture]').attachFile(value)
    }
    type_Meta_Title(value){
        cy.get('#offer-meta_title').clear().type(value)
    }
    type_Meta_Description(value){
        cy.get('#offer-meta_description').clear().type(value)
    }
    save_New_Offer(){
        cy.get('.box-footer > .btn').click()
    }
    // Find the last offer
    search_The_Last_Offer_Created(){
        cy.get('.summary > :nth-child(2)').invoke('text').then((text)=>{
            if(text>10){
                cy.get('.last > a').click()
            }
        })
    }
    select_The_Last_Offer_Created(option){
        cy.get('.summary > :nth-child(2)').invoke('text').then((text)=>{
            if(text>10){
                var aux = text-10
                cy.xpath('//*[@id="w0"]/table/tbody/tr['+aux+']/td[5]/a['+option+']/span').click()
            }
            else{
                cy.xpath('//*[@id="w0"]/table/tbody/tr['+text+']/td[5]/a['+option+']/span').click()
            }
        })
    }
    //Options for child offer
    options_For_Child_Offer(option){
        cy.xpath('//*[@id="w1"]/table/tbody/tr[1]/td[5]/a['+option+']/span').click()
    }
}