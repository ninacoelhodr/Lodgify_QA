/// <reference types="cypress" />

import data from "../support/data.json";
import contactData from "../fixtures/contactData.json";

class Contact {
  visit() {
    return cy.visit("/Contact.html");
  }

  clickSend() {
    return cy
      .get(data.locatorsContact.sendButton)
      .contains(data.textsContact.send)
      .click();
  }
  clickCalendar() {
    cy.wait(1000);
    return cy.get(data.locatorsContact.calendar).first().click();
  }

  chooseDateCI(month, day, year) {
    cy.goToRightYear(year);
    cy.selectMonth(month), cy
      .get('td[aria-label*="' + month + " " + day + '"]')
      .click();
  }

  chooseDateCO(month, day, year) {
    cy.goToRightYear(year);
    cy.selectMonth(month), cy
      .get('td[aria-label*="' + month + " " + day + '"]')
      .click();
  }

  fillForm() {
    return cy
      .get(data.locatorsContact.name)
      .type(contactData.name)
      .get(data.locatorsContact.calendar)
      .first()
      .type(contactData.arrivalDate, { force: true })
      .get(data.locatorsContact.calendar)
      .last()
      .type(contactData.departureDate, { force: true })
      .get(data.locatorsContact.email)
      .type(contactData.email)
      .get(data.locatorsContact.phone)
      .type(contactData.phone)
      .get(data.locatorsContact.comment)
      .type(contactData.comment)
      .get(data.locatorsContact.guests)
      .type(contactData.guests);
  }

  clickPrivacy() {
    return cy.get("a").contains("privacy").click();
  }

  clickTerms() {
    return cy.get("a").contains("Terms").click();
  }

  fillWrongeEmail() {
    return cy
      .get(data.locatorsContact.email)
      .clear()
      .type(contactData.wrongEmail);
  }

  fillZeroGuests() {
    cy.get(data.locatorsContact.guests).clear().type(0);
  }

  removeTarget(target) {
    return cy.get("a").contains(target).invoke("removeAttr", "target");
  }

  fillEmailIncorrect() {
    return cy
      .get(data.locatorsContact.email)
      .clear()
      .type(contactData.emailError);
  }
}
export default new Contact();
