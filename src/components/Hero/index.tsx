"use client";

import Image from "next/image";
import { motion } from "framer-motion";

function Hero() {
    return (
        <section id='home' className='md:pt-20 py-8'>
            <div className='flex justify-between gap-8 md:flex-row flex-col'>
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                        duration: 0.5,
                        type: "spring",
                        stiffness: 100,
                    }}
                    viewport={{ once: true }}
                >
                    <p className='font-medium text-2xl'>Hello, I&apos;m Viet</p>
                    <h1 className='heading'>Web Developer</h1>
                    <p className='font-medium text-lg'>
                        I design and code beautifully simple things, and I love
                        what I do.
                    </p>
                    <button
                        className='border border-[#474306] relative px-4 py-2 mt-8'
                        onClick={() => {
                            window.location.href = "#contact";
                        }}
                    >
                        Contact Me
                        <div className='absolute w-full h-full bg-[#F5EE84] opacity-50 top-1 left-1' />
                    </button>
                </motion.div>

                <motion.div
                    className='relative'
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                        duration: 0.5,
                        type: "spring",
                        stiffness: 100,
                    }}
                    viewport={{ once: true }}
                >
                    <Image
                        className='rounded-tl-[120px] rounded-tr-[180px] rounded-bl-[220px] rounded-br-[150px]'
                        src={"https://picsum.photos/500/500"}
                        alt='avt'
                        width={500}
                        height={500}
                        priority
                    />

                    <Image
                        className='absolute top-6 right-6'
                        src='/svg/prettier_2.svg'
                        alt='prettier_1'
                        width={30}
                        height={30}
                    />
                    <Image
                        className='absolute bottom-4 left-4'
                        src='/svg/prettier_1.svg'
                        alt='prettier_1'
                        width={50}
                        height={50}
                    />
                </motion.div>
            </div>
        </section>
    );
}

export default Hero;
