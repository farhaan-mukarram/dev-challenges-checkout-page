import CheckoutCard from "../CheckoutCard";
import CheckoutForm from "../CheckoutForm";

const Main = () => {
  return (
    <main className="flex flex-col min-h-screen py-8 space-y-12">
      <h1 className="text-2xl lg:text-4xl text-[#4E5150]">Checkout</h1>

      <section className="flex flex-col-reverse justify-between lg:flex-row gap-y-10">
        <CheckoutForm />
        <CheckoutCard />
      </section>
    </main>
  );
};

export default Main;
