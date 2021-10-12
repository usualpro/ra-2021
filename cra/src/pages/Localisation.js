import { IntlProvider, FormattedMessage } from 'react-intl';
import Fr from '../translations/fr.json';

const locale = navigator.language;
const translationEnum = {
    "fr-FR": Fr
}

export const Localisation = () => <IntlProvider
    messages={translationEnum[locale]}
    {...{ locale }}
    defaultLocale="en"
>
    <h1>Localisation</h1>
    <FormattedMessage
        id="myMessage"
        defaultMessage="Today is {ts, date, :::yyyyMMdd}"
        values={{ ts: Date.now() }}
    />
    <FormattedMessage
        id="helloReact"
        values={{ nom: "Gary" }}
    />
</IntlProvider>