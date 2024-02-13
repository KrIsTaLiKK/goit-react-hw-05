import { BackLink } from '../components/BackLink/BackLink';

export default function NotFoundPage() {
  return (
    <div>
      <h1>Sorry! Not found this page!</h1>
      <BackLink href="/">Back to Home Page!</BackLink>
    </div>
  );
}
