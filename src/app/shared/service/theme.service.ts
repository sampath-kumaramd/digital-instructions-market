import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private darkMode = new BehaviorSubject<boolean>(
    JSON.parse(window.localStorage.getItem('darkMode') ?? 'false')
  );

  getDarkMode() {
    return this.darkMode.asObservable();
  }

  setDarkMode(isDarkMode: boolean) {
    this.darkMode.next(isDarkMode);
    window.localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
  }
}