import {
  TablePagination,
  tablePaginationClasses as classes,
} from "@mui/base/TablePagination";
import styled from "@mui/material/styles/styled";
export const CustomTablePagination = styled(TablePagination)(
  ({ theme }) => `
  & .${classes.spacer} {
    display: none;
  }

  & .${classes.toolbar}  {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;

    @media (min-width: 768px) {
      flex-direction: row;
      align-items: center;
    }
  }

  & .${classes.selectLabel} {
    margin: 0;
  }

  & .${classes.select}{
    padding: 2px;
    border: 1px solid ${
      theme.palette.mode === "dark"
        ? theme.palette.grey[800]
        : theme.palette.grey[200]
    };
    border-radius: 50px;
    background-color: transparent;

    &:hover {
      background-color: ${
        theme.palette.mode === "dark"
          ? theme.palette.grey[800]
          : theme.palette.grey[50]
      };
    }

    &:focus {
      outline: 1px solid ${
        theme.palette.mode === "dark"
          ? theme.palette.primary.main
          : theme.palette.primary.light
      };
    }
  }

  & .${classes.displayedRows} {
    margin: 0;

    @media (min-width: 768px) {
      margin-left: auto;
    }
  }

  & .${classes.actions} {
    padding: 2px;
    border: 1px solid ${
      theme.palette.mode === "dark"
        ? theme.palette.grey[800]
        : theme.palette.grey[200]
    };
    border-radius: 50px;
    text-align: center;
  }

  & .${classes.actions} > button {
    margin: 0 8px;
    border: transparent;
    border-radius: 2px;
    background-color: transparent;

    &:hover {
      background-color: ${
        theme.palette.mode === "dark"
          ? theme.palette.grey[800]
          : theme.palette.grey[50]
      };
    }

    &:focus {
      outline: 1px solid ${
        theme.palette.mode === "dark"
          ? theme.palette.primary.main
          : theme.palette.primary.light
      };
    }
  }
  `
);
