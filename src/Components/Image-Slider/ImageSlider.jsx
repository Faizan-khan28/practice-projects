import { useEffect, useState } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

let URL = "https://picsum.photos/v2/list?limit=10";

export default function ImageSlider() {
  let [imagesData, setImagesData] = useState([]);
  let [currentSlide, setCurrentSlide] = useState(0);
  let [errorMsg, setErrorMsg] = useState(null);
  let [loding, setLoding] = useState(false);

  let images = async () => {
    try {
      setLoding(true);
      let res = await fetch(URL);
      let data = await res.json();
      if (data) {
        setImagesData(data);
        setLoding(false);
      }
    } catch (error) {
      setErrorMsg(error.message);
      setLoding(false);
    }
  };

  useEffect(() => {
    images();
  }, []);

  if (loding) {
    return (
      <div className="flex justify-center items-center font-medium text-3xl h-screen">
        Loding Please Wait !
      </div>
    );
  }

  if (errorMsg !== null) {
    return <div>Error Ocurred ! {errorMsg}</div>;
  }

  let handlePrev = () => {
    setCurrentSlide(
      currentSlide === 0 ? imagesData.length - 1 : currentSlide - 1
    );
  };

  let handleNext = () => {
    setCurrentSlide(
      currentSlide === imagesData.length - 1 ? 0 : currentSlide + 1
    );
  };

  return (
    <div className="flex justify-center items-center m-auto mt-5 relative w-[600px] h-[450px]">
      <FaArrowCircleLeft
        onClick={handlePrev}
        className="absolute left-4 cursor-pointer w-8 h-8 text-white drop-shadow-md"
      />
      {imagesData?.map((images, index) => {
        return (
          <img
            className={`${currentSlide === index ? "" : `hidden`} rounded-lg w-[100%] h-[100%] shadow-md`}
            key={images.id}
            src={images.download_url}
            alt="laptop"
          />
        );
      })}
      <FaArrowCircleRight
        onClick={handleNext}
        className="absolute right-4 cursor-pointer w-8 h-8 text-white drop-shadow-md"
      />
      <span className="flex absolute bottom-4">
        {imagesData && imagesData.length
          ? imagesData.map((_, index) => {
              return (
                <button
                  key={index}
                  className={`${currentSlide === index ? "bg-blue-500" : "bg-white"} w-4 h-4 rounded-full border-none outline-none m-1 cursor-pointer`}
                  onClick={()=> setCurrentSlide(index)}
                ></button>
              );
            })
          : null}
      </span>
    </div>
  );
}
