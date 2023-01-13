import { Button, Stack, TextField } from '@mui/material';

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { useState } from 'react';
import { Send } from '@mui/icons-material';
import { Box, Container } from '@mui/system';

function ExpenseForm() {
  const [value, setValue] = useState(new Date());

  return (
    <Container sx={{ width: '50%' }}>
      <form>
        <Stack spacing={2} pt={5} margin="dense">
          <TextField id="expense-form-title" label="Title" variant="outlined" />

          <TextField
            id="expense-form-amount"
            type="number"
            label="Amount"
            variant="outlined"
            inputProps={{ min: '0.01', step: '0.01' }}
          />

          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopDatePicker
              label="Date"
              value={value}
              minDate={new Date('2017-01-01')}
              maxDate={new Date('2023-12-31')}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>

          <Box
            pt={2}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Button
              type="submit"
              variant="contained"
              color="primary"
              margin="dense"
              endIcon={<Send />}
            >
              Add Expense
            </Button>
          </Box>
        </Stack>
      </form>
    </Container>
  );
}

export default ExpenseForm;
