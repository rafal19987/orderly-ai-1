import { Box, Flex, Text } from "@chakra-ui/react";

const Footer = () => {
	const currentDate = new Date();
	const currentYear = currentDate.getFullYear(); 

	return (
		<Box>
			<Flex
				height='120px'
				bg='#0A192F'
				color='#CCD6F6'
				align='center'
				justify='center'>
				<Text>© This is the POC for the best app of the world !! | {currentYear}</Text>
			</Flex>
		</Box>
	);
};

export default Footer;
