/**
 * Returns MORNING, AFTERNOON or evening based on provided hour
 * @param {number} time Hour in 24 hour format 
 * @returns {dayPart} Part of day as MORNING, AFTERNOON or EVENING
 */
function getByHour(time: number) {
	if (time < 12) return "MORNING";
	if (time < 18) return "AFTERNOON";
	return "EVENING";
}

/**
 * Returns MORNING, AFTERNOON or EVENING based on provided epoch time
 * @param {EpochTimeStamp} epoch EPOCH Time in milliseconds 
 * @returns {dayPart} Part of day as MORNING, AFTERNOON or EVENING
 */
function get(epoch: EpochTimeStamp) {
	const date = new Date(epoch);
	const hour = date.getHours();

	getByHour(hour);
}

/**
 * Returns MORNING, AFTERNOON or evening based on current time
 * @returns {dayPart} Part of day as MORNING, AFTERNOON or EVENING
 */
function getNow() {
	const currentHour = new Date().getHours();

	return getByHour(currentHour);
}

export {get, getByHour, getNow}