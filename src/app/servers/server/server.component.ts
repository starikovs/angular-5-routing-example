import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Data } from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // const serverId = parseInt(this.route.snapshot.params['id'] || 1, 10);
    // this.server = this.serversService.getServer(serverId);
    // console.log(serverId, this.server);

    // this.route.params.subscribe(params => {
    //   const serverId = +params['id'];
    //   this.server = this.serversService.getServer(serverId);
    // });

    this.route.data
      .subscribe((data: Data) => {
        this.server = data['server']; // like in app-routing
      });
  }

  onEdit() {
    // this.router.navigate(['/servers', this.server.id, 'edit']);
    this.router.navigate(['edit'], { relativeTo: this.route, queryParamsHandling: 'preserve' }); // merge
  }

}
