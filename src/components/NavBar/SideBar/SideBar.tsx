import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { GrClose } from "react-icons/gr";
import {
	TiSocialFacebook,
	TiSocialLinkedin,
	TiSocialInstagram,
	TiSocialTwitter,
	TiSocialYoutube,
	TiArrowSortedDown,
} from "react-icons/ti";
import images from "../../../img";
import { Button } from "../../componentsIndex";
import Styles from "./SideBar.module.css";

type SideBarOptions = {
	discover: boolean;
	helpcenter: boolean;
};
const SideBar = ({
	setOpenSideMenu,
}: {
	setOpenSideMenu: (a: boolean) => void;
}) => {
	const [option, setOption] = useState<SideBarOptions>({
		helpcenter: false,
		discover: false,
	});
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
			mame: "Blog",
			link: "blog",
		},
	];
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

	const handleCreate = () => {
		return "";
	};
	const handleConnect = () => {
		return "";
	};

	const openMenu = (e: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {
		let btnText: string = e.currentTarget.innerText;

		if (btnText.indexOf(" ") !== -1) {
			btnText = btnText.replace(" ", "");
		}
		btnText = btnText.toLowerCase();
		setOption({
			...option,
			[btnText]: !option[btnText as keyof SideBarOptions],
		});
	};

	return (
		<div className={Styles.sidebar}>
			<GrClose
				className={Styles.sidebar_closeBtn}
				onClick={() => setOpenSideMenu(false)}
			/>
			<div className={Styles.sidebar_box}>
				<Image src={images.logo} alt="logo" width={150} height={150} />
				<p>
					Discover the most outstanding articles on all topics of NFTs & your
					own stories and share them
				</p>
				<div className={Styles.sidebar_social}>
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
			<div className={Styles.sidebar_menu}>
				<div>
					<div className={Styles.sidebar_menu_box} onClick={openMenu}>
						<p>Discover</p>
						<TiArrowSortedDown />
					</div>
					{option.discover && (
						<div className={Styles.sidebar_discover}>
							{discover.map((item, index) => {
								return (
									<p key={index + 1}>
										<Link href={{ pathname: `${item.link}` }}>{item.name}</Link>
									</p>
								);
							})}
						</div>
					)}
				</div>
				<div>
					<div className={Styles.sidebar_menu_box} onClick={openMenu}>
						<p>Help center</p>
						<TiArrowSortedDown />
					</div>
					{option.helpcenter && (
						<div className={Styles.sidebar_discover}>
							{helpCenter.map((item, index) => {
								return (
									<p key={index + 1}>
										<Link href={{ pathname: `${item.link}` }}>{item.name}</Link>
									</p>
								);
							})}
						</div>
					)}
				</div>
			</div>
			<div className={Styles.sidebar_button}>
				<Button btnText="Create" handleClick={handleCreate} />
				<Button btnText="Connect Wallet" handleClick={handleConnect} />
			</div>
		</div>
	);
};

export { SideBar };
