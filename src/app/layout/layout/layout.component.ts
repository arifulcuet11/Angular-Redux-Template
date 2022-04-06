import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { selectIsNavShowHide } from 'src/app/store/selectors/layout.selector';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  showFiller = false;
  isSidebarOpen: boolean = false;
  @ViewChild('drawer') drawer!: any;
  constructor(private store: Store<AppState>,) {
    //  this.drawer.toggle();
    this.store.select(selectIsNavShowHide).subscribe(res => {
      this.isSidebarOpen = res;
    });
  }

  ngOnInit(): void {
  }

}
