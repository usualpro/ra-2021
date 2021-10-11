import { useState } from 'react';
import { IntlProvider, FormattedMessage } from 'react-intl'
import { Paragraphe } from './Paragraphe';
import { ParagrapheClass } from './ParagrapheClass';
import './styles/main.scss';
import Fr from './translations/fr.json';

const locale = navigator.language;
const translationsEnum = {
  "fr-FR": Fr
};

function App(props) {
  const [count, setCount] = useState(0);
  const onClickHandler = () => {
    setCount(prevCount => prevCount + 1);
  }

  return (
    <IntlProvider messages={translationsEnum[locale]} {...{ locale }} defaultLocale="en">
      <div className="container">
        <header className="App-header">
          <h1>{props.text}</h1>
          <Paragraphe  {...props} onClickHandler={onClickHandler} />
          <ParagrapheClass />
          learn react
          {count}
        </header>
        <FormattedMessage
          id="myMessage"
          defaultMessage="Today is {ts, date, ::yyyyMMdd}"
          values={{ ts: Date.now() }}
        />
      </div>
    </IntlProvider>
  );
}

export default App;
