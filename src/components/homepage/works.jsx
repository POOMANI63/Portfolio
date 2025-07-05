import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="el.png"
								alt="El codamics"
								className="work-image"
							/>
							<div className="work-title">El codamics</div>
							<div className="work-subtitle">
								Web Developer intern
							</div>
							<div className="work-duration">2025 -</div>
						</div>

						
					</div>
				}
			/>
		</div>
	);
};

export default Works;
