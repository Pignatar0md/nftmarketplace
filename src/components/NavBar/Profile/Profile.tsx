import React from "react";
import Image from "next/image";
import { FaUserAlt, FaRegImage, FaUserEdit } from "react-icons/fa";
import { MdHelpCenter } from "react-icons/md";
import { TbDownload } from "react-icons/tb";

import Styles from "./Profile.module.css";
import images from "../../../img";
import Link from "next/link";

const Profile = () => {
	return (
		<div className={Styles.profile}>
			<div className={Styles.profile_account}>
				<Image
					src={images.user1}
					alt="user profile"
					width={50}
					height={50}
					className={Styles.profile_account_img}
				/>
				<div className={Styles.profile_account_info}>
					<p>Alan Parsons</p>
					<small>mali street 21</small>
				</div>
			</div>
			<div className={Styles.profile_menu}>
				<div className={Styles.profile_menu_one}>
					<div className={Styles.profile_menu_one_item}>
						<FaUserAlt />
						<p>
							<Link href={{ pathname: "/myprofile" }}>My Profile</Link>
						</p>
					</div>
					<div className={Styles.profile_menu_one_item}>
						<FaRegImage />
						<p>
							<Link href={{ pathname: "/my-items" }}>My Item</Link>
						</p>
					</div>
					<div className={Styles.profile_menu_one_item}>
						<FaUserEdit />
						<p>
							<Link href={{ pathname: "/edit-profile" }}>Edit Profile</Link>
						</p>
					</div>
				</div>
				<div className={Styles.profile_menu_two}>
					<div className={Styles.profile_menu_one_item}>
						<MdHelpCenter />
						<p>
							<Link href={{ pathname: "/help" }}>Help</Link>
						</p>
					</div>
					<div className={Styles.profile_menu_one_item}>
						<TbDownload />
						<p>
							<Link href={{ pathname: "/disconnect" }}>Disconnect</Link>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export { Profile };
