import { GiTakeMyMoney, GiMeal, GiWifiRouter, GiHomeGarage } from "react-icons/gi";

const Features = () => {
  const features = [
    {
      icon: <GiTakeMyMoney className="text-4xl text-blue-600" />,
      title: "No Brokerage",
      description: "Search 1000+ PG accommodations here without any brokerage or commission charge",
    },
    {
      icon: <GiMeal className="text-4xl text-blue-600" />,
      title: "Homely Meals",
      description: "Nutritious home-style food options available in most of the PGs",
    },
    {
      icon: <GiWifiRouter className="text-4xl text-blue-600" />,
      title: "High-Speed Wi-Fi",
      description: "Enjoy uninterrupted connectivity with high-speed internet in every room",
    },
    {
      icon: <GiHomeGarage className="text-4xl text-blue-600" />,
      title: "Parking Facility",
      description: "Safe and secure parking for your two-wheeler and four-wheeler",
    },
  ];

  return (
  <div className="px-6 py-12 bg-gradient-to-t from-white via-[#e0f7f5] to-white">

      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-800">Why Choose Us?</h1>
        <p className="text-gray-600 mt-2">Discover the benefits of staying with us</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto ">
        {features.map((item, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-transform duration-400 ease-in-out border-t-7 border-[#0ABAB5] hover:scale-110">
            <div className="mb-4 ">{item.icon}</div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">{item.title}</h3>
            <p className="text-gray-500 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
