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
        cy.get('#step2-form > :nth-child(4)').find('input[type=file]').attachFile('guide.jpg')
        cy.get('#step2-form > :nth-child(4)').xpath('/html/body/div[2]/div[2]/div/form/div[1]/div/div[1]/div/div[2]/div/input').type('AutomationYoga')
        cy.get('#step2-form > :nth-child(4)').xpath('/html/body/div[2]/div[2]/div/form/div[1]/div/div[1]/div/div[3]/div/input').type(val6)
        cy.get('#step2-form > :nth-child(4)').find('input[type=checkbox]').check()
        //MEditation
        cy.get('#step2-form > :nth-child(6)').find('input[type=file]').attachFile('guide.jpg')
        cy.get('#step2-form > :nth-child(6)').xpath('/html/body/div[2]/div[2]/div/form/div[2]/div/div[1]/div/div[2]/div/input').type('AutomationMeditation')
        cy.get('#step2-form > :nth-child(6)').xpath('/html/body/div[2]/div[2]/div/form/div[2]/div/div[1]/div/div[3]/div/input').type(val7)
        cy.get('#step2-form > :nth-child(6)').find('input[type=checkbox]').check()
        cy.get('.next').click({force:true})
    }

    Check_type_of_class(){
        cy.get('#guideapplicationstep3-provide_classes').click()
        cy.get('#guideapplicationstep3-provide_workshops').click()
        cy.get('#guideapplicationstep3-provide_one_on_one').click()
        cy.get('.next').click({force:true})
    }

    Fill_information_guide(){
        cy.get('#guideapplicationstep4-about_me').type('information about automation')
        cy.get('#guideapplicationstep4-mantra').type('persona mantra - automation')
        cy.get('#w0').attachFile('guidecreate.png')
        cy.get('#guideapplicationstep4-philosophy').type('Philosophy-automation')
        //social media
        cy.get('#guideapplicationstep4-facebook_url').type('https://www.facebook.com')
        cy.get('#guideapplicationstep4-twitter_url').type('https://www.twitter.com')
        cy.get('#guideapplicationstep4-linkedin_url').type('https://www.linkedn.com')
        cy.get('#guideapplicationstep4-instagram_url').type('https://www.instagram.com')
        cy.get('.next').click({force:true})
    }

    fill_Liability_Insurance(){
        cy.get('#step5-form').find('input[type=file]').attachFile('guidecreate.png')
        cy.get('#guideapplicationstep5-insurance_expiry_date').type('12/12/2021')
        cy.get('.text-center > .next').click({force:true})
    }

    }



