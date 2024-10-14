import Image from "next/image";
import { LINKEDIN, MAIL } from "~/constants";

function Contact() {
    return (
        <section id='contact' className='md:pb-20 pb-8'>
            <h2 className='heading text-[#F7F197]'>contact.</h2>
            <div className='flex gap-4 mt-2'>
                <Image
                    className='hidden md:block'
                    src='/images/contact.png'
                    alt='contact'
                    width={500}
                    height={500}
                />

                <div>
                    <p>
                        If you would like to get in touch, please feel free to
                        send me an email or connect with me on LinkedIn.
                    </p>
                    <ul className='pt-4 space-y-1'>
                        <li>
                            <a href={`mailto:${MAIL}`}>{MAIL}</a>
                        </li>
                        <li>
                            <a target='_blank' href={LINKEDIN}>
                                LinkedIn
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Contact;
