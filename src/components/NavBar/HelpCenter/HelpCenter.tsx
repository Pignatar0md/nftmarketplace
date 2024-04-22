import React from "react";
import Styles from "./HelpCenter.module.css";
import Link from "next/link";

const HelpCenter = () => {
	const helpCenter = [
		{
			name: "About",
			link: "about",
		},
		{
			name: "Contact Us",
			link: "contact-us",
		},
		{
			name: "Sign In ",
			link: "sign-in",
		},
		{
			name: "Sign Up",
			link: "sign-up",
		},
		{
			name: "Subscription",
			link: "subscription",
		},
	];
	return (
		<div className={Styles.box}>
			{helpCenter.map((item, index) => {
				return (
					<div className={Styles.helpCenter} key={index + 1}>
						<Link href={{ pathname: `${item.link}` }}>{item.name}</Link>
					</div>
				);
			})}
		</div>
	);
};

export { HelpCenter };
