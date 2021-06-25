/// <reference types="cypress"/>
export class GuideCreation {

    become_Guide(){
        cy.get('.become-a-guide > a').click()           
    }
    become_Guide_Page(){
        cy.get('.bag-button > .btn').click()
    }
    fill_Form_For_Guide(val,val1,val2,val3){
        cy.get('#signupform-first_name').type(val)
        cy.get('#signupform-last_name').type(val1)
        cy.get('#signupform-email').type(val2)
        cy.get('#signupform-phone_number').type(val3)
        cy.get('#signupform-timezone').select('(UTC-04:00) Georgetown, La Paz, Manaus, San Juan')
        cy.get('#states').select('Florida')
        cy.get('#signupform-terms').check()
        cy.get('#signupform-password').type('password{enter}')
    }
    fill_class_for_guide(val4, val5){
        //YOGA
        cy.get('#guideapplicationstep1offer-0-offer_id').select('Family Yoga')
        cy.get('#guideapplicationstep1offer-0-years_teaching').type(val4)
        cy.get('#guideapplicationstep1offer-0-certified').click()
        //Meditation
        cy.get(':nth-child(2) > .panel-heading > .panel-title > .collapse-toggle').click({force:true})
        cy.get('#guideapplicationstep1offer-1-offer_id').select('Chakra Meditation')
        cy.get('#guideapplicationstep1offer-1-years_teaching').type(val5)
        cy.get('#guideapplicationstep1offer-1-certified').click()
        cy.get('.next').click({force:true})
        
    }
    fill_class_choose(val6, val7){
        //YOGA
        cy.get('#guideapplicationstep2offer-2978-file').attachFile('guide.jpg')
        cy.get('#guideapplicationstep2offer-2978-certificate_name').type('AutomationYoga')
        cy.get('#guideapplicationstep2offer-2978-certificate_hours').type(val6)
        cy.get('#guideapplicationstep2offer-2978-include_in_profile').click()
        //MEditation
        cy.get('#guideapplicationstep2offer-2979-file')
        cy.get('#guideapplicationstep2offer-2979-certificate_name').type('AutomationMeditation')
        cy.get('#guideapplicationstep2offer-2979-certificate_hours').type(val7)
        cy.get('#guideapplicationstep2offer-2979-include_in_profile').click()
        cy.get('.next').click({force:true})
    }

    Check_type_of_class(){
        cy.get('#guideapplicationstep3-provide_classes').click()
        cy.get('#guideapplicationstep3-provide_workshops').click()
        cy.get('#guideapplicationstep3-provide_one_on_one').click()
        cy.get('.next').click({force:true})
    }


}