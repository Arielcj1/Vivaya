/// <reference types="cypress"/>
export class GuidesPage {

    select_Guide_Tab(){

        cy.get('#mainNav > :nth-child(3) > a').click()
    }

    select_Guide_Tab_when_Login(){
        cy.get('#mainNav > :nth-child(2) > a').click()
    }

    select_Guide_Tab_when_Logout(){
        cy.get('#mainNav > :nth-child(3) > a').click()
    }

    perform_a_Search(guideName){
        
        cy.get('#guidesearch-q').type(guideName)
        cy.get('.col-lg-4 > .btn').click()
    }

    select_an_event(){
        var x=1
    cy.xpath('/html/body/div[2]/div[2]/div[2]/div[6]/div['+x+']/div[1]/a')
    .invoke('text')
    .then((text)=>{
                if(text == 'class test'){
                    cy.xpath('/html/body/div[2]/div[2]/div[2]/div[6]/div['+x+']/div[1]/a').click()
                }
                else{
                    x++
                    cy.xpath('/html/body/div[2]/div[2]/div[2]/div[6]/div['+x+']/div[1]/a')
                    .invoke('text').then((text)=>{
                        if(text == 'class test'){
                            cy.xpath('/html/body/div[2]/div[2]/div[2]/div[6]/div['+x+']/div[1]/a').click()
                        }
                        else{
                            x++
                            cy.xpath('/html/body/div[2]/div[2]/div[2]/div[6]/div['+x+']/div[1]/a')
                            .invoke('text').then((text)=>{
                                if(text == 'class test'){
                                    cy.log(x)
                                    cy.xpath('/html/body/div[2]/div[2]/div[2]/div[6]/div['+x+']/div[1]/a').click()
                                }
                            })
                        }
                    })
                }
            })
    }

}