import {CanActivate} from "@angular/router";
import {AuthService} from "./authorization";
import {Injectable} from "@angular/core";

@Injectable()
export class LoggedInGuard implements CanActivate {
  constructor(private authService: AuthService) {
  }

  canActivate(): boolean {
    return this.authService.isLoggedIn();
  }
}

export let GUARD_PROVIDERS: Array<any> = [
  { provide: LoggedInGuard, useClass: LoggedInGuard}
];
