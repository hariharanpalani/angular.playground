import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { trigger, state, animate, transition, style } from '@angular/animations';

export const slideInOutAnimation =
    // trigger name for attaching this animation to an element using the [@triggerName] syntax
    trigger('slideRight', [
            transition(':enter', [
                style({ transform: 'translateX(-100%)' }),
                animate('150ms', style({ transform: 'translateX(0%)' }))
            ]),
            transition(':leave', [
                style({transform: 'translateX(0%)' }),
                animate('150ms', style({ transform: 'translateX(-100%)' }))
            ]),
            state('true',
                style({ transform: 'translateX(0%)' })
            ),
            state('false',
                style({ transform: 'translateX(-100%)' })
            ),
            transition('1 => 0', animate('150ms')),
            transition('0 => 1', animate('150ms'))
    ]);

@Component({
  selector: 'gen-panel',
  templateUrl: './panel.component.html',
  styleUrls: [ './panel.component.css' ],
  animations: [ slideInOutAnimation ]
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
