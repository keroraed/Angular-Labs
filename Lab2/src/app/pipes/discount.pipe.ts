import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount',
  standalone: true,
})
export class DiscountPipe implements PipeTransform {
  transform(value: number, discountPercentage: number = 10): number {
    if (!Number.isFinite(value)) {
      return value;
    }

    const safeDiscount = Number.isFinite(discountPercentage) ? discountPercentage : 10;
    const normalizedDiscount = Math.min(Math.max(safeDiscount, 0), 100);
    const discountedPrice = value * (1 - normalizedDiscount / 100);

    return Number(discountedPrice.toFixed(2));
  }
}
