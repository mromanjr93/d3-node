export interface BaseServiceInterface<T, TFilter> {
    insert?(model: T): T;
    getById?(id: number): T;
    getAll?(filter: TFilter): Array<T>;
    delete?(id: number): T;
}