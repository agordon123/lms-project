/**
 * Formats a given price as a currency string in USD.
 * @param price - The price to format.
 * @returns A string representing the formatted price in USD.
 */
export const formatPrice = (price: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);
};
