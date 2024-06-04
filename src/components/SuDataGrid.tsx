import { ColDef } from "ag-grid-community";
import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { 
    forwardRef,
    useEffect,
    useImperativeHandle, 
    useMemo, 
    useRef, 
    useState 
} from "react";


export interface ISuDataGrid {
    dataSource?: any;
    columns?: ColDef[];
};

export interface ISuDataGridProps {
    dataSource?: any
    columns?: ColDef[];
};

export interface ISuDataGridHandles {
    dataSource?: any
    columns?: ColDef[];
};

const SuDataGridComponent: React.ForwardRefRenderFunction<ISuDataGridHandles, ISuDataGridProps> = (props, ref) => {
    const refAgDataGrid = useRef();
    const containerStyle = useMemo(() => ({ width: "100%", height: "100%" }), []);
    const gridStyle = useMemo(() => ({ height: "100%", width: "100%" }), []);
    const [rowData, setRowData] = useState<[]>();
    const [columns, setColumns] = useState<ColDef[]>();
    
    const getStateFromProps = (): ISuDataGrid => {
        return {
            dataSource: props.dataSource,
            columns: props.columns
        };
    };

    const initialStateFromProps = getStateFromProps();
    const [state,] = useState(initialStateFromProps);

    useEffect(() => {
        let isSubscribed = true;
        const data = async () => {
            setColumns(state.columns);
            setRowData(state.dataSource);
        };
        if (isSubscribed) {
            data();
        }
        return () => {
            isSubscribed = false;
        };
    }, []);

    useImperativeHandle(ref, () => {
        return {
            get dataSource() {
                return state.dataSource;
            },
            set dataSource(val: string) {
                state.dataSource = val;
            },

            get columns() {
                return state.columns;
            },
            set columns(val: ColDef[] | undefined) {
                state.columns = val;
            }
        };
    });
    
    return (
        <div style={containerStyle}>
        <div style={{ height: "100%", boxSizing: "border-box" }}>
            <div style={gridStyle} className={"ag-theme-quartz"}>
                <AgGridReact
                    ref={refAgDataGrid}
                    rowData={rowData}
                    columnDefs={columns}
                    colResizeDefault='shift'
                    suppressAutoSize={true}
                    {...props}
                />
            </div>
        </div>
    </div>
  )
}

export const SuDataGrid = forwardRef(SuDataGridComponent);