import React from "react";
import Label from "./Label";

export default function Request({ match }) {
	return (
		<div className="flex justify-center sans-serif ph3">
			<div className="measure w-100 pt3 pb6-ns pb5">
				<div className="flex items-center justify-around-ns justify-start mb4 mt3">
					<div className="flex flex-column items-center-ns pr0-ns pr4 o-50">
						<div className="h2 w2 f5 fw6 mb2 flex items-center justify-center bg-light-yellow br-pill">
							1
						</div>
						Building Info
					</div>
					<div className="flex flex-column items-center-ns pr0-ns pr4 o-50">
						<div className="h2 w2 f5 fw6 mb2 flex items-center justify-center bg-light-yellow br-pill">
							2
						</div>
						Panorama Photos
					</div>
					<div className="flex flex-column items-center-ns pr0-ns pr4 fw6">
						<div className="h2 w2 f5 fw6 mb2 flex items-center justify-center bg-light-yellow br-pill">
							3
						</div>
						Schedule Install
					</div>
				</div>

				<h1 className="fw7 f3 black">Good news</h1>

				<div className="lh-copy dark-gray">
					<p>Your building is already connected to NYC Mesh!</p>
					<p>You can schedule a volunteer-led install below.</p>
					<p>
						We have two install rates. Please choose one when your
						install is completed. If we are not able to connect you,
						there is no charge.
						<div className="flex flex-row-ns flex-column mt3">
							<div className="bg-near-white pa3 mr2-ns mb0-ns mb3 w-50-ns">
								<span className="fw6">Full Cost - $290</span>
								<p className="f6">
									$240 for parts and equipment
								</p>
								<p className="f6">
									$50 cash for your volunteer installer's
									expenses.
								</p>
							</div>
							<div className="bg-near-white pa3 ml2-ns w-50-ns">
								<span className="fw6">Subsidized - $160</span>
								<p className="f6">$110 for hardware</p>
								<p className="f6">
									$50 cash for your volunteer installer's
									expenses.
								</p>
							</div>
						</div>
					</p>

					<div className="mt4">
						<iframe
							src="https://app.acuityscheduling.com/schedule.php?owner=13961026"
							width="100%"
							height="800"
							frameBorder="0"
						></iframe>
						<script
							src="https://embed.acuityscheduling.com/js/embed.js"
							type="text/javascript"
						></script>
					</div>
				</div>
			</div>
		</div>
	);
}
