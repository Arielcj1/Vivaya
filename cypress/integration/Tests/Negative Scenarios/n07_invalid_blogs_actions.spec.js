/// <reference types = "cypress"/>

import {Commons} from "../../../Commons/common"
import {BlogPage} from "../../../page-objects-admin/BlogPage"
import { HomePage } from "../../../page-objects/Home";
import {GuidesPage } from "../../../page-objects/GuidesPage";

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
})

describe('Negative scenarios for Blogs', ()=>{
    const commons = new Commons()
    const blogPage = new BlogPage()
    const homePage = new HomePage()
    const guidesPage = new GuidesPage()

    beforeEach(()=>{
     
    })

    it('Verify validation of fields of Blogs from Admin ' ,()=>{
        commons.open_Admin_Site()
        commons.set_Admin_Credentials()
        blogPage.select_Blog_Option()
        blogPage.select_Blog_WriteNew()
        cy.get('.box-footer > .btn').click({force:true})
        cy.get('.field-blogpost-title > .help-block').should('contain', 'Title cannot be blank.')
        cy.get('.field-blogpost-content > .control-label').should('contain', 'Content')
        cy.get('.field-blogpost-content > .help-block').should('contain', 'Content cannot be blank.')

    })

    it('Verify validation of fields of Blogs from WebSite',()=>{
        commons.open_Web_Site()
        homePage.select_Login()
        commons.set_Guide_Credentials_One()
        homePage.submit_Credentials()
        guidesPage.select_write_blog()
        cy.get('.box-footer > .btn').click({force:true})
        cy.get('.field-blogpost-title > .col-sm-9 > .help-block').should('contain','Title cannot be blank.')
        cy.get('.field-blogpost-content > .control-label').should('contain','Content')
        cy.get('.col-xs-12 > .help-block').should('contain','Content cannot be blank.')


    })
    
})