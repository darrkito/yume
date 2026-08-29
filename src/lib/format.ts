const mxn = new Intl.NumberFormat("es-MX", {
  style: "currency",
  currency: "MXN",
});

export const formatMXN = (amount: number) => mxn.format(amount);
