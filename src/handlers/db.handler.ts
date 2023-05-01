import model from "../models/model";

export default class DbHandler {

  static async getAllProducts() {
    try{
      return await model.SellerProduct.findAll({});
    } catch(err) {
      console.log(err);
    }
  }

  static async getSellerProductsByAsinAndLocale(asin:string, locale:string) {
    try{
      return await model.SellerProduct.findAll({
        where: {
          asin:asin,
          locale:locale
        }
      })
    } catch (err) {
      console.log(err);
      //throw custom error
    }
  }

  static async getSellerProductsByName(sellerName:string) {
    try{
      return await model.SellerProduct.findAll({
        where: {
          seller_name: sellerName,
          availability: true,
        }
      })
    } catch (err) {
      console.log(err);
      //throw custom error
    }
  }

  static async deleteSellerProductsByAsinAndLocale(asin:string, locale:string) {
    try{
      return await model.SellerProduct.destroy({
        where: {
          asin:asin,
          locale:locale
        }
      })
    } catch (err) {
      console.log(err);
      //throw custom error
    }
  }

  static async updateSellerProductsByAsinAndLocale(asin:string, locale:string, product_name:string, product_link:string, price:number) {
    try{
      const productToUpdate = await model.SellerProduct.findOne({
          where: 
          {
          asin:asin,
          locale:locale
          }
      });
      if(productToUpdate) {
        productToUpdate.update({
          product_name: product_name ?? productToUpdate.product_name,
          product_link: product_link ?? productToUpdate.product_link,
          price: price ?? productToUpdate.price
        })
        return productToUpdate;
      }
      else return null;
    } catch(err) {
      console.log(err);
      //throw custom error
    }
  }

  static async addSellerProduct(asin:string,locale:string,price:number,product_name:string,product_link:string,seller_name:string) {
    try{
      return await model.SellerProduct.create({
        asin,
        locale,
        seller_name,
        availability: true,
        price,
        product_name,
        product_link
      })
    }catch(err) {
      console.log(err);
    }
  }
}