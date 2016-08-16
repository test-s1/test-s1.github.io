import {Page, Config, Nav, Events, Loading} from 'ionic-angular';
import {Site, isSD} from '../../providers/config';
import {LoginPage} from '../login/login';

@Page({
    templateUrl: 'build/pages/organizations/organizations.html',
})
export class OrganizationsPage {

    list: Array<any> = [];

    constructor(private nav: Nav) {
    }
}
