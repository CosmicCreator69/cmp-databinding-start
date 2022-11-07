import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type:'server', name:'Testsever',content:'just a test'}];
}
onServerAdded(serverData:{serverName: string, serverContent: string) {
  this.serverElements.push({
     type: 'server',
      name: serverData.ServerName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintdata: {serverName: string, serverContent:string}); {
   this.serverElements.push({
   type: 'blueprint',
  name: this.newServerName,
  content: this.newServerContent
   });
  }
}

onChangeFirst(){
  this.serverElements[0].name='changed!'
}
