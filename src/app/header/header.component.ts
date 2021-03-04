import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() showFeature = new EventEmitter<string>();
  open: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(feature: string) {
    this.showFeature.emit(feature);
  }
}
