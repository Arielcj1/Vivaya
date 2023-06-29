/// <reference types="cypress"/>

import {Commons} from "../../../Commons/Common"
import {Home} from "../../../page-objects-mobile/Home"

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });


describe('Elements verification in responsive mode for main pages navigation', ()=>{

    const commons = new Commons()
    const home = new Home()

    context('Iphone 12Pro resolution', () => {
        
        beforeEach(() => {
        
          cy.viewport(390, 844)
          commons.open_Web_Site()
          
        })

        it('Verify Elements and redirection for Schedule page as Logged out', ()=>{
            home.go_To_Schedule_TopBar()
            cy.get('#mainNav > :nth-child(2) > a').click()
            cy.wait(1500)
            cy.get('#w1 > [href="/schedule"]').click()
            cy.get('#banner').should('be.visible').and('contain.text', 'Schedule')
            cy.get('.col-sm-12').should('be.visible')
            cy.get('.col-12 > h3').should('be.visible').and('contain.text', 'Become a VIVAYA Guide or Teacher')
        })

        it('Verify Elements and redirection for Guides page as Logged out', ()=>{
            home.go_To_Guides_TopBar()
            cy.get('#banner').should('be.visible').and('contain.text', 'Explore our VIVAYA Guides')
            cy.get('#w0 > :nth-child(1) > :nth-child(1)').should('be.visible')
            cy.get('#guide-form-icon').click({force: true})
            cy.get('#guidesearch-q').should('be.visible')
            cy.get('.CaptionCont').should('be.visible')
            cy.get('.col-lg-4 > .btn').should('be.visible')
        })    
/*
        it('Verify Yoga category and sub categories', ()=>{

            home.go_To_WhatWeOffer_TopBar()

             //Verify LInks within Yoga main Category
             cy.get('body > div.wrap > div.offerings > div.yoga-main-offering').click()
             cy.get('#banner').should('be.visible').and('contain.text', 'Yoga')
             cy.go('back')
            
             cy.visit('https://stage.vivayalive.com/offerings/anusara')
             cy.get('#banner').should('be.visible').and('contain.text', 'Anusara Yoga')
             cy.go('back')
 
             cy.visit('https://stage.vivayalive.com/offerings/family')
             cy.get('#banner').should('be.visible').and('contain.text', 'Family Yoga')
             cy.go('back')
 
             cy.visit('https://stage.vivayalive.com/offerings/hatha')
             cy.get('#banner').should('be.visible').and('contain.text', 'Hatha Yoga')
             cy.go('back')
 
             cy.visit('https://stage.vivayalive.com/offerings/jivamukti')
             cy.get('#banner').should('be.visible').and('contain.text', 'Jivamukti Yoga')
             cy.go('back')
 
             cy.visit('https://stage.vivayalive.com/offerings/kula-yoga')
             cy.get('#banner').should('be.visible').and('contain.text', 'Kula Yoga')
             cy.go('back')
 
             cy.visit('https://stage.vivayalive.com/offerings/parayoga')
             cy.get('#banner').should('be.visible').and('contain.text', 'ParaYoga® Yoga')
             cy.go('back')
 
             cy.visit('https://stage.vivayalive.com/offerings/prenatal-yoga')
             cy.get('#banner').should('be.visible').and('contain.text', 'Prenatal Yoga')
             cy.go('back')
             
             cy.visit('https://stage.vivayalive.com/offerings/TherapeuticYoga')
             cy.get('#banner').should('be.visible').and('contain.text', 'Therapeutic Yoga')
             cy.go('back')
             
             cy.visit('https://stage.vivayalive.com/offerings/vinyasa-yoga')
             cy.get('#banner').should('be.visible').and('contain.text', 'Vinyasa Yoga')
             cy.go('back')
             
             cy.visit('https://stage.vivayalive.com/offerings/nidra')
             cy.get('#banner').should('be.visible').and('contain.text', 'Yoga Nidra')
             cy.go('back')
             
             cy.visit('https://stage.vivayalive.com/offerings/ashtanga')
             cy.get('#banner').should('be.visible').and('contain.text', 'Ashtanga Yoga')
             cy.go('back')
 
             cy.visit('https://stage.vivayalive.com/offerings/guru-yoga')
             cy.get('#banner').should('be.visible').and('contain.text', 'Guru Yoga')
             cy.go('back')
 
             cy.visit('https://stage.vivayalive.com/offerings/iyengar')
             cy.get('#banner').should('be.visible').and('contain.text', 'Iyengar Yoga')
             cy.go('back')
 
             cy.visit('https://stage.vivayalive.com/offerings/katonah')
             cy.get('#banner').should('be.visible').and('contain.text', 'Katonah Yoga')
             cy.go('back')
 
             cy.visit('https://stage.vivayalive.com/offerings/kundalini')
             cy.get('#banner').should('be.visible').and('contain.text', 'Kundalini Yoga')
             cy.go('back')
 
             cy.visit('https://stage.vivayalive.com/offerings/power')
             cy.get('#banner').should('be.visible').and('contain.text', 'Power Yoga')
             cy.go('back')
 
             cy.visit('https://stage.vivayalive.com/offerings/restorative')
             cy.get('#banner').should('be.visible').and('contain.text', 'Restorative Yoga')
             cy.go('back')
 
             cy.visit('https://stage.vivayalive.com/offerings/trauma-informed-yoga')
             cy.get('#banner').should('be.visible').and('contain.text', 'Trauma Informed Yoga')
             cy.go('back')
 
             cy.visit('https://stage.vivayalive.com/offerings/yin')
             cy.get('#banner').should('be.visible').and('contain.text', 'Yin Yoga')
             cy.go('back')

        })

        it('Verify Meditation category and sub categories',()=>{

            home.go_To_WhatWeOffer_TopBar()

            cy.get(':nth-child(1) > :nth-child(1) > .box-shadow > .main-offering-image > .main-offering-title > strong > a').click()
            cy.get('#banner').should('be.visible').and('contain.text', 'Meditation')
            cy.go('back')

            cy.visit('https://stage.vivayalive.com/offerings/breathing-meditation-pranayama')
            cy.get('#banner').should('be.visible').and('contain.text', 'Breathing Meditation (Pranayama)')
            cy.go('back')

            cy.visit('https://stage.vivayalive.com/offerings/chakra-meditation')
            cy.get('#banner').should('be.visible').and('contain.text', 'Chakra Meditation')
            cy.go('back')

            cy.visit('https://stage.vivayalive.com/offerings/guided-visualization-meditation')
            cy.get('#banner').should('be.visible').and('contain.text', 'Guided Visualization Meditation')
            cy.go('back')

            cy.visit('https://stage.vivayalive.com/offerings/mantra-meditation')
            cy.get('#banner').should('be.visible').and('contain.text', 'Mantra Meditation')
            cy.go('back')

            cy.visit('https://stage.vivayalive.com/offerings/mindfulness-awareness-meditation')
            cy.get('#banner').should('be.visible').and('contain.text', 'Mindfulness (Awareness) Meditation')
            cy.go('back')

            cy.visit('https://stage.vivayalive.com/offerings/vipassana-meditation')
            cy.get('#banner').should('be.visible').and('contain.text', 'Vipassana Meditation')
            cy.go('back')

            cy.visit('https://stage.vivayalive.com/offerings/zen-zazen')
            cy.get('#banner').should('be.visible').and('contain.text', 'Zen (Zazen) Meditation')
            cy.go('back')


        })

        it('Verify Coaching category and sub categories',()=>{

            home.go_To_WhatWeOffer_TopBar()

            cy.get(':nth-child(1) > :nth-child(2) > .box-shadow > .main-offering-image > .main-offering-title > strong > a').click()
            cy.get('#banner').should('be.visible').and('contain.text', 'Coaching')
            cy.go('back')

            cy.visit('https://stage.vivayalive.com/offerings/health-coaching')
            cy.get('#banner').should('be.visible').and('contain.text', 'Health Coaching')
            cy.go('back')

            cy.visit('https://stage.vivayalive.com/offerings/life-coaching')
            cy.get('#banner').should('be.visible').and('contain.text', 'Life Coaching')
            cy.go('back')

            cy.visit('https://stage.vivayalive.com/offerings/professional-coaching')
            cy.get('#banner').should('be.visible').and('contain.text', 'Professional Coaching')
            cy.go('back')

            cy.visit('https://stage.vivayalive.com/offerings/trauma-coaching')
            cy.get('#banner').should('be.visible').and('contain.text', 'Trauma Coaching')
            cy.go('back')

            cy.visit('https://stage.vivayalive.com/offerings/work-life-balance-coaching')
            cy.get('#banner').should('be.visible').and('contain.text', 'Work-Life Balance Coaching')
            cy.go('back')

            
        })

        it('Verify Restorative Fitness category and sub categories',()=>{

            home.go_To_WhatWeOffer_TopBar()

            cy.get(':nth-child(1) > :nth-child(3) > .box-shadow > .main-offering-image > .main-offering-title > strong > a').click()
            cy.get('#banner').should('be.visible').and('contain.text', 'Restorative Fitness')
            cy.go('back')

            cy.visit('https://stage.vivayalive.com/offerings/calisthenics')
            cy.get('#banner').should('be.visible').and('contain.text', 'Calisthenics')
            cy.go('back')

            cy.visit('https://stage.vivayalive.com/offerings/pilates')
            cy.get('#banner').should('be.visible').and('contain.text', 'Pilates')
            cy.go('back')

            cy.visit('https://stage.vivayalive.com/offerings/stretching')
            cy.get('#banner').should('be.visible').and('contain.text', 'Stretching')
            cy.go('back')

            
        })

        it('Verify Nutrition category and sub categories',()=>{

            home.go_To_WhatWeOffer_TopBar()

            cy.get(':nth-child(2) > :nth-child(1) > .box-shadow > .main-offering-image > .main-offering-title > strong > a').click()
            cy.get('#banner').should('be.visible').and('contain.text', 'Nutrition')
            cy.go('back')

            cy.visit('https://stage.vivayalive.com/offerings/ayurveda')
            cy.get('#banner').should('be.visible').and('contain.text', 'Ayurveda Nutrition')
            cy.go('back')

            cy.visit('https://stage.vivayalive.com/offerings/detox')
            cy.get('#banner').should('be.visible').and('contain.text', 'Detox Nutrition')
            cy.go('back')

            cy.visit('https://stage.vivayalive.com/offerings/miscellaneous')
            cy.get('#banner').should('be.visible').and('contain.text', 'Miscellaneous Nutrition')
            cy.go('back')

            cy.visit('https://stage.vivayalive.com/offerings/prenatal')
            cy.get('#banner').should('be.visible').and('contain.text', 'Prenatal Nutrition')
            cy.go('back')

            cy.visit('https://stage.vivayalive.com/offerings/sports-and-energy')
            cy.get('#banner').should('be.visible').and('contain.text', 'Sports And Energy Nutrition')
            cy.go('back')

            cy.visit('https://stage.vivayalive.com/offerings/weight-management')
            cy.get('#banner').should('be.visible').and('contain.text', 'Weight Management Nutrition')
            cy.go('back')

            
        })

        it('Verify Astrology and Spiritual Counseling category and sub categories',()=>{

            home.go_To_WhatWeOffer_TopBar()

            cy.get(':nth-child(2) > :nth-child(2) > .box-shadow > .main-offering-image > .main-offering-title > strong > a').click()
            cy.get('#banner').should('be.visible').and('contain.text', 'Astrology and Spiritual Counseling')
            cy.go('back')

            cy.visit('https://stage.vivayalive.com/offerings/astrology')
            cy.get('#banner').should('be.visible').and('contain.text', 'Astrology')
            cy.go('back')

            cy.visit('https://stage.vivayalive.com/offerings/numerology')
            cy.get('#banner').should('be.visible').and('contain.text', 'Numerology')
            cy.go('back')

            cy.visit('https://stage.vivayalive.com/offerings/psychic-readings')
            cy.get('#banner').should('be.visible').and('contain.text', 'Psychic Readings')
            cy.go('back')

            cy.visit('https://stage.vivayalive.com/offerings/spiritual-counseling')
            cy.get('#banner').should('be.visible').and('contain.text', 'Spiritual Counseling')
            cy.go('back')

            cy.visit('https://stage.vivayalive.com/offerings/tarot')
            cy.get('#banner').should('be.visible').and('contain.text', 'Tarot')
            cy.go('back')
            
        })

        
        it('Verify Healing Arts category and sub categories',()=>{

            home.go_To_WhatWeOffer_TopBar()

            cy.get(':nth-child(2) > :nth-child(3) > .box-shadow > .main-offering-image > .main-offering-title > strong > a').click()
            cy.get('#banner').should('be.visible').and('contain.text', 'Healing Arts and Reiki')
            cy.go('back')

            cy.visit('https://stage.vivayalive.com/offerings/energy-healing')
            cy.get('#banner').should('be.visible').and('contain.text', 'Energy Healing')
            cy.go('back')

            cy.visit('https://stage.vivayalive.com/offerings/hypnosis')
            cy.get('#banner').should('be.visible').and('contain.text', 'Hypnosis Healing')
            cy.go('back')

            cy.visit('https://stage.vivayalive.com/offerings/reiki')
            cy.get('#banner').should('be.visible').and('contain.text', 'Reiki')
            cy.go('back')

            cy.visit('https://stage.vivayalive.com/offerings/shamanic-healing')
            cy.get('#banner').should('be.visible').and('contain.text', 'Shamanic Healing')
            cy.go('back')

            cy.visit('https://stage.vivayalive.com/offerings/sound')
            cy.get('#banner').should('be.visible').and('contain.text', 'Sound Healing')
            cy.go('back')

            cy.visit('https://stage.vivayalive.com/offerings/theta-healing')
            cy.get('#banner').should('be.visible').and('contain.text', 'Theta Healing')
            cy.go('back')
            
        })

        it('Verify Move and Dance and sub categories',()=>{

            home.go_To_WhatWeOffer_TopBar()

            cy.get(':nth-child(3) > :nth-child(1) > .box-shadow > .main-offering-image > .main-offering-title > strong > a').click()
            cy.get('#banner').should('be.visible').and('contain.text', 'Movement & Dance')
            cy.go('back')

            cy.visit('https://stage.vivayalive.com/offerings/dance')
            cy.get('#banner').should('be.visible').and('contain.text', 'Dance')
            cy.go('back')

            cy.visit('https://stage.vivayalive.com/offerings/embodied-movement')
            cy.get('#banner').should('be.visible').and('contain.text', 'Embodied Movement')
            cy.go('back')

            cy.visit('https://stage.vivayalive.com/offerings/qi-gong')
            cy.get('#banner').should('be.visible').and('contain.text', 'Qi Gong')
            cy.go('back')

            cy.visit('https://stage.vivayalive.com/offerings/sacred-movement')
            cy.get('#banner').should('be.visible').and('contain.text', 'Sacred Movement')
            cy.go('back')

            cy.visit('https://stage.vivayalive.com/offerings/tai-chi')
            cy.get('#banner').should('be.visible').and('contain.text', 'Tai Chi')
            cy.go('back')

            cy.visit('https://stage.vivayalive.com/offerings/zumba')
            cy.get('#banner').should('be.visible').and('contain.text', 'Zumba')
            cy.go('back')

            
            
        })*/

        it('Verify Pricing page elements',()=>{
            home.go_To_Pricing_TopBar()
            cy.get('.memberships > :nth-child(1) > :nth-child(1) > strong').should('be.visible').and('contain.text', 'New Student')
            cy.get('.col-md-4').should('be.visible').and('contain.text', 'Free 14 Day Trial')
            cy.get('.col-md-4').should('be.visible').and('contain.text', 'Unlimited classes')
            cy.get('.col-md-7 > img').should('be.visible')
            cy.get('.container > .row > :nth-child(1) > h2 > strong').should('be.visible').and('contain.text', 'Yoga and Wellness on Your Terms')
            cy.get('.row > :nth-child(1) > p').should('be.visible').and('contain.text', 'Our memberships and packages give access to all classes')
            cy.get('.membership-timebased > .container > :nth-child(1) > strong').should('be.visible').and('contain.text', 'Memberships')
            cy.get('.content-other-offerings > .container > h2 > strong').should('be.visible').and('contain.text', 'All Other Offerings')

        })    

        it('Verify Corporate Page',()=>{
            home.go_To_Corporate_TopBar()
            cy.get('.container-banner > .container > .text-blue').should('contain','Healthy Body, Mind & Soul - Healthy Business')
            cy.get('.container-banner > .container > p').should('include.text','Connect and learn about VIVAYA’s FREE corporate trial, employee membership plans, employee discounts,')
            cy.get('.container-banner > .container > #corporate-entry-form > .from-group > .btn').should('contain','Contact Us')
            cy.get(':nth-child(4) > .container > .text-blue').should('contain','Why Choose VIVAYA for Business')
            cy.get('.corporate-quote > .bold').should('contain','COVID-19 has sparked an unprecedented amount of employees transitioning to working full time at home.')
            cy.get('.corporate-plan-background > .container > p').should('contain','Connect and learn about VIVAYA’s FREE corporate trial, employee membership plans, employee discounts, or book a demo')

            

        })   
        
        it.skip('Verify Corporate Page',()=>{
            home.go_To_FResponders_TopBar()
            cy.get('.free-months').should('be.visible').and('contain.text', 'Our Gift of Gratitude to First Responders, Healthcare and Emergency Workers')
            cy.get(':nth-child(2) > .img-responsive').should('be.visible')
            cy.get('.innovative > :nth-child(1)').should('be.visible')
            cy.get('.innovative > :nth-child(2)').should('be.visible')
            cy.get('.invite-first-responders').should('be.visible').and('contain.text', 'Register now!')
            cy.get('.gift-first-responders > .container > .row > .col-md-12').should('be.visible').and('contain.text', 'About this thank you gratitude gift...')
            cy.get('.benefits-first-responders > .container > :nth-child(1) > .col-md-12').should('be.visible').and('contain.text', 'Benefits of enrolling...')
            cy.get('.benefits-list').should('be.visible')
            cy.get('.transformation-first-responders > .container > :nth-child(1) > .col-md-12 > h2').should('be.visible').and('contain.text', 'The transformation you will experience after even just a few weeks will be one of...')
            cy.get('.transformation-list').should('be.visible')
            cy.get('.health-first-responders > .container > .row > .col-md-12').should('be.visible').and('contain.text', 'This is for you If...')
            cy.get('.included-first-responders > .container > :nth-child(1) > .col-md-12 > h2').should('be.visible').and('contain.text', "What's Included?")
            cy.get('.included-list').should('be.visible')
            cy.get('.col-md-8').should('be.visible').and('contain.text', 'Hear what others are saying...')
            cy.get('.thank-you-first-responders > .container > .row').should('be.visible').and('contain.text', 'Before you click away... our CEO would like to thank you')
            cy.get('.vivaya-first-responders > .container > .row > .col-md-12 > :nth-child(1)').should('be.visible').and('contain.text', 'Hear what others are saying...')
            cy.get('.col-md-12 > div > .img-responsive').should('be.visible')
            cy.get('.vivaya-platform').should('be.visible').and('contain.text', 'VIVAYA is offering 2 free months access to our platform for all First Responders, Healthcare and Emergency Workers.')
            cy.get('.vivaya-first-responders > .container > .row > .col-md-12 > .btn').should('be.visible')

        })    

        it('Verify Become a Guide Page',()=>{
            home.go_To_BecomeaGuide_TopBar()
            cy.get('.col-md-7 > .title').should('be.visible')
            cy.get('.col-md-7 > .btn-content > .btn').should('be.visible')
            cy.get('.container > .title').should('contain','FAQs')
            cy.get('.guide-description > .title').should('contain','Looking forward to have you join our community!')
            //signature
            cy.get('.signature > img').should('be.visible')
            cy.get('.guide-description > .btn-content > .btn').should('be.visible')








        })    
           
    })    
    
})

   