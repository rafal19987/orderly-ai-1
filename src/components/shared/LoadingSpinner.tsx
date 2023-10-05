import Spinner from '@assets/loading-spinner.svg';
import { Flex, Image, Text, keyframes } from '@chakra-ui/react';

const spinAnimation = keyframes({
  from: { transform: 'rotate(0deg)' },
  to: { transform: 'rotate(360deg)' },
});

const GPT_API_KEY = import.meta.env.VITE_CHAT_GPT_API;

export const LoadingSpinner = () => {
  return (
    <Flex
      justifyContent='center'
      alignItems='center'
      overflow='hidden'
      direction='column'
      gap={12}
    >
      {GPT_API_KEY ? (
        <>
          <Image
            src={Spinner}
            sx={{ animation: `${spinAnimation} 2s ease infinite` }}
          />
          <Text fontSize={36} textAlign='center'>
            Waiting for API Response
          </Text>
        </>
      ) : (
        <Text fontSize={24} textAlign='center'>
          The support for generating applications through ChatGPT is currently
          unavailable due to the associated costs related to API queries.
        </Text>
      )}
    </Flex>
  );
};
