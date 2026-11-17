/**
 * Public pricing configuration for NTA Lavamos.
 *
 * Update service names, prices, and notes here. No database or environment
 * variables are required; changes take effect after the site is redeployed.
 */
export type ServiceRate = {
  id: string;
  label: string;
  price: number;
  detail?: string;
};

export const fullServiceRates: ServiceRate[] = [
  { id: "full-with-detergent-fabcon", label: "With detergent and fabcon", price: 190 },
  { id: "full-without-detergent-fabcon", label: "No detergent or fabcon", price: 175 },
  { id: "full-fabcon-only", label: "Fabcon only (no detergent)", price: 185 },
  { id: "full-detergent-only", label: "Detergent only (no fabcon)", price: 180 },
];

export const selfServiceRates: ServiceRate[] = [
  { id: "wash-only", label: "Wash only", price: 70 },
  { id: "dry-only", label: "Dry only", price: 75 },
  { id: "spin-dry", label: "Spin dry", price: 15 },
  { id: "fold", label: "Fold", price: 20 },
  { id: "additional-wash", label: "Additional wash (24 mins)", price: 50 },
  { id: "additional-dry", label: "Additional dry (5 mins)", price: 10 },
];

export const serviceSurcharges = {
  rush: {
    label: "Rush service",
    amount: 50,
    unit: "load",
    description:
      "Priority processing. Available upon request and subject to machine availability and laundry volume. Comforters, bulky items and special loads may require additional processing time.",
  },
} as const;

export function formatPrice(amount: number): string {
  return `₱${amount.toFixed(2)}`;
}
