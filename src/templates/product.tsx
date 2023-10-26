import { GetPath, TemplateConfig, TemplateProps } from "@yext/pages";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import Main from "../components/common/Main";
import Page from "../components/common/Page";
import ProductCardGrid from "../components/product/ProductCardGrid";
import ImageGallery from "../components/product/ProductImageGallery";
import ProductOverview from "../components/product/ProductOverview";
import Reviews from "../components/product/Reviews";
import "../index.css";

export const config: TemplateConfig = {
  stream: {
    $id: "product",
    localization: { locales: ["en"] },
    fields: ["photoGallery", "name", "price", "slug"],
    filter: { entityTypes: ["product"] },
  },
};
export const getPath: GetPath<TemplateProps> = ({
  document,
}: TemplateProps) => {
  return document.slug;
};

export default function Product({ document }: TemplateProps) {
  return (
    <Page>
      <Header />
      <Main className="min-h-[calc(100vh-384px)]">
        <ImageGallery images={document.photoGallery} />
        <ProductOverview
          productNameProps={{
            text: `${document.name}`,
            rank: "1",
            size: "XXL",
            align: "Left",
            color: "Gray 900",
            weight: "Bold",
          }}
          productDescriptionProps={{
            text: `Sample product description text`,
            size: "M",
            weight: "Regular",
            align: "Left",
            color: "Gray 700",
          }}
          priceProps={{
            text: `$${document.price.value}`,
            size: "XL",
            weight: "Regular",
            align: "Left",
            color: "Gray 900",
          }}
          rating={5}
        />
        <Reviews />
        <ProductCardGrid
          products={[
            {
              name: "Product A",
              slug: "#",
              photoGallery: [
                {
                  image: {
                    url: "https://placehold.co/300x300",
                    height: 300,
                    width: 300,
                  },
                },
              ],
              price: { value: 99 },
            },
            {
              name: "Product B",
              slug: "#",
              photoGallery: [
                {
                  image: {
                    url: "https://placehold.co/300x300",
                    height: 300,
                    width: 300,
                  },
                },
              ],
              price: { value: 99 },
            },
            {
              name: "Product C",
              slug: "#",
              photoGallery: [
                {
                  image: {
                    url: "https://placehold.co/300x300",
                    height: 300,
                    width: 300,
                  },
                },
              ],
              price: { value: 99 },
            },
            {
              name: "Product D",
              slug: "#",
              photoGallery: [
                {
                  image: {
                    url: "https://placehold.co/300x300",
                    height: 300,
                    width: 300,
                  },
                },
              ],
              price: { value: 99 },
            },
          ]}
        />
      </Main>
      <Footer />
    </Page>
  );
}
