import { FaHome, FaShieldAlt, FaCalendarCheck, FaMoneyBillWave } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ProductAddOwner = () => {
  const {users} = useSelector(state=>state.user)

  const steps = [
    {
      icon: <FaHome className="text-2xl text-white" />,
      title: "List Your Property",
      description: "Reach renters instantly by listing PGs or rentals.",
    },
    {
      icon: <FaShieldAlt className="text-2xl text-white" />,
      title: "Verify Property",
      description: "We verify your listing to ensure trust and safety.",
    },
    {
      icon: <FaCalendarCheck className="text-2xl text-white" />,
      title: "Confirm Bookings",
      description: "Chat with renters and close deals easily.",
    },
    {
      icon: <FaMoneyBillWave className="text-2xl text-white" />,
      title: "Get Paid",
      description: "Receive secure payments once tenants move in.",
    },
  ];

  const navigate = useNavigate()

  const checkRole = ()=>{
    if(users.role === "admin" || users.role === "pg-owner"){
      navigate("/add-property")
    }else{
      toast.error("Please Contact to Admin")
    }
  }

  return (
    <section className="relative w-full py-16 bg-[#e0f7f5] to-transparent">
      <div className="absolute inset-0  pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-3">
          Are you a property owner?
        </h2>
        <p className="text-gray-600 text-lg mb-10">
          Join{" "}
          <span className="text-teal-600 font-semibold">Pribhum Nest</span> and
          start earning by listing your property today!
        </p>

        <div className="mb-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white/90 backdrop-blur-md rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-green-500 to-teal-500 rounded-full mx-auto mb-4 shadow-md">
                {step.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>

        <button onClick={checkRole} className=" px-8 py-3 bg-gradient-to-r from-teal-500 to-green-500 text-white font-semibold rounded-full shadow-md hover:shadow-xl transition cursor-pointer">
          Add Your Property
        </button>
      </div>
    </section>
  );
};

export default ProductAddOwner;
