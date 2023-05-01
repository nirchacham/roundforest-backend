import model from "../src/models/model";

/* WARNING THIS WILL DROP THE CURRENT DATABASE */
seed();

async function seed() {
  // create tables
  await model.SellerProduct.sync({ force: true });
  //insert data
  try{
  await Promise.all([
    model.SellerProduct.create({
      id: 1,
      asin: "078669324X",
      locale: "CA",
      seller_name: "thrasio",
      availability: true,
      price: 16.87,
      product_name: "You Can Teach Yourself Dobro",
      product_link: "https://www.amazon.com/dp/078669324X?tag=hallocostu201-20&linkCode=ogi&th=1&psc=1",
    }),
    model.SellerProduct.create({
      id: 2,
      asin: "999768409",
      locale: "US",
      seller_name: "perch",
      availability: true,
      price: 15.95,
      product_name: "Li'l-Gen Dinosaurs Sound Book: Clever Creatures and Boundless Beasts - A Land of Dinosaurs (12 Button Sound)",
      product_link: "https://www.amazon.com/dp/0999768409?tag=hallocostu201-20&linkCode=ogi&th=1&psc=1",
    }),
    model.SellerProduct.create({
      id: 3,
      asin: "1562222430",
      locale: "CA",
      seller_name: "thrasio",
      availability: true,
      price: 14.99,
      product_name: "Easy Solos for Beginning Cello Level 1",
      product_link: "https://www.amazon.com/dp/1562222430?tag=hallocostu201-20&linkCode=ogi&th=1&psc=1",
    }),
    model.SellerProduct.create({
      id: 4,
      asin: "1562222430",
      locale: "US",
      seller_name: "thrasio",
      availability: true,
      price: 14.99,
      product_name: "Easy Solos for Beginning Cello Level 1",
      product_link: "https://www.amazon.com/dp/1562222430?tag=hallocostu201-20&linkCode=ogi&th=1&psc=1",
    }),
    model.SellerProduct.create({
      id: 5,
      asin: "1883035031",
      locale: "US",
      seller_name: "clear-pool",
      availability: true,
      price: 65,
      product_name: "Growing Kids God's Way: Reaching the Heart of Your Child With a God-Centered Purpose",
      product_link: "https://www.amazon.com/dp/1883035031?tag=hallocostu201-20&linkCode=ogi&th=1&psc=1",
    }),
  ]);
}catch(err){
  console.log(err);
}
}
