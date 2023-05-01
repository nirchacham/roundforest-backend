import Sequelize from "sequelize";

const sequelize = new Sequelize.Sequelize({
  dialect: "sqlite",
  storage: "./database.sqlite3",
});

class SellerProduct extends Sequelize.Model {
  public readonly id: number;
  public readonly asin: string;
  public readonly locale: string;
  public readonly availability: boolean;
  public readonly seller_name: string;
  public readonly product_name: string;
  public readonly product_link: string;
  public readonly price: number;
}
SellerProduct.init(
  {
    asin: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    locale: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    availability: {
      type: Sequelize.BOOLEAN,
    },
    product_name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    seller_name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    product_link: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    price: {
      type: Sequelize.DECIMAL(12, 2),
      validate: {
        min: 0,
      },
    },
  },
  {
    sequelize,
    modelName: "SellerProduct",
  }
);


export default {
  sequelize,
  SellerProduct
};

