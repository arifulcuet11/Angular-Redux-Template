import { Component, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, filter, fromEvent, map, switchMap } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const searchBox = document.getElementById('search-box') as HTMLInputElement;

    const typeahead = fromEvent(searchBox, 'input').pipe(
      map(e => (e.target as HTMLInputElement).value),
      filter(text => text.length > 2),
      debounceTime(10),
      distinctUntilChanged(),
      switchMap(searchTerm => ajax(`/api/endpoint?search=${searchTerm}`))
    );
    typeahead.subscribe(data => {
      // Handle the data from the API
    });
  }

}
