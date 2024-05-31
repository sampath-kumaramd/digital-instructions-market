import { Component, HostBinding, OnInit, effect, signal } from '@angular/core';
import { ThemeService } from '../../service/theme.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit{
  isDarkMode = false;
  constructor(private themeService: ThemeService , private router : Router) {}
  handleClicked() {
    this.isDarkMode = !this.isDarkMode;
  }
  changetheme(theme:string){
    if(theme === 'dark'){
      this.themeService.setDarkMode(true);
    }
    else{
      this.themeService.setDarkMode(false);
    }
  }
  isDarkTheme = false;

  ngOnInit(): void {
    this.themeService.getDarkMode().subscribe((isDarkMode: boolean) => {
      if (isDarkMode) {
        this.isDarkTheme = true;
      } else {
        this.isDarkTheme = false;
      }
    });
  }

  hanndleRoute(route: string) {
    this.router.navigate([route]);
  }
}
