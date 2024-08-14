import "@/styles/globals.css";
import { TelegramProvider } from "./lib/TelegramProvider";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  // return <Component {...pageProps} />;
  return (
    <TelegramProvider>
      <Component {...pageProps} />
    </TelegramProvider>
  );
}
