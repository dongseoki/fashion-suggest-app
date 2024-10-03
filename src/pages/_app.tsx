import "@/styles/globals.css";
import "@/styles/globals_from_frontend_ai.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
