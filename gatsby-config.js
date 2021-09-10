module.exports = {
  siteMetadata: {
    siteUrl: "https://quantalphanet.wpcomstaging.com",
    title: "Quant Alpha",
  },
  plugins: [
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: "https://quantalphanet.wpcomstaging.com/graphql",
      },
    },
    {
    resolve: "gatsby-plugin-sharp",
    options: {
      // Defaults used for gatsbyImageData and StaticImage
      defaults: {},
      // Set to false to allow builds to continue on image errors
      failOnError: true,
      // deprecated options and their defaults:
      base64Width: 20,
      forceBase64Format: "png", // valid formats: png,jpg,webp
      useMozJpeg: process.env.GATSBY_JPEG_ENCODER === "MOZJPEG",
      stripMetadata: true,
      defaultQuality: 50,
    },
  },
  ],
};
