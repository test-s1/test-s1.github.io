import {NgZone, ViewChild} from '@angular/core';
import {App, IonicApp, Config, Platform, Nav, NavParams, Events, MenuController} from 'ionic-angular';
import {OnInit, OnDestroy} from '@angular/core';
import {AppSite, MobileSite, dontClearCache, appVersion} from './providers/config';
import {MOCKS} from './providers/mocks';
import * as pages from './pages/pages';

export interface Settings {
  is_tech: boolean;
  stat: Object;
  key: string;
  org: string;
  instance: string;
  user: Object;
  recent: Object;
}

export interface Stat {
  accounts: Object;
  tickets: Object;
}

@App({
  templateUrl: 'build/app.html',
  providers: [],
  prodMode : true,
  config: {
    tabbarPlacement: 'top',
    pageTransitionDelay: 0,
    prodMode: true,
    activator: "ripple",
    ios: {
      activator: 'ripple'
    } 
  }
})
class MyApp {

  @ViewChild(Nav) nav: Nav;
  pages2: any = [];
  rootPage: any;
  is_offline: boolean = false;
  offlineTimer: any;
  disconnectSubscription: any;
  connectSubscription: any;
  interval: any;
  img: any = new Image();

  constructor(private app: IonicApp, private platform: Platform, private config: Config, private events: Events, private menu: MenuController) {

    // set up our app
    this.initializeApp();
    var keys = Object.keys(pages);
    for (let p of keys)
    {
    this.pages2.push(pages[p]);
    }
      this.rootPage = pages.LoginPage;
      }


  initializeApp() {
    this.platform.ready().then(() => {
    });
  }


openPage(page, param?) {
  this.menu.close();
      this.nav.setRoot(page);
  }

}
