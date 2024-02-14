import { BackLink } from '../components/BackLink/BackLink';

export default function NotFoundPage() {
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', gap: 20, width: 700 }}
    >
      <h1>Sorry! Not found this page!</h1>
      <BackLink href="/">Back to Home Page!</BackLink>
    </div>
  );
}
