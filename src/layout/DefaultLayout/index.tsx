import Header from "~/components/Header";

interface DefaultLayoutProps {
    children: React.ReactNode;
}

function DefaultLayout({ children }: DefaultLayoutProps) {
    return (
        <div className='max-w-6xl mx-auto px-4 md:px-10'>
            <Header />
            {children}
        </div>
    );
}

export default DefaultLayout;
