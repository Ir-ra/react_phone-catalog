import { BrandNew } from '../components/BrandNew/BrandNew';
import { Slider } from '../components/Carousel/Carousel';
import { HotPrices } from '../components/HotPrices/HotPrices';
import { ShopByCategory } from '../components/ShopByCategory/ShopByCategory';

export const HomePage = () => {
  return (
    <>
      <Slider />
      <HotPrices />
      <ShopByCategory />
      <BrandNew />
    </>
  );
};
