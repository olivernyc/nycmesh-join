import React from "react";
export default function Label({ label, htmlFor }) {
	const renderTitle = () => {
		// Use roof access in place of LOS check for now
		if (roofAccess === "yes") {
			return (
				<div>
					<h1 className="fw7 f3">Available </h1>
					<p className="lh-copy">
						We're not 100% sure, but it looks like your building can
						connect!
					</p>
				</div>
			);
		}

		if (roofAccess === "maybe") {
			return (
				<div>
					<h1 className="fw7 f3">We need more info</h1>
					<p className="lh-copy">
						It might be possible to connect your building, but we
						couldn't tell for sure with just your address. To help
						us confirm, please take a panorama photo of the view
						from your rooftop and email it to us.
					</p>

					<p className="lh-copy">
						You can read some tips for taking good panorama photos{" "}
						<a href="https://docs.nycmesh.net/installs/panoramas/">
							here
						</a>
						.
					</p>

					<p className="lh-copy">Here are some good examples:</p>

					<div>
						<img src="https://node-db.netlify.com/panoramas/303.jpg" />
						<img src="https://node-db.netlify.com/panoramas/303a.jpg" />
					</div>

					<p className="lh-copy">
						Once we receive your photo, we’ll check your line of
						sight to nearby nodes. If it looks like a connection is
						possible, we’ll invite you to sign up for a
						volunteer-led install.
					</p>

					<p className="lh-copy">
						If you have any questions about the install process,
						check out our{" "}
						<a target="_" href="/faq">
							FAQ
						</a>
						, send us an{" "}
						<a target="_" href="mailto:install@nycmesh.net">
							email
						</a>
						, or chat with us on{" "}
						<a target="_" href="https://slack.nycmesh.net">
							Slack
						</a>
						. You can also meet us in person at our monthly{" "}
						<a href="https://www.meetup.com/nycmesh/">meetups</a>.
					</p>
				</div>
			);
		}

		if (roofAccess === "no") {
			return (
				<div>
					<h1 className="fw7 f3">Not available</h1>
					<p className="lh-copy">
						Our network has not reached your neighborhood. But don't
						worry! We are rapidly expanding and hope to reach you
						soon. We'll get in touch when that happens.
					</p>
					<p className="lh-copy">
						Here are some ways you can help us grow towards your
						neighborhood:
					</p>
					<ul className="list ma0 pa0 lh-copy">
						<li>
							<a
								target="_"
								href="https://www.meetup.com/nycmesh/"
								className="link dark-blue pointer"
							>
								Come to a meetup →
							</a>
						</li>
						<li>
							<a
								target="_"
								href="https://join.slack.com/t/nycmesh/shared_invite/enQtNDk0NDA4OTAyNDY0LTU5NWMyODY5ZTYyMDY2NzgzOTJmZjFmZTg3YWRjYjE0M2EyMzlhNDE3YmIxZmZhYTZmNjIwNTVkMDIwMjI2ZDg"
								className="link dark-blue pointer"
							>
								Join our Slack →
							</a>
						</li>
						<li>
							<a href="" className="link dark-blue pointer">
								Volunteer →
							</a>
						</li>
					</ul>
				</div>
			);
		}

		if (roofAccess === "no") {
			return (
				<div>
					<h1 className="fw7 f3">Not yet available</h1>
					<p className="lh-copy">
						Our network is not yet in your neighborhood.
					</p>

					<div>
						<h2 className="f5 fw5 mt0">Get involved</h2>
						<ul className="list ma0 pa0 lh-copy">
							<li>
								<a className="link dark-blue pointer">
									Come to a meetup →
								</a>
							</li>
							<li>
								<a className="link dark-blue pointer">
									Join our slack →
								</a>
							</li>
						</ul>
					</div>
				</div>
			);
		}
	};
	return <div>Success</div>;
}
