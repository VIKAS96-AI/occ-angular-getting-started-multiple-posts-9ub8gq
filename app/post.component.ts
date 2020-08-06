import { Component, Input } from '@angular/core';

@Component({
  selector: 'post',
  templateUrl: 'post.component.html'
})
export class PostComponent  {
  @Input() title : string;
  @Input() content: string;
}
