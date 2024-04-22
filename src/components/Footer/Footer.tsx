import React from "react";
import Image from "next/image";
import {
	TiSocialFacebook,
	TiSocialLinkedin,
	TiSocialInstagram,
	TiSocialTwitter,
	TiSocialYoutube,
	TiArrowSortedDown,
} from "react-icons/ti";
import { RiSendPlaneFill } from "react-icons/ri";
import images from "../../img";
import { Discover, HelpCenter } from "../NavBar";

import Styles from "./Footer.module.css";

const Footer = () => {
	return (
		<div className={Styles.footer}>
			<div className={Styles.footer_box}>
				<div className={Styles.footer_box_social}>
					<Image
						src={images.logo}
						alt={"footer logo"}
						width={100}
						height={100}
					/>
					<p>The world´s first and largest digital marketplace for</p>
					<div className={Styles.footer_social}>
						<a href="#">
							<TiSocialFacebook />
						</a>
						<a href="#">
							<TiSocialLinkedin />
						</a>
						<a href="#">
							<TiSocialInstagram />
						</a>
						<a href="#">
							<TiSocialTwitter />
						</a>
						<a href="#">
							<TiSocialYoutube />
						</a>
					</div>
				</div>
				<div className={Styles.footer_box_discover}>
					<h3>Discover</h3>
					<Discover />
				</div>
				<div className={Styles.footer_box_help}>
					<h3>Help center</h3>
					<HelpCenter />
				</div>
				<div className={Styles.subscribe}>
					<h3>Subscribe</h3>
					<div className={Styles.footer_box_subscribe}>
						<input type="email" placeholder="Enter e-mail" />
						<RiSendPlaneFill className={Styles.subscribe_box_send} />
					</div>
					<div className={Styles.subscribe_box_info}>
						<p>
							Discover, collect, and sell extraordinaries NFTs OpenSea is the
							... first and largest marketplace.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export { Footer };
