import {Component, OnInit} from '@angular/core';
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";

@Component({
  selector: 'app-stats-row',

  templateUrl: './stats-row.component.html',
  styleUrl: './stats-row.component.scss'
})
export class StatsRowComponent implements OnInit{
  isDesktop: boolean = false;
  isTablet: boolean = false;
  isMobile: boolean = false;

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.breakpointObserver.observe([
      Breakpoints.Web,
      Breakpoints.Tablet,
      Breakpoints.Handset
    ]).subscribe(result => {
      // console.log(`asdasdad`, result)
      // console.log(`asdasdad`,  Breakpoints.HandsetPortrait)
      this.isDesktop = result.breakpoints[Breakpoints.WebLandscape];
      this.isTablet = result.breakpoints[Breakpoints.TabletLandscape];
      this.isMobile = result.breakpoints[Breakpoints.HandsetPortrait];
    });
  }
}
