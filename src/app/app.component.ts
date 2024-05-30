import { Component, HostBinding, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { ThemeService } from './shared/service/theme.service';
import { Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'digital-instructions-market';
  constructor(private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document,
    private themeService: ThemeService) { }

  ngOnInit(): void {
    initFlowbite();
    this.themeService.getDarkMode().subscribe((isDarkMode: boolean) => {
      if (isDarkMode) {
        this.renderer.addClass(this.document.body, 'dark');
      } else {
        this.renderer.removeClass(this.document.body, 'dark');
      }
    });
  }
}