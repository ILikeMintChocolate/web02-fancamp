import { Link, useLocation } from 'react-router-dom';

export default function ErrorPage() {
  const { state } = useLocation();

  return (
    <div>
      <div className="display-regular-16">
        {state?.error ? state.error : '페이지를 찾을 수가 없었어요. 🥲'}
      </div>
      <Link className="text-point-blue display-regular-14" to="/">
        홈으로
      </Link>
    </div>
  );
}
