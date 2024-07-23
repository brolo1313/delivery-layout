import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  navItems = [
    {
      id: 'dashboard',
      link_name: 'הקם פרויקט חדש',
      type: 'item',
      iconSrc: null,
      path: '/dashboard',
      sub_menu: []
    },
    {
      id: 'contacts',
      link_name: 'לוח בקרה',
      type: 'item',
      path: null,
      iconSrc: 'assets/icons/sidebar-link-icon-5.svg',
      sub_menu: []
    },
    {
      id: 'dashboard',
      link_name: 'הקם פרויקט חדש',
      type: 'item',
      iconSrc: 'assets/icons/sidebar-link-icon-4.svg',
      path: 'null',
      sub_menu: []
    },
    {
      id: 'contacts',
      link_name: 'ניהול מכולות',
      type: 'item',
      path: null,
      iconSrc: 'assets/icons/sidebar-link-icon-3.svg',
      sub_menu: []
    },
    {
      id: 'dashboard',
      link_name: 'הזמנת מכולה חדשה',
      type: 'item',
      iconSrc: 'assets/icons/sidebar-link-icon-2.svg',
      path: 'null',
      sub_menu: []
    },
    {
      id: 'contacts',
      link_name: 'הגדרות משתמש',
      type: 'item',
      path: null,
      iconSrc: 'assets/icons/sidebar-link-icon-1.svg',
      sub_menu: []
    },
  ];

  public openSidebar: boolean = true;

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  isCollapsed = true;
  isMobile = true;
  public titleHeader: string = '';


  constructor(private observer: BreakpointObserver, private router: Router, private route: ActivatedRoute) {
   
  }

  ngOnInit() {
    this.observer.observe(['(max-width: 768px)']).subscribe((screenSize) => {
      if (screenSize.matches) {
        this.openSidebar = false;
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    });
  }


  public showSubmenu(itemEl: HTMLElement) {
    itemEl.classList.toggle("showMenu");
  }

}
