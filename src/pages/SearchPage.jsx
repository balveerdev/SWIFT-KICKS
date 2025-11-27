import React from "react";
import { useSearch } from "../context/SearchContext";
import { imgContainer, imgContainercl } from "../components/imagesfile";

const SearchPage = () => {
  const { searchTerm } = useSearch();

  const allProducts = [...imgContainer, ...imgContainercl];
  const filtered = allProducts.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">
        Search Results for: "{searchTerm}"
      </h2>

      {filtered.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <div className='w-[1200px] mx-auto h-full flex items-center justify-center flex-row flex-wrap gap-4 relative'>
          {filtered.map((product) => (
            <div key={product.id} className="w-[200px] pb-[20px] shrink-0 cursor-pointer bg-[#bbb8bb48] rounded-xl overflow-y-hidden border-[2px] border-zinc-300 relative">
              <img src={product.src} alt={product.title} className="w-full h-[160px]  object-cover " />
              <h3 className="font-[600] pl-[20px] pr-[20px] pb-[10px] text-[12px]">{product.title}</h3>
              <p className="font-[600] pl-[20px] pr-[20px] text-[15px]">{product.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchPage;
