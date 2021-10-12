import {
    Link
} from "react-router-dom";

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
    }
];

export const Home = () => <div>
    <h1>React Avancé</h1>
    <div className="list-group">
        {
            links.map(
                (link, index) => <Link
                    key={'link-'+index}
                    className="list-group-item list-group-item-action"
                    to={link.to}>
                    {link.label}
                </Link>
            )
        }
    </div>
</div>;