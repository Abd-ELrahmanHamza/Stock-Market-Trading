import Alert from "@mui/material/Alert";
interface AlertProps {
  text: string;
}
const ErrorAlert = ({ text }: AlertProps) => {
  return <Alert severity="error">{text}</Alert>;
};

const WarningAlert = ({ text }: AlertProps) => {
  return <Alert severity="warning">{text}</Alert>;
};

const InfoAlert = ({ text }: AlertProps) => {
  return <Alert severity="info">{text}</Alert>;
};

const SuccessAlert = ({ text }: AlertProps) => {
  return <Alert severity="success">{text}</Alert>;
};

export { ErrorAlert, WarningAlert, InfoAlert, SuccessAlert };
