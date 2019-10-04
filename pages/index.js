const { t } = require("./i18n");

export default function Index() {
    // works fine on server side ;)
    console.log(t("hello"));
  return (
    <div>
      <p>t("hello")</p>
    </div>
  );
}
