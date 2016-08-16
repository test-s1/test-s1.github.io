import {Page, Config, Nav, Events, Alert, Modal} from 'ionic-angular';
import {LoginPage} from '../login/login';
import {OrganizationsPage} from '../organizations/organizations';

@Page({
  templateUrl: 'build/pages/signup/signup.html',
})
export class SignupPage {

	login: any = {};
    is_force_registration: boolean = false;

    constructor(private nav: Nav) {
  }
}
