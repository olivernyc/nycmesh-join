import React from "react";
export default function Label({ label, htmlFor }) {
	return (
		<label className="fw5" htmlFor={htmlFor}>
			{label}
		</label>
	);
}
