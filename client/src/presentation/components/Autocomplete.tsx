import React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import styled from "@mui/material/styles/styled";

const StyledAutoComplete = styled(Autocomplete)(({ theme }) => ({
  width: "100%",
}));

interface AutocompleteDropDownProps {
  options: string[];
  handleOptionChange: (
    event: React.SyntheticEvent<Element, Event>,
    newValue: unknown
  ) => void;
}
export default function AutocompleteDropDown({
  options,
  handleOptionChange,
}: AutocompleteDropDownProps) {
  return (
    <StyledAutoComplete
      options={options}
      onChange={handleOptionChange}
      renderInput={(params) => (
        <TextField {...params} label="Search Options" variant="outlined" />
      )}
    />
  );
}
