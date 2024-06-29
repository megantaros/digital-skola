import { ThemeProvider } from "@/context/ThemeProvider";
import type { AppProps } from "next/app";
import { Noto_Sans } from "next/font/google";

import "@/styles/globals.css";

const notoSans = Noto_Sans({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <style jsx global>
      {
        `html { 
            font-family: ${notoSans.style.fontFamily}; 
            scroll-behavior: smooth;
          }`
      }
    </style>
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <Component {...pageProps} />
    </ThemeProvider>
  </>
}
