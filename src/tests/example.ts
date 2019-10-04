import "reflect-metadata";
import { nsTestBedAfterEach, nsTestBedBeforeEach, nsTestBedRender, nsTestBedInit } from "nativescript-angular/testing";
import { HomeComponent } from '../app/home/home.component';
import { DataService } from '../app/shared/data.service';

// mocha.timeout(50000);

describe("AppComponent", () => {
	before(() => nsTestBedInit());
	after(() => { });
	beforeEach(nsTestBedBeforeEach([HomeComponent]));
	afterEach(nsTestBedAfterEach());

	describe("HomeComponent", () => {
		it("removing functionality works properly", (done) => {
			nsTestBedRender(HomeComponent).then((fixture) => {
				fixture.detectChanges();
				const home = fixture.componentInstance;
				const service = <DataService>fixture.componentRef.instance._itemService;
				expect(home.items.length).to.equal(service.getItems().length);

				home.startRemoving();

				const int = setInterval(() => {
					if (home.items.length === 0) {
						clearInterval(int);
						done();
					}
				}, 15000);
			});
		}).timeout(50000);
	});
});
