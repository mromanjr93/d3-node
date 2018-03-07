import { BaseFilterDto } from "../dto/base-filter.dto";
import { Observable } from 'rxjs/Observable';

export interface BaseAppServiceInterface<T, TFilter extends BaseFilterDto> {
    insert?(model:T): Observable<T>;
    update?(model:T): Observable<T>;
    getById?(id: number): Observable<T>;
    getAll?(filter: TFilter): Observable<Array<T>>;
    delete?(id:number) : Observable<T>;
}