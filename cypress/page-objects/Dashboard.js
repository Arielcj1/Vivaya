///<reference types="cypress"/>

export class Dashboard{

    select_Edit_Event(){
        //cy.xpath("//*[contains(text(), 'Edit')]").click({force:true})
        //cy.contains('Edit').click({force:true})
        cy.xpath('/html/body/div[2]/div[3]/div/div[2]/div[3]/div/div[1]/div[3]/div/p/a[2]').click({force:true})
    }

    find_the_free_booked(){
        cy.contains('This event has been booked.').first().should('be.visible')
        cy.wait(1000)
    }


    go_to_Dashboard_From_Menu(){
        //cy.get('.uname').click()
        cy.get('#accountNav > ul > li > ul > li:nth-child(1) > a').click({ force: true })
    }

    press_Start_Event_Button(){
        const startEventButton = cy.get('#fbStart').click({force:true})
        return this
    }

    add_NewEvent(){
        const newEvent = cy.get(':nth-child(3) > .btn').click({force:true})
        return this

    }

    select_toolkit(){
        cy.get(':nth-child(6) > .col-sm-4 > a').click({force:true})
    }

    add_Workshop(){
        cy.get(':nth-child(3) > .btn').click({force:true})
    }

    add_One_One(){
        cy.get(':nth-child(4) > .btn').click({force:true})
    }

    add_Class(){
       // cy.get(':nth-child(2) > :nth-child(2) > :nth-child(5) > .btn').click({force:true})
        cy.get(':nth-child(5) > .btn').click({force:true})
    }

    add_Seminar_Event(){
        const addSeminarEvent = cy.get('[href="/events/seminar/create"]').click({force:true})
        return this
    }

    close_NewEvent_Modal(){
        const closeNewEvent = cy.get('#modalHeader > .close').click({force:true})
        return this
    }

    cancel_Event_As_Seeker(){
        cy.get('p > .btn').click({force:true})
    }

    confirm_Cancelation_From_Dashboard(){
        cy.get('.btn-success').click({force:true})
    }

    //Guide Dashboard Elements

    select_UpcomingEvents(){
         
        cy.contains('All upcoming events').click({force:true})
    }

    select_One_One_Availability(){
        cy.get(':nth-child(2) > .btn').click({force:true})
    }

    select_Add_Seminar(){
        //cy.get(':nth-child(4) > .btn').click()
        cy.get(':nth-child(2) > .btn').click()
        //cy.get(':nth-child(2) > :nth-child(2) > :nth-child(2) > .btn').click()
    }

    select_View_FullClass_History(){
        cy.get('.quick-links > :nth-child(2) > :nth-child(1) > a').click()
    }

    select_View_Public_Profile(){
        cy.get('.quick-links > :nth-child(3) > :nth-child(1) > a').click()
    }

    select_Contact_Vivaya(){
        cy.get('.quick-links > :nth-child(4) > :nth-child(1) > a').click()
    }

    select_Write_Blog(){
        cy.get('.quick-links > :nth-child(2) > :nth-child(2) > a').click()
    }

    select_Edit_My_Offerings(){
        cy.get('.quick-links > :nth-child(2) > :nth-child(2) > a').click()
    }

    select_Update_LInsurance(){
        cy.get('.quick-links > :nth-child(4) > :nth-child(2) > a').click()
    }

    select_Edit_Password(){
        cy.get('.quick-links > :nth-child(3) > :nth-child(2) > a').click()
    }

    select_Edit_Contact_Info(){
        cy.get('.quick-links > :nth-child(2) > :nth-child(3) > a').click({force:true})
    }

    select_faqs(){
        cy.get('.link').click()
    }

    select_Public_Profile_Left_Section(){
        cy.get('.public-profile-link').click()
    }

    select_Seeker_Account_Left_Section(){
        cy.get('[href="/signup/add-seeker-account-from-guide"]').click()
    }

    //Seeker Dashboard Elements

    select_Book_More(){
        cy.get('.col-sm-4 > .btn').click()
    }

    select_Shopping_Cart(){
        cy.get('.quick-links > :nth-child(3) > :nth-child(1) > a').click()
    }

    selec_Membership_Cancellation(){
        cy.get('.cancel-payment').click()
    }

    select_My_Password(){
        cy.get('.quick-links > :nth-child(2) > :nth-child(2) > a').click()
    }

    select_Contact_Vivaya_Seeker(){
        cy.get('.quick-links > :nth-child(3) > :nth-child(2) > a').click()
    }

    select_My_Account_Seeker(){
        cy.get('.quick-links > :nth-child(2) > :nth-child(3) > a').click()
    }

    select_Payment_Info(){
        cy.get(':nth-child(3) > :nth-child(3) > a').click()
    }

    select_faq_seeker(){
        cy.get('#link').click()
    }

    select_Edit_Profile_Left_Section_Seeker(){
        cy.get('.profile-box > [href="/account"]').click()
    
    }

    select_My_Referral(){
        cy.get('#referral-status-link').click()
    }

    select_My_Referral_From_Menu(){
        cy.get('#modal-btn-referral').click({force:true})
    }

    select_First_FreePublicEvent(){
        cy.contains('FREE EVENT').first().click()
        cy.wait(1000)
    }

    select_First_FreeEvent(){
        cy.contains('FREE EVENT').first().click()
        cy.wait(1000)
    }

    free_Event_Confirmation(val, val2, val3){
       
        cy.get('#guest-firstname').click({force:true})
        cy.get('#guest-firstname').type(val)
        
        cy.get('#guest-lastname').type(val2)
        cy.wait(500)
        cy.get('#guest-email').type(val3).wait(2000).type('{enter}')
    }

    free_event_Free_Trial(){
       // cy.xpath('//*[@id="modalHeader"]/div/div/a[3]').click({force:true})
        cy.get('.free-event-success > .btn').click({force:true})
    }

    /*go_To_Home_Page(){
        cy.contains('Vivaya homepage').click({force:true})
    }*/

    select_LogIn_option_from_PopUp(){
        cy.contains('Log in').click()
    }

    cancel_Created_Event(){
        cy.get('.cancel-event').click({force:true})
        cy.get('.btn-success').click({force:true})
    }

    cancel_autorenewal(){
        cy.get('.cancel-payment').click({force:true})
        cy.get('.btn-success').click({force:true})
    }

    cancel_verify_minEvents(){
        cy.get('.cancel-event').click({force:true})
        cy.get('.btn-success').click({force:true})
    }

    cancel_event_mobile(){
        cy.get('.cancel-event').click({force:true})
            cy.get('.btn-success').click({force:true})
            cy.get('#w2-success-0').should('be.visible')
    }


    cancel_Created_Event_one_on_one(){
        var row = 2
        var col = 3
                 // /html/body/div[2]/div[3]/div[2]/div[2]/div[2]/div[3]/div/div/div/h4/a
        cy.xpath('/html/body/div[2]/div[3]/div[2]/div[2]/div['+row+']/div['+col+']/div/div/div/h4/a')
        .invoke('text')
        .then((text)=>{
                if(text == 'One-One'){
                    cy.log('found')
                              ///html/body/div[2]/div[3]/div[2]/div[2]/div[2]/div[3]/div/div/div/div[2]/p/a[1]
                    cy.xpath('/html/body/div[2]/div[3]/div[2]/div[2]/div['+row+']/div['+col+']/div/div/div/div[2]/p/a[1]').contains('Cancel').click({force:true})
                        cy.get('.btn-success').click({force:true})
                }
                else{
                    row++
                    cy.xpath('/html/body/div[2]/div[3]/div/div[2]/div['+row+']/div['+col+']/div/h4/a')
                    .invoke('text')
                    .then((text)=>{
                    if(text == 'One-One'){
                        cy.log('found')
                        cy.xpath('/html/body/div[2]/div[3]/div/div[2]/div['+row+']/div['+col+']/div/div[2]').contains('Cancel').click({force:true})
                        cy.get('.btn-success').click({force:true})
                    }
                    else{
                        row++
                        cy.xpath('/html/body/div[2]/div[3]/div/div[2]/div['+row+']/div['+col+']/div/h4/a')
                        .invoke('text')
                        .then((text)=>{
                         if(text == 'One-One'){
                            cy.log('found')
                            cy.xpath('/html/body/div[2]/div[3]/div/div[2]/div['+row+']/div['+col+']/div/div[2]').contains('Cancel').click({force:true})
                            cy.get('.btn-success').click({force:true})
                        }
                        else{
                            col++
                            row=1
                            cy.xpath('/html/body/div[2]/div[3]/div/div[2]/div['+row+']/div['+col+']/div/h4/a')
                            .invoke('text')
                            .then((text)=>{
                             if(text == 'One-One'){
                                cy.log('found')
                                cy.xpath('/html/body/div[2]/div[3]/div/div[2]/div['+row+']/div['+col+']/div/div[2]').contains('Cancel').click({force:true})
                                cy.get('.btn-success').click({force:true})
                            }})
                        }})
                }})
        }})
    }

    cancel_Created_Event_class(){
        var row = 2
        var col = 3
        cy.xpath('/html/body/div[2]/div[3]/div/div[2]/div['+row+']/div['+col+']/div/h4/a')
        .invoke('text')
        .then((text)=>{
                if(text == 'Class1'){
                    cy.log('found')
                    cy.xpath('/html/body/div[2]/div[3]/div/div[2]/div['+row+']/div['+col+']/div/div[2]').contains('Cancel').click({force:true})
                        cy.get('.btn-success').click({force:true})
                }
                else{
                    row++
                    cy.xpath('/html/body/div[2]/div[3]/div/div[2]/div['+row+']/div['+col+']/div/h4/a')
                    .invoke('text')
                    .then((text)=>{
                    if(text == 'Class1'){
                        cy.log('found')
                        cy.xpath('/html/body/div[2]/div[3]/div/div[2]/div['+row+']/div['+col+']/div/div[2]').contains('Cancel').click({force:true})
                        cy.get('.btn-success').click({force:true})
                    }
                    else{
                        row++
                        cy.xpath('/html/body/div[2]/div[3]/div/div[2]/div['+row+']/div['+col+']/div/h4/a')
                        .invoke('text')
                        .then((text)=>{
                         if(text == 'Class1'){
                            cy.log('found')
                            cy.xpath('/html/body/div[2]/div[3]/div/div[2]/div['+row+']/div['+col+']/div/div[2]').contains('Cancel').click({force:true})
                            cy.get('.btn-success').click({force:true})
                        }
                        else{
                            col++
                            row=1
                            cy.xpath('/html/body/div[2]/div[3]/div/div[2]/div['+row+']/div['+col+']/div/h4/a')
                            .invoke('text')
                            .then((text)=>{
                             if(text == 'Class1'){
                                cy.log('found')
                                cy.xpath('/html/body/div[2]/div[3]/div/div[2]/div['+row+']/div['+col+']/div/div[2]').contains('Cancel').click({force:true})
                                cy.get('.btn-success').click({force:true})
                            }})
                        }})
                }})
        }})

    }
    

   cancel_Created_Event_Workshop(){
        var row = 2
        var col = 3
              //    /html/body/div[2]/div[3]/div/div[2]/div[2]/div[3]/div/h4/a
        cy.xpath('/html/body/div[2]/div[3]/div/div[2]/div['+row+']/div['+col+']/div/h4/a')
        .invoke('text')
        .then((text)=>{
            cy.log(text)
                if(text == 'Workshop1'){
                    cy.log('found')
                          //    /html/body/div[2]/div[3]/div/div[2]/div[2]/div[3]/div/div[2]/p/a[1]
                    cy.xpath('/html/body/div[2]/div[3]/div/div[2]/div['+row+']/div['+col+']/div/div[2]').contains('Cancel').click({force:true})
                    cy.get('.btn-success').click({force:true})
                }
                else{
                    row++
                    cy.xpath('/html/body/div[2]/div[3]/div/div[2]/div['+row+']/div['+col+']/div/h4/a')
                    .invoke('text')
                    .then((text)=>{
                    if(text == 'Workshop1'){
                        cy.log('found')
                        cy.xpath('/html/body/div[2]/div[3]/div/div[2]/div['+row+']/div['+col+']/div/div[2]').contains('Cancel').click({force:true})
                        cy.get('.btn-success').click({force:true})
                    }
                    else{
                        row++
                        cy.xpath('/html/body/div[2]/div[3]/div/div[2]/div['+row+']/div['+col+']/div/h4/a')
                        .invoke('text')
                        .then((text)=>{
                         if(text == 'Workshop1'){
                            cy.log('found')
                            cy.xpath('/html/body/div[2]/div[3]/div/div[2]/div['+row+']/div['+col+']/div/div[2]').contains('Cancel').click({force:true})
                            cy.get('.btn-success').click({force:true})
                        }
                        else{
                            col++
                            row=1
                            cy.xpath('/html/body/div[2]/div[3]/div/div[2]/div['+row+']/div['+col+']/div/h4/a')
                            .invoke('text')
                            .then((text)=>{
                             if(text == 'Workshop1'){
                                cy.log('found')
                                cy.xpath('/html/body/div[2]/div[3]/div/div[2]/div['+row+']/div['+col+']/div/div[2]').contains('Cancel').click({force:true})
                                cy.get('.btn-success').click({force:true})  
                            }})
                        }})
                }})
        }})
    }

    cancel_Several_Events_AtOnce(){
        cy.get(':nth-child(1) > .dashboard-box > :nth-child(4) > .count').invoke('text').then((text)=>{ //only works for classes
        cy.log(text)
        for(var e=1; e<text; e++){
            cy.xpath('/html/body/div[2]/div[3]/div/div[2]/div[1]/div[3]/div[2]/div[2]')
            .contains('Cancel')
            .invoke('text')
            .then((text) => {
                if(text == 'Cancel'){
                    cy.xpath('/html/body/div[2]/div[3]/div/div[2]/div[1]/div[3]/div[2]/div[2]').contains('Cancel').click({force:true})
                    cy.get('.cancel-event').click({force:true})
                    cy.wait(100)
                    cy.get('.btn-success').click({force:true})
                }
            })
        }
        })
    }
    cancel_Several_Events_AtOnce_bulk(){
        cy.get(':nth-child(1) > .dashboard-box > :nth-child(4) > .count').invoke('text').then((text)=>{ //only works for classes
        cy.log(text)    
        for(var e=1; e<text; e++){
            cy.xpath('/html/body/div[2]/div[3]/div/div[2]/div[1]/div[3]/div[2]/div[2]')
            .contains('Cancel')
            .invoke('text')
            .then((text) => {
                if(text == 'Cancel'){
                    cy.xpath('/html/body/div[2]/div[3]/div/div[2]/div[1]/div[3]/div[2]/div[2]').contains('Cancel').click({force:true})
                    cy.get('#modalBodyBulk > ul > :nth-child(2) > a').click({force:true})
                    cy.wait(100)
                    cy.get('.box-footer > .btn').click({force:true})
                    cy.wait(100)
                    cy.get('.btn-success').click({force:true})


                }
            })
        }
        })
    }
    cancel_Several_Events_AtOnce_repeat(){
        cy.get(':nth-child(1) > .dashboard-box > :nth-child(4) > .count').invoke('text').then((text)=>{ //only works for classes
        cy.log(text)    
        for(var e=1; e<text; e++){
            cy.xpath('/html/body/div[2]/div[3]/div/div[2]/div[2]/div[3]/div[2]')
            .contains('Cancel')
            .invoke('text')
            .then((text) => {
                if(text == 'Cancel'){
                    cy.xpath('/html/body/div[2]/div[3]/div/div[2]/div[2]/div[3]/div[2]').contains('Cancel').click({force:true})
                    cy.get('#modalBodyBulk > ul > :nth-child(2) > a').click({force:true})
                    cy.wait(100)
                    cy.get('.box-footer > .btn').click({force:true})
                    cy.wait(100)
                    cy.get('.btn-success').click({force:true})
                    
                    cy.get('#w1-success-0').should('be.visible')


                }
            })
        }
        })
    }

    cancel_Several_Events_AtOnce_Any_Kind(){
        cy.get(':nth-child(1) > .dashboard-box > :nth-child(3) > .count').invoke('text').then((text)=>{
        var total = text
            cy.get(':nth-child(1) > .dashboard-box > :nth-child(4) > .count').invoke('text').then((text)=>{
            total = total + text
                cy.get(':nth-child(1) > .dashboard-box > :nth-child(6) > .count').invoke('text').then((text)=>{
                total = total + text

                    for(var e=1; e<total; e++){
                    cy.xpath('/html/body/div[2]/div[3]/div/div[2]/div[1]/div[3]/div[2]/div[2]')
                    .contains('Cancel')
                    .invoke('text')
                    .then((text) => {
                        if(text == 'Cancel'){
                            cy.xpath('/html/body/div[2]/div[3]/div/div[2]/div[1]/div[3]/div[2]/div[2]').contains('Cancel').click({force:true})
                            cy.get('.btn-success').click({force:true})
                        }
                    })
                    }
                    
                })
            })
        })
    }

    verify_events(){
        cy.get(':nth-child(1) > .dashboard-box > :nth-child(3) > .count').invoke('text').then((text)=>{ 
            if(text=='0'||text==1){
    
            }
            else{
                cy.get(':nth-child(1) > .dashboard-box > :nth-child(3) > .count').invoke('text').then((text)=>{
                    var aux = parseInt(text)
                    var total = aux
                        cy.get(':nth-child(1) > .dashboard-box > :nth-child(4) > .count').invoke('text').then((text)=>{
                            var aux1 = parseInt(text)
                            total = total + aux1
                            cy.get(':nth-child(1) > .dashboard-box > :nth-child(6) > .count').invoke('text').then((text)=>{
                                var aux2 = parseInt(text)
                                total = total + aux2
                                cy.log(total)
                                for(var e=1; e<total; e++){
                                cy.xpath('/html/body/div[2]/div[3]/div/div[2]/div[1]/div[3]/div[2]/div[2]')
                                .contains('Cancel')
                                .invoke('text')
                                .then((text) => {
                                    if(text == 'Cancel'){
                                        cy.xpath('/html/body/div[2]/div[3]/div/div[2]/div[1]/div[3]/div[2]/div[2]').contains('Cancel').click()
                                        cy.get('.btn-success').click()
                                    }
                                })
                                }
                                
                            })
                        })
                    })
            }
           })
    }


    edit_Several_Events_AtOnce_bulk(){
        cy.get(':nth-child(1) > .dashboard-box > :nth-child(4) > .count').invoke('text').then((text)=>{ //only works for classes
       // for(var e=1; e<text; e++){
            cy.xpath('/html/body/div[2]/div[3]/div/div[2]/div[1]/div[3]/div[2]/div[2]')
            .contains('Edit Event')
            .invoke('text')
            .then((text) => {
                if(text == 'Edit Event'){
                    cy.xpath('/html/body/div[2]/div[3]/div/div[2]/div[1]/div[3]/div[2]/div[2]').contains('Edit Event').click({force:true})
                    cy.get('#modalBodyBulk > ul > :nth-child(2) > a').click({force:true})
                    cy.wait(100)
                    
                }
            })
       // }
        })
    }

}