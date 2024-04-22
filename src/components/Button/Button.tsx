import React, { FC } from "react";
import Styles from "./Button.module.css";

type Button = { btnText: string; handleClick: () => void };

const Button: FC<Button> = ({ btnText, handleClick }) => {
	return (
		<div className={Styles.box}>
			<button className={Styles.button} onClick={handleClick}>
				{btnText}
			</button>
		</div>
	);
};

export { Button };
