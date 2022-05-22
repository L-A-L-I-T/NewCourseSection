import React from "react";

import HorizontalScroll from "../HorizontalScroll/HorizontalScroll";
import CourseCard from "./CourseCard";

function CourseSection({ data }) {
	return (
		<div>
			<h4 style={{ marginLeft: "10px" }}>{data.title}</h4>
			<HorizontalScroll>
				{data.courses.map((course, index) => {
					return <CourseCard data={course} key={index} />;
				})}
			</HorizontalScroll>
		</div>
	);
}

export default CourseSection;
