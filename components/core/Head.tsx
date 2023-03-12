import Head from 'next/head';

//######################### COMPONENT TYPES ################################################
type Props = {
  description: string;
  keywords: string;
  title: string;
} & typeof defaultProps;

const defaultProps = {
  title: 'ASRdesigns',
  keywords: 'Posters Muurdecoraties',
  description: `ASRdesigns is een bedrijf dat zich richt op het ontwerpen 
            en produceren van posters en muurdecoraties.`,
};

//######################### COMPONENT ######################################################

const Meta = ({ title, description, keywords }: Props) => {
  return (
    <Head>
      <meta charSet='utf-8' />
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <meta name='viewport' content='width=device-width, initial-scale=1' />

      <link rel='icon' type='image/gif/png' href='../favicon.png?v=2' />

      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = defaultProps;

export default Meta;
