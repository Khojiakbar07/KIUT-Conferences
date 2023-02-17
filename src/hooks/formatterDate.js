
export function formatterDate(date){
  const d = new Date(date);

  return {
    day: String(d.getDate()).padStart(2, "0"),
    month: String(d.getMonth() + 1).padStart(2, "0"),
    year: d.getFullYear(),
    month_in_str: d.toLocaleString("default", { month: "long" }),
    time: `${String(d.getHours()).padStart(2, "0")}:${String(
      d.getMinutes()
    ).padStart(2, "0")}`,
  };
}
