import { Injectable } from '@angular/core'
import { ITableListModel } from './TableListModel';
import { Http, Response} from '@angular/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

@Injectable()

export class TableListService{
    private _dataUrl: string = 'http://jsonplaceholder.typicode.com/posts';
    constructor(private _http: Http){

    }

    getData(): Observable<ITableListModel[]> {
        return this._http.get(this._dataUrl)
            .map((response: Response) => <ITableListModel[]> response.json())
            .catch(this.handleError);
    }

    private handleError(error: Response){
        console.log(error);
        return Observable.throw(error.json().error || 'Server Error');
    }
}