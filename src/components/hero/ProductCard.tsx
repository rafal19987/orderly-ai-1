import { Card, CardBody, Stack, Image, Text, Box } from "@chakra-ui/react";

import PlayBtn from "../../assets/play-btn.svg";

const ProductCard = () => {
  return (
    <Card
      p={0}
      maxWidth={"100%"}
      minHeight={{
        base: "660px",
        md: "100%",
      }}
      flexDirection={{
        base: "column",
        md: "row-reverse",
      }}
      backgroundColor={"bg.secondary"}
      borderRadius={"18px"}
      overflow={"hidden"}
    >
      <CardBody
        p={0}
        display={"flex"}
        flexDirection={{
          base: "column",
          md: "row-reverse",
        }}
      >
        <Stack
          margin={{
            base: "0",
            md: "25px",
          }}
          width={"50%"}
          h={"100%"}
          justifyContent={"center"}
          alignItems={"center"}
          backgroundColor={"#D9D9D926"}
          borderRadius={{ base: "18px", md: "40px" }}
        >
          <Image src={PlayBtn} alt={"Play button"} width={"30%"}></Image>
        </Stack>
        <Stack mt="6" p="1.25rem" spacing="3" width={"50%"}>
          <Box
            display={"flex"}
            justifyContent={"space-around"}
            alignItems={"center"}
          >
            <Text
              marginLeft={"10px"}
              width={"50%"}
              fontSize="22px"
              fontWeight={700}
              color={"text.primary"}
              flexGrow={2}
            >
              Product:
            </Text>
            <Text
              width={"50%"}
              fontSize="16px"
              color={"text.secondary"}
              flexGrow={1}
            >
              ChatGPT
            </Text>
          </Box>
          <Box
            display={"flex"}
            justifyContent={"space-around"}
            alignItems={"center"}
          >
            <Text
              marginLeft={"10px"}
              width={"50%"}
              fontSize="22px"
              fontWeight={700}
              color={"text.primary"}
            >
              Category:{" "}
            </Text>
            <Text width={"50%"} fontSize="16px" color={"text.secondary"}>
              Writing
            </Text>
          </Box>
          <Box
            display={"flex"}
            justifyContent={"space-around"}
            alignItems={"center"}
          >
            <Text
              marginLeft={"10px"}
              width={"50%"}
              fontSize="22px"
              fontWeight={700}
              color={"text.primary"}
            >
              Website:
            </Text>
            <Text width={"50%"} fontSize="16px" color={"text.secondary"}>
              Writing
            </Text>
          </Box>
          <Box
            display={"flex"}
            justifyContent={"space-around"}
            alignItems={"center"}
          >
            <Text
              marginLeft={"10px"}
              width={"50%"}
              fontSize="22px"
              fontWeight={700}
              color={"text.primary"}
            >
              Cost:
            </Text>
            <Text width={"50%"} fontSize="16px" color={"text.secondary"}>
              Free
            </Text>
          </Box>
          <Box
            display={"flex"}
            justifyContent={"space-around"}
            alignSelf={"flex-start"}
          >
            <Text
              marginLeft={"10px"}
              width={"50%"}
              fontSize="22px"
              fontWeight={700}
              color={"text.primary"}
            >
              Description:
            </Text>
            <Text
              paddingTop="6px"
              width={"50%"}
              fontSize="16px"
              color={"text.secondary"}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum,
              voluptates.
            </Text>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default ProductCard;