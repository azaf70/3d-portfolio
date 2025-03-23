import React from 'react'
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import { textVariant, fadeIn } from '../utils/motion.js';
import { styles } from '../styles.js';

const Contact = () => {
  const formRef = React.useRef();
  const [form, setForm] = React.useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = React.useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in all fields");
      return;
    }

    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Abdul",
          from_email: form.email,
          to_email: "your-email@example.com",
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setLoading(false);
        toast.success("Thank you. I will get back to you as soon as possible.");
        setForm({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
        toast.error("Something went wrong. Please try again.");
      });
  };

  return (
    <>
      <motion.div variants={textVariant}>
        <p className={styles.sectionSubText}>
          Impressed by my work?
        </p>
        <h2 className={styles.sectionHeadText}>
          Contact Me
        </h2>
      </motion.div>

      <motion.div
        variants={fadeIn("up", "tween", 0.3, 1)}
        className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden"
      >
        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8 w-full max-w-3xl mx-auto relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
          <div className="relative bg-[#151030]/40 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-xl">
            <div className="relative">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder=" "
                className="peer w-full bg-transparent py-4 px-6 text-white rounded-lg outline-none border-2 border-white/20 focus:border-secondary transition-all duration-300 font-medium"
              />
              <label className="absolute left-6 top-4 text-white/70 transition-all duration-300 pointer-events-none peer-placeholder-shown:top-4 peer-focus:top-[-20px] peer-focus:text-secondary peer-focus:text-sm peer-valid:top-[-20px] peer-valid:text-sm">
                Your Name
              </label>
            </div>

            <div className="relative mt-8">
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder=" "
                className="peer w-full bg-transparent py-4 px-6 text-white rounded-lg outline-none border-2 border-white/20 focus:border-secondary transition-all duration-300 font-medium"
              />
              <label className="absolute left-6 top-4 text-white/70 transition-all duration-300 pointer-events-none peer-placeholder-shown:top-4 peer-focus:top-[-20px] peer-focus:text-secondary peer-focus:text-sm peer-valid:top-[-20px] peer-valid:text-sm">
                Your Email
              </label>
            </div>

            <div className="relative mt-8">
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder=" "
                className="peer w-full bg-transparent py-4 px-6 text-white rounded-lg outline-none border-2 border-white/20 focus:border-secondary transition-all duration-300 font-medium resize-none"
              />
              <label className="absolute left-6 top-4 text-white/70 transition-all duration-300 pointer-events-none peer-placeholder-shown:top-4 peer-focus:top-[-20px] peer-focus:text-secondary peer-focus:text-sm peer-valid:top-[-20px] peer-valid:text-sm">
                Your Message
              </label>
            </div>

            <motion.button
              type="submit"
              disabled={loading}
              className="mt-8 relative overflow-hidden group/btn bg-gradient-to-r from-primary to-secondary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-lg shadow-primary/20 hover:shadow-xl hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">{loading ? "Sending..." : "Send Message"}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
            </motion.button>
          </div>
        </motion.form>
      </motion.div>
    </>
  );
};

export default Contact