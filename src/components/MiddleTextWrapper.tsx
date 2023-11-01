import { Box, Typography, Button } from "@mui/material";
import { useRef, useState } from "react";
import pointer from "../assets/icons/arrowsDown.svg";
import ModalComponent from "./ModalComponent";
import { useTranslation } from "react-i18next";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

const MiddleTextWrapper = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const themeMain = useTheme();
  const isMobile = useMediaQuery(themeMain.breakpoints.down("sm"));

  const styles: any = {
    middleText: {
      fontSize: isMobile ? 36 : 56,
      fontWeight: "700",
      textTransform: "uppercase",
      color: "#fff",
    },
    toplabel: {
      color: "#fff",
      fontSize: isMobile ? 14 : 18,
    },
    btn: {
      backgroundColor: "#00AD33",
      color: "#fff",
      padding: isMobile ? "12px 24px" : "16px 32px",
      marginTop: 10,
      borderRadius: 8,
      fontSize: isMobile ? 12 : "inherit",
    },
    middleTextWrapper: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      paddingTop: isMobile ? "70%" : "20%",
      rowGap: 24,
      textAlign: "center",
    },
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const handleScrollDown = () => {
    window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <Box style={styles.middleTextWrapper}>
      <Typography style={styles.toplabel}>{t("future_label")}</Typography>
      <Typography variant="h1" style={styles.middleText}>
        {t("nature_text")}
      </Typography>
      <Button style={styles.btn} onClick={handleOpenModal}>
        {t("apply_button")}
      </Button>
      <Button
        sx={{ mt: "30%", borderRadius: "50%", p: 1 }}
        onClick={handleScrollDown}
      >
        <img src={pointer} alt="pointer" />
      </Button>
      <ModalComponent isOpen={isModalOpen} onClose={handleCloseModal} />
    </Box>
  );
};

export default MiddleTextWrapper;
