import { test, expect } from '@playwright/test';
import { POManager } from '../pageObjects/POManager';
import userRegistrationData from "../Test-data/userRegistrationData.json"


test('Account Registration',async({page})=>{
    const poManager= new POManager(page);
  const registrationPage=  poManager.getRegistrationPage();
await registrationPage.goto();
await registrationPage.userRegistration
(
    userRegistrationData.firstName,
    userRegistrationData.lastName,
    userRegistrationData.userEmail,
    userRegistrationData.occupation,
    userRegistrationData.userMobile,
    userRegistrationData.userPassword
);
})

test('Adding products to the Cart and placing an Order',async({page})=>{
    const poManager= new POManager(page);
    const registrationPage =  poManager.getRegistrationPage();
    await registrationPage.goto();
    await registrationPage.login
    ( 
        userRegistrationData.userEmail,
        userRegistrationData.userPassword
    );

   const addingProductToCart= poManager.getAddingProductToCart();
    await addingProductToCart.AddProduct
    (
        userRegistrationData.productName
    );

   const placingOrder= poManager.getPlacingOrder();
    await placingOrder.orderSubmission
    (
        userRegistrationData.productName,
        userRegistrationData.fullName,
        userRegistrationData.cvvNumber,
        userRegistrationData.couponCode
    );

    expect(await page.locator('.mt-1.ng-star-inserted').textContent()).toContain('* Coupon Applied');
    await expect(page.locator('.hero-primary')).toContainText(' Thankyou for the order. ');

   const verifyingOrder= poManager.getVerifyingOrder();
    const { realOrderId, orderIdverification } = await verifyingOrder.orderVerification();
    expect(realOrderId.includes(orderIdverification)).toBe(true);
})

