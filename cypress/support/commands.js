// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import data from "../support/data.json";

Cypress.Commands.add("goToRightYear", yearName => {
  cy.get(data.locatorsContact.calendarMonthAndYear).eq(1).then($el => {
    const text = $el.text();
    const myArray = text.split(" ");
    let yearClicks = 12 * (yearName - myArray[1]);
    if (yearClicks == 0) {
      return;
    } else if (yearClicks > 0) {
      for (let i = 0; i < Math.abs(yearClicks); i++) {
        cy.get(data.locatorsContact.calendarArrow).last().click();
      }
    } else if (yearClicks < 0) {
      for (let i = 0; i < Math.abs(yearClicks); i++) {
        cy.get(data.locatorsContact.calendarArrow).first().click();
      }
    }
  });
});

Cypress.Commands.add("selectMonth", monthName => {
  var months = {
    January: "1",
    February: "2",
    March: "3",
    April: "4",
    May: "5",
    June: "6",
    July: "7",
    August: "8",
    September: "9",
    October: "10",
    November: "11",
    December: "12"
  };
  let currentMonth = new Date().getMonth() + 1;
  let giventMonth = months[monthName];
  cy.get(data.locatorsContact.calendarMonthAndYear).eq(1).then($month => {
    if ($month.text().includes(monthName)) {
      return;
    } else {
      if (giventMonth > currentMonth) {
        cy.get(data.locatorsContact.calendarArrow).last().click();
      } else if (giventMonth < currentMonth) {
        cy.get(data.locatorsContact.calendarArrow).first().click();
      }
    }

    cy.selectMonth(monthName);
  });
});

  Cypress.Commands.add("choosePlan", plan => {
    if (plan == "Yearly") {
      cy.get(data.locatorsPricing.yearlyPlan).click();
    } else if (plan == "Monthly") {
      cy.get(data.locatorsPricing.monthlyPlan).click();
    }else {
      cy.get(data.locatorsPricing.twoYearsPlan).click();
    }
  });