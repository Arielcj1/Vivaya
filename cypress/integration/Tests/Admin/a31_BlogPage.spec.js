/// <reference types = "cypress"/>

import {Commons} from "../../../Commons/common"
import {BlogPage} from "../../../page-objects-admin/BlogPage"

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
})

describe('Guest page is displayed correctly', ()=>{
    const commons = new Commons()
    const blogPage = new BlogPage()

    beforeEach(()=>{
        commons.open_Admin_Site()
        commons.set_Admin_Credentials()
    })

    it('Verify elements within Blog Page', ()=>{
        blogPage.select_Blog_Option()
        blogPage.select_Blog_List()
        cy.get('h1').should('contain', 'Blog')
        cy.get(':nth-child(1) > :nth-child(1) > .form-group > .control-label').should('have.text','First Name')
        cy.get(':nth-child(2) > .form-group > .control-label').should('have.text','Last Name')
        cy.get(':nth-child(3) > .form-group > .control-label').should('have.text','Email')
        cy.get(':nth-child(4) > .form-group > .control-label').should('have.text','Status')
        cy.get('.col-sm-6 > .form-group > .control-label').should('have.text', 'Title')
        cy.get('.box-footer > .btn').should('contain', 'Search')
        cy.get('.box-tools > .btn').should('contain', 'Write new')
    })

    it('Write a new Blog' ,()=>{
        blogPage.select_Blog_Option()
        blogPage.select_Blog_WriteNew()
        blogPage.type_WriteNew_title('Automation')
        blogPage.select_offerings('Anusara Yoga')
        blogPage.upload_Blog_Image()
        blogPage.type_newBlog_Description('This is an automation blog')
        blogPage.select_NewBlog_Status('Published')
        blogPage.type_NewBlog_intro('Automation testing')
        blogPage.save_new_blog()
        cy.get('#w2-success').should('be.visible')
    })

    it('Search a new Blog' ,()=>{
        blogPage.select_Blog_Option()
        blogPage.select_Blog_List()
        blogPage.search_by_title('Automation')
        cy.wait(2000)
        cy.get('tbody > tr > :nth-child(2)').should('contain','Automation')

    })

    it('Edit a new Blog' ,()=>{
        blogPage.select_Blog_Option()
        blogPage.select_Blog_List()
        blogPage.search_by_title('Automation')
        cy.wait(2000)
        blogPage.Option_blog(1) //Edit the option 1
        blogPage.type_WriteNew_title('Automation Edit')
        blogPage.type_NewBlog_intro('Automation testing Edit')
        blogPage.type_newBlog_Description('This is an automation blog Edit')
        cy.wait(2000)

        blogPage.save_new_blog()
        cy.wait(2000)
        cy.get('#w2-success').should('be.visible')

    })

    it('Change the Status to Pending' ,()=>{
        blogPage.select_Blog_Option()
        blogPage.select_Blog_List()
        blogPage.search_by_title('Automation Edit')
        cy.wait(2000)
        blogPage.Option_blog(1) //Edit the option 1
        blogPage.select_NewBlog_Status('Pending')
        cy.wait(2000)
        blogPage.save_new_blog()
        cy.wait(2000)
        blogPage.search_by_title('Automation Edit')
        cy.get('.label').should('contain','Pending')

    })



    
    it('Delete a new Blog' ,()=>{
        blogPage.select_Blog_Option()
        blogPage.select_Blog_List()
        blogPage.search_by_title('Automation Edit')
        cy.wait(2000)
        blogPage.Option_blog(2) //Eliminar is the option 2
        cy.get('#w2-success').should('be.visible')

    })
})