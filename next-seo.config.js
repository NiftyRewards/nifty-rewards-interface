/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: "web3-converter",
  titleTemplate: "%s | web3-converter",
  defaultTitle: "web3-converter",
  description: "Convert ether to wei and string to bytes32",
  canonical: "https://web3-converter.vercel.app",
  openGraph: {
    url: "https://web3-converter.vercel.app",
    title: "web3-converter",
    description: "Convert ether to wei and string to bytes32",
    images: [
      {
        url: "https://og-image.sznm.dev/**web3-converter**.sznm.dev.png?theme=dark&md=1&fontSize=125px&images=https%3A%2F%2Fsznm.dev%2Favataaars.svg&widths=250",
        alt: "web3-converter og-image",
      },
    ],
    site_name: "web3-converter",
  },
};

export default defaultSEOConfig;
