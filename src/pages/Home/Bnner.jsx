import { easeIn, motion } from "framer-motion";
const Bnner = () => {
  return (
    <div className="hero bg-base-200 min-h-96">
      <div className="hero-content flex-col lg:flex-row-reverse justify-center items-center">
        <div className="flex-1">
          <motion.img
            animate={{ y: [100, 50, 150] }}
            transition={{ duration: 15, repeat: Infinity }}
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            className="max-w-xl rounded-tl-4xl rounded-tr-4xl rounded-br-4xl shadow-2xl"
          />

          <motion.img
            animate={{ x: [100, 50, 150] }}
            transition={{ duration: 15, repeat: Infinity }}
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            className="max-w-xl rounded-tl-4xl rounded-tr-4xl rounded-br-4xl shadow-2xl"
          />
        </div>
        <div className="flex-1">
          <motion.h1
            animate={{ x: 50 }}
            transition={{
              duration: 2,
              delay: 1,
              ease: easeIn,
              repeat: Infinity,
            }}
            className="text-5xl font-bold"
          >
            Letest{" "}
            <motion.span
              animate={{ color: ["#FF5252", "#E453DF"] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              jobs
            </motion.span>{" "}
            for You
          </motion.h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Bnner;
