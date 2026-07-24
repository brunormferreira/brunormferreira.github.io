import {
  Directive,
  ElementRef,
  Input,
  OnInit,
  OnDestroy,
  inject,
  NgZone,
} from '@angular/core';

@Directive({
  selector: '[appTyping]',
  standalone: true,
})
export class TypingDirective implements OnInit, OnDestroy {
  private readonly el = inject(ElementRef<HTMLElement>);
  private readonly zone = inject(NgZone);

  @Input('appTyping') texts: readonly string[] = [];
  @Input() typingSpeed = 60;
  @Input() deletingSpeed = 30;
  @Input() pauseDuration = 2000;
  @Input() loop = true;
  @Input() showCursor = true;

  private currentIndex = 0;
  private currentChar = 0;
  private isDeleting = false;
  private timeoutId: ReturnType<typeof setTimeout> | null = null;

  ngOnInit(): void {
    if (this.texts.length > 0) {
      this.zone.runOutsideAngular(() => this.type());
    }
  }

  ngOnDestroy(): void {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  private type(): void {
    const current = this.texts[this.currentIndex] ?? '';
    if (!current) return;
    const cursor = this.showCursor ? '█' : '';

    if (this.isDeleting) {
      this.currentChar--;
      this.el.nativeElement.textContent =
        current.substring(0, this.currentChar) + cursor;

      if (this.currentChar === 0) {
        this.isDeleting = false;
        this.currentIndex = (this.currentIndex + 1) % this.texts.length;

        if (!this.loop && this.currentIndex === 0) return;

        this.timeoutId = setTimeout(() => this.type(), 400);
        return;
      }

      this.timeoutId = setTimeout(() => this.type(), this.deletingSpeed);
    } else {
      this.currentChar++;
      this.el.nativeElement.textContent =
        current.substring(0, this.currentChar) + cursor;

      if (this.currentChar === current.length) {
        if (!this.loop && this.currentIndex === this.texts.length - 1) return;

        this.timeoutId = setTimeout(() => {
          this.isDeleting = true;
          this.type();
        }, this.pauseDuration);
        return;
      }

      this.timeoutId = setTimeout(() => this.type(), this.typingSpeed);
    }
  }
}
