import { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  IconButton,
  Grid,
  Button,
  CardMedia,
  CardContent,
  ButtonGroup,
} from "@mui/material";
import SwipeableViews from "react-swipeable-views";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { productsData } from "../data/productsData";
import { OurProductsItemsProps } from "../models/OurProductsItemsTypes";
import ModalComponent from "./ModalComponent";
import AboutUs from "./AboutUs";
import { useTranslation } from "react-i18next";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

function Swiper() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [index, setIndex] = useState<number>(0);
  const itemsPerPage = isMobile ? 1 : 5;

  const slides = [];
  for (let i = 0; i < productsData.length; i += itemsPerPage) {
    slides.push(
      <Grid
        container
        spacing={2}
        key={i}
        sx={{
          px: isMobile ? " 20px" : "100px",
          py: isMobile ? " 40px" : "100px",
        }}
      >
        {productsData.slice(i, i + itemsPerPage).map((card, index) => (
          <Card
            key={index}
            title={card.title}
            imgSrc={card.imageSrc}
            desc={card.description}
          />
        ))}
      </Grid>
    );
  }
  const numPages = slides.length;

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex < numPages - 1 ? prevIndex + 1 : 0));
  };

  const handleBack = () => {
    setIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : numPages - 1));
  };

  const styles: any = {
    container: {
      backgroundColor: "#090C06",
      position: "relative",
      width: "100%",
      padding: 0,
      paddingTop: 6,
    },
    bottomContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "16px",
      position: "absolute",
      bottom: 0,
      width: "100%",
      zIndex: 1,
      backgroundColor: "#090C06",
    },
    borderBottom: {
      position: "absolute",
      bottom: 0,
      height: "2px",
      width: "100%",
      backgroundColor: "#fff",
    },
    arrow: {
      color: "#fff",
      position: "absolute",
      marginTop: 12,
      left: isMobile ? 0 : 85,
      "&.Mui-disabled": {
        color: "grey",
      },
    },
    arrowright: {
      color: "#fff",
      position: "absolute",
      marginTop: 12,
      left: isMobile ? 40 : 125,
      "&.Mui-disabled": {
        color: "grey",
      },
    },
    paginationText: {
      color: "#fff",
    },
    card: {
      width: isMobile ? "20%" : "100%",
      backgroundColor: "#090C06",
      color: "#fff",
    },
    titlestyle: {
      fontSize: 16,
      opacity: 0.8,
      paddingBottom: "24px",
    },
    btnGroup: {
      columnGap: 16,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "16px",
    },
    rightBtn: {
      backgroundColor: "#00AD33",
      color: "#FFFFFF",
      fontWeight: "700",
      width: 120,
      padding: "8px 12px",
      borderRadius: 8,
      fontSize: 11,
    },

    spanText: {
      color: "#fff",
      fontSize: isMobile ? 12 : 16,
    },
    titlestyleHead: {
      fontSize: isMobile ? 14 : 16,
      color: "#fff",
      fontWeight: 700,
      paddingTop: "24px",
      paddingBottom: "12px",
    },
    pagination: {
      display: "flex",
      alignItems: "center",
      position: "absolute",
      marginTop: 12,
      right: isMobile ? 20 : 100,
    },
    dot: {
      width: 8,
      height: 8,
      borderRadius: "50%",
      backgroundColor: "rgba(255, 255, 255, 0.5)",
      margin: "0 4px",
      transition: "all 0.3s ease",
      "&:hover": {
        backgroundColor: "rgba(255, 255, 255, 0.7)",
      },
    },
    activeDot: {
      backgroundColor: "#fff",
      width: 16,
      borderRadius: 20,
      margin: "0 2px",
    },
    borderStyles: {
      borderBottom: "1px solid #999",
      width: isMobile ? "100%" : "77%",
      left: isMobile ? "0" : "12%",
      opacity: 0.5,
      position: "absolute",
      marginTop: isMobile ? 40 : 95,
      borderWidth: 2,
    },
  };

  return (
    <>
      <Box sx={styles.container}>
        <SwipeableViews
          index={index}
          onChangeIndex={(index: number) => setIndex(index)}
        >
          {slides}
        </SwipeableViews>
        <Box sx={styles.bottomContainer}>
          <IconButton
            onClick={handleBack}
            disabled={index === 0}
            sx={styles.arrow}
          >
            <KeyboardArrowLeft />
          </IconButton>

          <IconButton
            onClick={handleNext}
            disabled={index === numPages - 1}
            sx={styles.arrowright}
          >
            <KeyboardArrowRight />
          </IconButton>
          <Box style={styles.borderStyles}></Box>
          <Box sx={styles.pagination}>
            {Array.from({ length: numPages }, (_, i) => (
              <IconButton
                key={i}
                size="small"
                onClick={() => setIndex(i)}
                sx={[styles.dot, index === i && styles.activeDot]}
              />
            ))}
          </Box>
        </Box>
      </Box>
      <AboutUs />
    </>
  );
}

function Card({ title, imgSrc, desc }: OurProductsItemsProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { t } = useTranslation();
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const styles: any = {
    borderBottom: {
      position: "absolute",
      bottom: 0,
      height: "2px",
      width: "100%",
      backgroundColor: "#fff",
    },
    arrow: {
      color: "#fff",
      position: "absolute",
      marginTop: 12,
      left: 85,
      "&.Mui-disabled": {
        color: "grey",
      },
    },
    arrowright: {
      color: "#fff",
      position: "absolute",
      marginTop: 12,
      left: 125,
      "&.Mui-disabled": {
        color: "grey",
      },
    },
    paginationText: {
      color: "#fff",
    },
    card: {
      width: "100%",
      backgroundColor: "#090C06",
      color: "#fff",
    },
    titlestyle: {
      fontSize: 16,
      opacity: 0.8,
      paddingBottom: "24px",
    },
    btnGroup: {
      columnGap: 16,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "16px",
    },
    rightBtn: {
      backgroundColor: "#00AD33",
      color: "#FFFFFF",
      fontWeight: "700",
      width: 120,
      padding: "8px 12px",
      borderRadius: 8,
      fontSize: 11,
    },
    span: {
      width: 110,
      height: 37,
      borderRadius: 8,
      fontWeight: "700",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      textAlign: "center",
      justifyContent: "center",
      marginRight: 20,
    },
    spanText: {
      color: "#fff",
      fontSize: isMobile ? 12 : 14,
    },
    titlestyleHead: {
      fontSize: isMobile ? 14 : 16,
      color: "#fff",
      fontWeight: 700,
      paddingTop: "24px",
      paddingBottom: "12px",
    },
    pagination: {
      display: "flex",
      alignItems: "center",
      position: "absolute",
      marginTop: 12,
      right: 100,
    },
    dot: {
      width: 8,
      height: 8,
      borderRadius: "50%",
      backgroundColor: "rgba(255, 255, 255, 0.5)",
      margin: "0 4px",
      transition: "all 0.3s ease",
      "&:hover": {
        backgroundColor: "rgba(255, 255, 255, 0.7)",
      },
    },
    activeDot: {
      backgroundColor: "#fff",
      width: 16,
      borderRadius: 20,
      margin: "0 2px",
    },
    borderStyles: {
      borderBottom: "1px solid #999",
      width: "77%",
      left: "12%",
      opacity: 0.5,
      position: "absolute",
      marginTop: 95,
      borderWidth: 2,
    },
  };
  return (
    <Grid item xs={isMobile ? 0 : 2.4}>
      <Paper elevation={4} sx={styles.card}>
        <CardMedia
          component="img"
          sx={{ width: 78 }}
          image={imgSrc}
          alt={title}
        />
        <CardContent sx={{ p: 0 }}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={styles.titlestyleHead}
          >
            {title}
          </Typography>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={styles.titlestyle}
          >
            {desc}
          </Typography>
        </CardContent>
        <ButtonGroup style={styles.btnGroup}>
          <Button
            variant="contained"
            color="primary"
            style={styles.rightBtn}
            disableElevation={true}
            onClick={handleOpenModal}
          >
            {t("apply_button")}
          </Button>
          <Box style={styles.span}>
            <Typography style={styles.spanText}>5 azn / </Typography>
            <Typography style={styles.spanText}> 1 kg</Typography>
          </Box>
        </ButtonGroup>
      </Paper>
      <ModalComponent isOpen={isModalOpen} onClose={handleCloseModal} />
    </Grid>
  );
}

export default Swiper;
