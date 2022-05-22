import React from "react";
import styles from "./CourseCard.module.css";
import { Link } from "react-router-dom";
function CourseCard({ data }) {
	return (
		<Link
			to={`/courses/${data.id}/explore`}
			state={{
				courseName: `${data.title}`,
			}}
			style={{ textDecoration: "none" }}
		>
			<div className={styles.rowCourse}>
				<div>
					<img src={data.image_url} className={styles.poster} alt="poster" />
				</div>
				<div style={{ width: "100%", marginLeft: "10px" }}>
					<p style={{ color: "black" }}>{data.title}</p>
					{data.video_count && (
						<p className={styles.videoCount}>{data.video_count} Videos</p>
					)}
					{data.num_topics && (
						<p className={styles.videoCount}>{data.num_topics} courses</p>
					)}
				</div>
			</div>
		</Link>
	);
}

export default CourseCard;
