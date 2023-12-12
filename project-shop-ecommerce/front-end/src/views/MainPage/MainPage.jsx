import { Hero } from "../../components/Hero/Hero";
import { Layout } from "../../components/Layout/Layout";
import { Products } from "../../components/Products/Products";
import { useLoaderData } from "react-router-dom";
export function MainPage() {
  const { heroImageUrl, bestsellers } = useLoaderData();
  return (
    <>
      <Hero heroImage={heroImageUrl} />
      <Products headerText="Sprawdź nasze bestsellery" products={bestsellers} />
    </>
  );
}
