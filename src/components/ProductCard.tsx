import React from "react";

const ProductCard = ({ post }: { post: any }) => {
  console.log("productcard", post);
  return (
    <div key={post?.id} className="flex flex-col gap-y-2 w-full">
      <div className="flex h-[494px] overflow-hidden border p-2 items-center">
        <img src={post.imageUrl ? post.imageUrl : "/campera-1.png"} alt="camperas" className="w-full" height={680}/>
      </div>
      <div>
        <p className="font-light leading-normal">{post?.type}</p>
        <p className="font-bold leading-normal">{post?.name}</p>
        <p>{post?.description}</p>
        <p className="font-bold">${post?.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
