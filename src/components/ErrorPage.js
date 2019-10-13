import React from "react";

export default function ErrorPage({ label, htmlFor }) {
	return (
		<div className="flex justify-center sans-serif ph3">
			<div className="measure w-100 pt3 pb6-ns pb5">
				<h1 className="fw7 f3 black">Something went wrong</h1>
				<div className="dark-gray">
					<p>
						Your request didn't go through. Please try again later.
					</p>
				</div>
			</div>
		</div>
	);
}
