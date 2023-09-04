import CheckoutCard from "../CheckoutCard";
import CheckoutForm from "../CheckoutForm";

const Main = () => {
  return (
    <main className="flex flex-col min-h-screen space-y-12">
      <h1 className="text-4xl text-[#4E5150]">Checkout</h1>

      <section className="flex justify-between">
        <CheckoutForm />
        <CheckoutCard />
      </section>
    </main>
  );
};

export default Main;
