"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { container, generateVariants } from "~/utils/framerMotion";

interface WorkProps {
    title: string;
    description: string;
    items: Omit<WorkItemProps, "index">[];
}
function Work({ title, description, items }: WorkProps) {
    return (
        <section className='md:pb-20 pb-8'>
            <h2 className='heading text-[#F7F197]'>{title}</h2>
            <p className='mt-2'>{description}</p>

            <motion.ul
                className='flex flex-wrap md:justify-between'
                initial='hidden'
                whileInView='show'
                variants={container}
                viewport={{ once: true }}
            >
                {items.length === 1 ? (
                    <WorkItemTwo index={1} {...items[0]} />
                ) : (
                    items.map((item, index) => (
                        <WorkItemOne key={index} index={index} {...item} />
                    ))
                )}
            </motion.ul>
        </section>
    );
}

export default Work;

interface WorkItemProps {
    index: number;
    title: string;
    description: string;
    image: string;
    url: string;
    tech: string;
}
const WorkItemOne = ({
    title,
    description,
    image,
    url,
    tech,
    index,
}: WorkItemProps) => {
    return (
        <motion.li
            className={`w-full md:w-1/2 md:p-6 p-2`}
            variants={generateVariants(index)}
        >
            <Link href={url}>
                <Image
                    src={image}
                    alt={title}
                    className='w-full aspect-[4/3] object-cover'
                    width={500}
                    height={500}
                />
            </Link>
            <h3 className='mt-2'>{title}</h3>
            <p>{description}</p>
            <p>{tech}</p>
        </motion.li>
    );
};

const WorkItemTwo = ({ title, description, image, url }: WorkItemProps) => {
    return (
        <div className='flex md:flex-row flex-col gap-4 mt-6'>
            <Link href={url}>
                <Image
                    src={image}
                    alt={title}
                    className='w-full aspect-[4/3] object-cover'
                    width={500}
                    height={500}
                />
            </Link>
            <div className='flex justify-center flex-col'>
                <h3 className='font-semibold text-lg'>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
};
