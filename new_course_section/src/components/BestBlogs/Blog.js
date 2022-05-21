import React from "react";
import styles from "./Blog.module.css";
import { Paper, Avatar } from "@material-ui/core";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
function Blog({ data }) {
	return (
		<Paper className={styles.container}>
			<div className={styles.topContainer}>
				<Avatar style={{ marginRight: "20px" }} />
				<div>
					<h4>{data.author}</h4>
					<p>{data.date}</p>
				</div>
			</div>
			<div>
				<h3>{data.title}</h3>
				<div className={styles.bottomContainer}>
					<div className={styles.buttonContainer}>
						<ChatBubbleOutlineIcon style={{ marginRight: "10px" }} />
						<p>{data.reactions_count} reactions</p>
					</div>
					<div className={styles.buttonContainer}>
						<FavoriteBorderIcon style={{ marginRight: "10px" }} />
						<p>{data.comments_count} comments</p>
					</div>
				</div>
			</div>
		</Paper>
	);
}

export default Blog;
