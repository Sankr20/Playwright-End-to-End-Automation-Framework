import { RegistrationPage } from '../pageObjects/RegistrationPage';
import {AddingProductToCart} from '../pageObjects/AddingProductToCart';
import { PlacingOrder } from '../pageObjects/PlacingOrder';
import { VerifyingOrder } from '../pageObjects/verifyingOrder';
class POManager{


constructor(page){
    this.page=page;
    this.registrationPage=new RegistrationPage(this.page);
    this.addingProductToCart = new AddingProductToCart(this.page);
    this.placingOrder=new PlacingOrder(this.page);
    this.verifyingOrder=new VerifyingOrder(this.page);
}

getRegistrationPage()
{
    return this.registrationPage;
}

getAddingProductToCart(){
    return this.addingProductToCart;
}

getPlacingOrder(){
    return this.placingOrder;
}

getVerifyingOrder(){
    return this.verifyingOrder;
}

}
export {POManager}