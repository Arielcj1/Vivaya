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
        cy.get('.col-12 > .btn').click()
        //cy.get('.col-sm-8 > .btn').click()
        //return this
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

    verificarExistenciaElemento(contenedor, elemento) {
        cy.get(contenedor).then((body) => {
          if (body.find(elemento).length > 0) {
            let a = 8
            
            cy.log( 'EXISTE EL ELEMENTO');
            cy.get('#seekersinglesignupform-first_name').type('Auto')
            cy.get('#seekersinglesignupform-last_name').type('Mation')
            cy.get('#seekersinglesignupform-email').type('single@testautomation.com')
            cy.get('#seekersinglesignupform-password').type('password')

            cy.get('#seekersinglesignupform-cardholder').type('Auto Mation')
            cy.get('#seekersinglesignupform-cardnumber').type('4242424242424242')
            cy.get('#seekersinglesignupform-expiration').type('0225')
            cy.get('#seekersinglesignupform-cvc').type('1234')
            cy.get('.custom-control-label').click({force:true})
            cy.get('#stripe-form-submit').click()

            cy.get('.seeker-registration-content > h2').should('contain', 'Thank You')
            cy.wait(500)
            cy.get('h1').should('contain','Schedule')
          } else {
            let a = 5
            
            cy.log( 'NO EXISTE EL ELEMENTO');
            cy.get('#signupform-first_name').type('Auto')
            cy.get('#signupform-last_name').type('Mation')
            cy.get('#signupform-email').type('single@testautomation.com')
            cy.get('.custom-control-label').click({force:true})
            cy.get('#signupform-password').type('password'+'{enter}')
            cy.get('.n-group > .form-control').type('Auto Mation')
            cy.get('.cn-group > .input-group > .form-control').type('4242424242424242')
            cy.get('.expiration-date > .form-group > .form-control').type('0225')
            cy.get('.security-code > .form-group > .input-group > .form-control').type('1234')
            cy.get('#stripe-form-submit').click({force:true})
            cy.get('.seeker-registration-content > h2').should('contain', 'Thank You')
            cy.wait(500)
            cy.get('h1').should('contain','Schedule')
          }
        });
    }
    

}