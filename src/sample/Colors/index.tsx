import { Box } from '@/components';
import { Flex } from '@/components/Flex';
import { Typography } from '@/components/Typography';

const SampleColors = () => {
  return (
    <>
      <Typography variant="h1">Colors</Typography>

      <Typography variant="h2">Black & White (Generic)</Typography>

      <Flex>
        <Box css={{ size: '100px', backgroundColor: '$black' }}></Box>
        <Box
          css={{
            size: '100px',
            backgroundColor: '$white',
            border: '1px solid $black',
          }}
        ></Box>
      </Flex>

      <Flex>
        <Box css={{ size: '100px', backgroundColor: '$neutral30' }}></Box>
        <Box css={{ size: '100px', backgroundColor: '$neutral50' }}></Box>
        <Box css={{ size: '100px', backgroundColor: '$neutral100' }}></Box>
        <Box css={{ size: '100px', backgroundColor: '$neutral150' }}></Box>
        <Box css={{ size: '100px', backgroundColor: '$neutral200' }}></Box>
        <Box css={{ size: '100px', backgroundColor: '$neutral300' }}></Box>
        <Box css={{ size: '100px', backgroundColor: '$neutral400' }}></Box>
        <Box css={{ size: '100px', backgroundColor: '$neutral500' }}></Box>
        <Box css={{ size: '100px', backgroundColor: '$neutral600' }}></Box>
        <Box css={{ size: '100px', backgroundColor: '$neutral700' }}></Box>
        <Box css={{ size: '100px', backgroundColor: '$neutral800' }}></Box>
        <Box css={{ size: '100px', backgroundColor: '$neutral900' }}></Box>
      </Flex>
    </>
  );
};

export default SampleColors;
