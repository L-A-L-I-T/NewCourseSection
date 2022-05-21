import React from "react";

import styles from "./YoutubeChannelCard.module.css";

import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";

import YoutubeLogo from "../../assets/youtubeLogo.jpeg";

function YoutubeChannelCard({ data }) {
	return (
		<Paper className={styles.card}>
			<Avatar
				src={YoutubeLogo}
				className={styles.avatar}
				style={{ width: "100px", height: "auto" }}
			/>
			<h4
				style={{
					fontSize: "1rem",
					fontFamily: "'Rubik', sans-serif",
				}}
			>
				{data.name}
			</h4>
			<p
				style={{
					fontSize: "0.8rem",
					fontFamily: "'Rubik', sans-serif",
				}}
			>
				Subscribers - {data.subscribers_count} million
			</p>
		</Paper>
	);
}

export default YoutubeChannelCard;
