import "@/styles/globals.css";
import { NavBar } from "@/components/NavBar";
import type { AppProps } from "next/app";
import { Footer } from "@/components/componentsIndex";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<div>
			<NavBar />
			<Component {...pageProps} />
			<Footer />
		</div>
	);
}
