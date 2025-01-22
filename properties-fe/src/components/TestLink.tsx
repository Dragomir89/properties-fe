import React from 'react';
import { FC, MouseEventHandler } from 'react';
import { Button, Typography, Box } from '@mui/material';
import { red } from '@mui/material/colors';

type Props = {
  method: string;
  clickFn: MouseEventHandler;
  btnMsg: string;
  url: string;
};

export const TestLink: FC<Props> = ({ method, clickFn, btnMsg, url }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 1 }}>
      <Typography variant="body1">
        <strong>{method}</strong> -- <em>{url}</em>
      </Typography>
      <Button 
        variant="contained"
        onClick={clickFn}
        sx={{
          backgroundColor: red[500],
          '&:hover': {
            backgroundColor: red[700],
          }
        }}
      >
        {btnMsg}
      </Button>
    </Box>
  );
};
