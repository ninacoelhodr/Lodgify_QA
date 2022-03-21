/// <reference types="cypress" />

import data from "../support/data.json";
import pricingData from "../fixtures/pricingData.json";

class Pricing {
  visit() {
    return cy.visit("/pricing.html");
  }

  chooseRentals(rentals) {
    cy.get(data.locatorsContact.rentals).clear();
    cy.get(data.locatorsContact.rentals).type(rentals);
  }

  chooseCurrency(currency) {
    cy.get(data.locatorsContact.currency).select(currency);
  }
}
export default new Pricing();
