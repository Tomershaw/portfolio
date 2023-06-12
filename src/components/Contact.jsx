
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",  
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
    
  };
  
 return(
  <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
    <motion.div variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'> 
        <p className={styles.heroSubText}> get in touch</p>
        <h3 className={styles.heroHeadText}>contact</h3>

        <div  >
          <label className="flex flex-col">
          <span className="text-white font-medium mb-4">My Name</span>
            <button className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'>tomer shaw</button> 
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">My email</span>
            <button className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'>Shaw.tomer@gmail.com</button> 
            
          </label>

        </div>

    </motion.div>

    <motion.div  variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>
          <EarthCanvas/>

    </motion.div>
  </div>
 )
 }
 export default SectionWrapper(Contact, "contact")