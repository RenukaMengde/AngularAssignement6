import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent 
{

  @Output() public MyClick = new EventEmitter();
  @Input() public MsgFromParent = "";

  public SendMsg()
  {
    this.MyClick.emit("Hello Parent!!");
  }
}
