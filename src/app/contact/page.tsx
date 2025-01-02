
export default function Contact() {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-r from-pink-500 to-yellow-500">
      

      {/* Contact Form */}
      <div className="max-w-lg w-full p-8 mt-24 mb-20 bg-slate-200 rounded-2xl shadow-2xl backdrop-blur-md">
        <h1 className="text-3xl font-bold text-black mb-6">Contact Us</h1>
        <form className="space-y-6">
          {/* Name Field */}
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Your Name:
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 mt-2 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Your Email:
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 mt-2 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Message Field */}
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Your Message:
            </label>
            <textarea
              placeholder="Write your message here"
              className="w-full px-4 py-2 mt-2 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-black text-white font-medium rounded-3xl shadow-2xl hover:bg-gray-600 transition duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}