import FormValidator from "./components/FormValidator";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <FormValidator />
      </main>
    </>
  );
}