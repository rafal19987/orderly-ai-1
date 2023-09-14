import { Box, Flex, Text } from "@chakra-ui/react";

const Footer = () => {
	const currentDate = new Date();
	const currentYear = currentDate.getFullYear(); 

	return (
		<Box as="footer">
			<Flex
				height='120px'
				bg='bg.primary'
				color='text.secondary'
				align='center'
				justify='center'>
				<Text>© This is the POC for the best app of the world !! | {currentYear}</Text>
			</Flex>
		</Box>
	);
};

export default Footer;
