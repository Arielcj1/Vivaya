/// <reference types="cypress"/>
export class CorporateAdminPage {

    select_Corporate_Option(){
        cy.get(':nth-child(13) > [href="#"] > :nth-child(2)').click()
    }
    select_Corporate_level3(){
        cy.get('.menu-open > .treeview-menu > :nth-child(6) > a > span').click({force:true})
    }

    select_Corporate_List(){
        cy.get('.menu-open > .treeview-menu > :nth-child(1) > a > span').click()
    }

    select_Add_New_Corporate(){
        cy.get('.content > .btn').click()
    }

    type_Corporate_Name(value){
        cy.get('#corporate-name').type(value)
    }

    type_Corporate_Domain(value){
        cy.get('#corporate-domain').type(value)
    }

    type_Corporate_Address(value){
        cy.get('#corporate-address').type(value)
    }

    type_Corporate_PhoneNumber(value){
        cy.get('#corporate-phone_number').type(value)
    }

    type_Corporate_ContactName(value){
        cy.get('#corporate-contact_name').type(value)
    }

    type_Corporate_ContactEmail(value){
        cy.get('#corporate-contact_email').type(value)
    }

    add_Corporate_From_Form(){
        cy.get('.box-footer > .btn').click()
    }

    update_Corporate_From_Form(){
        cy.get('.box-footer > .btn').click()
    }

    select_the_corporate(value){
    var x=1
    var y = value
    cy.xpath('/html/body/div/div/section[2]/table/tbody/tr['+x+']/td[1]')
    .invoke('text')
    .then((text)=>{
                if(text == 'Automation corp'){
                    cy.xpath('/html/body/div/div/section[2]/table/tbody/tr['+x+']/td[10]/a['+y+']').click()
                }
                else{
                    x++
                    cy.xpath('/html/body/div/div/section[2]/table/tbody/tr['+x+']/td[1]')
                    .invoke('text').then((text)=>{
                        if(text == 'Automation corp'){
                        cy.xpath('/html/body/div/div/section[2]/table/tbody/tr['+x+']/td[10]/a['+y+']').click()
                        }
                        else{
                            x++
                            cy.xpath('/html/body/div/div/section[2]/table/tbody/tr['+x+']/td[1]')
                            .invoke('text').then((text)=>{
                                if(text == 'Automation corp'){
                                cy.xpath('/html/body/div/div/section[2]/table/tbody/tr['+x+']/td[10]/a['+y+']').click()
                                }
                                else{
                                    x++
                                    cy.xpath('/html/body/div/div/section[2]/table/tbody/tr['+x+']/td[1]')
                                    .invoke('text').then((text)=>{
                                        if(text == 'Automation corp'){
                                        cy.xpath('/html/body/div/div/section[2]/table/tbody/tr['+x+']/td[10]/a['+y+']').click()
                                        }
                                        else{
                                            x++
                                            cy.xpath('/html/body/div/div/section[2]/table/tbody/tr['+x+']/td[1]')
                                            .invoke('text').then((text)=>{
                                                if(text == 'Automation corp'){
                                                cy.xpath('/html/body/div/div/section[2]/table/tbody/tr['+x+']/td[10]/a['+y+']').click()
                                                }
                                                else{
                                                    x++
                                                    cy.xpath('/html/body/div/div/section[2]/table/tbody/tr['+x+']/td[1]')
                                                    .invoke('text').then((text)=>{
                                                        if(text == 'Automation corp'){
                                                        cy.xpath('/html/body/div/div/section[2]/table/tbody/tr['+x+']/td[10]/a['+y+']').click()
                                                        }
                                                        else{
                                                            x++
                                                            cy.xpath('/html/body/div/div/section[2]/table/tbody/tr['+x+']/td[1]')
                                                            .invoke('text').then((text)=>{
                                                                if(text == 'Automation corp'){
                                                                cy.xpath('/html/body/div/div/section[2]/table/tbody/tr['+x+']/td[10]/a['+y+']').click()
                                                                }
                                                                else{
                                                                    x++
                                                                    cy.xpath('/html/body/div/div/section[2]/table/tbody/tr['+x+']/td[1]')
                                                                    .invoke('text').then((text)=>{
                                                                        if(text == 'Automation corp'){
                                                                        cy.xpath('/html/body/div/div/section[2]/table/tbody/tr['+x+']/td[10]/a['+y+']').click()
                                                                        }
                                                                    })}
                                                            })}
                                                    })}
                                            })}
                                    })}
                            })}
                    })}
            })}
}