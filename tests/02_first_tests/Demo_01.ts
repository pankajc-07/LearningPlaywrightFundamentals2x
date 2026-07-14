export interface CartItem {
    name: string;
    price: number;
}

export function calculateTotal(items: CartItem[]): number {
    // Sums up item prices.
    // BUG: Direct addition creates floating-point precision issues!
    return items.reduce((total, item) => total + item.price, 0);
}