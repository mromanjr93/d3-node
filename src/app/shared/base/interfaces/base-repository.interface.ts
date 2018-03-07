import { Observable } from "rxjs/Observable";

export interface BaseRepositoryInterface<T, TFilter> {
    insert?(model: T) : Observable<T>;
    getById?(id: number): Observable<T>;
    getAll?(filter: TFilter): Observable<Array<T>>;
    delete?(id: number): Observable<T>;
}