class VerifyingOrder{

    constructor(page){
        this.page=page;
        this.extractOrderID=page.locator("label[class='ng-star-inserted']");
        this.OrdersPage=page.locator("label[routerlink='/dashboard/myorders']");
        this.allOrders=page.locator('tbody');
        this.orderRows=page.locator('tbody tr');
        this.verifyOrderId=page.locator('.col-text');


    }

    async orderVerification(){
let orderId=await this.extractOrderID.textContent();
console.log(orderId);
const realOrderId= orderId.split(" ")[2];
console.log(realOrderId);
await this.OrdersPage.click();
await this.allOrders.waitFor();
const listofRows= this.orderRows;
for(let i=0;i<await listofRows.count();i++)
{
    const allOrderId=await listofRows.nth(i).locator('th').textContent();
    if(allOrderId.includes(realOrderId))
        {
            await listofRows.nth(i).locator('button').first().click();
            break;
        }
}
const orderIdverification=await this.verifyOrderId.textContent();

return { realOrderId, orderIdverification };
    }

}

export {VerifyingOrder}