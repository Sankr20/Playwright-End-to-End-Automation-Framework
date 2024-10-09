class PlacingOrder{

constructor(page){

    this.page=page;
    this.cartButton=page.locator("//button[@routerlink='/dashboard/cart']");
    this.productTitle=page.locator('.cartSection h3');
    this.selectMonth=page.locator("(//select[@class='input ddl'])[1]");
    this.selectDay=page.locator("(//select[@class='input ddl'])[2]");
    this.cvv=page.locator("(//input[@class='input txt'])[1]");
    this.nameonCard=page.locator("(//input[@class='input txt'])[2]");
    this.coupon=page.locator('input[type=text]').nth(3);
    this.submitButton=page.locator('button[type=submit]');
    this.couponAddedMessage=page.locator('.mt-1.ng-star-inserted');
    this.selectCountry=page.locator("input[placeholder='Select Country']");
    this.countrySuggestion=page.locator('.ta-results');
    this.placeOrderButton=page.locator('.btnn.action__submit.ng-star-inserted');
}

async orderSubmission(productName,fullName,cvvNumber,couponCode){
await this.cartButton.click();
if(await this.productTitle.textContent()===productName)
{
    await this.page.getByRole('button', {name:'Buy Now'}).click();
}
await this.selectMonth.selectOption('07');
await this.selectDay.selectOption('07');
await this.cvv.fill(cvvNumber);
await this.nameonCard.fill(fullName);
await this.coupon.fill(couponCode);
await this.submitButton.click();
await this.selectCountry.click();
await this.selectCountry.pressSequentially('Cuba');
const dynamicDropdown=await this.countrySuggestion;
await dynamicDropdown.click();
await this.placeOrderButton.click();
}

}
export {PlacingOrder}