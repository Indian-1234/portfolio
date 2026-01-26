"use client";
import { slideIn } from "@/app/utils/motion";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { SectionWrapper } from "./HigherOrderComponents";
import { EarthCanvas } from "./canvas";
import { CheckCircle, X } from "lucide-react";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_t2kyrxc",
        "template_ns3xuuk",
        {
          from_name: form.name,
          to_name: "Indian M",
          from_email: form.email,
          to_email: "indiantechdigi@gmail.com",
          message: form.message,
          reply_to: form.email,
        },
        "L7AABD1oMiVfVkQk0"
      )
      .then(() => {
        setLoading(false);
        setSuccess(true);
        setForm({ name: "", email: "", message: "" });

        // Auto-hide toast after 5 seconds
        setTimeout(() => setSuccess(false), 5000);
      })
      .catch((error) => {
        setLoading(false);
        console.error("Email send error:", error);
        alert(
          "Sorry! Something went wrong. Please try again or email me directly at indiantechdigi@gmail.com"
        );
      });
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      {/* Toast Notification */}
      <AnimatePresence>
        {success && (
          <motion.div
            initial={{ opacity: 0, x: 100, scale: 0.3 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 100, scale: 0.5, transition: { duration: 0.2 } }}
            className="fixed bottom-8 right-8 z-50"
          >
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 min-w-[320px] border border-green-400/20">
              <div className="flex-shrink-0">
                <CheckCircle className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <p className="font-bold text-lg">Success!</p>
                <p className="text-sm text-green-50">Message sent successfully</p>
              </div>
              <button
                onClick={() => setSuccess(false)}
                className="flex-shrink-0 hover:bg-white/20 rounded-lg p-1 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            {/* Progress bar */}
            <motion.div
              initial={{ width: "100%" }}
              animate={{ width: "0%" }}
              transition={{ duration: 5, ease: "linear" }}
              className="h-1 bg-white/30 rounded-full mt-1"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Form */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className="heroSubText">Get in Touch</p>
        <h3 className="heroHeadText">Contact.</h3>

        {/* Contact Details */}
        <div className="mt-8 flex flex-wrap gap-10">
          <div className="flex flex-col gap-2">
            <p className="text-secondary font-medium">Email</p>
            <a href="mailto:indiantechdigi@gmail.com" className="text-white hover:text-[#915EFF] transition-colors">
              indiantechdigi@gmail.com
            </a>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-secondary font-medium">Phone</p>
            <a href="tel:+919361072610" className="text-white hover:text-[#915EFF] transition-colors">
              +91-9361072610
            </a>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-secondary font-medium">Socials</p>
            <div className="flex gap-4">
              <a href="https://linkedin.com/in/indian-m" target="_blank" rel="noreferrer" className="text-white hover:text-[#915EFF] transition-colors">
                LinkedIn
              </a>
              <a href="https://github.com/Indian-1234" target="_blank" rel="noreferrer" className="text-white hover:text-[#915EFF] transition-colors">
                GitHub
              </a>
            </div>
          </div>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name.</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              required
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email.</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              required
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message.</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              required
            />
          </label>

          <button
            type="submit"
            disabled={loading}
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl hover:bg-tertiary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      {/* Earth Canvas */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");