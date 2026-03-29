import { Directive, ElementRef, HostListener, OnDestroy, Renderer2 } from '@angular/core';

@Directive({
  selector: 'button[appDisableAfterClick]',
  standalone: true,
})
export class DisableAfterClickDirective implements OnDestroy {
  private readonly processingText = 'Processing...';
  private readonly reenableDelayMs = 3000;
  private originalText = '';
  private timeoutId: ReturnType<typeof setTimeout> | null = null;
  private isProcessing = false;

  constructor(
    private readonly hostElement: ElementRef<HTMLButtonElement>,
    private readonly renderer: Renderer2,
  ) {}

  @HostListener('click')
  onClick(): void {
    if (this.isProcessing || this.hostElement.nativeElement.disabled) {
      return;
    }

    this.isProcessing = true;
    this.originalText = this.hostElement.nativeElement.textContent?.trim() ?? '';

    this.renderer.setProperty(this.hostElement.nativeElement, 'disabled', true);
    this.renderer.setProperty(this.hostElement.nativeElement, 'textContent', this.processingText);

    this.clearPendingTimeout();
    this.timeoutId = setTimeout(() => {
      this.renderer.setProperty(this.hostElement.nativeElement, 'disabled', false);
      this.renderer.setProperty(this.hostElement.nativeElement, 'textContent', this.originalText);
      this.isProcessing = false;
      this.timeoutId = null;
    }, this.reenableDelayMs);
  }

  ngOnDestroy(): void {
    this.clearPendingTimeout();
  }

  private clearPendingTimeout(): void {
    if (this.timeoutId !== null) {
      clearTimeout(this.timeoutId);
      this.timeoutId = null;
    }
  }
}
