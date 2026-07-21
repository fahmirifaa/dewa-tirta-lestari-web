import {
  FaFlask,
  FaTruck,
  FaHandHoldingWater,
  FaHeadset,
  FaCertificate,
  FaLeaf,
  FaTint,
  FaBuilding,
  FaHome,
  FaIndustry,
  FaHotel,
  FaUtensils,
  FaSchool,
  FaMosque,
  FaShippingFast,
  FaWater,
  FaFilter,
  FaShieldVirus,
  FaVial,
  FaTruckLoading,
} from "react-icons/fa";

export const iconMap = {
  FaFlask,
  FaTruck,
  FaHandHoldingWater,
  FaHeadset,
  FaCertificate,
  FaLeaf,
  FaTint,
  FaBuilding,
  FaHome,
  FaIndustry,
  FaHotel,
  FaUtensils,
  FaSchool,
  FaMosque,
  FaShippingFast,
  FaWater,
  FaFilter,
  FaShieldVirus,
  FaVial,
  FaTruckLoading,
};

export function getIcon(iconName) {
  return iconMap[iconName] || FaTint;
}