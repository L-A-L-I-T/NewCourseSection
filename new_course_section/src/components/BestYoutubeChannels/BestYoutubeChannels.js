import React from "react";

import HorizontalScroll from "../HorizontalScroll/HorizontalScroll";

import { YoutubeData } from "./YoutubeData";
import YoutubeChannelCard from "./YoutubeChannelCard";

function BestYoutubeChannels() {
	return (
		<div>
			<h4
				style={{
					marginLeft: "15px",
					fontSize: "1.2rem",
					fontFamily: "'Rubik', sans-serif",
				}}
			>
				Youtube Channels
			</h4>
			<HorizontalScroll>
				{YoutubeData.map((data, index) => {
					return <YoutubeChannelCard data={data} key={index} />;
				})}
			</HorizontalScroll>
		</div>
	);
}

export default BestYoutubeChannels;
