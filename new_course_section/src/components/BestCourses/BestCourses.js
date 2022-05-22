import React from "react";

import HorizontalScroll from "../HorizontalScroll/HorizontalScroll";

import { CoursesData } from "../Courses/CoursesData";
import CourseCard from "../Courses/CourseCard";

function BestCourses() {
	console.log(CoursesData[0].courses[0].courses);
	return (
		<div>
			<h4
				style={{
					marginLeft: "15px",
					fontSize: "1.2rem",
					fontFamily: "'Rubik', sans-serif",
				}}
			>
				Best Courses
			</h4>
			<HorizontalScroll>
				{CoursesData[0].courses[0]?.courses?.map((data, index) => {
					return <CourseCard data={data} key={index} />;
				})}
			</HorizontalScroll>
		</div>
	);
}

export default BestCourses;
