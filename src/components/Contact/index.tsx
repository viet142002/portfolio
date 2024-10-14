import Image from "next/image";

function Contact() {
    return (
        <section className='md:pb-20 pb-8'>
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
                            <a href='mailto:vietnguyen142002@gmail.com'>
                                vietnguyen142002@gmai.com
                            </a>
                        </li>
                        <li>
                            <a href='https://www.linkedin.com/in/quocviet142/'>
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
