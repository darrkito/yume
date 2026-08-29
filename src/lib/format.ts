const mxn = new Intl.NumberFormat("es-MX", {
  style: "currency",
  currency: "MXN",
});

export const formatMXN = (amount: number) => mxn.format(amount);

const blogDate = new Intl.DateTimeFormat("es-MX", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

export const formatBlogDate = (isoDate: string) => blogDate.format(new Date(isoDate));
