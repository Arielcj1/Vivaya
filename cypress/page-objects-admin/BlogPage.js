/// <reference types="cypress"/>
export class BlogPage {
  
    select_Blog_Option(){
        cy.get(':nth-child(11) > [href="#"] > :nth-child(2)').click()
    }
    select_Blog_List(){
        cy.get('.menu-open > .treeview-menu > :nth-child(1) > a > span').click()
    }
    select_Blog_WriteNew(){
        cy.get('.menu-open > .treeview-menu > :nth-child(2) > a > span').click()
    }
    type_Blog_FirstName(value){
        cy.get('#blogpostsearch-first_name').type(value)
    }
    type_Blog_LastName(value){
        cy.get('#blogpostsearch-last_name').type(value)
    }
    type_Blog_Email(value){
        cy.get('#blogpostsearch-email').type(value)
    }
    select_Blog_status(value){
        cy.get('#blogpostsearch-status').select(value)
    }
    type_Blog_Title(value){
        cy.get('#blogpostsearch-title').type(value)
    }
    //WriteNew view
    type_WriteNew_title(value){
        cy.get('#blogpost-title').clear().type(value)
    }
    select_offerings(value){
        cy.get('.select2-search__field').type(value+'{enter}')
    }
    upload_Blog_Image(){
        cy.get('input[id=blogpost-uploadedimage]').attachFile('blog.jpg')
    }
    type_NewBlog_intro(value){
        cy.get('#blogpost-intro').clear().type(value)
    }
    type_newBlog_Description(value){
        cy.iframe('.cke_wysiwyg_frame').click()
        cy.iframe('.cke_wysiwyg_frame').clear().type(value)
    }
    select_NewBlog_Status(value){
        cy.get('#blogpost-status').select(value)
    }
}