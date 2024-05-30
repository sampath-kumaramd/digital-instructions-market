import { Component, HostBinding, effect, signal } from '@angular/core';
import { ThemeService } from '../../service/theme.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  isDarkMode = false;
  constructor(private themeservice: ThemeService) {}
  handleClicked() {
    this.isDarkMode = !this.isDarkMode;
  }
  changetheme(theme:string){
    if(theme === 'dark'){
      this.themeservice.setDarkMode(true);
    }
    else{
      this.themeservice.setDarkMode(false);
    }
  }
}
