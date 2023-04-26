import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { enableRipple, createElement } from '@syncfusion/ej2-base';
import { TabComponent } from '@syncfusion/ej2-angular-navigations';
import { CardSettingsModel } from '@syncfusion/ej2-angular-kanban';
import { kanbanData } from './data';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';

enableRipple(true);

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  @ViewChild('element') tabInstance: TabComponent;
  public data: Object[] = [
    {
      Id: 'Task 1',
      Title: 'Task - 29001',
      Status: 'Exemple',
      Summary: 'Analyze the new requirements gathered from the customer.',
      Type: 'Story',
      Priority: 'Low',
      Tags: 'Analyze,Customer',
      Estimate: 3.5,
      Assignee: 'Nancy Davloio',
      RankId: 1,
      Color: '#8b447a',
    },
  ];

  public datacolumn = [{ Status: 'Exemple' }];

  inputValue = '';
  public cardSettings: CardSettingsModel = {
    contentField: 'Summary',
    headerField: 'Id',
  };
  constructor() {}

  addColumn() {
    if (this.inputValue.length > 0) {
      this.datacolumn.push({ Status: this.inputValue });
      this.inputValue = '';
    }
  }
}
