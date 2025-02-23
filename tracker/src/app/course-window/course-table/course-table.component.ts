import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-course-table',
  imports: [CommonModule, FormsModule],
  templateUrl: './course-table.component.html',
  styleUrl: './course-table.component.scss'
})
export class CourseTableComponent {

  searchText: string = '';
  trackerName: string = '';

  tableData = [
    { id: 1, name: 'Route ALearning Notes #86 – LocalBase: A Simple Wrapper for IndexedDB', status: 'Active', checked: false },
    { id: 2, name: 'Route B', status: 'Inactive', checked: false },
    { id: 3, name: 'Route C', status: 'Active', checked: false },
    { id: 4, name: 'Route D', status: 'Inactive', checked: false },
    { id: 1, name: 'Route ALearning Notes #86 – LocalBase: A Simple Wrapper for IndexedDB', status: 'Active', checked: false },
    { id: 2, name: 'Route B', status: 'Inactive', checked: false },
    { id: 3, name: 'Route C', status: 'Active', checked: false },
    { id: 4, name: 'Route D', status: 'Inactive', checked: false },
    { id: 1, name: 'Route ALearning Notes #86 – LocalBase: A Simple Wrapper for IndexedDB', status: 'Active', checked: false },
    { id: 2, name: 'Route B', status: 'Inactive', checked: false },
    { id: 3, name: 'Route C', status: 'Active', checked: false },
    { id: 4, name: 'Route D', status: 'Inactive', checked: false }
,    { id: 1, name: 'Route ALearning Notes #86 – LocalBase: A Simple Wrapper for IndexedDB', status: 'Active', checked: false },
    { id: 2, name: 'Route B', status: 'Inactive', checked: false },
    { id: 3, name: 'Route C', status: 'Active', checked: false },
    { id: 4, name: 'Route D', status: 'Inactive', checked: false }
,    { id: 1, name: 'Route ALearning Notes #86 – LocalBase: A Simple Wrapper for IndexedDB', status: 'Active', checked: false },
    { id: 2, name: 'Route B', status: 'Inactive', checked: false },
    { id: 3, name: 'Route C', status: 'Active', checked: false },
    { id: 4, name: 'Route D', status: 'Inactive', checked: false }
,    { id: 1, name: 'Route ALearning Notes #86 – LocalBase: A Simple Wrapper for IndexedDB', status: 'Active', checked: false },
    { id: 2, name: 'Route B', status: 'Inactive', checked: false },
    { id: 3, name: 'Route C', status: 'Active', checked: false },
    { id: 4, name: 'Route D', status: 'Inactive', checked: false }
,    { id: 1, name: 'Route ALearning Notes #86 – LocalBase: A Simple Wrapper for IndexedDB', status: 'Active', checked: false },
    { id: 2, name: 'Route B', status: 'Inactive', checked: false },
    { id: 3, name: 'Route C', status: 'Active', checked: false },
    { id: 4, name: 'Route D', status: 'Inactive', checked: false }
,    { id: 1, name: 'Route ALearning Notes #86 – LocalBase: A Simple Wrapper for IndexedDB', status: 'Active', checked: false },
    { id: 2, name: 'Route B', status: 'Inactive', checked: false },
    { id: 3, name: 'Route C', status: 'Active', checked: false },
    { id: 4, name: 'Route D', status: 'Inactive', checked: false }
,    { id: 1, name: 'Route ALearning Notes #86 – LocalBase: A Simple Wrapper for IndexedDB', status: 'Active', checked: false },
    { id: 2, name: 'Route B', status: 'Inactive', checked: false },
    { id: 3, name: 'Route C', status: 'Active', checked: false },
    { id: 4, name: 'Route D', status: 'Inactive', checked: false }
,    { id: 1, name: 'Route ALearning Notes #86 – LocalBase: A Simple Wrapper for IndexedDB', status: 'Active', checked: false },
    { id: 2, name: 'Route B', status: 'Inactive', checked: false },
    { id: 3, name: 'Route C', status: 'Active', checked: false },
    { id: 4, name: 'Route D', status: 'Inactive', checked: false }
,    { id: 1, name: 'Route ALearning Notes #86 – LocalBase: A Simple Wrapper for IndexedDB', status: 'Active', checked: false },
    { id: 2, name: 'Route B', status: 'Inactive', checked: false },
    { id: 3, name: 'Route C', status: 'Active', checked: false },
    { id: 4, name: 'Route D', status: 'Inactive', checked: false }
,    { id: 1, name: 'Route ALearning Notes #86 – LocalBase: A Simple Wrapper for IndexedDB', status: 'Active', checked: false },
    { id: 2, name: 'Route B', status: 'Inactive', checked: false },
    { id: 3, name: 'Route C', status: 'Active', checked: false },
    { id: 4, name: 'Route D', status: 'Inactive', checked: false }
,    { id: 1, name: 'Route ALearning Notes #86 – LocalBase: A Simple Wrapper for IndexedDB', status: 'Active', checked: false },
    { id: 2, name: 'Route B', status: 'Inactive', checked: false },
    { id: 3, name: 'Route C', status: 'Active', checked: false },
    { id: 4, name: 'Route D', status: 'Inactive', checked: false }
,    { id: 1, name: 'Route ALearning Notes #86 – LocalBase: A Simple Wrapper for IndexedDB', status: 'Active', checked: false },
    { id: 2, name: 'Route B', status: 'Inactive', checked: false },
    { id: 3, name: 'Route C', status: 'Active', checked: false },
    { id: 4, name: 'Route D', status: 'Inactive', checked: false }
,    { id: 1, name: 'Route ALearning Notes #86 – LocalBase: A Simple Wrapper for IndexedDB', status: 'Active', checked: false },
    { id: 2, name: 'Route B', status: 'Inactive', checked: false },
    { id: 3, name: 'Route C', status: 'Active', checked: false },
    { id: 4, name: 'Route D', status: 'Inactive', checked: false }
,    { id: 1, name: 'Route ALearning Notes #86 – LocalBase: A Simple Wrapper for IndexedDB', status: 'Active', checked: false },
    { id: 2, name: 'Route B', status: 'Inactive', checked: false },
    { id: 3, name: 'Route C', status: 'Active', checked: false },
    { id: 4, name: 'Route D', status: 'Inactive', checked: false }
,    { id: 1, name: 'Route ALearning Notes #86 – LocalBase: A Simple Wrapper for IndexedDB', status: 'Active', checked: false },
    { id: 2, name: 'Route B', status: 'Inactive', checked: false },
    { id: 3, name: 'Route C', status: 'Active', checked: false },
    { id: 4, name: 'Route D', status: 'Inactive', checked: false }
,    { id: 1, name: 'Route ALearning Notes #86 – LocalBase: A Simple Wrapper for IndexedDB', status: 'Active', checked: false },
    { id: 2, name: 'Route B', status: 'Inactive', checked: false },
    { id: 3, name: 'Route C', status: 'Active', checked: false },
    { id: 4, name: 'Route D', status: 'Inactive', checked: false }
,    { id: 1, name: 'Route ALearning Notes #86 – LocalBase: A Simple Wrapper for IndexedDB', status: 'Active', checked: false },
    { id: 2, name: 'Route B', status: 'Inactive', checked: false },
    { id: 3, name: 'Route C', status: 'Active', checked: false },
    { id: 4, name: 'Route D', status: 'Inactive', checked: false }
,    { id: 1, name: 'Route ALearning Notes #86 – LocalBase: A Simple Wrapper for IndexedDB', status: 'Active', checked: false },
    { id: 2, name: 'Route B', status: 'Inactive', checked: false },
    { id: 3, name: 'Route C', status: 'Active', checked: false },
    { id: 4, name: 'Route D', status: 'Inactive', checked: false }
,  ];

  // Sort function to move checked rows to bottom
  sortedTableData() {
    return this.tableData
      .filter(item => item.name.toLowerCase().includes(this.searchText.toLowerCase())) // Filter based on search
      .sort((a, b) => Number(a.checked) - Number(b.checked)); // Move checked items to bottom
  }
  

  // Trigger reordering when checkbox is clicked
  reorderRows() {
    this.tableData = [...this.tableData]; // Force Angular to detect changes
  }

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.trackerName = params.get('trackerName') || 'default';
      console.log('Current Table:', this.trackerName);
    });
  }

  get selectedRows() {
    return this.tableData.filter(content => content.checked);
  }

}
