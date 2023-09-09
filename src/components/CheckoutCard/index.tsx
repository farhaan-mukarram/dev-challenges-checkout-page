import vintageBackpackPhoto from "../../assets/images/photo1.png";
import leviShoesPhoto from "../../assets/images/photo2.png";

import addIcon from "../../assets/icons/add.svg";
import removeIcon from "../../assets/icons/remove.svg";

const cartItems = [
  {
    id: 1,
    title: "Vintage Backpack",
    unitPrice: "$94.99",
    discountedUnitPrice: "$54.99",
    image: vintageBackpackPhoto,
  },
  {
    id: 1,
    title: "Levi Shoes",
    unitPrice: "$124.99",
    discountedUnitPrice: "$74.99",
    image: leviShoesPhoto,
  },
];

const CheckoutCard = () => {
  return (
    <section className="bg-[#F2F2F2] p-8 rounded-xl h-max space-y-24">
      <div className="flex flex-col space-y-8">
        {cartItems.map(
          ({ id, title, unitPrice, discountedUnitPrice, image }) => (
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
                  <div className="w-6 h-6">
                    <img src={removeIcon} alt="" />
                  </div>
                  <div>1</div>
                  <div className="w-6 h-6">
                    <img src={addIcon} alt="" />
                  </div>
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
          <p>$148.98</p>
        </div>
      </div>
    </section>
  );
};

export default CheckoutCard;
