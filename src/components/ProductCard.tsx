import React from "react";

const ProductCard = ({ post }: { post: any }) => {
  console.log("productcard", post);
  return (
    <div className="flex flex-col">
      <div className="flex h-[494px] overflow-hidden rounded-lg border p-2 items-center">
        <img src="/campera-1.png" alt="camperas" className="w-" height={680}/>
      </div>
      <div>
        <p className="font-light leading-normal">{post?.content}</p>
        <p className="font-bold leading-normal">{post?.title}</p>
        <p>Campera London</p>
        <p>$1980</p>
      </div>
    </div>
  );
};

export default ProductCard;
