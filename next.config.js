module.exports = {
  basePath: "/app",

  i18n: {
    localeDetection: false,
    locales: [
      "de-DE",
      "de-AT",
      "en-US",
      "en-IE",
      "en-GB",
      "nl-NL",
      "es-ES",
      "fr-FR",
    ],
    defaultLocale: "de-DE",

    domains: [
      {
        domain: 'localhost:3000',
        locales: [
          "de-DE",
          "de-AT",
          "en-US",
          "en-IE",
          "en-GB",
          "nl-NL",
          "es-ES",
          "fr-FR",
        ],
        defaultLocale: process.env.APP_LOCALE || "en-US",
        http: true,
      },
    ],
  },
};
