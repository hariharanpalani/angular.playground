import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'gen-panel',
  templateUrl: './panel.component.html',
  styleUrls: [ './panel.component.css' ]
})
export class PanelComponent {
  @Input() width: string;
  private parentUrl: string;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.parent.url.subscribe(segment => this.parentUrl = segment[0].path);
  }

  close() {
    this.router.navigateByUrl(this.parentUrl);
  }
}
