import React from "react";

export default function Header() {
	return (
		<header className="pa3 relative z-max">
			<div className="mw8 center w-100 flex items-center justify-between relative">
				<div className="flex">
					<a
						href="http://localhost:1313"
						title="Home"
						className="f4 fw9 black link"
					>
						<div className="nowrap flex items-center fw5 f6">
							<div className="h1 w1 mr2 bg-gold br-pill" />
							<span>NYC Mesh</span>
						</div>
					</a>
				</div>
			</div>
		</header>
	);
}
