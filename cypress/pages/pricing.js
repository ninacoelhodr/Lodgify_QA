/// <reference types="cypress" />

import data from "../support/data.json";
import pricingData from "../fixtures/pricingData.json";

class Pricing {
  visit() {
    return cy.visit("/pricing.html");
  }

  chooseRentals(rentals) {
    cy.get('input[id="scroll-prop-plan"]').clear();
    cy.get('input[id="scroll-prop-plan"]').type(rentals);
  }

  chooseCurrency(currency) {
    cy.get('.price-currency-select').select(currency)
    
  }
}
export default new Pricing();
