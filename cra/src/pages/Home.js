import {
    Link
} from "react-router-dom";

export const Home = () => <div>
    <div className="list-group">
        <Link
            className="list-group-item list-group-item-action"
            to="/classvsfunctions">
            Class vs Functions
        </Link>
        <Link
            className="list-group-item list-group-item-action"
            to="/i18n">
            Localisation
        </Link>
    </div>
</div>;