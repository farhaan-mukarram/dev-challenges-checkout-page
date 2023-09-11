import { useState, useMemo } from "react";

import vintageBackpackPhoto from "../../assets/images/photo1.png";
import leviShoesPhoto from "../../assets/images/photo2.png";

import addIcon from "../../assets/icons/add.svg";
import removeIcon from "../../assets/icons/remove.svg";

type CartItemType = {
  id: number;
  title: string;
  unitPrice: number;
  discountedUnitPrice: number;
  image: string;
  quantity: number;
};

const DEFAULT_CART_ITEMS: Array<CartItemType> = [
  {
    id: 1,
    title: "Vintage Backpack",
    unitPrice: 94.99,
    discountedUnitPrice: 54.99,
    image: vintageBackpackPhoto,
    quantity: 1,
  },
  {
    id: 2,
    title: "Levi Shoes",
    unitPrice: 124.99,
    discountedUnitPrice: 74.99,
    image: leviShoesPhoto,
    quantity: 1,
  },
];

const SHIPPING_COST = 19;

const CheckoutCard = () => {
  const [cartItems, setCartItems] =
    useState<Array<CartItemType>>(DEFAULT_CART_ITEMS);

  const decreaseItemQuantity = (itemId: number) => {
    setCartItems((prevCartItems) => {
      const tempCartItems: Array<CartItemType> = JSON.parse(
        JSON.stringify(prevCartItems)
      );

      const updatedCartItems = tempCartItems?.map((item) => {
        if (item.id === itemId) {
          return {
            ...item,
            quantity: item.quantity - 1 > 1 ? item.quantity - 1 : 1,
          };
        }

        return item;
      });

      return updatedCartItems;
    });
  };

  const increaseItemQuantity = (itemId: number) => {
    setCartItems((prevCartItems) => {
      const tempCartItems: Array<CartItemType> = JSON.parse(
        JSON.stringify(prevCartItems)
      );

      const updatedCartItems = tempCartItems?.map((item) => {
        if (item.id === itemId) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }

        return item;
      });

      return updatedCartItems;
    });
  };

  const totalCost = useMemo(() => {
    const totalCost = cartItems.reduce(
      (acc, currentValue) =>
        acc + currentValue.quantity * currentValue.discountedUnitPrice,
      0
    );

    return Number(totalCost + SHIPPING_COST).toFixed(2);
  }, [cartItems]);

  return (
    <section className="bg-[#F2F2F2] p-8 rounded-xl h-max space-y-24">
      <div className="flex flex-col space-y-8">
        {cartItems.map(
          ({ id, title, unitPrice, discountedUnitPrice, image, quantity }) => (
            <div className="flex space-x-5" key={id}>
              <img src={image} alt={title} className="w-32 h-full rounded-xl" />

              <div className="flex flex-col justify-between w-full">
                <div className="flex flex-col space-y-2">
                  <h4 className="text-base text-[#4E5150]">{title}</h4>
                  <p>
                    <span className="text-[#F2994A]">
                      {discountedUnitPrice}
                    </span>{" "}
                    <span className="line-through text-xs text-[#4E5150]">
                      {unitPrice}
                    </span>
                  </p>
                </div>

                <div className="flex justify-between p-3 border border-[#828282] rounded-xl">
                  <button
                    className="w-6 h-6"
                    // eslint-disable-next-line @typescript-eslint/no-unused-vars
                    onClick={() => decreaseItemQuantity(id)}
                  >
                    <img src={removeIcon} alt="" />
                  </button>
                  <div>{quantity}</div>
                  <button
                    className="w-6 h-6"
                    onClick={() => increaseItemQuantity(id)}
                  >
                    <img src={addIcon} alt="" />
                  </button>
                </div>
              </div>
            </div>
          )
        )}
      </div>

      <div className="flex flex-col space-y-4">
        <div className="flex flex-col space-y-2">
          <hr className="border-[#BDBDBD]" />
          <div className="flex justify-between text-lg text-[#333333]">
            <p>Shipping</p>
            <p>$19</p>
          </div>
          <hr className="border-[#BDBDBD]" />
        </div>

        <div className="flex justify-between text-lg text-[#333333]">
          <p>Total</p>
          <p>{totalCost}</p>
        </div>
      </div>
    </section>
  );
};

export default CheckoutCard;
