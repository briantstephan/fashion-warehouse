import Container from "../common/Container";
import Heading from "../common/Heading";
import { RelatedProduct } from "../../types/autogen";
import ProductCard from "../molecules/ProductCard";

export interface ProductCardGridProps {
  cardMode?: "flat" | "card";
  products?: RelatedProduct[];
}

export const initialProps: ProductCardGridProps = {
  cardMode: "flat",
  products: [
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
      price: {
        value: 99,
      },
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
      price: {
        value: 0,
      },
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
      price: {
        value: 99,
      },
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
      price: {
        value: 99,
      },
    },
  ],
};

const ProductCardGrid = ({ products, cardMode }: ProductCardGridProps) => {
  if (!products) return null;

  return (
    <Container layout="column" className="mx-auto py-16">
      <Container>
        <Heading
          rank="4"
          size="L"
          color="Gray 900"
          fontWeight="Bold"
          text="Customers also purchased"
          align="Left"
        />
      </Container>
      <Container
        layout="grid"
        className="mt-6 gap-x-6 gap-y-10 lg:grid-cols-4 xl:gap-x-8"
      >
        {products.map((product) => (
          <ProductCard mode={cardMode} product={product} />
        ))}
      </Container>
    </Container>
  );
};

export default ProductCardGrid;
