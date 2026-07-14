import { expect, test } from 'vitest';
import { calculateTotal } from './cart';

test('calculates simple integers correctly', () => {
    const items = [{ name: 'Book', price: 10 }, { name: 'Pen', price: 5 }];
    expect(calculateTotal(items)).toBe(15);
});

test('handles floating point prices correctly', () => {
    const items = [
        { name: 'Apple', price: 0.10 },
        { name: 'Banana', price: 0.20 }
    ];
    // This test will FAIL because JS math returns 0.30000000000000004
    expect(calculateTotal(items)).toBe(0.30);
});