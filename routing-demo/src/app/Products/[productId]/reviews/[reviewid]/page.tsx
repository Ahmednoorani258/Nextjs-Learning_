"use client";
import { notFound } from "next/navigation";

function getRandomInt (count:number){
  return Math.floor(Math.random() * count)
}
export default function ReviewDetail({
  params,
}: {
  params: { reviewid: string; productId: string };
}) {
  let random = getRandomInt(2)
  if(random === 1)throw new Error("Something went wrong")
  if(parseInt(params.reviewid) > 10){
    notFound()
  }
  return (
    <h1>
      Review {params.reviewid} for Product ID {params.productId}
    </h1>
  );
}
