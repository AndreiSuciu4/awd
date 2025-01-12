import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import {NgIf, NgOptimizedImage} from '@angular/common';
import {map} from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatListModule,
    NgIf,
    NgOptimizedImage
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sidebarOpened = false;
  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe([`(min-width: 850px)`])
      .pipe(
        map(result => result.matches)
      )
      .subscribe(isLargeScreen => {
        if (isLargeScreen) {
          this.sidebarOpened = false;
        }
      });
  }
  toggleSidebar() {
    this.sidebarOpened = !this.sidebarOpened;
  }
}
