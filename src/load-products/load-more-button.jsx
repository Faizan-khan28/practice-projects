import { useEffect, useState } from "react";

export default function LoadMoreButton() {
  let [products, setProducts] = useState([]);
  let [loading, setLoding] = useState(false);
  let [count, setCount] = useState(0);
  let [disableButton, setDisableButton] = useState(false);

  let URL = `https://dummyjson.com/products?limit=20&skip=${
    count === 0 ? 0 : count * 20
  }`;

  let fetchProducts = async () => {
    try {
      setLoding(true);
      let res = await fetch(URL);
      let result = await res.json();
      if (result && result.products && result.products.length) {
        setProducts(prevData => [...prevData, ...result.products]);
        setLoding(false);
      }
    } catch (error) {
      console.log(error.message);
      setLoding(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [count]);

  useEffect(() => {
    if (products && products.length === 100) setDisableButton(true);
  }, [products]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-red-600 font-medium text-3xl">
        Loading Please Wait !
      </div>
    );
  }

  let loadMoreProducts = () => {
    setCount(prevCount => prevCount + 1);
  };

  console.log(count);

  return (
    <div className="flex flex-col gap-5 mt-4 mx-2">
      <div className="grid grid-cols-4 gap-5">
        {products && products.length
          ? products.map(item => {
              return (
                <div
                  key={item.id}
                  className="border-black border-2 rounded-sm flex justify-center items-center font-medium cursor-pointer flex-col"
                >
                  <img src={item.thumbnail} alt={item.category} />
                  <p>{item.title}</p>
                </div>
              );
            })
          : null}
      </div>
      <div className="flex justify-center mt-2 mb-7">
        <button
          disabled={disableButton}
          onClick={() => loadMoreProducts()}
          className={
            disableButton
              ? "bg-gray-500 font-medium rounded-md py-2 px-4 cursor-pointer"
              : `bg-red-600 outline-none border-none py-2 px-4 rounded-md  hover: text-white font-semibold`
          }
        >
          Load More Button
        </button>
      </div>
      {disableButton ? (
        <div className="flex justify-center font-medium text-3xl text-red-500 pb-3">
          you have reached maximum Produts
        </div>
      ) : null}
    </div>
  );
}
