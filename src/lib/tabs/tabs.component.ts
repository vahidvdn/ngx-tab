import { Component, OnInit, AfterContentInit, ContentChildren, QueryList } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

	@ContentChildren(TabComponent) tabComp: QueryList<TabComponent>;
	tabCompArr;

  	constructor() { }

  	ngOnInit() {
  	}

  	ngAfterContentInit() {
  		this.tabCompArr = this.tabComp.toArray();
  	}

  	selectTab( selectedTab, index ) {
      	console.log(index);
  		// console.log(selectedTab);
  		for (var i = 0; i < this.tabCompArr.length; ++i) {
  			this.tabCompArr[i].active = false;
  		}
  		selectedTab.active = true;
  	}

}
