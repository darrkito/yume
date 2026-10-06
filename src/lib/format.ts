const mxn = new Intl.NumberFormat("es-MX", {
  style: "currency",
  currency: "MXN",
});

export const formatMXN = (amount: number) => mxn.format(amount);

const blogDateOptions: Intl.DateTimeFormatOptions = { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" };
const blogDate = { es: new Intl.DateTimeFormat("es-MX", blogDateOptions), en: new Intl.DateTimeFormat("en-US", blogDateOptions) };

export const formatBlogDate = (isoDate: string, lang: "es" | "en" = "es") => blogDate[lang].format(new Date(isoDate));
