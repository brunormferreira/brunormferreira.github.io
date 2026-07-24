import { Injectable, signal } from '@angular/core';
import { Locale, SUPPORTED_LOCALES } from '../../content/posts.models';

const LOCALE_STORAGE_KEY = 'app-locale';
const DEFAULT_LOCALE: Locale = 'pt-br';

function detectLocale(): Locale {
  const stored = localStorage.getItem(LOCALE_STORAGE_KEY);
  if (stored && (SUPPORTED_LOCALES as ReadonlyArray<string>).includes(stored)) {
    return stored as Locale;
  }
  const browserLang = navigator.language?.toLowerCase() ?? '';
  return browserLang.startsWith('pt') ? 'pt-br' : 'en-us';
}

@Injectable({ providedIn: 'root' })
export class LocaleService {
  private readonly _locale = signal<Locale>(
    typeof localStorage !== 'undefined' ? detectLocale() : DEFAULT_LOCALE,
  );

  readonly locale = this._locale.asReadonly();

  setLocale(locale: Locale): void {
    localStorage.setItem(LOCALE_STORAGE_KEY, locale);
    this._locale.set(locale);
  }
}
