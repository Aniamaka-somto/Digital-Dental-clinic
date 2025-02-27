import React, { useState } from "react";

const Appointmen = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    date: "",
    serviceType: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the data to your backend
    alert("Booking request submitted successfully!");
    // Reset form after submission
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      date: "",
      serviceType: "",
    });
  };

  return (
    <div className="min-h-fit py-20 px-10 flex flex-col items-center bg-emerald-100 justify-center">
      <div className="rounded-md w-full md:w-2/3 md:h-2/3 h-fit min-w-2xs bg-white shadow-2xl flex flex-col items-center justify-center py-5 px-5">
        <h1 className="text-sm md:text-xl lg:text-2xl font-bold pb-5 md:pb-10">
          Book Appointment
        </h1>

        <form onSubmit={handleSubmit} className="space-y-0.5 w-full">
          <div className="flex flex-col md:flex-row md:gap-x-2.5 w-full">
            <div className="w-full md:w-1/2">
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                placeholder="John Doe"
              />
            </div>

            <div className="w-full md:w-1/2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                placeholder="john@example.com"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:gap-x-2.5 w-full">
            <div className="w-full md:w-1/2">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                placeholder="(123) 456-7890"
              />
            </div>

            <div className="w-full md:w-1/2">
              <label
                htmlFor="date"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Preferred Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              />
            </div>
          </div>

          <div className="pb-2.5 w-full">
            <label
              htmlFor="serviceType"
              className="block text-sm font-medium text-gray-700 mb-1 "
            >
              Type of Service
            </label>
            <select
              id="serviceType"
              name="serviceType"
              value={formData.serviceType}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            >
              <option value="" disabled>
                Select a service
              </option>
              <option value="consultation">Consultation</option>
              <option value="maintenance">Maintenance</option>
              <option value="installation">Installation</option>
              <option value="repair">Repair</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="w-full">
            <label
              htmlFor="additionalComment"
              className="block text-sm font-medium text-gray-700 mb-1 "
            >
              Additional Comments
            </label>
            <textarea
              id="additionalComment"
              name="additionalComment"
              value={formData.additionalComment}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition max-h-40 min-h-32"
              placeholder="Enter any additional comments here..."
            />
          </div>

          <button
            type="submit"
            className="bg-emerald-600 rounded-md px-7 py-2.5 text-white 
            font-semibold cursor-pointer hover:bg-emerald-500 hover:scale-95
            transition-all duration-200 text-xs lg:text-sm 
            shadow-sm hover:shadow-md w-full"
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default Appointmen;
