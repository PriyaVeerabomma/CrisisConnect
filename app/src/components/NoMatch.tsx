import { Link } from "react-router-dom";
import { FC } from "react";

const NoMatch: FC = () => {
return (
    <div>
    <h2>Page not found - 404</h2>
    <p>
        <Link to="/">Go to the home page</Link>
    </p>
    </div>
);
};

export default NoMatch;
