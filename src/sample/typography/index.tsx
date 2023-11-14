import { Typography } from '@/components/Typography';

const SampleTypoGraphy = () => {
  return (
    <>
      <Typography variant="h1">Typography Component</Typography>
      <Typography variant="h1" color="white">
        Typography Component
      </Typography>
      <br />
      <br />
      <Typography variant="h2">Header</Typography>
      <br />
      <hr />
      <Typography variant="h1">Typography h1</Typography>
      <Typography variant="h2"> Typography h2 </Typography>
      <Typography variant="h3"> Typography h3 </Typography>
      <Typography variant="h4"> Typography h4 </Typography>
      <br />
      <Typography variant="h2">Body</Typography>
      <hr />
      <Typography variant="b1">Typography b1</Typography>
      <Typography variant="b2"> Typography b2 </Typography>
      <Typography variant="b3"> Typography b3 </Typography>
      <Typography variant="b4"> Typography b4 </Typography>
      <br />
      <Typography variant="h2">Input</Typography>
      <hr />
      <Typography variant="i1">Typography i1</Typography>
      <Typography variant="i2"> Typography i2 </Typography>
      <Typography variant="i3"> Typography i3 </Typography>
    </>
  );
};

export default SampleTypoGraphy;
