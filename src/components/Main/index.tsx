import Input from "../Form/Input";

import avatarIcon from "../../assets/icons/avatar.svg";
import phoneIcon from "../../assets/icons/call.svg";
import cityIcon from "../../assets/icons/city.svg";
import emailIcon from "../../assets/icons/email.svg";
import houseIcon from "../../assets/icons/home.svg";
import mailboxIcon from "../../assets/icons/mailbox.svg";
import globeIcon from "../../assets/icons/globe.svg";
import Select from "../Form/Select";

const countryOptions = [
  { value: "CountryA", label: "Country A" },
  { value: "CountryB", label: "Country B" },
  { value: "CountryC", label: "Country C" },
];

const Main = () => {
  return (
    <main className="flex flex-col min-h-screen space-y-12">
      <h1 className="text-4xl text-[#4E5150]">Checkout</h1>

      <section className="flex justify-between">
        <form action="" className="flex flex-col space-y-6">
          <div className="flex flex-col space-y-10">
            <section className="flex flex-col space-y-4">
              <h2 className="text-lg text-[#333333]">Contact Information</h2>

              <div className="flex flex-col space-y-5">
                <Input
                  id="email"
                  label="E-mail"
                  placeholder="Enter your email..."
                  startIcon={emailIcon}
                />

                <Input
                  id="phone"
                  label="Phone"
                  placeholder="Enter your phone..."
                  type="tel"
                  startIcon={phoneIcon}
                />
              </div>
            </section>

            <section className="flex flex-col space-y-4">
              <h2 className="text-lg text-[#333333]">Shipping Address</h2>

              <div className="flex flex-col space-y-5">
                <Input
                  id="fullName"
                  label="Full name"
                  placeholder="Your fullname..."
                  startIcon={avatarIcon}
                />

                <Input
                  id="address"
                  label="Address"
                  placeholder="Your address..."
                  startIcon={houseIcon}
                />

                <Input
                  id="city"
                  label="City"
                  placeholder="Your city..."
                  startIcon={cityIcon}
                />

                <div className="flex space-x-8">
                  <Select
                    id="country"
                    placeholder="Your country..."
                    label="Country"
                    options={countryOptions}
                    startIcon={globeIcon}
                  />

                  <Input
                    id="postalCode"
                    label="Postal code"
                    placeholder="Your postal code..."
                    startIcon={mailboxIcon}
                  />
                </div>
              </div>
            </section>
          </div>

          <div className="flex mt-6 space-x-3">
            <input type="checkbox" name="saveInfo" id="saveInfo" />
            <p className="text-[#4F4F4F] text-xs">
              Save this information for next time
            </p>
          </div>

          <input
            type="submit"
            value="Continue"
            onClick={(event) => event.preventDefault()}
            className="bg-[#F2994A] text-white py-4 px-11 max-w-fit self-end rounded-xl cursor-pointer hover:opacity-80"
          />
        </form>

        <section className="bg-[#040303] rounded-xl p-8"></section>
      </section>
    </main>
  );
};

export default Main;
