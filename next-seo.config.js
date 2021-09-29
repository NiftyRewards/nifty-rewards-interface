/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: "web3-converter",
  titleTemplate: "%s | web3-converter",
  defaultTitle: "web3-converter",
  description: "Next.js + chakra-ui + TypeScript template",
  canonical: "https://web3-converter.sznm.dev",
  openGraph: {
    url: "https://web3-converter.sznm.dev",
    title: "web3-converter",
    description: "Next.js + chakra-ui + TypeScript template",
    images: [
      {
        url: "https://og-image.sznm.dev/**web3-converter**.sznm.dev.png?theme=dark&md=1&fontSize=125px&images=https%3A%2F%2Fsznm.dev%2Favataaars.svg&widths=250",
        alt: "web3-converter.sznm.dev og-image",
      },
    ],
    site_name: "web3-converter",
  },
  twitter: {
    handle: "@sozonome",
    cardType: "summary_large_image",
  },
};

export default defaultSEOConfig;
