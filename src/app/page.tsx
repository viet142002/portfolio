import About from "~/components/About";
import Contact from "~/components/Contact";
import Hero from "~/components/Hero";
import Work from "~/components/Work";

import {
    LIST_WORK,
    PERSONAL_PROJECT,
    WORK_DESCRIPTION,
    LIST_PERSONAL_PROJECT,
} from "~/constants";

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
                description={PERSONAL_PROJECT}
                items={LIST_PERSONAL_PROJECT}
                title='personal.'
            />
            <Contact />
        </div>
    );
}
