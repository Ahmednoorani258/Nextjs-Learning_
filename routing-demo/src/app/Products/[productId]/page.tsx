import { Metadata } from "next";
import { resolve } from "path";
import { title } from "process";
type Props = {
  params: {
    productId: string;
  };
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Iphone ${params.productId}`);
    }, 100);
  });
  return { title: `Products ${title}` };
};

export default function ProductDetails({ params }: Props) {
  return (
    <div>
      <h1>Product Details {params.productId}</h1>;
    </div>
  );
}
