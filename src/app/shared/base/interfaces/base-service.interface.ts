import { BaseFilter } from "../domain/base-filter.domain";
import { Observable } from "rxjs/Observable";

export interface BaseServiceInterface<T, TFilter extends BaseFilter> {
    insert?(model: T): Observable<T>;
    getById?(id: number): Observable<T>;
    getAll?(filter: TFilter): Observable<Array<T>>;
    delete?(id: number): Observable<T>;
}