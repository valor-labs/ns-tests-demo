import { Subject, Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from "@angular/core";
import { DataService, IDataItem } from "../shared/data.service";

@Component({
    selector: "Home",
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit, OnDestroy {
    items: Array<IDataItem>;
    subject: Subject<void>;
    sbs1: Subscription;
    sbs2: Subscription;

    constructor(public _itemService: DataService) { }

    ngOnInit() {
        this.addAll();
        this.subject = new Subject();
        this.sbs1 = this.subject.subscribe(() => {
            this._itemService.changeItem(this.items.pop());
        });
        this.sbs2 = this._itemService.changeSubject.subscribe((item: IDataItem) => {
            console.log(item);
        });
    }

    ngOnDestroy() {
        this.sbs1.unsubscribe();
        this.sbs2.unsubscribe();
    }

    addAll() {
        this.items = Object.assign([], this._itemService.getItems());
    }

    startRemoving() {
        let index = this.items.length - 1;

        do {
            setTimeout(() => {
                this.subject.next();
            }, 500);
        } while (--index >= 0);
    }
}
