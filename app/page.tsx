import tw from 'twin.macro';

//######################### COMPONENT TYPES ################################################
import type { NextPage } from 'next';
type Props = {};

//######################### COMPONENT STYLES ###############################################
const Wrapper = tw.div``;

//######################### COMPONENT ######################################################

const Home: NextPage<Props> = () => {
  return <Wrapper>Page</Wrapper>;
};

export default Home;
