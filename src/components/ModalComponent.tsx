import { FC, useState } from "react";
import {
  Modal,
  Box,
  Typography,
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  SelectChangeEvent,
  IconButton,
} from "@mui/material";
import { styled } from "@mui/system";
import { ModalProps } from "../models/ModalTypes";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

const CustomFormControl = styled(FormControl)({
  width: "100%",
  "& .MuiInputLabel-root.Mui-focused": {
    color: "#00AD33",
  },
  "& .MuiOutlinedInput-root": {
    borderRadius: 16,
    "& fieldset": {
      borderColor: "#00AD33",
    },
    "&:hover fieldset": {
      borderColor: "#00AD33",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#00AD33",
    },
    "& .MuiInputLabel-root": {
      padding: "0 8px",
    },
  },
});

const CustomTextField = styled(TextField)({
  width: "100%",
  "& .MuiInputLabel-root.Mui-focused": {
    color: "#989898",
  },
  "& .MuiOutlinedInput-root": {
    borderRadius: 16,
    "& fieldset": {
      borderColor: "#989898",
    },
    "&:hover fieldset": {
      borderColor: "#00AD33",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#00AD33",
    },
  },
});

const ModalComponent: FC<
  ModalProps & { initialDropdownValue?: string; initialWeight?: string }
> = ({ isOpen, onClose, initialDropdownValue = "", initialWeight = "" }) => {
  const [dropdownValue, setDropdownValue] = useState(initialDropdownValue);
  const [weight, setWeight] = useState(initialWeight);
  const [fullName, setFullName] = useState("");
  const [contactNumber, setContactNumber] = useState("");

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const modalStyles: any = {
    modal: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: isMobile ? "90%" : 445,
      height: 500,
      bgcolor: "background.paper",
      boxShadow: 24,
      p: 4,
      overflowY: "auto",
      backgroundColor: "#fff",
      borderRadius: 4,
      padding: isMobile ? 2 : 3,
    },
    form: {
      display: "flex",
      flexDirection: "column",
      rowGap: 2,
    },
    header: {
      fontSize: isMobile ? 24 : 32,
      fontWeight: "700",
      textTransform: "uppercase",
    },
    btn: {
      backgroundColor: "#00AD33",
      color: "#fff",
      padding: isMobile ? "12px 24px" : "16px 32px",
      marginTop: 10,
      borderRadius: 16,
      width: isMobile ? "100%" : 150,
      fontSize: isMobile ? 12 : 14,
      textTransform: "lowerCase",
    },
  };

  const handleChange = (event: SelectChangeEvent) => {
    setDropdownValue(event.target.value as string);
  };

  const handleSubmit = () => {
    if (!dropdownValue || !weight || !fullName || !contactNumber) {
      alert("select the data");
      return;
    }

    const formData = {
      dropdownValue,
      weight,
      fullName,
      contactNumber,
    };

    localStorage.setItem("formData", JSON.stringify(formData));
    onClose();
  };

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box sx={modalStyles.modal}>
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <Typography
          id="modal-title"
          variant="h6"
          component="h2"
          sx={{ mb: 4, ...modalStyles.header }}
        >
          Müracİət et
        </Typography>
        <Box component="form" sx={modalStyles.form}>
          <CustomFormControl variant="outlined">
            <InputLabel id="demo-simple-select-outlined-label">
              Kateqoriya
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={dropdownValue}
              onChange={handleChange}
              label="Dropdown"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"Ağ vərəqlər"}>Ağ vərəqlər (A4)</MenuItem>
              <MenuItem value={"Qəzetlər"}>Qəzetlər</MenuItem>
              <MenuItem value={"Karton kağızlar"}>Karton kağızlar</MenuItem>
              <MenuItem value={"Arxiv"}>Arxiv</MenuItem>
              <MenuItem value={"Qarışıq"}>Qarışıq</MenuItem>
              <MenuItem value={"Statik 24"}>Statik 24</MenuItem>
              <MenuItem value={"Statik 30A"}>Statik 30A</MenuItem>
              <MenuItem value={"Statico ST-40 üfüqi"}>
                Statico ST-40 üfüqi
              </MenuItem>
            </Select>
          </CustomFormControl>
          <CustomTextField
            label="Çəkisi"
            variant="outlined"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
          <CustomTextField
            label="Ad və soyad"
            variant="outlined"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <CustomTextField
            label="Əlaqə nömrəniz"
            variant="outlined"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
          />
          <Button onClick={handleSubmit} style={modalStyles.btn}>
            Müraciət et
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default ModalComponent;
