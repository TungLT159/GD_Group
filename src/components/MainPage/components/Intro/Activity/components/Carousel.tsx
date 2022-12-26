import Carousel from "react-spring-3d-carousel";
import { useState, useEffect } from "react";
import { config } from "react-spring";
import { Box, Button } from "@mui/material";
import { ArrowRightAlt } from "@mui/icons-material";

export default function Carroussel(props: any) {
  const table = props.cards.map((element: any, index: any) => {
    return { ...element, onClick: () => setGoToSlide(index) };
  });

  const [offsetRadius, setOffsetRadius] = useState(2);
  const [showArrows, setShowArrows] = useState(false);
  const [goToSlide, setGoToSlide] = useState(0);
  const [cards] = useState(table);

  useEffect(() => {
    setOffsetRadius(props.offset);
    setShowArrows(props.showArrows);
  }, [props.offset, props.showArrows]);

  return (
    <div
      style={{
        width: props.width,
        height: props.height,
        margin: props.margin,
      }}>
      <Carousel
        slides={cards}
        goToSlide={goToSlide}
        offsetRadius={offsetRadius}
        showNavigation={showArrows}
        animationConfig={config.wobbly}
      />
      <Box sx={{ position: "relative" }}>
        <Button
          onClick={() => setGoToSlide((prev) => prev + 1)}
          sx={{
            position: "absolute",
            bottom: { xs: "65px", sm: "11px", md: "12px", lg: "10px" },
            right: { xs: "-45%", sm: "-8%", md: "5%", lg: "-10%" },
            zIndex: 100,
          }}>
          <ArrowRightAlt sx={{ fontSize: "46px", fontWeight: 400 }} />
        </Button>
      </Box>
    </div>
  );
}
