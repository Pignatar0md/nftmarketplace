import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

import Styles from "@/styles/index.module.css";
import { HeroSection } from "@/components/componentsIndex";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<>
			<Head>
				<title>NFT Marketplace</title>
			</Head>
			<main className={`${styles.main} ${inter.className}`}>
				<div className={styles.description}>
					{/* <p>
						Home
					</p> */}
					<HeroSection />
				</div>
			</main>
		</>
	);
}
