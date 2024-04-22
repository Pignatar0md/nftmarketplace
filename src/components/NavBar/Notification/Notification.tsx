import React from "react";
import Image from "next/image";
import images from "../../../img";
import Styles from "./Notification.module.css";

const Notification = () => {
	return (
		<div className={Styles.notification}>
			Notification
			<div className={Styles.notification_box}>
				<div className={Styles.notification_box_img}>
					<Image
						src={images.user1}
						alt="prof image"
						width={50}
						height={50}
						className={Styles.notification_box_img}
					/>
				</div>
				<div className={Styles.notification_box_info}>
					<h4>Alan Parsons</h4>
					<p>Measure action your user...</p>
					<small>3 minutes ago</small>
				</div>
				<span className={Styles.notification_box_new}></span>
			</div>
		</div>
	);
};

export { Notification };
