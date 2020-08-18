import HeroSlider from "../components/HeroSlider/HeroSlider";
import ShopCategories from "../components/ShopCategories/ShopCategories.container";
import FeaturedProducts from "../components/FeaturedProducts/FeaturedProducts";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <ShopCategories />
      <FeaturedProducts />
    </>
  );
}
