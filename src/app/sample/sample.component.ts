import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss']
})
export class SampleComponent implements OnInit {
  @Input() name: string = "";
  @Input() age: string = "";
  @Input() loc: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
