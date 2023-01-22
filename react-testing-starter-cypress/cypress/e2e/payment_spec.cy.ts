const {v4: uuidv4} = require('uuid')

describe("payment", () => {
  it("user can make payment", () => {
      // Login
      
      cy.visit('localhost:3000')
      cy.findByRole('textbox', {  name: /username/i}).type('johndoe')
      cy.findByLabelText(/password/i).type('s3cret')
      cy.findByRole('checkbox', {  name: /remember me/i}).click()
      cy.findByRole('button', {  name: /sign in/i}).click();
      
      // Check account balance
      let oldBalance = cy.get('[data-test="sidenav-user-balance"]').then(balance => oldBalance = balance.text())
      
      // Click on pay button
      cy.findByText(/new/i).click()
      
      // Search for a user
      cy.findByRole('textbox').type('devon becker')
      cy.findByText(/devon becker/i).click()
      
      // Add amount and note and click pay
      const payAmount = "5.00" 
      cy.findByPlaceholderText(/amount/i).type(payAmount)
      const note = uuidv4()
      cy.findByPlaceholderText(/add a note/i).type(note)
      cy.findByRole('button', {  name: /pay/i}).click()
      // Return to transactions
      cy.findByText(/return to transactions/i).click()
      // Go to personal tab 'Mine'
      cy.findByRole('tab', {  name: /mine/i}).click()
      // Click on payment
      cy.findByText(note).click({force: true});
      // Verify if payment was made
      cy.findByText(`-$${payAmount}`).should('be.visible') // Assertions in Cypress
      cy.findByText(note).should('be.visible')
      // Verify if payment amount was deducted
      cy.get('[data-test="sidenav-user-balance"]').then(balance => {
        const convertedOldBalance = parseFloat(oldBalance.replace(/\$|,/g, ""))
        const convertedNewBalance = parseFloat(balance.text().replace(/\$|,/g, ""))
        expect(convertedOldBalance - convertedNewBalance).to.equal(parseFloat(payAmount));
      })
  });
});
