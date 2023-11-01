import {
  Button,
  ButtonGroup,
  Card,
  CardContent,
  Typography,
  Grid,
  useMediaQuery,
} from "@mui/material";
import { Box } from "@mui/system";
import "../App.css";
import { productsData } from "../data/productsData";
import { useState } from "react";
import ModalComponent from "./ModalComponent";
import { useTheme } from "@mui/material/styles";

interface OurProductsItemsProps {
  query: string;
}

function OurProductsItems({ query }: OurProductsItemsProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const filteredProducts = productsData.filter((product) =>
    product.title.toLowerCase().includes(query.toLowerCase())
  );

  const styles: any = {
    wrapper: {
      padding: isMobile ? "24px 20px" : "64px 100px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    cardWrapper: {
      display: "flex",
      flexWrap: "wrap",
      gap: "45px",
      padding: 0,
    },
    card: {
      border: "none",
      borderRadius: "10px",
      boxShadow: "none",
      display: "flex",
      flexDirection: "column",
      width: "250px",
      padding: 0,
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
    btnGroup: {
      columnGap: 16,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "16px",
    },
    img: {
      width: "78px",
      maxWidth: "100%",
      marginTop: "16px",
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
      color: "#090C06",
      fontSize: 14,
    },
    noItems: { padding: 15, textAlign: "center", width: "100vw" },
  };

  if (filteredProducts.length === 0) {
    return (
      <Box style={styles.noItems}>
        <Typography variant={"h6"} sx={{ pb: 6 }}>
          No items found
        </Typography>
      </Box>
    );
  }

  return (
    <Box style={styles.wrapper}>
      <Grid justifyContent="center" container style={styles.cardWrapper}>
        {filteredProducts.map((product, index) => (
          <Grid item xs={12} sm={6} md={4} lg={2} key={index}>
            <Card style={styles.card}>
              <img
                src={product.imageSrc}
                style={styles.img}
                alt={product.title}
              />
              <CardContent sx={{ p: 0 }}>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ paddingBottom: 1, paddingTop: 2, fontWeight: "700" }}
                >
                  {product.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ paddingBottom: 4, fontSize: 14 }}
                >
                  {product.description}
                </Typography>
                <ButtonGroup style={styles.btnGroup}>
                  <Button
                    variant="contained"
                    color="primary"
                    style={styles.rightBtn}
                    disableElevation={true}
                    onClick={handleOpenModal}
                  >
                    Müraciət et
                  </Button>
                  <Box style={styles.span}>
                    <Typography style={styles.spanText}>5 azn / </Typography>
                    <Typography style={styles.spanText}>
                      {" "}
                      {product.cardWeight} kg
                    </Typography>
                  </Box>
                </ButtonGroup>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <ModalComponent isOpen={isModalOpen} onClose={handleCloseModal} />
    </Box>
  );
}

export default OurProductsItems;
