import "./style.css";
import Title from "./components/Title";
import Firstcomponent from "./components/Firstcomponent";
import ThreeCards from "./components/ThreeCards";
import Superdeal from "./components/Superdeal";
import Ordernow from "./components/Ordernow";
import OurProduct from "./components/Ourproducts";
import Fastfree from "./components/Fastfree";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
export default function Home() {
  return (
   <div>

<Title></Title>

<Firstcomponent></Firstcomponent>

<ThreeCards></ThreeCards>

<Superdeal></Superdeal>

<Ordernow></Ordernow>

<OurProduct></OurProduct>

<Fastfree></Fastfree>

<About></About>

<Contact></Contact>

<Footer></Footer>

  </div>
  );
}
