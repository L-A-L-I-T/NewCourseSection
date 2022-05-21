import React, { useState } from "react";
import styles from "./section.module.css";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import BestYoutubeChannels from "../BestYoutubeChannels/BestYoutubeChannels";
import BestBlogs from "../BestBlogs/BestBlogs";

function Section() {
	const [tabValue, setTabValue] = useState(0);

	const handleChange = (event, newValue) => {
		setTabValue(newValue);
	};
	return (
		<div>
			<div className={styles.courseName}>
				<h2 className={styles.courseTitle}>Coding</h2>
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
					<BestYoutubeChannels />
					<BestBlogs />
				</>
			) : (
				<>section</>
			)}
		</div>
	);
}

export default Section;
