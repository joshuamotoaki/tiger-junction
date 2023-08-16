// Time Conversion Constants 
const TIME_CONVERSION: Record<string, number> = {
    "ZERO_ADJUST": 48,      
    "HOUR_FACTOR": 6,       
    "MINUTE_FACTOR": 0.1,   
    "NULL_TIME": -42,       
}

/**
 * Converts an am/pm time string to a value
 * @param time in format 'HH:MM AM/PM'
 * @returns value between X and Y
 */
const timeToValue = (time: string) => {
    if (time === undefined) 
        return TIME_CONVERSION.NULL_TIME;

    let dig = time.split(" ")[0].split(":").map((x) => parseInt(x));
    let pm = time.split(" ")[1] === "pm";

    if (dig[0] === 12) dig[0] = 0;

    let val = (dig[0] * TIME_CONVERSION.HOUR_FACTOR)
        + (dig[1] * TIME_CONVERSION.MINUTE_FACTOR)
        - TIME_CONVERSION.ZERO_ADJUST;

    if (pm) val += 12 * TIME_CONVERSION.HOUR_FACTOR;

    // Round to nearest tenth (account for floating point error)
    return Math.round((val * 10)) / 10;
}

/**
 * Converts a military time string to a value
 * @param time in format 'HH:MM' (24 hour/military time)
 * @returns value between X and Y
 */
const militaryToValue = (time: string) => {
    if (time === undefined) 
        return TIME_CONVERSION.NULL_TIME;

    let hour = parseInt(time.slice(0, 2));
    let minute = parseInt(time.slice(3, 5));

    let val = (hour * TIME_CONVERSION.HOUR_FACTOR)
        + (minute * TIME_CONVERSION.MINUTE_FACTOR)
        - TIME_CONVERSION.ZERO_ADJUST;

    // Round to nearest tenth (account for floating point error)
    return Math.round((val * 10)) / 10;
}

/**
 * Converts a value to a military time string 
 * @param value between X and Y
 * @returns time string in format 'HH:MM' (24 hour/military time)
 */
const valueToMilitary = (value: number) => {
    if (value === TIME_CONVERSION.NULL_TIME) return "00:00";

    let hour: number | string = 
        Math.floor(value / TIME_CONVERSION.HOUR_FACTOR) + 8;

    let minute: number | string = 
        Math.round((value % TIME_CONVERSION.HOUR_FACTOR)
            / TIME_CONVERSION.MINUTE_FACTOR);

    // Add leading zeros
    if (hour < 10) hour = `0${hour}`;
    if (minute < 10) minute = `0${minute}`;

    return `${hour}:${minute}`;
}

/**
 * Converts two values to a military time label
 * @param start time value
 * @param end time value
 * @returns formatted time label for display
 */
const valuesToTimeLabel = (start: number, end: number) => {
    let startTime = valueToMilitary(start);
    let endTime = valueToMilitary(end);

    if (startTime === undefined || endTime === undefined) 
        return "";

    // Convert to 12 hour time
    if (parseInt(startTime.slice(0, 2)) > 12) 
        startTime = `${parseInt(startTime.slice(0, 2)) - 12}:${startTime.slice(3, 5)}`;
    
    if (parseInt(endTime.slice(0, 2)) > 12) 
        endTime = `${parseInt(endTime.slice(0, 2)) - 12}:${endTime.slice(3, 5)}`;
    
    // Remove leading zeros
    if (startTime.slice(0, 1) === "0") startTime = startTime.slice(1);
    if (endTime.slice(0, 1) === "0") endTime = endTime.slice(1);

    return `${startTime} - ${endTime}`;
}

// ! Tests

/**
 * Tests timeToValue() function
 */
const testTimeToValue = () => {
    const TEST_CASES = {
        "1:00 am": -42,
        "01:00 am": -42,
        "7:30 am": -3,
        "8:00 am": 0,
        "8:30 am": 3,
        "9:00 am": 6,
        "9:30 am": 9,
        "10:00 am": 12,
        "11:00 am": 18,
        "12:00 pm": 24,
        "12:10 pm": 25,
        "12:30 pm": 27,
        "12:31 pm": 27.1,
        "1:00 pm": 30,
        "01:00 pm": 30,
        "1:30 pm": 33,
        "10:00 pm": 84,
        "10:30 pm": 87,
        "10:37 pm": 87.7,
        "11:50 pm": 95,
        "12:00 am": -48,
    } as const;
    type TEST_TIMES = keyof typeof TEST_CASES;

    let success = true;
    console.log("Running timeToValue() tests...");
    for (let time of Object.keys(TEST_CASES) as TEST_TIMES[]) {
        let val = timeToValue(time);
        if (val !== TEST_CASES[time]) {
            console.log(`timeToValue(${time}) = ${val} (expected ${TEST_CASES[time]})`);
            success = false;
        }
    }

    if (success) {
        console.log("timeToValue() tests passed!");
        return true;
    } else {
        console.log("timeToValue() tests failed!");
        return false;
    }
}

export { timeToValue, militaryToValue, valueToMilitary, valuesToTimeLabel, testTimeToValue }
