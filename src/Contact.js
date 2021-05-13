import { useState, useEffect } from 'react';
import { useRouteMatch, Link, Switch, Route, useParams } from 'react-router-dom';

function Contact() {
  // The `path` lets us build <Route> paths that are relative to the parent route, while the `url` lets us build relative links

  let { path, url } = useRouteMatch();

  return (
    <div>
      <h1> Contact page</h1>
      <ul>
        <li>
          <Link to={`${url}/linkedin`}>LinkedIn</Link>
        </li>
        <li>
          <Link to={`${url}/facebook`}>Facebook</Link>
        </li>
      </ul>
      <Switch>
        <Route path={`${path}/:socialMediaName`}>
          <SocialUrl />
        </Route>
      </Switch>
    </div>
  );
}

export default Contact;

function SocialUrl() {
  // The <Route> that rendered this component has a path of `/contact/:socialMediaName`.
  // The`:socialMediaName` portion of the URL is a placeholder that we can get from`useParams()`
  let { socialMediaName } = useParams();
  const [url, setUrl] = useState(null);

  useEffect(() => {
    switch (socialMediaName) {
      case 'linkedin':
        setUrl('https://www.linkedin.com/in/abhishek-deshmukh-4b82a7147');
        break;
      case 'facebook':
        setUrl('https://www.facebook.com/abhishekdeshmukh74');
        break;
      default:
        setUrl('');
        break;
    }
  }, [socialMediaName]);

  return <h3>{url}</h3>;
}
