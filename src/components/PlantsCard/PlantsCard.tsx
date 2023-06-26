import { PlantsCart } from "./PlantsCardStyle";

interface ProfessionalCardProps {
  name: string;
  description: string;
}

const PlantsCard = ({ name, description }: ProfessionalCardProps) => (
  <PlantsCart>
    <h3>{name}</h3>
    <p>{description}</p>
  </PlantsCart>
);

export default PlantsCard;
