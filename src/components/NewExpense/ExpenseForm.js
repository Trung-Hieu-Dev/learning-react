import { Button, Stack, TextField } from '@mui/material';

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { useState } from 'react';
import { Send } from '@mui/icons-material';
import { Box, Container } from '@mui/system';

function ExpenseForm() {
  //   const [inputDate, setInputDate] = useState(new Date());
  //   const [title, setTitle] = useState('');
  //   const [amount, setAmount] = useState('');

  //   const titleChangeHandler = (event) => {
  //     setTitle(event.target.value);
  //   };

  //   const amountChangeHandler = (event) => {
  //     setAmount(event.target.value);
  //   };

  //   const dateChangeHandler = (date) => {
  //     setInputDate(date);
  //   };

  const [userInput, setUserInput] = useState({
    title: '',
    amount: '',
    inputDate: new Date(),
  });

    const titleChangeHandler = (event) => {
        setUserInput((previousState) => {
            return {...previousState, title: event.target.value}
        });
    };

    const amountChangeHandler = (event) => {
        setUserInput((previousState) => {
            return {...previousState, amount: event.target.value}
        });
    };

    const dateChangeHandler = (date) => {
        setUserInput((previousState) => {
            return {...previousState, inputDate: date}
        });
    };

  return (
    <Container sx={{ width: '50%' }}>
      <form>
        <Stack spacing={2} pt={5} margin="dense">
          <TextField
            id="expense-form-title"
            label="Title"
            variant="outlined"
            onChange={titleChangeHandler}
            value={userInput.title}
          />

          <TextField
            id="expense-form-amount"
            type="number"
            label="Amount"
            variant="outlined"
            inputProps={{ min: '0.01', step: '0.01' }}
            onChange={amountChangeHandler}
            value={userInput.amount}
          />

          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopDatePicker
              label="Date"
              value={userInput.inputDate}
              minDate={new Date('2017-01-01')}
              maxDate={new Date('2023-12-31')}
              onChange={dateChangeHandler}
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
