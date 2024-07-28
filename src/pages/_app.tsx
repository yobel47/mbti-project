import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";
import { NextUIProvider } from "@nextui-org/react";
import { NextIntlClientProvider } from "next-intl";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useRouter } from "next/router";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="light">
        <NextIntlClientProvider
          locale={router.locale}
          timeZone="Jakarta/Indonesian"
          messages={pageProps.messages}
        >
          <main className={poppins.className}>
            <Component {...pageProps} />
          </main>
        </NextIntlClientProvider>
      </NextThemesProvider>
    </NextUIProvider>
  );
}
