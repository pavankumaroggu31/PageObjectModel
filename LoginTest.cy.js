import LogIn from "../../support/Page Object/LoginPage.cy";

describe('Login Page OHRM', () => {

    const login1=new LogIn();
    
    it('Login', () => {
        login1.EnterUrl();
        login1.loginOHrm();
    });
});

