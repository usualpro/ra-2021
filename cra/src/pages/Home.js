import {
    Link
} from "react-router-dom";

import Instance from '../instance';

const links = [
    {
        to: '/classvsfunctions',
        label: 'Class vs Functions'
    },
    {
        to: '/i18n',
        label: 'Localisation'
    },
    {
        to: '/http-requests',
        label: 'Http requests'
    },
    {
        to: '/useRef',
        label: 'UseRef'
    },
    {
        to: '/useReducer',
        label: 'UseReducer'
    },
    {
        to: '/observables',
        label: 'Observables'
    }
];

const Links = () => links.map(
    (link, index) => <Link
        key={'link-' + index}
        className="list-group-item list-group-item-action"
        to={link.to}>
        {link.label}
    </Link>
);

export const Home = () => <div>
    <h1>{Instance.name}</h1>
    <div className="list-group">
        <Links />
    </div>
</div>;