import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

interface AdminCompanyFormProps {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  handleStocksChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handlePriceChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  stocks: string;
  price: string;
}
export default function AdminCompanyForm({
  handleSubmit,
  handleStocksChange,
  handlePriceChange,
  stocks,
  price,
}: AdminCompanyFormProps) {
  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Number of Stocks"
            variant="outlined"
            type="number"
            value={stocks}
            onChange={handleStocksChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Price"
            variant="outlined"
            type="number"
            value={price}
            onChange={handlePriceChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
