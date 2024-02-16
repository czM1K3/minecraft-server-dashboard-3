import { Inter } from "next/font/google";
import "./globals.scss";
import "animate.css/animate.css";
import Background from "@/components/Background";
import Particles from "@/components/Particles";
import { env } from "@/env";

const inter = Inter({ subsets: ["latin"] });

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <head>
        <title>{env.SERVER_NAME}</title>
        <link rel="icon" type="image/svg+xml" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <Background />
        <Particles />
        {children}
      </body>
    </html>
  );
}

export default RootLayout;

