import {Page, Config, Nav, Loading} from 'ionic-angular';
import {forwardRef} from '@angular/core';
import {ApiSite, Site, isSD, appVersion, AppTitle} from '../../providers/config';
import {OrganizationsPage} from '../organizations/organizations';
import {SignupPage} from '../signup/signup';

@Page({
  templateUrl: 'build/pages/login/login.html',
})
export class LoginPage {
    
    login: any;
    google_action: string = "";
    busy: boolean = false;
    is_sd: boolean = isSD;
    //@ViewChild('google_openid') google_openid: NgForm;

    constructor(private nav: Nav) {
  }
    
    onPageLoaded()
    { 
    }
}
