/// <reference types="cypress"/>
export class GuideCreation {

    become_Guide(){
        cy.get('.become-a-guide > a').click({force:true})           
    }
    become_Guide_Page(){
        cy.get('.col-md-7 > .btn-content > .btn').click({force:true})
    }
    fill_Form_For_Guide(val,val1,val2,val3){
        cy.get('#signupform-first_name').type(val)
        cy.get('#signupform-last_name').type(val1)
        cy.get('#signupform-email').type(val2)
        cy.get('#signupform-phone_number').type(val3)
        //cy.get('#signupform-timezone').select('(UTC-04:00) Georgetown, La Paz, Manaus, San Juan')
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
        cy.get('#w1').click({force:true})
        cy.get('#guideapplicationstep1offer-1-offer_id').select('Chakra Meditation')
        cy.get('#guideapplicationstep1offer-1-years_teaching').type(val5)
        cy.get('#guideapplicationstep1offer-1-certified').click()
        cy.get('.btn-default').click({froce:true})
        cy.wait(400)
        cy.get('#w12-success-0').should('be.visible')
        cy.get('.next').click({force:true})
        
    }
    fill_class_choose(val6, val7){
        //YOGA
        
        cy.get('#step2-form > :nth-child(4)').xpath('/html/body/div[2]/div[2]/div/form/div[1]/div/div[1]/div/div[1]/div/input').type('AutomationYoga')
        cy.wait(500)
        cy.get('#step2-form > :nth-child(4)').xpath('/html/body/div[2]/div[2]/div/form/div[1]/div/div[1]/div/div[2]/div/input').type(val6)
        cy.wait(1000)
        cy.get('#step2-form > :nth-child(4)').find('input[type=checkbox]').click({force:true})
        //MEditation
        
        cy.get('#step2-form > :nth-child(6)').xpath('/html/body/div[2]/div[2]/div/form/div[2]/div/div[1]/div/div[1]/div/input').type('AutomationMeditation')
        cy.wait(500)
        cy.get('#step2-form > :nth-child(6)').xpath('/html/body/div[2]/div[2]/div/form/div[2]/div/div[1]/div/div[2]/div/input').type(val7)
        cy.wait(1000)
        cy.get('#step2-form > :nth-child(6)').find('input[type=checkbox]').click({force:true})
        

        //Liability
        cy.get('#guideapplicationstep2-liability_insurance').check()
        cy.get('.btn-default').click({force:true})
        cy.wait(300)
        cy.get('#w3-success-0').should('be.visible')
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
        cy.wait(2000)
        cy.get('#guideapplicationstep4-philosophy').type('Philosophy-automation')
        cy.wait(1000)
        //social media
        cy.get('#guideapplicationstep4-facebook_url').type('https://www.facebook.com')
        cy.get('#guideapplicationstep4-twitter_url').type('https://www.twitter.com')
        cy.get('#guideapplicationstep4-linkedin_url').type('https://www.linkedn.com')
        cy.get('#guideapplicationstep4-instagram_url').type('https://www.instagram.com')
        cy.get('#guideapplicationstep4-video_url').type('https://www.youtube.com')
        cy.get('#guideapplicationstep4-terms').check()
        cy.wait(2000)
        cy.get('.form-group.text-center > .btn-default').click({force:true})
        cy.wait(500)
        cy.get('#w4-success-0').should('be.visible')

        cy.get('#guideapplicationstep4-terms').check()
        cy.get('.next').click({force:true})
    }

    fill_Liability_Insurance(){
        var moment = require('moment');
        const todayDate = moment().add(200, 'days').format('MMM-DD-YYYY')
        cy.get('#step5-form').find('input[type=file]').attachFile('guidecreate.png')
        cy.wait(3500)
        cy.get('#guideapplicationstep5-insurance_expiry_date').type(todayDate)
        cy.wait(2500)
        cy.get('.text-center > .next').click({force:true})
    }

    }



