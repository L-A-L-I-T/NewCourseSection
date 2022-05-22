import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../Header/Header";
import Section from "../Section/Section";
import BestYoutubeChannels from "../BestYoutubeChannels/BestYoutubeChannels";
import BestBlogs from "../BestBlogs/BestBlogs";
import BestCourses from "../BestCourses/BestCourses";
import styles from "./Explore.module.css";
function Explore() {
	const location = useLocation();
	console.log(location);
	return (
		<div>
			<Header />
			<div className={styles.courseName}>
				<h2 className={styles.courseTitle}>{`${location.state.courseName}`}</h2>
			</div>
			<BestYoutubeChannels />
			<BestBlogs />
			<BestCourses />
		</div>
	);
}

export default Explore;
