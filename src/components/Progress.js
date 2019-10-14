import React from "react";

export default function Progress({ step }) {
	function renderStep(number, name) {
		const numberClass =
			"h2 w2 f5 fw6 mb2 flex items-center justify-center bg-light-yellow br-pill";
		return (
			<div
				className={`flex flex-column items-center-ns pr0-ns pr4 ${
					step === number ? "fw6" : "o-50"
				}`}
			>
				<div className={numberClass}>{number}</div>
				<span>{name}</span>
			</div>
		);
	}
	return (
		<div className="flex items-center justify-around-ns justify-start mb4 mt3">
			{renderStep(1, "Building Info")}
			{renderStep(2, "Panorama Photos")}
			{renderStep(3, "Schedule Install")}
		</div>
	);
}
