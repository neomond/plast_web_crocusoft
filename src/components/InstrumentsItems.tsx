import {
  Button,
  ButtonGroup,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import "../../src/App.css";
import { CardProps } from "../models/CardTypes";
import ModalComponent from "./ModalComponent";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

const InstrumentsItems: React.FC<CardProps> = ({ card }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  if (
    !card.titleInstrument ||
    !card.descriptionInstrument ||
    !card.imageSrcInstrument
  ) {
    return null;
  }

  const styles: any = {
    paperContainer: {
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      alignItems: "center",
      justifyContent: "center",
      gap: isMobile ? 16 : 32,
      padding: isMobile ? 16 : 0,
    },
    cardWrapper: {
      width: isMobile ? "90%" : "400px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    card: {
      border: "1.2px solid #E8E8E8",
      borderRadius: "10px",
      padding: isMobile ? "20px" : "24px 24px 0px 24px",
      position: "relative",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "none",
    },
    leftBtn: {
      backgroundColor: "#F8F8F7",
      color: "#090C06",
      fontSize: isMobile ? 10 : 12,
      fontWeight: "700",
      width: isMobile ? "100%" : 155,
      marginBottom: isMobile ? "12px" : 0,
      padding: isMobile ? 12 : 16,
      borderRadius: 8,
    },
    rightBtn: {
      backgroundColor: "#00AD33",
      color: "#FFFFFF",
      fontSize: isMobile ? 10 : 12,
      fontWeight: "700",
      width: isMobile ? "100%" : 155,
      padding: isMobile ? 12 : 16,
      borderRadius: 8,
    },
    btnGroup: {
      columnGap: 16,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: isMobile ? "column" : "row",
    },
    img: {
      width: "344px",
      maxWidth: "100%",
      position: "relative",
      display: "block",
      margin: "0 auto",
    },
    span: {
      backgroundColor: "#000",
      width: 110,
      height: 37,
      position: "absolute",
      left: "23%",
      zIndex: 1,
      transform: "translateX(-50%)",
      top: 15,
      borderRadius: 8,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      textAlign: "center",
      justifyContent: "center",
    },
    spanText: {
      color: "#fff",
    },
  };
  return (
    <Box style={styles.paperContainer}>
      <Box style={styles.cardWrapper}>
        <Card style={styles.card}>
          <Box style={styles.span}>
            <Typography style={styles.spanText}>5 azn / </Typography>
            <Typography style={styles.spanText}> 1 kg</Typography>
          </Box>
          <img src={card?.imageSrcInstrument} style={styles.img} alt="Search" />
          <CardContent>
            <Typography
              variant="h5"
              component="div"
              sx={{ paddingBottom: 1, paddingTop: 2, fontWeight: "700" }}
            >
              {card?.titleInstrument}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ paddingBottom: 6 }}
            >
              {card?.descriptionInstrument}
            </Typography>
            <ButtonGroup style={styles.btnGroup}>
              <Button
                variant="contained"
                color="primary"
                style={styles.leftBtn}
                disableElevation={true}
              >
                Ətraflı məlumat
              </Button>
              <Button
                variant="contained"
                color="primary"
                style={styles.rightBtn}
                disableElevation={true}
                onClick={handleOpenModal}
              >
                Müraciət et
              </Button>
            </ButtonGroup>
          </CardContent>
        </Card>
      </Box>
      <ModalComponent isOpen={isModalOpen} onClose={handleCloseModal} />
    </Box>
  );
};

export default InstrumentsItems;
