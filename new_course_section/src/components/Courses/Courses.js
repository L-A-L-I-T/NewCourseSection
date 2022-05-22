import React from "react";
import styles from "./Courses.module.css";
import Header from "../Header/Header";
import CourseSection from "./CourseSection";
import { CoursesData } from "./CoursesData";

import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

function Courses() {
	return (
		<div className={styles.container}>
			<div className={styles.title}>
				<h3 style={{ marginRight: "10px" }}>Courses by Topics</h3>
				<ArrowRightAltIcon />
			</div>
			{CoursesData.map((course, index) => {
				return <CourseSection data={course} key={index} />;
			})}
		</div>
	);
}

export default Courses;
