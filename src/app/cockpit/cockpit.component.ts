import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated= new EventEmitter<{(serverData:{serverName: string, serverContent: string)}>();
  @Output(bpCreated) blueprintCreated= new EventEmitter<{(serverData:{serverName: string, serverContent: string)}()>;
  //newServerName = '';
  newServerContent = '';
  constructor() { }
  ngOnInit(): void {
  }
}
onAddServer(NameInput: HTMLInputElement){
 this.serverCreated.emit ({
serverName:this.newServerName, serverContent: this.newServerContent
  });
}
onAddBlueprintAdded(); {
  this.buleprintCreated.emit ({
    serverName:this.NameInput, serverContent: this.newServerContent
      });
}
