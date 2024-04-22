import React, { ReactEventHandler, useEffect, useState } from "react";
import Image from "next/image";
import { MdNotifications } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { CgMenuLeft, CgMenuRight } from "react-icons/cg";

import { Discover, HelpCenter, SideBar, Notification, Profile } from "./index";
import { Button } from "../componentsIndex";
import Styles from "./NavBar.module.css";
import images from "../../img";

type NavBarOptions = {
	discover: boolean;
	helpcenter: boolean;
	sidebar: boolean;
	notification: boolean;
	profile: boolean;
};

const NavBar = () => {
	let defaultOptionsStatus = {
		discover: false,
		helpcenter: false,
		sidebar: false,
		notification: false,
		profile: false,
	};
	const [option, setOption] = useState<NavBarOptions>(defaultOptionsStatus);

	useEffect(() => {}, []);

	const openNotification = () =>
		setOption({ ...defaultOptionsStatus, notification: !option.notification });

	const openMenu = (e: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {
		let btnText: string = e.currentTarget.innerText;

		if (btnText.indexOf(" ") !== -1) {
			btnText = btnText.replace(" ", "");
		}
		btnText = btnText.toLowerCase();
		setOption({
			...defaultOptionsStatus,
			[btnText]: !option[btnText as keyof NavBarOptions],
		});
	};

	const handleCreate = () => {};

	const openProfile = () =>
		setOption({ ...defaultOptionsStatus, profile: !option.profile });

	const openSideBar = () =>
		setOption({ ...defaultOptionsStatus, sidebar: !option.sidebar });

	return (
		<div className={Styles.navbar}>
			<div className={Styles.navbar_container}>
				<div className={Styles.navbar_container_left}>
					<div className={Styles.logo}>
						<Image src={images.logo} alt={"haha"} width={100} height={40} />
					</div>
					<div className={Styles.navbar_container_left_box_input}>
						<div className={Styles.navbar_container_left_box_input_box}>
							<input type="text" placeholder="Search NFT" />
							<BsSearch onClick={() => {}} className={Styles.search_icon} />
						</div>
					</div>
				</div>
				<div className={Styles.navbar_container_right}>
					<div className={Styles.navbar_container_right_discover}>
						<p onClick={openMenu}>Discover</p>
						{/** DISCOVER MENU */}
						{option.discover && (
							<div className={Styles.navbar_container_right_discover_box}>
								<Discover />
							</div>
						)}
					</div>
					<div className={Styles.navbar_container_right_helpcenter}>
						<p onClick={openMenu}>Help center</p>
						{/** HELPCENTER MENU */}
						{option.helpcenter && (
							<div className={Styles.navbar_container_right_helpcenter_box}>
								<HelpCenter />
							</div>
						)}
					</div>
					{/** NOTIFICATION MENU */}
					<div className={Styles.navbar_container_right_notification}>
						<MdNotifications
							className={Styles.notify}
							onClick={openNotification}
						/>
						{option.notification && <Notification />}
					</div>
					{/* CREATE BUTTON SECTION */}
					<div className={Styles.navbar_container_right_button}>
						<Button btnText="Create" handleClick={handleCreate} />
					</div>
					{/** USER PROFILE */}
					<div className={Styles.navbar_container_right_profile_box}>
						<div className={Styles.navbar_container_right_profile}>
							<Image
								className={Styles.navbar_container_right_profile}
								src={images.user1}
								alt="prf"
								width={40}
								height={40}
								onClick={openProfile}
							/>
							{option.profile && <Profile />}
						</div>
					</div>
					{/** MENU BUTTON */}
					<div className={Styles.navbar_container_right_menuBtn}>
						<CgMenuRight className={Styles.menuIcon} onClick={openSideBar} />
					</div>
					{/** Sidebar Component */}
					{option.sidebar && (
						<div className={Styles.sideBar}>
							<SideBar setOpenSideMenu={openSideBar} />
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export { NavBar };
