"use client";

import { motion } from "framer-motion";
import { ABOUT_ME, LIST_ABOUT } from "~/constants";
import { container, items } from "~/utils/framerMotion";

function About() {
    return (
        <section className='section'>
            <motion.h2
                className='text-[#F7F197] heading'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
                viewport={{ once: true }}
            >
                about.
            </motion.h2>
            <motion.p
                className='text-balance max-w-[900px] mt-2'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
                viewport={{ once: true }}
            >
                {ABOUT_ME}
            </motion.p>
            <motion.ul
                className='mt-6 md:mt-16 pl-10 md:pl-[200px] space-y-6'
                initial='hidden'
                whileInView='show'
                variants={container}
                viewport={{ once: true }}
            >
                {LIST_ABOUT.map((item, index) => (
                    <motion.li
                        key={index}
                        className='space-y-2'
                        variants={items}
                    >
                        <h3 className='font-semibold'>{item.title}</h3>
                        <p className=''>{item.description}</p>
                    </motion.li>
                ))}
            </motion.ul>
        </section>
    );
}

export default About;
