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
            cy.get('#banner').should('be.visible').and('contain.text', 'Schedule')
            cy.get(':nth-child(2) > .col-xs-12').should('be.visible')
            cy.get('.col-sm-8 > h3').should('be.visible').and('contain.text', 'Become a VIVAYA Guide or Teacher')
        })

        it('Verify Elements and redirection for Schedule page as Logged out', ()=>{
            home.go_To_Guides_TopBar()
            cy.get('#banner').should('be.visible').and('contain.text', 'Explore our VIVAYA Guides')
            cy.get('#w0 > :nth-child(1) > :nth-child(1)').should('be.visible')
            cy.get('#guide-form-icon').click({force: true})
            cy.get('#guidesearch-q').should('be.visible')
            cy.get('.CaptionCont').should('be.visible')
            cy.get('.col-lg-4 > .btn').should('be.visible')
        })    

        it('Verify Elements and redirection for What We Offer page as Logged out', ()=>{
            home.go_To_WhatWeOffer_TopBar()
            cy.get('.text-center > strong').should('be.visible').and('have.text', 'VIVAYA Offerings')
            cy.get('.container > .box-shadow > .lazy').should('be.visible').and('contain.text', 'Yoga')
            cy.get(':nth-child(1) > :nth-child(1) > .box-shadow > .lazy').should('be.visible').and('contain.text', 'Meditation')
            cy.get(':nth-child(1) > :nth-child(2) > .box-shadow > .lazy').should('be.visible').and('contain.text', 'Coaching')
            cy.get(':nth-child(1) > :nth-child(3) > .box-shadow > .lazy').should('be.visible').and('contain.text', 'Restorative Fitness')
            cy.get(':nth-child(3) > :nth-child(2) > :nth-child(1) > .box-shadow > .lazy').should('be.visible').and('contain.text', 'Nutrition')
            cy.get(':nth-child(2) > :nth-child(2) > .box-shadow > .lazy').should('be.visible').and('contain.text', 'Astrology and Spiritual Counseling')
            cy.get(':nth-child(2) > :nth-child(3) > .box-shadow > .lazy').should('be.visible').and('contain.text', 'Healing Arts and Reiki')
            cy.get(':nth-child(3) > .col-md-4 > .box-shadow > .lazy').should('be.visible').and('contain.text', 'Movement & Dance')
        
            
        })



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

            cy.get(':nth-child(1) > :nth-child(1) > .box-shadow > .lazy').click()
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

            cy.get(':nth-child(1) > :nth-child(2) > .box-shadow > .lazy').click()
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

            cy.get(':nth-child(1) > :nth-child(3) > .box-shadow > .lazy > .main-offering-title > strong > a').click()
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

            cy.get(':nth-child(3) > :nth-child(2) > :nth-child(1) > .box-shadow > .lazy').click()
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

            cy.get(':nth-child(2) > :nth-child(2) > .box-shadow > .lazy').click()
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

            cy.get(':nth-child(2) > :nth-child(3) > .box-shadow > .lazy').click()
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

            cy.get(':nth-child(3) > .col-md-4 > .box-shadow > .lazy').click()
            cy.get('#banner').should('be.visible').and('contain.text', 'Movement & Dance')
            cy.go('back')

            
            
        })


           
    })    
    
})

   