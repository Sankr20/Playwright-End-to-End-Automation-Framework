class AddingProductToCart{

    constructor(page){
    this.page=page;
    this.products=page.locator('.card-body'); 
    }

    async AddProduct(productName){

        await this.page.waitForLoadState('networkidle');
    const count=await this.products.count();
    for(let i=0;i<count;i++)
    {
    if(await this.products.nth(i).locator('b').textContent() ===productName){
        await this.products.nth(i).locator('text=Add to Cart').click();
        break;
    }
    }   
    }
}
export {AddingProductToCart};