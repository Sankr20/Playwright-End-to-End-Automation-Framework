class RegistrationPage{

    constructor(page){
        this.page=page;
        this.registrationButton=page.locator('.login-wrapper-footer-text');
        this.firstName=page.locator('#firstName');
        this.lastName=page.locator('#lastName');
        this.email=page.locator('#userEmail');
        this.mobile=page.locator('#userMobile');
        this.occupation=page.locator('.custom-select');
        this.gender=page.getByLabel('Male');
        this.password=page.locator('#userPassword');
        this.confirmPassword=page.locator('#confirmPassword');
        this.checkBox=page.locator('input[type="checkbox"]');
        this.register=page.locator('#login');
        this.LoginButton=page.locator('#login');
        this.successMessage=page.locator("h1[class='headcolor']");
    }


    async goto(){
    await this.page.goto('https://rahulshettyacademy.com/client/');
    }
    
  async  userRegistration(firstName, lastName, userEmail,occupation, userMobile, userPassword)
    {
await this.registrationButton.click();
await this.firstName.fill(firstName);
await this.lastName.fill(lastName);
await this.email.fill(userEmail);
await this.mobile.fill(userMobile);
await this.occupation.selectOption(occupation);
await this.gender.nth(0).click();
await this.password.fill(userPassword);
await this.confirmPassword.fill(userPassword);
await this.checkBox.click();
await this.register.click();
await this.successMessage.waitFor();
await this.page.getByText('Login').click();
await this.email.fill(userEmail);
await this.password.fill(userPassword);
await this.LoginButton.click();
    }
async login(userEmail,userPassword){
    await this.email.fill(userEmail);
await this.password.fill(userPassword);
await this.LoginButton.click();
}
    

}



export {RegistrationPage};