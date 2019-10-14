import React, { useState } from "react";
import { createRequest, fetchBuilding } from "../../api";
import Progress from "../Progress";
import AddressInput from "./AddressInput";
import RoofInput from "./RoofInput";
import ContactInput from "./ContactInput";

export default function Form({ history }) {
	const [step, setStep] = useState(0);
	const [formValues, setFormValues] = useState({});

	if (step > 0 && !formValues.address) {
		setStep(0);
		setFormValues({});
	}

	const handleSubmit = async event => {
		event.preventDefault();

		try {
			const request = await createRequest(formValues);
			const building = await fetchBuilding(request.building_id);

			const isActive = node => node.status === "active";
			const activeNodes = building.nodes.filter(isActive);
			if (activeNodes.length) {
				history.push(`/schedule?id=${request.id}`);
			} else {
				history.push(`/panoramas?id=${request.id}`);
			}
		} catch (error) {
			history.push("/error");
		}
	};

	const renderStep1 = () => {
		if (step < 1) return null;
		const { roofAccess } = formValues;
		return (
			<RoofInput
				roofAccess={roofAccess}
				onChange={({ target }) => {
					setFormValues({ ...formValues, roofAccess: target.value });
					setStep(2);
				}}
			/>
		);
	};

	const renderStep2 = () => {
		if (step < 2) return null;
		const { name, email, phone, apartment, ncl = false } = formValues;
		const complete = name && email && phone && ncl;
		const submitActive = "bg-red hover-bg-dark-red pointer";
		const submitDisabled = "bg-moon-gray";
		const submitButtonClass = `white fr f5 pa3 bn br2 fw6 ${
			complete ? submitActive : submitDisabled
		}`;
		return (
			<div>
				<ContactInput
					contact={{ name, email, phone, apartment }}
					onChange={(key, value) => {
						setFormValues({ ...formValues, [key]: value });
						setStep(2);
					}}
				/>
				<div className="mv4">
					<input
						required
						name="ncl"
						type="checkbox"
						checked={ncl}
						onChange={event =>
							setFormValues({
								...formValues,
								ncl: event.target.checked
							})
						}
					/>
					<label htmlFor="ncl" className="ml2 mid-gray">
						I agree to the{" "}
						<a
							className="blue no-underline"
							href="https://www.nycmesh.net/ncl.pdf"
							target="_"
							checked={ncl}
						>
							Network Commons License
						</a>
					</label>
				</div>
				<input
					className={submitButtonClass}
					type="Submit"
					value="Submit"
					readOnly
				/>
			</div>
		);
	};

	return (
		<div className="flex justify-center sans-serif ph3">
			<div className="measure w-100 pt3 pb6-ns pb5">
				<Progress step={1} />
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
						address={formValues.address}
						onChange={address => {
							setFormValues({ ...formValues, address });
						}}
						onSelect={addressValues => {
							setFormValues({ ...formValues, ...addressValues });
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
