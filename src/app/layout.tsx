import type { Metadata } from "next";
import DefaultLayout from "~/layout/DefaultLayout";

import "~/styles/globals.css";

export const metadata: Metadata = {
    title: "Quoc Viet Portfolio",
    description: "Quoc Viet Portfolio",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="vi">
            <body
                className={`antialiased`}
            >
                <DefaultLayout>
                    {children}
                </DefaultLayout>
            </body>
        </html>
    );
}
