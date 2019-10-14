import React, { useEffect } from "react";
import Progress from "./Progress";

export default function Request({ location }) {
	useEffect(() => {
		const head = document.querySelector("head");
		const script = document.createElement("script");
		const url = "https://assets.calendly.com/assets/external/widget.js";
		script.setAttribute("src", url);
		head.appendChild(script);
	}, []);

	return (
		<div className="flex flex-column items-center justify-center sans-serif ph3 pb5">
			<div className="measure w-100 pt3">
				<Progress step={3} />

				<h1 className="fw7 f3 black">Good news</h1>

				<div className="lh-copy dark-gray">
					<p>Your building is already connected to NYC Mesh!</p>
					<p>You can schedule a volunteer-led install below.</p>
					<p>
						When your install is completed, please choose an install
						rate. If we are not able to connect you, there will be
						no charge.
					</p>
					<div className="flex flex-row-ns flex-column mt3">
						<div className="bg-near-white pa3 mr2-ns mb0-ns mb3 w-50-ns">
							<span className="fw6">Full Cost - $290</span>
							<p className="f6">$240 for parts and equipment</p>
							<p className="f6">
								$50 cash for your volunteer installer's
								expenses.
							</p>
						</div>
						<div className="bg-near-white pa3 ml2-ns w-50-ns">
							<span className="fw6">Subsidized - $160</span>
							<p className="f6">$110 for parts and equipment</p>
							<p className="f6">
								$50 cash for your volunteer installer's
								expenses.
							</p>
						</div>
					</div>
				</div>
			</div>

			<div
				className="calendly-inline-widget w-100 mw7"
				style={{ height: "920px" }}
				data-url="https://calendly.com/nycmesh/install"
				// style="min-width:320px;height:630px;"
			></div>
		</div>
	);
}
