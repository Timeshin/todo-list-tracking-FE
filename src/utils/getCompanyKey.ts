const getCompanyKey = (companyName: string) => {
	const companyNameArray = companyName.split(' ')
	let returnedKey: string

	if (companyNameArray.length === 1) {
		return (returnedKey = `${companyNameArray[0][0]}${companyNameArray[0][1]}`.toUpperCase())
	}

	returnedKey = companyNameArray
		.map((word) => word[0])
		.join('')
		.toUpperCase()

	return returnedKey
}

export default getCompanyKey
