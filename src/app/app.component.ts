import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, inject, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';

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
    },
    {
      id: 'order-control-panel',
      link_name: 'לוח בקרה',
      type: 'item',
      path: '/order-control-panel',
      iconSrc: 'assets/icons/sidebar-link-icon-5.svg',
    },
    {
      id: 'new-project',
      link_name: 'הקם פרויקט חדש',
      type: 'item',
      iconSrc: 'assets/icons/sidebar-link-icon-4.svg',
      path: null,
    },
    {
      id: 'container-management',
      link_name: 'ניהול מכולות',
      type: 'item',
      path: null,
      iconSrc: 'assets/icons/sidebar-link-icon-3.svg',
    },
    {
      id: 'dashboard',
      link_name: 'הזמנת מכולה חדשה',
      type: 'item',
      iconSrc: 'assets/icons/sidebar-link-icon-2.svg',
      path: null,
    },
    {
      id: 'management-user',
      link_name: 'הגדרות משתמש',
      type: 'item',
      path: null,
      iconSrc: 'assets/icons/sidebar-link-icon-1.svg',
    },
  ];

  public openSidebar: boolean = true;

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  isMobile = true;
  public titleHeader: string = '';

  observer = inject(BreakpointObserver);
  router = inject(Router);

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
}
