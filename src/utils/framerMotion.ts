import { AnimationProps } from "framer-motion";

export const container: AnimationProps['variants'] = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerChildren: .5,
            type: "spring",
            stiffness: 100,
        }
    },
};

export const items: AnimationProps['variants'] = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, type: "spring", stiffness: 100 } },
};

export const generateVariants = (index: number) => {
    return {
        hidden: { opacity: 0, x: index % 2 === 0 ? -40 : 40 },
        show: { opacity: 1, x: 0, transition: { duration: 0.5, type: "spring", stiffness: 100, delay: index * 0.5 } },
    };
}