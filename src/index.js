import React from "react";
import ReactDOM from "react-dom";
import {IntlProvider} from 'react-intl';

import JobsList from "./components/jobslist";
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";

const idioma = navigator.language.split('-')[0];

const mensajes = idioma === 'es' ? localeEsMessages : localeEnMessages;

ReactDOM.render(
    <IntlProvider locale={idioma} messages= {mensajes}>
            <JobsList/>
    </IntlProvider>, document.getElementById("root")
);