export function getCurrentDay(): string {
  const currentDate: Date = new Date();
  const day: string = currentDate.toLocaleDateString("id-ID", {
    weekday: "long",
  });
  const date: number = currentDate.getDate();
  const month: string = currentDate.toLocaleDateString("id-ID", {
    month: "long",
  });
  const year: number = currentDate.getFullYear();

  return `${day}, ${date} ${month} ${year}`;
}
