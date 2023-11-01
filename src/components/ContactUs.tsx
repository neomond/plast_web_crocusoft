import { Box } from "@mui/system";
import Form from "./Form";
import { useTranslation } from "react-i18next";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

function ContactUs() {
  const { t } = useTranslation();
  const themeMain = useTheme();
  const isMobile = useMediaQuery(themeMain.breakpoints.down("sm"));
  const styles: any = {
    mainContainer: {
      padding: isMobile ? 34 : 74,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      textTransform: "uppercase",
      fontSize: isMobile ? 34 : 44,
      position: "relative",
    },
    firstWord: {
      color: "#090C06",
      marginRight: 10,
    },
    secondWord: {
      color: "#00AD33",
    },
    thirdWord: {
      color: "#090C06",
    },
    triangle: {
      width: 0,
      height: 0,
      borderLeft: "50px solid transparent",
      borderRight: "50px solid transparent",
      borderTop: "32px solid #fff",
      position: "absolute",
      bottom: -30,
      left: isMobile ? "calc(50% - 15%)" : "calc(50% - 3%)",
      zIndex: 9999,
    },
  };

  return (
    <>
      <Box style={styles.mainContainer}>
        <span style={styles.firstWord}>{t("textus")}</span>
        <span style={styles.secondWord}>{t("textussub")}</span>
        <span style={styles.thirdWord}>.</span>
        <span style={styles.triangle}></span>
      </Box>
      <Form />
    </>
  );
}

export default ContactUs;
