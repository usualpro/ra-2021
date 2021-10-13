import { useState } from 'react';
import { IntlProvider, FormattedMessage } from 'react-intl';
import Fr from '../translations/fr.json';
import En from '../translations/en.json';

const locale = navigator.language;

const translationEnum = {
    "fr-FR": Fr,
    "en-US": En
}

export const Localisation = () => {
    const [currentValue, setCurrentValue] = useState({
        nom: localStorage.getItem("nom") ? localStorage.getItem("nom") : "XXXX",
        prenom: localStorage.getItem("prenom") ? localStorage.getItem("prenom") : "XXXX",
    });

    const onFormSubmit = form => {
        form.preventDefault();
        const formData = new FormData(form.target);
        localStorage.setItem('nom', formData.get("nom"));
        localStorage.setItem('prenom', formData.get("prenom"));
        setCurrentValue({
            nom: localStorage.getItem("nom"),
            prenom: localStorage.getItem("prenom")
        })
    }

    return <IntlProvider
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
        <br />
        <FormattedMessage
            id="inTheKitchen"
            defaultMessage="Kevin ...."
        />
        <h4>{currentValue.nom} {currentValue.prenom}</h4>
        <form onSubmit={onFormSubmit}>
            <div className="py-3">
                <input type="text" name="nom" className="form-control" />
            </div>
            <div className="py-3">
                <input type="text" name="prenom" className="form-control" />
            </div>
            <button className="btn btn-warning">Submit</button>
        </form>
    </IntlProvider>
}