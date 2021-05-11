/// <reference types="cypress"/>

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

describe('test API',()=>{
    /*it ('first test', ()=>{
        var resp=cy.request({
            method:"POST",
            url: 'https://stage.vivayalive.com/site/login',
            form: true,
            body: {
                Email: "user",
                Password:"password",
                send:"1"
            }
        }).then((resp)=> {
            expect(resp.status).to.eq(200)
        })
    })*/

    it ('first request', ()=>{
        cy.request('http://jsonplaceholder.typicode.com/todos')
        .its('headers')
        .its('content-type')
        .should('include', 'application/json')
    })

})  
