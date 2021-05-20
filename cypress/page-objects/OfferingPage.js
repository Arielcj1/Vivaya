/// <reference types="cypress"/>
export class OfferingPage {
Request_add_offering(){
    cy.get('#addNewOffer').click()
}
Select_Offering(value){
    cy.get('#guideadditionaloffer-offer_id').select(value)
}
type_Years_Teaching(value){
    cy.get('#guideadditionaloffer-years_teaching').type(value)
}
check_Certified(){
    cy.get('#guideadditionaloffer-certified').check()
    cy.wait(500)
}
name_of_Program(value){
    cy.get('#guideadditionaloffer-certificate_name').type(value)
}
number_Of_Hours(value){
    cy.get('#guideadditionaloffer-certificate_hours').type(value+'{enter}')
}
upload_File(){
    cy.get('input[id=guideadditionaloffer-certificate_file]').attachFile('liability.jpg')
}
}