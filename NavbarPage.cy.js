class Navigators{

    EnterURL(){
        cy.visit("https://www.flipkart.com/");
    }

    Home(){
        cy.xpath('(//img[@title="Flipkart"])[1]').click({force:true});
        cy.url().should('contain','https://www.flipkart.com/');
    }

    About() {
        cy.get('[aria-label="About Us"]')          // Get the "About Us" link
            .click({ force: true })                // Click the link                              // Pause the execution here
            .url({ timeout: 20000 })               // Wait up to 20 seconds for the URL to change
            .should('eq', 'https://corporate.flipkart.net/corporate-home'); // Assert the URL
    }

    Contact(){
        cy.contains('Contact Us').click({force:true});
        cy.url().should('contain','/helpcentre?otracker=footer_navlinks');
    }
}
export default Navigators