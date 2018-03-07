import { BaseFilterDto } from "../dto/base-filter.dto";

export interface BaseAppServiceInterface<T, TFilter extends BaseFilterDto> {
    insert?(model:T):T;
    getById?(id: number):T;
    getAll?(filter: TFilter):Array<T>;
    delete?(id:number);
}