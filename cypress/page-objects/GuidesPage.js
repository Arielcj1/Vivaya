/// <reference types="cypress"/>
export class GuidesPage {

    select_close_modal(){
        //cy.get('#modalHeader').click({force:true})
        cy.get('.guide-reminder > .btn').click()
        
    }

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

    select_create_seeker_account(){
        cy.get('[href="/signup/add-seeker-account-from-guide"]').click()
    }
    fill_account_seeker(value){
        cy.get('#seekerassociatedsignupform-email').type(value+'{enter}')
    }
    Select_Switch_to_seeker(){
        cy.get('.uname').click({force:true})
        cy.wait(1500)
        cy.get('#accountNav > ul > li > ul > li:nth-child(3) > a').click({force:true})

    }
    Select_Switch_to_Guide(){
        cy.get('.uname').click({force:true})
        cy.get('#accountNav > ul > li > ul > li:nth-child(3) > a').click({force:true})
    }

    Select_request_OnetoOne(){
        cy.get('.container > .btn').click({force:true})

    }
    form_OnetoOne(value){
        cy.get('#requestoneononeform-offer').select('Power Yoga')
        //Date
        const typeDate = cy.get(':nth-child(4) > .col-sm-offset-1 > .form-group > .col-xs-12 > .input-group > .input-group-addon > .glyphicon').click({force:true})
        cy.get('[data-date="1633737600000"]').click({force:true})
        //time
        cy.get(':nth-child(4) > :nth-child(2) > .form-group > .col-xs-12 > .bootstrap-timepicker > .input-group-addon').click({force:true})
        cy.wait(500)
        for(let n=0; n<value; n++){
            cy.xpath('//*[@id="request-one-on-one-form"]/div[2]/div[2]/div/div/div/div/table/tbody/tr[1]/td[3]/a').click({force:true})
        }
        cy.wait(500)
        //send
        cy.get('#RequestOneOnOne').click({force:true})

    }

    select_write_blog(){
        cy.get('.quick-links > :nth-child(2) > :nth-child(2) > a').click({force:true})
    }

           
}
