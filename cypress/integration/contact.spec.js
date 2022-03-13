/// <reference types="cypress" />

import contact from '../pages/contact.js'
import data from "../support/data.json";

describe('Contact Page', () => {

  beforeEach(() => {
    contact.visit()
  })

    it('Verify validations mandatory', () => {
      contact.clickSend()
      cy.get(data.locatorsContact.nameError).invoke('text').should('eq',data.textsContact.validateName)
      cy.get(data.locatorsContact.emailError).invoke('text').should('eq',data.textsContact.validateEmail)
      cy.get(data.locatorsContact.commentError).invoke('text').should('eq',data.textsContact.validateComment)

    })

    it('Verify incorrect email', () => {
      contact.fillForm()
      contact.fillWrongeEmail()
      contact.clickSend()
      cy.get(data.locatorsContact.emailError).invoke('text').should('eq',data.textsContact.incorrectEmail)
    })
    
    it('Verify > 0 guests', () => {
      contact.fillForm()
      contact.fillZeroGuests()
      contact.clickSend()
      cy.get(data.locatorsContact.guests).then(($input) => {
        expect($input[0].validationMessage).to.eq(data.textsContact.validationMessageGuests)
      })    })

    it('Verify Calendar', () => {
       contact.clickCalendar()
        contact.chooseDateCI('April', '14', '2022')
        contact.chooseDateCO('June', '14', '2022')
      })

    //it('contact is sending ok', () => {
      //  contact.fillForm()
        //contact.clickSend()
        //cy.get(data.locatorsContact.successMessage).invoke('text').should('eq',"Success")
    //})

    it('contact is sending error', () => {
      contact.fillForm()
      contact.fillEmailIncorrect()
      contact.clickSend()
      cy.get(data.locatorsContact.errorMessage).invoke('text').should('eq',"Error")
    })

    
    it('privacy policy link is ok ', () => {
        contact.removeTarget('privacy')
        contact.clickPrivacy()
        cy.url().should('contain', data.linksContact.privacyLink)
    })

    it('Terms of Service link is ok ', () => {
      contact.removeTarget('Terms')  
      contact.clickTerms()
        cy.url().should('contain', data.linksContact.termsLink)
    })
})