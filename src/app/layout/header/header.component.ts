import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addHideShow } from 'src/app/store/action/layout.action';
import { AppState } from 'src/app/store/app.state';
import { selectIsNavShowHide } from 'src/app/store/selectors/layout.selector';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isSidebarOpen: boolean = false;
  constructor(private store: Store<AppState>,) {
    this.store.select(selectIsNavShowHide).subscribe(res => {
      this.isSidebarOpen = res;
    });
  }

  ngOnInit(): void {
  }
  menuClick() {
    this.store.dispatch(addHideShow({ isShowSidebar: !this.isSidebarOpen }));
  }
}
