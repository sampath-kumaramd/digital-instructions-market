import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { ThemeService } from '../../service/theme.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  isDarkTheme = false;

  constructor(
    private themeService: ThemeService) { }

  ngOnInit(): void {
    this.themeService.getDarkMode().subscribe((isDarkMode: boolean) => {
      if (isDarkMode) {
        this.isDarkTheme = true;
      } else {
        this.isDarkTheme = false;
      }
    });
  }
}
