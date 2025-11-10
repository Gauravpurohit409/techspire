export const parseTimeTo24Hour = (time: string): string => {
  // Case 1: 12-hour format (contains AM/PM)
  if (/[ap]m$/i.test(time.trim())) {
    const [hourMin, modifier] = time.trim().split(" ");
    const values = hourMin.split(":").map(Number);
    let hours = values[0];
    const minutes = values[1];

    if (modifier.toLowerCase() === "pm" && hours < 12) hours += 12;
    if (modifier.toLowerCase() === "am" && hours === 12) hours = 0;

    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}`;
  }

  // Case 2: Already 24-hour format
  return time;
};
