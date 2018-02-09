import { Injectable } from '@angular/core';
import { Resolve, ActivatedRoute, RouterStateSnapshot } from '@angular/router';

import { ServersService } from '../servers.service';

interface Server {
  id: number;
  name: string;
  status: string;
}

@Injectable()
// export class ServerResolverService implements Resolve<{id: number, name: string, status: string}> {
export class ServerResolverService implements Resolve<Server> {

  constructor(private serversService: ServersService) { }

  resolve(route: ActivatedRoute, state: RouterStateSnapshot) {
    return this.serversService.getServer(+route.params['id']);
  }

}
