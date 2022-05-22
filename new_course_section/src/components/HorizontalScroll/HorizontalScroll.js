import React from "react";
import IconButton from "@material-ui/core/IconButton";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import styles from "./HorizontalScroll.module.css";

const sideScroll = (element, step, distance, speed) => {
	let scrollAmount = 0;
	const slideTimer = setInterval(() => {
		element.scrollLeft += step;
		scrollAmount += Math.abs(step);
		if (scrollAmount >= distance) {
			clearInterval(slideTimer);
		}
	}, speed);
};

function HorizontalScroll({ children }) {
	const contentWrapper = React.useRef(null);
	return (
		<div className={styles.container}>
			<div className={styles.buttonWrapper}>
				<IconButton
					aria-label="left"
					onClick={() => {
						sideScroll(contentWrapper.current, -10, 300, 10);
					}}
				>
					<ChevronLeftIcon fontSize="inherit" />
				</IconButton>
				<IconButton
					aria-label="right"
					onClick={() => {
						sideScroll(contentWrapper.current, 10, 300, 10);
					}}
				>
					<ChevronRightIcon fontSize="inherit" />
				</IconButton>
			</div>
			<div className={styles.children} ref={contentWrapper}>
				{children}
			</div>
		</div>
	);
}

export default HorizontalScroll;
