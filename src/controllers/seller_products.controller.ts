import { Request, Response } from "express";
import { toNumber } from "lodash";
import SellerProductsHandler from "../handlers/seller_products.handler";

export default class SellerProductsController {
  static async getAllProducts(req: Request, res: Response) {
    const result = await SellerProductsHandler.getAllProducts();
    res.status(result.status).send(result.message);
  }

  static async getSellerProductsByAsin(req: Request, res: Response) {
    const { asin, locale } = req.query;
    const result = await SellerProductsHandler.getSellerProductsByAsin(asin.toString(),locale.toString());
    res.status(result.status).send(result.message);
  }

  static async getSellerProductsByName(req:Request, res:Response) {
    const {sellerName} = req.params;
    const result = await SellerProductsHandler.getSellerProductsByName(sellerName);
    res.status(result.status).send(result.message);
  }

  static async updateSellerProductsByAsin(req: Request, res: Response) {
    const { asin, locale } = req.query;
    const {product_name, product_link, price} = req.body;
    console.log(product_name);
    console.log(product_link);
    console.log(price);
    const result = await SellerProductsHandler.updateSellerProductsByAsin(asin.toString(),locale.toString(),product_name,product_link,price);
    res.status(result.status).send(result.message);
  }

  static async deleteSellerProductsByAsin(req: Request, res: Response) {
    const { asin, locale } = req.query;
    const result = await SellerProductsHandler.deleteSellerProductsByAsin(asin.toString(),locale.toString());
    res.status(result.status).send(result.message);
  }

  static async addSellerProduct(req: Request, res: Response) {
    const { asin, locale, price, product_name, product_link, seller_name } = req.body;
    console.log('Body: ',req.body);
    // if(!asin || !locale || !price || !product_name || !product_link || !seller_name) res.status(400).send(null)
    const result = await SellerProductsHandler.addSellerProduct(asin,locale,price,product_name,product_link,seller_name);
    res.status(result.status).send(result.message);
  }
}
