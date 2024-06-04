import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faX } from '@fortawesome/free-solid-svg-icons';
import { dtoUser } from '../common/dto';
import { getUsers, removeUser } from '../services/service';
import { useEffect, useRef, useState } from 'react';
import { ColDef, } from 'ag-grid-community';
import { alpha } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import {
    ISuDataGridHandles,
    SuDataGrid
} from '../components/SuDataGrid';

const Employee = () => {
    const columns: ColDef[] = [
        { field: 'id', headerName: 'id', width: 70 },
        { field: 'name', headerName: 'name' },
        { field: 'username', headerName: 'username' },
        { field: 'email', headerName: 'email' },
        { field: 'phone', headerName: 'phone' },
        { field: 'website', headerName: 'website', },
        {
            field: 'actions',
            headerName: '',
            sortable: false,
            width: 10,
            cellRenderer: renderUpdateCell,
        },
        {
            field: 'delete',
            headerName: '',
            width: 10,
            cellRenderer: renderDeleteCell,
        },
    ];

    const refDataGrid = useRef<ISuDataGridHandles>();
    const [rowData, setRowData] = useState<dtoUser[]>();

    function renderDeleteCell(params: any) {
        return (
            <FontAwesomeIcon
                key={params.index}
                color='red'
                icon={faX} 
                onClick={async () => { return deleteUser(params.data.id) }}
            />
        );
    }

    function renderUpdateCell(params: any) {
        return (
            <FontAwesomeIcon
                key={params.index}
                color=''
                icon={faPencil}
                onClick={() => { updateUser(params.data) }}
            />
        );
    }

    const updateUser = async (data: dtoUser) => {
        try {
            await updateUser(data);
        } catch (err) {

        }
    };

    const deleteUser = async (id: number) => {
        try {
            const data = rowData?.filter(item => {
                return item.id !== id;
            })
            //await removeUser(1);
            setRowData(data);
        } catch (err) {

        }
    };

    useEffect(() => {
        let isSubscribed = true;
        const data = async () => {
            const users = await getUsers();
            setRowData(users);
        };
        if (isSubscribed) {
            data();
        }
        return () => {
            isSubscribed = false;
        };
    }, [rowData]);

    return (
        <Box
        id="hero"
        sx={(theme) => ({
          width: '100%',
          backgroundImage:
            theme.palette.mode === 'light'
              ? 'linear-gradient(180deg, #CEE5FD, #FFF)'
              : `linear-gradient(#02294F, ${alpha('#090E10', 0.0)})`,
          backgroundSize: '100% 20%',
          backgroundRepeat: 'no-repeat',
        })}
      >
        <Container
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            pt: { xs: 14, sm: 20 },
            pb: { xs: 8, sm: 12 },
          }}
        >
          <Box
            id="image"
            sx={(theme) => ({
              mt: { xs: 8, sm: 10 },
              alignSelf: 'center',
              height: { xs: 200, sm: 700 },
              width: '100%',
              backgroundImage:
                theme.palette.mode === 'light'
                  ? 'url("/static/images/templates/templates-images/hero-light.png")'
                  : 'url("/static/images/templates/templates-images/hero-dark.png")',
              backgroundSize: 'cover',
              borderRadius: '10px',
              outline: '1px solid',
              outlineColor:
                theme.palette.mode === 'light'
                  ? alpha('#BFCCD9', 0.5)
                  : alpha('#9CCCFC', 0.1),
              boxShadow:
                theme.palette.mode === 'light'
                  ? `0 0 12px 8px ${alpha('#9CCCFC', 0.2)}`
                  : `0 0 24px 12px ${alpha('#033363', 0.2)}`,
            })}
          >
            {
                rowData && (
                    <SuDataGrid
                        ref={refDataGrid}
                        dataSource={rowData}
                        columns={columns}
                        colResizeDefault='shift'
                        suppressAutoSize={true}

                    />
                )
            }
          </Box>
        </Container>
      </Box>
    );
}

export default Employee;