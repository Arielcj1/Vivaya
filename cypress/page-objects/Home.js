/// <reference types="cypress"/>

export class HomePage {

    go_Home(){
        cy.get('.brand').click()
    }

    select_Login(){
        const login = cy.get('.login-link').click({force:true})
        return this
    }
    select_freeTrial(){
        cy.get('.menu > :nth-child(1) > .btn').click({force:true})
    }

    fill_Email(value){
        
        const typing = cy.get('#loginform-email').type(value)
        return this
    }

    fill_Password(value){

        const typing = cy.get('#loginform-password').type(value)
        return this
    
    }

    submit_Credentials(){
        cy.get('.col-sm-8 > .btn').click()
        return this
    }

    logout_Account(){
        cy.get('.uname').click({ force: true })
        cy.get('.logout').click({ force: true })
    }

    select_Guide_from_Home(){
        cy.xpath("//div[@class='homepage-guides']//a[@href='/guides/1598']/p[@class='name']").click()
    }

select_First_Event_Upcoming_Section(){

    var x=1
    cy.xpath('/html/body/div[2]/div[3]/div/div/div/div/div['+x+']/div[2]/a')
    .invoke('text')
    .then((text)=>{
                if(text == 'Class1'){
                    cy.xpath('/html/body/div[2]/div[3]/div/div/div/div/div['+x+']/div[2]/a').click()
                }
                else{
                    x++
                    cy.xpath('/html/body/div[2]/div[3]/div/div/div/div/div['+x+']/div[2]/a')
                    .invoke('text').then((text)=>{
                        if(text == 'Class1'){
                        cy.xpath('/html/body/div[2]/div[3]/div/div/div/div/div['+x+']/div[2]/a').click()
                        }
                        else{
                            x++
                            cy.xpath('/html/body/div[2]/div[3]/div/div/div/div/div['+x+']/div[2]/a')
                            .invoke('text').then((text)=>{
                                if(text == 'Class1'){
                                    cy.log(x)
                                cy.xpath('/html/body/div[2]/div[3]/div/div/div/div/div['+x+']/div[2]/a').click()
                                }
                            })
                        }
                    })
                }
            })
}

    join_Event_From_Home(){
        cy.get('.join-event').click()
    }

    Fill_newsletter(name,last,email){
        cy.get('#subscribe-form > .field-subscribeform-firstname > #subscribeform-firstname').type(name)
        cy.get('#subscribe-form > .field-subscribeform-lastname > #subscribeform-lastname').type(last)
        cy.get('#subscribe-form > .field-subscribeform-email > #subscribeform-email').type(email)
        cy.get('#subscribe-form > .btn').click({force:true})


    }
    select_First_classnew(){
        cy.contains('new class').first().should('be.visible')
        cy.wait(1000)
    }

}