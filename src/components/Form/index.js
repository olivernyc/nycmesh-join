import React, { useState } from "react";
import AddressInput from "./AddressInput";
import RoofInput from "./RoofInput";
import ContactInput from "./ContactInput";

export default function Form({ history }) {
	const [step, setStep] = useState(0);
	const [address, setAddress] = useState("");
	const [roofAccess, setRoofAccess] = useState();
	const [contact, setContact] = useState({});

	if (!address && step > 0) {
		setStep(0);
		setRoofAccess();
	}

	const handleSubmit = async event => {
		event.preventDefault();
		const response = await fetch("/requests", {
			method: "POST",
			body: JSON.stringify({
				address,
				roofAccess,
				...contact
			})
		});
		const request = await response.json();

		const buildingResponse = await fetch(
			`/buildings/${request.building_id}`
		);
		const building = await buildingResponse.json();
		const activeNodes = building.nodes.filter(
			node => node.status === "active"
		);
		if (activeNodes.length) {
			history.push(`/schedule?id=${request.id}`);
		} else {
			history.push(`/request?id=${request.id}`);
		}
	};

	const renderStep1 = () => {
		if (step < 1) return null;
		return (
			<RoofInput
				roofAccess={roofAccess}
				onChange={({ target }) => {
					setRoofAccess(target.value);
					setStep(2);
				}}
			/>
		);
	};

	const renderStep2 = () => {
		if (step < 2) return null;
		const { name, email, phone } = contact;
		const complete = name && email && phone;
		const submitActive = "bg-red hover-bg-dark-red pointer";
		const submitDisabled = "bg-moon-gray";
		const submitButtonClass = `white fr f5 pa3 bn br2 fw6 ${
			complete ? submitActive : submitDisabled
		}`;
		return (
			<div>
				<ContactInput
					contact={contact}
					onChange={contact => {
						setContact(contact);
						setStep(2);
					}}
				/>
				<div className="mv4">
					<input required type="checkbox" value="ncl" />
					<label htmlFor="ncl" className="ml2 mid-gray">
						I agree to the{" "}
						<a
							className="blue no-underline"
							href="https://www.nycmesh.net/ncl.pdf"
							target="_"
						>
							Network Commons License
						</a>
					</label>
				</div>
				<input
					className={submitButtonClass}
					type="Submit"
					value="Check availablility"
				/>
			</div>
		);
	};

	return (
		<div className="flex justify-center sans-serif ph3">
			<div className="measure w-100 pt3 pb6-ns pb5">
				<div>
					<h1 className="fw7 f3">Get connected</h1>
					<p className="lh-copy dark-gray">
						Please ask your neighbors if they would like to join
						too!
					</p>
				</div>
				<form
					className="usa-form"
					autoComplete="off"
					onSubmit={handleSubmit}
				>
					<AddressInput
						address={address}
						onChange={address => {
							setAddress(address);
						}}
						onSelect={address => {
							setAddress(address);
							if (step < 1) {
								setStep(1);
							}
						}}
					/>
					{renderStep1()}
					{renderStep2()}
				</form>
			</div>
		</div>
	);
}
