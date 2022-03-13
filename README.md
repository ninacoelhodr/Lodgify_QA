Open LodgifyHTML as a project to get started

The following instructions use Bash, so make sure to install Git Bash before running the commands.

1. Download Node.js from https://nodejs.org/es/download/ and then execute "$ npm run install-all". 
2. You will need to start a local server to run tests, execute "$ npm run dev-server" in a different terminal, leave this terminal open.
3. To run your test, you should test files inside "cypress/integration/testName.test.js" (where "testName" is the name of the test you're adding).
4. Run the tests with $ "npm run cy:run"
5. You should be able to run and check tests results with these steps, now you can proceed with the requirements below, which you will also find in the Test file.
6. You can create folders for selectors anywhere, the whole structure is up to you, try not to hardcode and create a clean test structure.
7. Make sure to do smart waits in case slowness on services.
8. Tests should be able to run on any environment.

## How we'd like to receive the solution?

Clone this repository and upload it as a new public repository in your GitHub account
Create a new branch in your repository
Create a pull request with the requested functionality to unchanged master branch in your repository
Share link to the PR with us

Quick start commands:
## Installing
```
$ npm run install-all
```
## Starting mock up server (leave a terminal open for this command, and run the test in another terminal)
```
$ npm run dev-server

Note: by default, server.js is using your port 8080, feel free to change it in case you're using it for something else, port 3000 would also be a good alternative. (node server/server.js)
```
## Execute Tests
```
$ npm run cy:run
```

Challengue Requirements:

Two HTML files are provided:

*Pricing page: This page allows the users to select different pricing options.
*Contact page: This page allows the users to fill a form and then send an email.

These simpler version of those pages will require you to add the following tests:

Steps:

1. On "Lodgify Pricing" page, add a test to verify that the "Yearly" plan selecting 50 rentals displays: 
   $64 for Starter plan
   $375 for Professional plan
   $525 for Ultimate plan
2. On "Lodgify Pricing" page, add a test to verify that the change of currency (located just below the pricing options) properly changes the currency of the pricing options. 
   The way you do so, and the extra verification steps are up to you (such as verifying the currency price difference)
3. Using your own criteria, add tests according to what you think should be important to cover in this page "Lodgify Pricing". (Optional)
4. On "Contact" page, add a test to verify that the field validations appear according to the following requirements. 
   "Name" is mandatory and a message should be displayed in case this field is left empty
   "Phone number" is mandatory and a message should be displayed in case this field is left empty
   "Email address" is mandatory and a message should be displayed in case this field is left empty
   "Comment" is mandatory and a message should be displayed in case this field is left empty
   This test should pick the date of arrival "April 14th" and date of departure "June 14" to verify the datepicker is working as expected
   This test should also add a random Lorem Ipsum of your choice to "Comment" field
5. Using your own criteria, add tests according to what you think should be important to cover in this page "Contact". (Optional)


IMPORTANT NOTE: Some tests, if followed the requirements correctly, will fail. For those, add an example of a bug report in the test document. 


## Troubleshooting

Using the provided steps, everything should work as explained, if not, make sure your Node.js is updated. In case you have any issues with Webdriver.io, you can always install another webframework like Express. In these cases, please also add extra information in the README. 

In case you change your configuration, make sure to change your package.json file to run accordingly to avoid any kind of troubles or incompatibilities.

Good luck!
