import Styles from "./Card.module.css";
import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import { Button } from "@mui/material";

type ImageProps = {
  image: string;
};

function Card({ image }: ImageProps) {
  const [show, setShown] = useState(false);

  const props3 = useSpring({
    transform: show ? "scale(1.03)" : "scale(1)",
    cursor: show ? "pointer" : "unset",
    boxShadow: show
      ? "0 20px 25px rgb(0 0 0 / 25%)"
      : "0 2px 10px rgb(0 0 0 / 8%)",
  });
  return (
    <animated.div
      className={Styles.card}
      style={props3}
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}>
      <img src={image} alt="card" />
      <h2>Hướng dẫn mua hàng</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
        nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
        volutpat.
      </p>
      <div>
        <Button
          variant="outlined"
          sx={{
            width: { xs: "72px", sm: "unset" },
            height: { xs: "22px", sm: "unset" },
            fontSize: { xs: "10px", sm: "unset" },
            padding: { xs: "0", sm: "6px 16px" },
          }}>
          Đọc thêm
        </Button>
      </div>
      {/* <Box sx={{ position: "relative" }}>
        <Button sx={{ position: "absolute", bottom: "0", left: "81%" }}>
          <ArrowRightAlt fontSize="large" />
        </Button>
      </Box> */}
    </animated.div>
  );
}

export default Card;
