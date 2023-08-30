const Main = () => {
  return (
    <main className="flex flex-col min-h-screen space-y-12">
      <h1 className="text-4xl text-[#4E5150]">Checkout</h1>

      <section className="flex justify-between">
        <form action="" className="flex flex-col space-y-10">
          <section className="flex flex-col space-y-4">
            <h2 className="text-lg text-[#333333]">Contact Information</h2>

            <div className="flex flex-col space-y-5">
              <div className="flex flex-col space-y-2">
                <label className="text-xs text-[#4F4F4F]" htmlFor="email">
                  E-mail
                </label>
                <input
                  className="border border-[#828282] rounded-xl h-14 pl-3"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email..."
                />
              </div>

              <div className="flex flex-col space-y-2">
                <label className="text-xs text-[#4F4F4F]" htmlFor="phone">
                  Phone
                </label>
                <input
                  className="border border-[#828282] rounded-xl h-14 pl-3"
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="Enter your phone..."
                />
              </div>
            </div>
          </section>

          <section className="flex flex-col space-y-4">
            <h2 className="text-lg text-[#333333]">Shipping Address</h2>

            <div className="flex flex-col space-y-5">
              <div className="flex flex-col space-y-2">
                <label className="text-xs text-[#4F4F4F]" htmlFor="fullName">
                  Full name
                </label>
                <input
                  className="border border-[#828282] rounded-xl h-14 pl-3"
                  type="text"
                  name="fullName"
                  id="fullName"
                  placeholder="Your full name..."
                />
              </div>

              <div className="flex flex-col space-y-2">
                <label className="text-xs text-[#4F4F4F]" htmlFor="address">
                  Address
                </label>
                <input
                  className="border border-[#828282] rounded-xl h-14 pl-3"
                  type="text"
                  name="address"
                  id="address"
                  placeholder="Your address..."
                />
              </div>

              <div className="flex flex-col space-y-2">
                <label className="text-xs text-[#4F4F4F]" htmlFor="city">
                  City
                </label>
                <input
                  className="border border-[#828282] rounded-xl h-14 pl-3"
                  type="text"
                  name="city"
                  id="city"
                  placeholder="Your city..."
                />
              </div>

              <div className="flex space-x-8">
                <div className="flex flex-col space-y-2">
                  <label className="text-xs text-[#4F4F4F]" htmlFor="country">
                    Country
                  </label>
                  <select
                    className="border border-[#828282] rounded-xl h-14 pl-3"
                    name="country"
                    id="country"
                    placeholder="Your country..."
                  >
                    <option value="">Your Country...</option>
                    <option value="countryA">Country A</option>
                    <option value="countryB">Country B</option>
                    <option value="countryC">Country C</option>
                  </select>
                </div>

                <div className="flex flex-col space-y-2">
                  <label
                    className="text-xs text-[#4F4F4F]"
                    htmlFor="postalCode"
                  >
                    Postal code
                  </label>
                  <input
                    className="border border-[#828282] rounded-xl h-14 pl-3"
                    type="text"
                    name="postalCode"
                    id="postalCode"
                    placeholder="Your postal code..."
                  />
                </div>
              </div>
            </div>
          </section>

          <div className="flex mt-6 space-x-3">
            <input type="checkbox" name="saveInfo" id="saveInfo" />
            <p className="text-[#4F4F4F] text-xs">
              Save this information for next time
            </p>
          </div>
        </form>

        <section className="bg-[#040303] rounded-xl p-8"></section>
      </section>
    </main>
  );
};

export default Main;
