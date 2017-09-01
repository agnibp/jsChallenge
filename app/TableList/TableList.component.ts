import { Component, OnInit } from '@angular/core';
import { ITableListModel } from './TableListModel';
import { TableListService } from './TableList.service';

@Component({
    moduleId: module.id,
    selector: 'home',
    templateUrl: './TableList.component.html'
})
export class TableListComponent implements OnInit {
    errorMessage: string;
    tableList: ITableListModel[];
    constructor(private dataService: TableListService){
    }

    ngOnInit(): void{
        console.log("Inside OnInit");
        //this.products = this.productService.getProducts();
        this.dataService.getData()
            .subscribe(data => this.tableList = data,
            error => this.errorMessage = <any>error);
    }
 }