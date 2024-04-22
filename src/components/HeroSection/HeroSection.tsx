import React from "react";
import Image from "next/image";
import { Button } from "../componentsIndex";
import Styles from "./HeroSection.module.css";
import images from "../../img";

const HeroSection = () => {
	return (
		<div className={Styles.heroSection}>
			<div className={Styles.heroSection_box}>
				<div className={Styles.heroSection_box_left}>
					<h1>Discover, collect and sell NFTs 🖼.</h1>
					<p>
						Discover the most outstanding NFTs in all topics of life. Create
						your NFTs and sell them.
					</p>
					<Button btnText={"Start your search"} handleClick={() => ({})} />
				</div>
				<div className={Styles.heroSection_box_right}>
					<Image src={images.hero} alt={"emoji"} height={600} width={600} />
				</div>
			</div>
		</div>
	);
};

export { HeroSection };
