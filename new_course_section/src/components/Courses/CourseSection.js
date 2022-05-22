import React from "react";
import styles from "./CourseSection.module.css";
import HorizontalScroll from "../HorizontalScroll/HorizontalScroll";
import CourseCard from "./CourseCard";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

function CourseSection({ data }) {
	return (
		<div>
			<div style={{ display: "flex", alignItems: "center" }}>
				<h4 style={{ marginLeft: "10px" }} className={styles.title}>
					{data.title}
				</h4>
				<div className={styles.iconContainer}>
					<ChevronRightIcon className={styles.icon} />
				</div>
			</div>

			<HorizontalScroll>
				{data.courses.map((course, index) => {
					return <CourseCard data={course} key={index} />;
				})}
			</HorizontalScroll>
		</div>
	);
}

export default CourseSection;
