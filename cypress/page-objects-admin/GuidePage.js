/// <reference types="cypress"/>
export class GuidePage {
    select_Guide_Option(){
        cy.get(':nth-child(5) > [href="#"] > :nth-child(2)').click()
    }
    select_Guide_New(){
        cy.get('.menu-open > .treeview-menu > :nth-child(3) > a > span').click()
    }
    select_Guide_List(){
        cy.get('.menu-open > .treeview-menu > :nth-child(1) > a > span').click()
    }
    select_Guide_Ordering(){
        cy.get('.menu-open > .treeview-menu > :nth-child(2) > a > span').click()
    }
    type_About_Me(value){
        cy.get('#guide-about_me').clear().type(value)
    }
    type_Mantra(value){
        cy.get('#guide-mantra').clear().type(value)
    }
    type_Philosiphy(value){
        cy.get('#guide-philosophy').clear().type(value)
    }
    type_Guide_Firstname(value){
        cy.get('#user-first_name').clear().type(value)
    }
    type_Guide_Lastname(value){
        cy.get('#user-last_name').clear().type(value)
    }
    type_Guide_Email(value){
        cy.get('#user-email').type(value)
    }
    type_Guide_Number(value){
        cy.get('#user-phone_number').clear().type(value)
    }
    select_TimeZone(value){
        cy.get('#user-timezone').select(value)
    }
    select_Guide_Country(value){
        cy.get('#user-country').clear().select(value)
    }
    select_Guide_State(value){
        cy.get('#userStates').select(value)
    }
    type_Guide_Password(value){
        cy.get('#user-newpassword').type(value)
    }
    type_Guide_ConfirmPassword(value){
        cy.get('#user-newpasswordconfirm').type(value)
    }
    upload_guide_photo(){
        cy.get('#guide-uploadedpicture').attachFile('guide.jpg')
    }
    upload_guide_Liability(){
        cy.get('#guide-uploadedinsurance').attachFile('liability.jpg')
    }
    type_Liability_Exp(value){
        cy.get('#guide-insurance_expiry_date').type(value)
    }
    type_Revenue_Percentage(value){
        cy.get('#guide-revenue_porcentage').clear().type(value)
    }
    type_Price_OneOne(value){
        cy.get('#guide-one_on_one_session_price').clear().type(value)
    }
    check_Classes_Guide(){
        cy.get('#guide-provide_workshops > :nth-child(1) > input').check()
        cy.get('#guide-provide_classes > :nth-child(1) > input').check()
        cy.get('#guide-provide_one_on_one > :nth-child(1) > input').check()
    }
    find_EmailGuide(email, value){
        cy.get('#guidesearch-email').type(email+'{enter}')
        cy.wait(1200)
        cy.xpath('//*[@id="w1"]/table/tbody/tr[1]/td[10]/a['+value+']/span').click() //selecionar email y la opcion a realizar
    }
    add_New_Offering(){
        cy.get('.box-title > .pull-right > .btn').click()
    }
    select_Guide_Offer(value){
        cy.get('#guideoffer-offer_id').select(value)
    }
    type_Guide_YearsTeaching(value){
        cy.get('#guideoffer-years_teaching').clear().type(value)
    }
    offer_Options(value){
        cy.xpath('//*[@id="w0"]/table/tbody/tr/td[10]/a['+value+']/span').click()
    }
    check_Pending_and_Approve_Offerings(){
        cy.get('.summary > :nth-child(2)').invoke('text').then((text)=>{
            var aux = text
            for(var e=1; e<=aux; e++){
                var aux2 = 1
                cy.xpath('//*[@id="w0"]/table/tbody/tr['+e+']/td[9]/label').invoke('text').then((text)=>{
                    if(text == 'NO'){
                        cy.xpath('//*[@id="w0"]/table/tbody/tr['+aux2+']/td[10]/a[1]/span').click()
                        cy.get('#guideoffer-approved > :nth-child(1) > input').check()
                        cy.get('.box-footer > .btn').click()
                        aux2++
                    }
                    else{aux2++}
                })
            }
        })
    }
    delete_New_Offering(value){
        cy.get('.summary > :nth-child(2)').invoke('text').then((text)=>{
            var aux = text
            for(var e=aux; e>0; e--){
                var aux2 = aux
                cy.xpath('//*[@id="w0"]/table/tbody/tr['+e+']/td[1]').invoke('text').then((text)=>{
                    if(text == value){
                        cy.xpath('//*[@id="w0"]/table/tbody/tr['+aux2+']/td[10]/a[2]/span').click()
                        aux2--
                    }
                    else{aux2--}
                })
            }
        })
    }

    Approve_Guide(){
        cy.get('#guide-approved').select('Online')
        //update
        cy.get('.box-footer > .btn').click({force:true})
    }
}