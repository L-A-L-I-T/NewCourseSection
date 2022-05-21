import React from "react";
import AppBar from "@material-ui/core/AppBar";
import styles from "./Header.module.css";
import BrandLogo from "../../assets/beyond-exams-logo.2c98e22c.svg";

function header() {
	return (
		<div style={{ marginBottom: "100px" }}>
			<AppBar
				className={styles.appbar}
				style={{
					boxShadow: "0 0 10px 1px rgb(0 0 0 / 20%)",
					backgroundColor: "#fff",
					padding: "5px",
				}}
				elevation={0}
			>
				<img
					src={BrandLogo}
					alt="logo"
					style={{ width: "107px", height: "54px", padding: "10px" }}
				/>
			</AppBar>
		</div>
	);
}

export default header;
