import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";

const CourseOptions = [
  "Mern Stack",
  "Mean Stack",
  ".Net Backend",
  ".Net Frontend",
  "Cyber Security",
  "Database Administration",
  "Python Django",
];

const ContactUs = () => {
  const [submissionStatus, setSubmissionStatus] = useState({
    success: null,
    error: null,
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      courseName: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, "Name must be at least 2 characters")
        .required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      phone: Yup.string()
        .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
        .required("Phone number is required"),
      courseName: Yup.string().required("Please select a course"),
    }),
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      setSubmissionStatus({ success: null, error: null });
      const script = document.createElement("script");
      const callback = "jsonp_callback_" + Math.round(100000 * Math.random());

      const timeoutId = setTimeout(() => {
        setSubmissionStatus({
          success: null,
          error: "Request timed out. Please try again.",
        });
        setSubmitting(false);
        delete window[callback];
        document.body.removeChild(script);
      }, 10000);

      window[callback] = function (response) {
        clearTimeout(timeoutId);
        delete window[callback];
        document.body.removeChild(script);

        if (response.result === "success") {
          setSubmissionStatus({
            success: "Thank you for your interest! We'll contact you soon.",
            error: null,
          });
          resetForm();
        } else {
          setSubmissionStatus({
            success: null,
            error: response.message || "An error occurred. Please try again.",
          });
        }
        setSubmitting(false);
      };

      try {
        const stringValues = Object.entries(values).reduce(
          (acc, [key, value]) => ({ ...acc, [key]: String(value) }),
          {}
        );

        const scriptUrl = import.meta.env.VITE_REGISTER_SCRIPT_URL;
        if (!scriptUrl) {
          throw new Error("Script URL is not configured");
        }

        script.src = `${scriptUrl}?callback=${callback}&${new URLSearchParams(
          stringValues
        ).toString()}`;
        script.onerror = () => {
          clearTimeout(timeoutId);
          setSubmissionStatus({
            success: null,
            error: "Failed to connect to the server. Please try again.",
          });
          setSubmitting(false);
          delete window[callback];
          document.body.removeChild(script);
        };
        document.body.appendChild(script);
      } catch (error) {
        setSubmissionStatus({
          success: null,
          error: error.message,
        });
        setSubmitting(false);
      }
    },
  });

  return (
    <section className="bg-[#0276cb] text-gray-800 px-5 md:px-10 lg:px-12 2xl:px-16 py-10">
      <div className="bg-white backdrop-blur-2xl rounded-sm w-full h-full py-10 md:py-28 px-6 md:px-40">
        {submissionStatus.success && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg mb-6">
            {submissionStatus.success}
          </div>
        )}

        {submissionStatus.error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-6">
            {submissionStatus.error}
          </div>
        )}

        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col gap-y-5 w-full"
        >
          <div className="flex flex-col w-full gap-y-2">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              {...formik.getFieldProps("name")}
              className="p-3 text-sm rounded-lg border bg-transparent border-gray-300 w-full"
            />
            {formik.touched.name && formik.errors.name && (
              <span className="text-red-500 text-sm">{formik.errors.name}</span>
            )}
          </div>

          <div className="flex flex-col w-full gap-y-2">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              {...formik.getFieldProps("email")}
              className="p-3 text-sm rounded-lg border bg-transparent border-gray-300 w-full"
            />
            {formik.touched.email && formik.errors.email && (
              <span className="text-red-500 text-sm">
                {formik.errors.email}
              </span>
            )}
          </div>

          <div className="flex flex-col w-full gap-y-2">
            <label htmlFor="phone">Phone Number</label>
            <input
              id="phone"
              type="tel"
              {...formik.getFieldProps("phone")}
              className="p-3 text-sm rounded-lg border bg-transparent border-gray-300 w-full"
            />
            {formik.touched.phone && formik.errors.phone && (
              <span className="text-red-500 text-sm">
                {formik.errors.phone}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-y-2">
            <label htmlFor="courseName">Course</label>
            <select
              id="courseName"
              {...formik.getFieldProps("courseName")}
              className="bg-transparent border border-gray-300 rounded-lg p-3"
            >
              <option value="">Select a course</option>
              {CourseOptions.map((course) => (
                <option key={course} value={course}>
                  {course}
                </option>
              ))}
            </select>
            {formik.touched.courseName && formik.errors.courseName && (
              <span className="text-red-500 text-sm">
                {formik.errors.courseName}
              </span>
            )}
          </div>

          <button
            type="submit"
            disabled={formik.isSubmitting}
            className="bg-[#0276cb] mt-5 text-white w-fit font-semibold py-3 px-20 rounded-lg disabled:opacity-50"
          >
            {formik.isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
