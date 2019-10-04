const i18n = require("i18next");

let t;
i18n.init(
  {
    lng: "ja",
    resources: {
      en: {
        translation: {
          hello: "hello world!"
        }
      },
      ja: {
        translation: {
          hello: "こんにちは！"
        }
      }
    }
  },
  (e, v) => {
    // i know this is not the best way
    t = v;
  }
);

module.exports = { t };
