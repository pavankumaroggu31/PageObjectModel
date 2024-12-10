import Navigators from "../../support/Page Object/NavbarPage.cy";

describe('Navigators Check', () => {

    const navi=new Navigators();
   
    it('', () => {
cy.visit("https://www.flipkart.com/");
        navi.EnterURL();
        navi.Home();
       // cy.wait(4000);
        
        navi.About();
        
        navi.Contact();
        
    });
});