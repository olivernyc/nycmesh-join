import React from "react";
import Progress from "./Progress";

export default function Request({ match }) {
	return (
		<div className="flex justify-center sans-serif ph3">
			<div className="measure w-100 pt3 pb5">
				<Progress step={2} />

				<div className="dark-gray">
					<h1 className="fw7 f3 black">
						We need photos from your roof
					</h1>
					<div className="lh-copy">
						<p>
							To get you connected, we need to check if your
							building has line of sight to any nearby hub nodes.
							We use panorama photos of the view from your roof to
							do this.
						</p>

						<p className="fw6">
							Please send us panoramas by replying to the
							confirmation email we just sent you.
						</p>

						{
							// <div className="pa3 bg-light-gray">
							// 	<Label label="Upload panoramas" />
							// 	<input type="file" className="db mt3 mb2" />
							// </div>
						}

						<p>Here are some examples:</p>

						<div>
							<div
								className="h4 bg-center cover bg-near-white mb2"
								style={{
									backgroundImage:
										"url('https://node-db.netlify.com/panoramas/303.jpg')"
								}}
							/>
							<div
								className="h4 bg-center cover bg-near-white"
								style={{
									backgroundImage:
										"url('https://node-db.netlify.com/panoramas/303a.jpg')"
								}}
							/>
						</div>

						<p>
							You can read some tips for taking good panorama
							photos{" "}
							<a
								href="https://docs.nycmesh.net/installs/panoramas/"
								target="_"
							>
								here
							</a>
							.
						</p>

						<p className="bg-light-yellow pa3">
							Once we receive your photo, we’ll check your line of
							sight to nearby nodes. If it looks like a connection
							is possible, we’ll invite you to schedule a
							volunteer-led install.
						</p>

						<p>
							If you have any questions, check out our{" "}
							<a href="/faq" target="_">
								FAQ
							</a>
							, send us an{" "}
							<a href="mailto:install@nycmesh.net" target="_">
								email
							</a>
							, or chat with us on{" "}
							<a href="https://slack.nycmesh.net" target="_">
								Slack
							</a>
							. You can also meet us in person at our bi-weekly{" "}
							<a
								href="https://www.meetup.com/nycmesh/"
								target="_"
							>
								meetups
							</a>
							.
						</p>
					</div>
				</div>
				{
					// <div className="h5 br2 overflow-hidden">
					// 	<MapView />
					// </div>
				}
			</div>
		</div>
	);
}
