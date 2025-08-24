import { useEffect } from "react";
import Card from "./Card";
import { useSelector, useDispatch } from "react-redux";
import { allProperty } from "../../../redux/Slice/propertySlice.js";
import { Loader } from "../Utils/Loader.jsx";

const NewlyAdded = () => {
  const { property, loading } = useSelector((state) => state.property);
  const dispatch = useDispatch();

  useEffect(() => {
    if (property.length === 0) {
      dispatch(allProperty());
    }
  }, [dispatch]);

  if (loading) return <Loader />;

  return (
    <div className="px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40  bg-gradient-to-br from-white via-[#f0fdfa] to-white py-12">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-800 relative inline-block">
          Newly Added
          <span className="absolute left-0 -bottom-2 w-full h-1 bg-gradient-to-r from-teal-500 to-green-500 rounded-full"></span>
        </h1>
        <p className="text-gray-600 mt-4 text-lg">
          Be Early, Book Smart – Explore Freshly Listed PGs
        </p>
      </div>

      {/* Cards Slider */}
      <div className="relative">
        <div className="flex flex-nowrap overflow-x-auto hide-scrollbar gap-6 py-6 px-2 pl-6 scroll-smooth ">
          {property.findProperty &&
            property.findProperty.map((products, idx) => (
              <div
                key={idx}
                className="min-w-[80vw] md:pl-0 sm:min-w-[60vw] md:min-w-[40vw] lg:min-w-[25vw] transform transition duration-300 hover:scale-105 hover:-translate-y-2"
              >
                <Card details={products} />
              </div>
            ))}
        </div>
      </div>

    </div>
  );
};

export default NewlyAdded;
