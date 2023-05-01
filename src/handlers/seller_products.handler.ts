import CustomResponse from "../responses/response";
import DbHandler from "./db.handler";


export default class SellerProductsHandler {
  static async getAllProducts() {
    const sellerProducts = await DbHandler.getAllProducts();
    return sellerProducts.length ? new CustomResponse(200,sellerProducts) : new CustomResponse(404,'No products were not found');
  }

  static async getSellerProductsByAsin(asin: string, locale:string) {
    const sellerProducts = await DbHandler.getSellerProductsByAsinAndLocale(asin,locale);
    return sellerProducts.length ? new CustomResponse(200,sellerProducts) : new CustomResponse(404,'Seller products were not found');
  }

  static async getSellerProductsByName(sellerName: string) {
    const sellerProducts = await DbHandler.getSellerProductsByName(sellerName);
    console.log(sellerProducts);
    return sellerProducts.length ? new CustomResponse(200,sellerProducts) : new CustomResponse(404,`${sellerName}'s products were not found`);
  }

  static async updateSellerProductsByAsin(asin: string, locale:string, product_name:string, product_link:string, price:number) {
    const updatedProduct = await DbHandler.updateSellerProductsByAsinAndLocale(asin,locale,product_name,product_link,price);
    return updatedProduct ? new CustomResponse(200,updatedProduct) : new CustomResponse(404,'Seller products were not found');
  }

  static async deleteSellerProductsByAsin(asin: string, locale:string) {
    const deletedProduct = await DbHandler.deleteSellerProductsByAsinAndLocale(asin,locale);
    return deletedProduct ? new CustomResponse(200,'Deleted succesfully') : new CustomResponse(404,'Cannot delete because the product was not found');
  }

  static async addSellerProduct(asin:string,locale:string,price:number,product_name:string,product_link:string,seller_name:string) {
    const addedProduct = await DbHandler.addSellerProduct(asin,locale,price,product_name,product_link,seller_name)
    return addedProduct ? new CustomResponse(200,addedProduct) : new CustomResponse(404,'Cannot add new product');
  }
}
