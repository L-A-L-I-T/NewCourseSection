import React from "react";
import AppBar from "@material-ui/core/AppBar";
import BrandLogo from "../../assets/beyond-exams-logo.2c98e22c.svg";
import { Link } from "react-router-dom";
function header() {
	return (
		<div style={{ marginBottom: "89px" }}>
			<AppBar
				style={{
					boxShadow: "0 0 10px 1px rgb(0 0 0 / 20%)",
					backgroundColor: "#fff",
					padding: "5px",
				}}
				elevation={0}
			>
				<Link to="/">
					<img
						src={BrandLogo}
						alt="logo"
						style={{ width: "107px", height: "54px", padding: "10px" }}
					/>
				</Link>
			</AppBar>
		</div>
	);
}

export default header;
