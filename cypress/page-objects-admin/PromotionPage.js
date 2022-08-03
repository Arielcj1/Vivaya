/// <reference types="cypress"/>
export class PromotionPage {

    select_Promotions_Option(){
        cy.get(':nth-child(11) > [href="#"] > :nth-child(2)').click()
    }

    select_Promotion_New(){
        cy.get('.menu-open > .treeview-menu > :nth-child(2) > a > span').click()
    }

    select_Promotion_List(){
        cy.get('.menu-open > .treeview-menu > :nth-child(1) > a > span').click()
    }

    select_PromoRenewal_List(){
        cy.get('.menu-open > .treeview-menu > :nth-child(3) > a > span').click()
    }

    select_PromoRenewal_New(){
        cy.get('.menu-open > .treeview-menu > :nth-child(4) > a > span').click()
    }

    select_Promo_Trial_extended(){
        cy.get('.menu-open > .treeview-menu > :nth-child(6) > a').click()
    }

    select_Promo_Trial_extended_list(){
        cy.get('.menu-open > .treeview-menu > :nth-child(5) > a').click()
    }

    type_Promotion_Name(value){
        cy.get('#promotion-name').type('{selectall}'+value)
    }

    type_Promotion_Code_Name(value){
        cy.get('#promotion-code_aliases').type('{selectall}'+value)
    }

    type_Promotion_Discount(value){
        cy.get('#promotion-discount').type('{selectall}'+value)
    }

    type_Promotion_Limit(value){
        cy.get('#promotion-times_limit_use').click().type('{selectall}'+value+'{enter}')
    }

    type_Promotion_ExpDate(value){
        cy.get('#promotion-expiration_date').type('{selectall}'+value)
        /*var moment = require('moment');
        const todayDate = moment().add(1, 'days').format('MMM-DD-YYYY')
        const typeDate = cy.get('#promotion-expiration_date').type(todayDate)*/
    }
    type_Promotion_ExpDate_trial(value){
        cy.get('#promotion-expiration_date').type('{selectall}'+value+'{enter}')
        /*var moment = require('moment');
        const todayDate = moment().add(1, 'days').format('MMM-DD-YYYY')
        const typeDate = cy.get('#promotion-expiration_date').type(todayDate)*/
    }

    save_promotion(){
        cy.get('.box-footer > .btn').click({force:true})
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

        find_Element_List_Promo_Renewal(value){
            var x = value
            var e = 1
            cy.xpath('/html/body/div/div/section[2]/table/tbody/tr['+e+']/td[1]/a').invoke('text')
            .then((text)=>{
                if(text=='AutCode'){
                    cy.xpath('/html/body/div[1]/div/section[2]/table/tbody/tr['+e+']/td[7]/a['+x+']').click()
                }else{
                    e++
                    cy.xpath('/html/body/div/div/section[2]/table/tbody/tr['+e+']/td[1]/a').invoke('text')
                    .then((text)=>{
                        if(text=='AutCode'){
                            cy.xpath('/html/body/div[1]/div/section[2]/table/tbody/tr['+e+']/td[7]/a['+x+']').click()
                        }else{
                            e++
                            cy.xpath('/html/body/div/div/section[2]/table/tbody/tr['+e+']/td[1]/a').invoke('text')
            .then((text)=>{
                if(text=='AutCode'){
                    cy.xpath('/html/body/div[1]/div/section[2]/table/tbody/tr['+e+']/td[7]/a['+x+']').click()
                }else{
                    e++
                    cy.xpath('/html/body/div/div/section[2]/table/tbody/tr['+e+']/td[1]/a').invoke('text')
                    .then((text)=>{
                        if(text=='AutCode'){
                            cy.xpath('/html/body/div[1]/div/section[2]/table/tbody/tr['+e+']/td[7]/a['+x+']').click()
                        }else{
                            e++
                            cy.xpath('/html/body/div/div/section[2]/table/tbody/tr['+e+']/td[1]/a').invoke('text')
            .then((text)=>{
                if(text=='AutCode'){
                    cy.xpath('/html/body/div[1]/div/section[2]/table/tbody/tr['+e+']/td[7]/a['+x+']').click()
                }else{
                    e++
                    cy.xpath('/html/body/div/div/section[2]/table/tbody/tr['+e+']/td[1]/a').invoke('text')
                    .then((text)=>{
                        if(text=='AutCode'){
                            cy.xpath('/html/body/div[1]/div/section[2]/table/tbody/tr['+e+']/td[7]/a['+x+']').click()
                        }else{
                            e++
                            cy.xpath('/html/body/div/div/section[2]/table/tbody/tr['+e+']/td[1]/a').invoke('text')
            .then((text)=>{
                if(text=='AutCode'){
                    cy.xpath('/html/body/div[1]/div/section[2]/table/tbody/tr['+e+']/td[7]/a['+x+']').click()
                }else{
                    e++
                    cy.xpath('/html/body/div/div/section[2]/table/tbody/tr['+e+']/td[1]/a').invoke('text')
                    .then((text)=>{
                        if(text=='AutCode'){
                            cy.xpath('/html/body/div[1]/div/section[2]/table/tbody/tr['+e+']/td[7]/a['+x+']').click()
                        }
                    })}
            })}
                    })}
            })}
                    })}
            })}
                    })}
            })}

            find_Element_List_Promo_trial_Extended(value){
                var x = value
                var e = 1
                cy.xpath('/html/body/div/div/section[2]/table/tbody/tr['+e+']/td[1]/a').invoke('text')                
                
                .then((text)=>{
                    if(text=='AutCode'){
                        cy.xpath('/html/body/div[1]/div/section[2]/table/tbody/tr['+e+']/td[7]/a['+x+']').click({force:true})
                    }else{
                        e++
                        cy.xpath('/html/body/div/div/section[2]/table/tbody/tr['+e+']/td[1]/a').invoke('text') 
                        .then((text)=>{
                            if(text=='AutCode'){
                                cy.xpath('/html/body/div[1]/div/section[2]/table/tbody/tr['+e+']/td[7]/a['+x+']').click({force:true})
                            }else{
                                e++
                                cy.xpath('/html/body/div/div/section[2]/table/tbody/tr['+e+']/td[1]/a').invoke('text')
                .then((text)=>{
                    if(text=='AutCode'){
                        cy.xpath('/html/body/div[1]/div/section[2]/table/tbody/tr['+e+']/td[7]/a['+x+']').click({force:true})
                    }else{
                        e++
                        cy.xpath('/html/body/div/div/section[2]/table/tbody/tr['+e+']/td[1]/a').invoke('text')
                        .then((text)=>{
                            if(text=='AutCode'){
                                cy.xpath('/html/body/div[1]/div/section[2]/table/tbody/tr['+e+']/td[7]/a['+x+']').click({force:true})
                            }else{
                                e++
                                cy.xpath('/html/body/div/div/section[2]/table/tbody/tr['+e+']/td[1]/a').invoke('text')
                .then((text)=>{
                    if(text=='AutCode'){
                        cy.xpath('/html/body/div[1]/div/section[2]/table/tbody/tr['+e+']/td[7]/a['+x+']').click({force:true})
                    }else{
                        e++
                        cy.xpath('/html/body/div/div/section[2]/table/tbody/tr['+e+']/td[1]/a').invoke('text')
                        .then((text)=>{
                            if(text=='AutCode'){
                                cy.xpath('/html/body/div[1]/div/section[2]/table/tbody/tr['+e+']/td[7]/a['+x+']').click({force:true})
                            }else{
                                e++
                                cy.xpath('/html/body/div/div/section[2]/table/tbody/tr['+e+']/td[1]/a').invoke('text')
                .then((text)=>{
                    if(text=='AutCode'){
                        cy.xpath('/html/body/div[1]/div/section[2]/table/tbody/tr['+e+']/td[7]/a['+x+']').click({force:true})
                    }else{
                        e++
                        cy.xpath('/html/body/div/div/section[2]/table/tbody/tr['+e+']/td[1]/a').invoke('text')
                        .then((text)=>{
                            if(text=='AutCode'){
                                cy.xpath('/html/body/div[1]/div/section[2]/table/tbody/tr['+e+']/td[7]/a['+x+']').click({force:true})
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