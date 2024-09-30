import { useEffect, useState } from 'react';

// material-ui
import Grid from '@mui/material/Grid';

// material-ui
import Typography from '@mui/material/Typography';

// project imports
import MainCard from 'ui-component/cards/MainCard';

import { gridSpacing } from 'store/constant';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

// assets
import StorefrontTwoToneIcon from '@mui/icons-material/StorefrontTwoTone';

// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <Grid container >
      <Grid item xs={12}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>App Name</TableCell>
                  <TableCell align="right">Environment</TableCell>
                  <TableCell align="right">Version</TableCell>
                  <TableCell align="right">Last Updated</TableCell>                  
                  <TableCell align="right"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Community App</TableCell>
                  <TableCell align="right">Staging</TableCell>
                  <TableCell align="right">V11.0</TableCell>
                  <TableCell align="right">2024-09-30</TableCell>
                  <TableCell align="right">
                    <Stack 
                      spacing={2} 
                      direction="row"
                      sx={{
                        justifyContent: "flex-end",
                        alignItems: "center",
                      }}
                    >
                      <Button variant="contained">Download</Button>
                      <Button variant="contained" color="error">Credentials</Button>
                    </Stack>
                    
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Community App</TableCell>
                  <TableCell align="right">Staging</TableCell>
                  <TableCell align="right">V11.0</TableCell>
                  <TableCell align="right">2024-09-30</TableCell>
                  <TableCell align="right">
                    <Stack 
                      spacing={2} 
                      direction="row"
                      sx={{
                        justifyContent: "flex-end",
                        alignItems: "center",
                      }}
                    >
                      <Button variant="contained">Download</Button>
                      <Button variant="contained" color="error">Credentials</Button>
                    </Stack>
                    
                  </TableCell>
                </TableRow>
              </TableBody>
              
              {/* <TableBody>
              {rows.map((row) => (
              <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
              <TableCell component="th" scope="row">
              {row.name}
              </TableCell>
              <TableCell align="right">{}</TableCell>
              <TableCell align="right">{}</TableCell>
              <TableCell align="right">{}</TableCell>
              <TableCell align="right">{}</TableCell>
              </TableRow>
              ))}
              </TableBody> */}
            </Table>
          </TableContainer>
        
      </Grid>
      <Grid item xs={12}>
      </Grid>
      
    </Grid>
  );
};

export default Dashboard;
