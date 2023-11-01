import React, { useEffect, useState } from "react";
import {
  Button,
  Grid,
  TextField,
  ThemeProvider,
  createTheme,
  useMediaQuery,
} from "@mui/material";
import { Box } from "@mui/system";
import Swal from "sweetalert2";
import "../App.css";
import { FormProps } from "../models/FormTypes";
import { useTranslation } from "react-i18next";
import { useTheme } from "@mui/material/styles";

const Form: React.FC<FormProps> = ({
  textColor = "#FFFFFF",
  backgroundColor = "#090C06",
}) => {
  const themeMain = useTheme();
  const isMobile = useMediaQuery(themeMain.breakpoints.down("sm"));
  const theme = createTheme({
    palette: {
      primary: {
        main: "#00AD33",
      },
    },
    shape: {
      borderRadius: 16,
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            "& .MuiOutlinedInput-root": {
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: textColor,
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: textColor,
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "#00AD33",
              },
              "& input": {
                color: textColor,
              },
            },
            "& .MuiInputLabel-outlined": {
              color: textColor,
            },
            "& .Mui-focused .MuiInputLabel-outlined": {
              color: "#00AD33",
            },
            "&:last-child input": {
              color: textColor,
            },
          },
        },
      },
    },
  });

  const { t } = useTranslation();

  const styles: any = {
    mainCont: {
      padding: isMobile ? "80px 20px" : "100px",
      backgroundColor: backgroundColor,
      display: "flex",
      flexDirection: "column",
      gap: isMobile ? 0 : "24px",
    },
    btn: {
      backgroundColor: "#00AD33",
      color: "#fff",
      padding: isMobile ? "12px 24px" : "16px 32px",
      marginTop: 10,
      borderRadius: 8,
      width: isMobile ? "100%" : "10%",
    },
    inputLabel: {
      fontSize: isMobile ? "0.8rem" : "1rem",
    },
  };

  const [name, setName] = useState<string>("");
  const [mobileNumber, setMobileNumber] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    const savedData = localStorage.getItem("formData");
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      setName(parsedData.name || "");
      setMobileNumber(parsedData.mobileNumber || "");
      setMessage(parsedData.message || "");
    }
  }, []);

  const handleTheChangeOfAnInput =
    (setter: React.Dispatch<React.SetStateAction<string>>) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setter(event.target.value);
    };

  const handleSubmit = () => {
    if (!name.trim() || !mobileNumber.trim() || !message.trim()) {
      Swal.fire({
        icon: "warning",
        title: t("warning_title"),
        text: t("warning_text"),
      });
      return;
    }

    const formData = {
      name,
      mobileNumber,
      message,
    };
    localStorage.setItem("formData", JSON.stringify(formData));
    Swal.fire({
      icon: "success",
      title: t("form_submitted_title"),
      text: t("form_submitted_text"),
    }).then(() => {
      setName("");
      setMobileNumber("");
      setMessage("");
      localStorage.removeItem("formData");
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container style={styles.mainCont}>
        <Box
          sx={{ display: "flex", flexDirection: "row", columnGap: 3, mb: 2 }}
        >
          <Grid item xs={6}>
            <TextField
              label={t("name_label")}
              variant="outlined"
              fullWidth
              value={name}
              InputLabelProps={{ style: styles.inputLabel }}
              onChange={handleTheChangeOfAnInput(setName)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label={t("mobile_number_label")}
              variant="outlined"
              fullWidth
              value={mobileNumber}
              InputLabelProps={{ style: styles.inputLabel }}
              onChange={handleTheChangeOfAnInput(setMobileNumber)}
            />
          </Grid>
        </Box>
        <Grid item xs={12} sx={{ mb: 4 }}>
          <TextField
            label={t("message_placeholder")}
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            value={message}
            onChange={handleTheChangeOfAnInput(setMessage)}
            InputProps={{ style: { color: textColor } }}
            InputLabelProps={{ style: styles.inputLabel }}
          />
        </Grid>
        <Grid item xs={12}>
          <Button style={styles.btn} onClick={handleSubmit}>
            {t("submit_button")}
          </Button>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Form;
