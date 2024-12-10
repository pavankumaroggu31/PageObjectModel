class LogIn {
    
    EnterUrl(){
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    }
    
    loginOHrm(){
       // cy.get('[placeholder="Username"]').type('Admin');
       cy.get('[placeholder="Username"]').type('Admin');
        cy.get('[placeholder="Password"]').type('admin123');
        cy.contains(' Login ').click();
    }
}

export default LogIn;