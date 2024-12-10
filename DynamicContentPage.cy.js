class Scrolling{

    enterURL(){
        cy.visit('https://www.flipkart.com/');
    }
    scrollTo(){
         cy.scrollTo('bottom');
        
    }
}
export default Scrolling