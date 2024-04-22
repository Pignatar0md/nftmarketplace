import React from "react";
import Link from "next/link";

import Styles from "./Discover.module.css";

const Discover = () => {
	const discover = [
		{
			name: "Collection",
			link: "collection",
		},
		{
			name: "Search",
			link: "search",
		},
		{
			name: "Author Profile",
			link: "author-profile",
		},
		{
			name: "NFT Details",
			link: "nft-details",
		},
		{
			name: "Account Settings",
			link: "account-settings",
		},
		{
			name: "Connect Wallet",
			link: "connect-wallet",
		},
		{
			name: "Blog",
			link: "blog",
		},
	];
	return (
		<div className={Styles.box}>
			{discover.map((item, index) => {
				return (
					<div key={index + 1} className={Styles.discover}>
						<Link href={{ pathname: `${item.link}` }}>{item.name}</Link>
					</div>
				);
			})}
		</div>
	);
};

export { Discover };
