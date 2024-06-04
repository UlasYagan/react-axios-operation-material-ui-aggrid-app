import { 
    ColDef, 
    Column, 
    ColumnApi,
    GridApi, 
    RowNode 
} from "@ag-grid-community/core";

export interface dtoTodo {
    id?: number;
    userId?: number;
    title?: string;
    completed?: boolean;
}

export class dtoUser {
    id?: number
    name?: string
    username?: string
    email?: string
    phone?: string
    website?: string
    // company?: dtoCompany
    // address?: dtoAddress
}

export class dtoAddress {
    street?: string
    suite?: string
    city?: string
    zipcode?: string
    geo?: dtoGeo
}

export class dtoGeo {
    lat?: string
    lng?: string
}

export class dtoCompany {
    name?: string
    catchPhrase?: string
    bs?: string
}

export interface BaseColDefParams {
    node: RowNode;
    data: any;
    colDef: ColDef;
    column: Column;
    api: GridApi;
    columnApi: ColumnApi;
    context: any;
}