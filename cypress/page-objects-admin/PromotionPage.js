/// <reference types="cypress"/>
export class PromotionPage {

    select_Promotions_Option(){
        cy.get(':nth-child(12) > [href="#"] > :nth-child(2)').click()
    }

    select_Promotion_New(){
        cy.get('.menu-open > .treeview-menu > :nth-child(2) > a > span').click()
    }

    select_Promotion_List(){
        cy.get('.menu-open > .treeview-menu > :nth-child(1) > a > span').click()
    }

    type_Promotion_Name(value){
        cy.get('#promotion-name').type(value)
    }

    type_Promotion_Code_Name(value){
        cy.get('#promotion-code').type('{selectall}'+value)
    }

    type_Promotion_Discount(value){
        cy.get('#promotion-discount').type('{selectall}'+value)
    }

    type_Promotion_Limit(value){
        cy.get('#promotion-times_limit_use').type('{selectall}'+value+'{enter}')
    }

    type_Promotion_ExpDate(value){
        cy.get('#promotion-expiration_date').type('{selectall}'+value)
    }

    find_Element_List_Promo(value){
        var x = value
        var e = 1
        cy.xpath('/html/body/div/div/section[2]/table/tbody/tr['+e+']/td[1]/a').invoke('text')
        .then((text)=>{
            if(text=='AutCode'){
                cy.xpath('/html/body/div/div/section[2]/table/tbody/tr['+e+']/td[8]/a['+x+']').click()
            }else{
                e++
                cy.xpath('/html/body/div/div/section[2]/table/tbody/tr['+e+']/td[1]/a').invoke('text')
                .then((text)=>{
                    if(text=='AutCode'){
                    cy.xpath('/html/body/div/div/section[2]/table/tbody/tr['+e+']/td[8]/a['+x+']').click()
                    }else{
                        e++
                        cy.xpath('/html/body/div/div/section[2]/table/tbody/tr['+e+']/td[1]/a').invoke('text')
        .then((text)=>{
            if(text=='AutCode'){
                cy.xpath('/html/body/div/div/section[2]/table/tbody/tr['+e+']/td[8]/a['+x+']').click()
            }else{
                e++
                cy.xpath('/html/body/div/div/section[2]/table/tbody/tr['+e+']/td[1]/a').invoke('text')
                .then((text)=>{
                    if(text=='AutCode'){
                    cy.xpath('/html/body/div/div/section[2]/table/tbody/tr['+e+']/td[8]/a['+x+']').click()
                    }else{
                        e++
                        cy.xpath('/html/body/div/div/section[2]/table/tbody/tr['+e+']/td[1]/a').invoke('text')
        .then((text)=>{
            if(text=='AutCode'){
                cy.xpath('/html/body/div/div/section[2]/table/tbody/tr['+e+']/td[8]/a['+x+']').click()
            }else{
                e++
                cy.xpath('/html/body/div/div/section[2]/table/tbody/tr['+e+']/td[1]/a').invoke('text')
                .then((text)=>{
                    if(text=='AutCode'){
                    cy.xpath('/html/body/div/div/section[2]/table/tbody/tr['+e+']/td[8]/a['+x+']').click()
                    }else{
                        e++
                        cy.xpath('/html/body/div/div/section[2]/table/tbody/tr['+e+']/td[1]/a').invoke('text')
        .then((text)=>{
            if(text=='AutCode'){
                cy.xpath('/html/body/div/div/section[2]/table/tbody/tr['+e+']/td[8]/a['+x+']').click()
            }else{
                e++
                cy.xpath('/html/body/div/div/section[2]/table/tbody/tr['+e+']/td[1]/a').invoke('text')
                .then((text)=>{
                    if(text=='AutCode'){
                    cy.xpath('/html/body/div/div/section[2]/table/tbody/tr['+e+']/td[8]/a['+x+']').click()
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