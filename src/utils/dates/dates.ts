export const getFormattedDate = (d: string) => {
  const date = new Date(d)

  return new Intl.DateTimeFormat('en-gb', { month: 'long', day: '2-digit', year: 'numeric' }).format(date)
}
