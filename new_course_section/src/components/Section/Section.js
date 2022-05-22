import React, { useState } from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Header from "../Header/Header";
import Courses from "../Courses/Courses";
import styles from "./section.module.css";
function Section({ courseName }) {
	const [tabValue, setTabValue] = useState(0);
	console.log(courseName);
	const handleChange = (event, newValue) => {
		setTabValue(newValue);
	};
	return (
		<div>
			<Header />
			<div className={styles.header}>
				<h2>Learn Anything you want!</h2>
			</div>
			<Tabs
				value={tabValue}
				onChange={handleChange}
				indicatorColor="primary"
				textColor="primary"
				centered
				style={{ borderBottom: "1px solid 	#D3D3D3" }}
			>
				<Tab label="Browse" style={{ textTransform: "none" }} />
				<Tab label="Filter" style={{ textTransform: "none" }} />
			</Tabs>

			{tabValue === 0 ? (
				<>
					<Courses />
				</>
			) : (
				<>section</>
			)}
		</div>
	);
}

export default Section;
