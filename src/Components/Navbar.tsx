import React from "react";
import group1 from "../assets/group1.svg";
import group2 from "../assets/group2.svg";
import vector from "../assets/Vector.svg";
import { HStack, Image, Text } from "@chakra-ui/react";
import GenericButton from "./Buttons/GenericButton";

const Navbar = () => {
  return (
    <>
      <HStack>
        <Image
          src={group1}
          top={12}
          display="flex"
          justifyContent="space-between"
        />
        <Text color="#64ffda">Orderly AI</Text>
        <GenericButton
          size="large"
          label="Generate APP with chatGPT"
          icon={group2}
        />
        <GenericButton
          size="small"
          label="EXPORT"
          backgroundColor="rgba(217, 217, 217, 0.15)"
        />
        <GenericButton size="small" label="IMPORT" />
        <Text color="#64ffda">LOG IN</Text>
      </HStack>
    </>
  );
};
export default Navbar;
