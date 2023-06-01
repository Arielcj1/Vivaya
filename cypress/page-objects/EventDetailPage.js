/// <reference types="cypress"/>
export class EventDetailPage {



    book_Event_from_EventDetail(){
        cy.xpath('/html/body/div[2]/div[3]/div/div[1]/div[2]/div/div/div[4]/a').click({force:true})
    }

    cancel_Event_from_EventDetail(){
        cy.reload()
        //cy.xpath("//a[.='Cancel Event']").click()
        cy.get('.b-options > .btn').click()
    }

    confirm_Cancelation_from_EventDetail(){
        cy.get('.btn-success').click()
    }

    select_Back_To_Schedule(){
        cy.get('.back-button > a').click()
    }

    popup_thanks(){
        cy.xpath('//*[@id="modal-referral"]/div/div/div[1]/button').click({force:true})
    }

}
