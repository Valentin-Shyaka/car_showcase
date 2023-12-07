
describe('Navigation', () => {
  it('should navigate to the about page', () => {
    // Start from the index page
    cy.visit('/')
 
    // Find a link with an href attribute containing "about" and click it
    cy.get('a[href*="home"]').click()
 
    // The new url should include "/about"
    cy.url().should('include', '/home')
 
    // The new page should contain an h1 with "About page"
    cy.get('h3').contains('200+ cars available')
  }),
  it('should navigate to the team page', () => {
    // Start from the index page
   cy.visit('/home')
 
    // Find a link with an href attribute containing "about" and click it
    cy.get('a[href*="ourTeam"]').click()
 
    // The new url should include "/about"
    cy.url().should('include', '/ourTeam')
 
    // The new page should contain an h1 with "About page"
    cy.get('h3').contains('Meet the team')
  }),
  it('should navigate to the booking page', () => {
    // Start from the index page
   cy.visit('/ourTeam')
 
    // Find a link with an href attribute containing "about" and click it
    cy.get('a[href*="book"]').click()
 
    // The new url should include "/about"
    cy.url().should('include', '/book')
 
    // The new page should contain an h1 with "About page"
    cy.get('h3').contains('Book your Drive')
  }),
  it('should navigate to the contact page', () => {
    // Start from the index page
   cy.visit('/book')
 
    // Find a link with an href attribute containing "about" and click it
    cy.get('a[href*="contact"]').click()
 
    // The new url should include "/about"
    cy.url().should('include', '/contact')
 
    // The new page should contain an h1 with "About page"
    cy.get('h3').contains('Contact usmac')
  })
  
})
