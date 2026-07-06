import { useForm } from 'react-hook-form';

const App = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  console.log(errors);

  const handleFormSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white border rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">
          Contact Form
        </h1>
        <p className="text-gray-600 text-center mb-8">
          Please fill in all the fields below
        </p>

        <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Full Name
            </label>
            <input
              type="text"
              {...register('name', {
                required: 'Name is required',
                minLength: {
                  value: 3,
                  message: 'Name must contain atleast 3 characters',
                },
                maxLength: {
                  value: 20,
                  message: 'Name only contain 20 char',
                },
              })}
              placeholder="Enter your full name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
            {errors.name && (
              <p className="mt-2 text-red-500">Name is required</p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email Address
            </label>
            <input
              id="email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/,
                  message: 'Enter a valid email id',
                },
              })}
              placeholder="Enter your email address"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
            {errors.name && (
              <p className="mt-2 text-red-500">Email is required</p>
            )}
          </div>

          {/* Phone Field */}
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              {...register('phone', { required: 'Phone is required' })}
              placeholder="Enter your phone number"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
            {errors.name && (
              <p className="mt-2 text-red-500">Phone is required</p>
            )}
          </div>

          {/* Message Field */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              placeholder="Enter your message"
              {...register('message')}
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200 ease-in-out transform hover:scale-105 active:scale-95"
          >
            Submit
          </button>
        </form>

        <p className="text-gray-500 text-xs text-center mt-6">
          We respect your privacy and will never share your information.
        </p>
      </div>
    </div>
  );
};

export default App;
