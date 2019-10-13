export async function createRequest(request) {
	const URL = `${process.env.REACT_APP_API_ROOT}/requests`;
	const response = await fetch(URL, {
		method: "POST",
		body: JSON.stringify(request)
	});

	const newRequest = await response.json();
	return newRequest;
}

export async function fetchBuilding(id) {
	const URL = `${process.env.REACT_APP_API_ROOT}/buildings/${id}`;
	const buildingResponse = await fetch(URL);
	const building = await buildingResponse.json();
	return building;
}
