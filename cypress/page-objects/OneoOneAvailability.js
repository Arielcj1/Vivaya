/// <reference types="cypress"/>

export class OneoOneAvailability{
    click_ADD_Availability(){
        cy.get('.button-wrapper > .btn').click()
    }

    click_Set_Availability(){
        cy.get('#availability-form-submit-btn').click()
    }

    mark_Checkbox_Days(){
        for (var day=2; day <= 8; day ++){
            cy.get(':nth-child('+day+') > :nth-child(1) > .form-group > .col-sm-12').click()
        }
    }

    set_Time_Availability(){
        for(var time=2; time<=8; time++){
            cy.get(':nth-child('+time+') > :nth-child(3) > .form-group > .bootstrap-timepicker > .input-group-addon').click()
            for(var hour = 0; hour<=4 ; hour++){
                cy.get(':nth-child('+time+') > :nth-child(3) > .form-group > .bootstrap-timepicker > .bootstrap-timepicker-widget > table > tbody > :nth-child(1) > :nth-child(1) > a').click()
            }
            cy.get('.col-12').click()
            cy.wait(1000)
        }
    }

}