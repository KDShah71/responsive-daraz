import "./App.css";
import AdBanner from "./pages/components/ad-banner.component";
import AdSale from "./pages/components/ad-sale.component";
import Categories from "./pages/components/categories.component";
import FlashSales from "./pages/components/flash-sales.component";
import Footer from "./pages/components/footer.component";
import HeroSection from "./pages/components/hero.component";
import JustForYou from "./pages/components/justforyou.component";
import NavBar from "./pages/components/navbar.component";

function App() {
  return (
    <div className="bg-gray-100">
      {/* AD Banner  */}
      <AdBanner />
      {/* Navbar */}
      <NavBar />
      {/* Hero */}
      <HeroSection />

      {/* Sale */}
      <AdSale />

      {/* FlashSales */}
      <FlashSales />

      {/* Categories */}
      <Categories />

      {/* Just For You */}
      <JustForYou />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
