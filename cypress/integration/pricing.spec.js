/// <reference types="cypress" />

import pricing from "../pages/pricing.js";
import data from "../support/data.json";
import pricingData from "../fixtures/pricingData.json";

describe("Pricing Page", () => {
  beforeEach(() => {
    pricing.visit();
  });

  it("Rentals 50 yearly plan prices in USD", () => {
    pricing.chooseRentals(50);
    cy.choosePlan("Yearly");
    pricing.chooseCurrency("usd");
    cy
      .get(data.locatorsPricing.priceStarter)
      .invoke("text")
      .should("eq", pricingData.starterPriceUSD50);
    cy
      .get(data.locatorsPricing.priceProfissional)
      .invoke("text")
      .should("eq", pricingData.professionalPriceUSD50);
    cy
      .get(data.locatorsPricing.priceUltimate)
      .invoke("text")
      .should("eq", pricingData.ultimatePriceUSD50);
  });

  it("Rentals 50 yearly plan prices in EUR", () => {
    pricing.chooseRentals(50);
    cy.choosePlan("Yearly");
    pricing.chooseCurrency("eur");
    cy
      .get(data.locatorsPricing.priceStarter)
      .invoke("text")
      .should("eq", pricingData.starterPriceEUR50);
    cy
      .get(data.locatorsPricing.priceProfissional)
      .invoke("text")
      .should("eq", pricingData.professionalPriceEUR50);

    cy
      .get(data.locatorsPricing.priceUltimate)
      .invoke("text")
      .should("eq", pricingData.ultimatePriceEUR50);
  });

  it("Rentals 50 yearly plan prices in GBP", () => {
    pricing.chooseRentals(50);
    cy.choosePlan("Yearly");
    pricing.chooseCurrency("gbp");
    cy
      .get(data.locatorsPricing.priceStarter)
      .invoke("text")
      .should("eq", pricingData.starterPriceGBP50);

    cy
      .get(data.locatorsPricing.priceProfissional)
      .invoke("text")
      .should("eq", pricingData.professionalPriceGBP50);

    cy
      .get(data.locatorsPricing.priceUltimate)
      .invoke("text")
      .should("eq", pricingData.ultimatePriceGBP50);
  });
});
