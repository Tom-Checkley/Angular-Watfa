import { Component, OnInit, Input } from '@angular/core';
import { Banner } from '../../classes/banner';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  @Input() banner: Banner;

  constructor() { }

  ngOnInit() {
  }

}
