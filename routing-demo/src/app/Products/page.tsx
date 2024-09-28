import Link from "next/link";

export default function Products() {
  const productId = 100;
  return (
    <>
      <Link href="/">Home</Link>
      <h1>Product</h1>
      <h2>
        <Link href="Products/1">Products 1</Link>
      </h2>
      <h2>
        <Link href="Products/2">Products 2</Link>
      </h2>
      <h2>
        <Link href="Products/3" replace>
          Products 3
        </Link>
      </h2>
      {
      //replace props work is when user back the page it takes it to home page
      //not on previous page
      }
      <h2>
        <Link href={`Products/${productId}`}>Products {productId}</Link>
      </h2>
    </>
  );
}
