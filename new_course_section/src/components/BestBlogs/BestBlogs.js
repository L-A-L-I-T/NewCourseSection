import React from "react";
import HorizontalScroll from "../HorizontalScroll/HorizontalScroll";
import { BlogData } from "./BlogData";
import Blog from "./Blog";
function BestBlogs() {
	return (
		<div>
			<h4
				style={{
					marginLeft: "15px",
					fontSize: "1.2rem",
					fontFamily: "'Rubik', sans-serif",
				}}
			>
				Best Blogs
			</h4>
			<HorizontalScroll>
				{BlogData.map((data, index) => {
					return <Blog data={data} key={index} />;
				})}
			</HorizontalScroll>
		</div>
	);
}

export default BestBlogs;
