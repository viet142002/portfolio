import About from "~/components/About";
import Contact from "~/components/Contact";
import Hero from "~/components/Hero";
import Work from "~/components/Work";

import { LIST_WORK, WORK_DESCRIPTION } from "~/constants";

export default function Home() {
    return (
        <div>
            <Hero />
            <About />
            <Work
                description={WORK_DESCRIPTION}
                items={LIST_WORK}
                title='work.'
            />
            <Work
                description={WORK_DESCRIPTION}
                items={LIST_WORK}
                title='personal.'
            />
            <Contact />
        </div>
    );
}
