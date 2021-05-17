/// <reference types = "cypress"/>

import {Commons} from "../../../Commons/common"
import {SeekerPage} from "../../../page-objects-admin/SeekerPage"

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
})

describe('Seeker Page admin', ()=>{
    const commons = new Commons()
    const seekerpage = new SeekerPage()
    beforeEach(()=>{
        commons.open_Admin_Site()
        commons.set_Admin_Credentials()
    })
    it('Seeker creation from admin',()=>{
        seekerpage.select_Seeker_Option()
        seekerpage.select_Seeker_New()
        seekerpage.type_Seeker_FirstName('SeekerAuto')
        seekerpage.type_Seeker_LastName('Mation')
        seekerpage.type_New_Seeker_Email('quiroga.rosasrafael@gmail.com')
        cy.get('#user-phone_number').type('+59176405837')
        seekerpage.select_Seeker_TimeZone('(UTC-04:00) Georgetown, La Paz, Manaus, San Juan')
        seekerpage.type_Seeker_Password('password')
        cy.get('#w3-success').should('contain', 'Seeker successfully added')
    })
    it('Seeker edition from admin', ()=>{
        seekerpage.select_Seeker_Option()
        seekerpage.select_Seeker_List()
        seekerpage.type_Seeker_Email('quiroga.rosasrafael@gmail.com')
        seekerpage.select_Seeker_options('2') //num 2 for edition
        seekerpage.type_Seeker_FirstName('NameEdited')
        seekerpage.type_Seeker_LastName('MationEdited')
        seekerpage.type_Seeker_Password('password2')
        cy.get('#w3-success').should('contain', 'Seeker successfully updated')
    })
    it('Seeker elimination from admin',()=>{
        seekerpage.select_Seeker_Option()
        seekerpage.select_Seeker_List()
        seekerpage.type_Seeker_Email('quiroga.rosasrafael@gmail.com')
        seekerpage.select_Seeker_options('5') //num 5 for elimination 
        cy.get('#w3-success').should('contain', 'Seeker removed completely successful')
    })
})