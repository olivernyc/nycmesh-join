import React from "react";
import qs from "qs";
import Progress from "./Progress";

export default function Request({ location }) {
	const query = new URLSearchParams(location.search);
	const params = qs.stringify({
		// firstName: "",
		// lastName: "",
		// email: "",
		// phone: "123",
		// "field:4683406": "", // Address
		"field:4661367": query.id,
		appointmentType: 3633316,
		owner: 13961026
	});
	const calendarURL = `https://app.acuityscheduling.com/schedule.php?${params}`;

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
								<p className="f6">
									$110 for parts and equipment
								</p>
								<p className="f6">
									$50 cash for your volunteer installer's
									expenses.
								</p>
							</div>
						</div>
					</p>
				</div>
			</div>

			<div
				className="calendly-inline-widget w-100 mw7"
				style={{ height: "900px" }}
				data-url="https://calendly.com/nycmesh/install"
				// style="min-width:320px;height:630px;"
			></div>
		</div>
	);
}
