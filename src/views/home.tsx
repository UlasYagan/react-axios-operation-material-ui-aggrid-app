import * as React from 'react';
import { PaletteMode } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ReactVirtualizedTable from './Employee';
import getLPTheme from '../getLPTheme';

function home() {
  const [mode,] = React.useState<PaletteMode>('light');
  const [showCustomTheme,] = React.useState(true);
  const LPtheme = createTheme(getLPTheme(mode));
  const defaultTheme = createTheme({ palette: { mode } });


  return (
    <ThemeProvider theme={showCustomTheme ? LPtheme : defaultTheme}>
      <CssBaseline />
      <ReactVirtualizedTable />
    </ThemeProvider>
  );
}

export default home;

