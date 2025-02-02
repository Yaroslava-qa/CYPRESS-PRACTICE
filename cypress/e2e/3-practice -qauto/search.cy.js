/// <reference types="cypress" />
describe('example to-do app', () => {
    beforeEach(() => {
      cy.visit('https://qauto.forstudy.space',{
        auth:{
            username: 'guest',
            password: 'welcome2qauto'
        }
      }

      )
    })
    it('find',()=>{
        cy.get('.hero-descriptor').find('.hero-descriptor_btn')
    })
    it('find',()=>{
        cy.get('.socials_link').find('.socials_icon')
    })
    it('find',()=>{
        cy.get('.col-md-6').find('.contacts_link')
    })

})