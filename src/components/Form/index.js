import React, { useState } from "react";
import AddressInput from "./AddressInput";
import RoofInput from "./RoofInput";
import ContactInput from "./ContactInput";

export default function Form(props) {
	const [step, setStep] = useState(0);
	const [address, setAddress] = useState("");
	const [roofAccess, setRoofAccess] = useState();
	const [contact, setContact] = useState({});

	if (!address && step > 0) {
		setStep(0);
		setRoofAccess();
	}

	const handleSubmit = event => {
		event.preventDefault();
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
		const submitButtonClass = `white fr f5 mt3 pa3 bn br2 fw6 ${
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
						Let's see if NYC Mesh is available in your building.
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
							setRoofAccess();
							setStep(0);
						}}
						onSelect={address => {
							setAddress(address);
							setStep(1);
						}}
					/>
					{renderStep1()}
					{renderStep2()}
				</form>
			</div>
		</div>
	);
}
