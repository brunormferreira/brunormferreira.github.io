import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  OnDestroy,
  ViewChild,
  AfterViewInit,
  inject,
  PLATFORM_ID,
  NgZone,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-matrix-rain',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<canvas #canvas class="matrix-canvas"></canvas>`,
  styleUrl: './matrix-rain.component.scss',
})
export class MatrixRainComponent implements AfterViewInit, OnDestroy {
  @ViewChild('canvas') canvasRef!: ElementRef<HTMLCanvasElement>;

  private readonly platformId = inject(PLATFORM_ID);
  private readonly zone = inject(NgZone);
  private readonly destroyRef = inject(DestroyRef);
  private ctx!: CanvasRenderingContext2D;
  private columns: number[] = [];
  private animationId: number | null = null;
  private readonly fontSize = 14;
  private readonly chars =
    'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEF';

  private readonly resizeListener = () => this.resize();

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    if (prefersReducedMotion) return;

    const canvas = this.canvasRef.nativeElement;
    this.ctx = canvas.getContext('2d')!;

    this.zone.runOutsideAngular(() => {
      this.resize();
      window.addEventListener('resize', this.resizeListener, { passive: true });
      this.animate();
    });

    this.destroyRef.onDestroy(() => {
      window.removeEventListener('resize', this.resizeListener);
    });
  }

  ngOnDestroy(): void {
    if (this.animationId !== null) {
      cancelAnimationFrame(this.animationId);
    }
    window.removeEventListener('resize', this.resizeListener);
  }

  private resize = (): void => {
    const canvas = this.canvasRef.nativeElement;
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    canvas.width = Math.floor(window.innerWidth * dpr);
    canvas.height = Math.floor(window.innerHeight * dpr);
    this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const colCount = Math.floor(window.innerWidth / this.fontSize);
    this.columns = Array.from(
      { length: colCount },
      () => Math.random() * (window.innerHeight / this.fontSize),
    );
  };

  private animate = (): void => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    this.ctx.fillStyle = 'rgba(10, 10, 10, 0.05)';
    this.ctx.fillRect(0, 0, width, height);

    this.ctx.fillStyle = '#00ff41';
    this.ctx.font = `${this.fontSize}px monospace`;

    for (let i = 0; i < this.columns.length; i++) {
      const char = this.chars[Math.floor(Math.random() * this.chars.length)];
      const x = i * this.fontSize;
      const y = this.columns[i] * this.fontSize;

      this.ctx.fillText(char, x, y);

      if (y > height && Math.random() > 0.975) {
        this.columns[i] = 0;
      }
      this.columns[i]++;
    }

    this.animationId = requestAnimationFrame(this.animate);
  };
}
