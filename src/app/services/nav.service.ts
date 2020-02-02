import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';

@Injectable()
export class Nav {
    data: any;

    constructor(public navCtrl: NavController) {
        // ...
    }

    push(url: string, data: any = '') {
        this.data = data;

        this.navCtrl.navigateForward('/' + url);
    }

    pop(url) {
        this.navCtrl.navigateBack('/' + url);
    }

    get() {
        console.log(this.data);
        return this.data;
    }
}
