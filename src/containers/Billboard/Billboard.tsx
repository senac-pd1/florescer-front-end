import { ParallaxText } from "../../components/ParallaxText/ParallaxText";
import { BillboardContainer } from "./BillboardStyle";

const Billboard = () => (
  <BillboardContainer>
    <ParallaxText baseVelocity={-3}>We love plants</ParallaxText>
    <ParallaxText baseVelocity={3}>Have a new plant</ParallaxText>
  </BillboardContainer>
);

export default Billboard;
