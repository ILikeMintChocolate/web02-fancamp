/* eslint-disable no-nested-ternary */

import { getAllCamps } from '@API/camp';
import Spinner from '@components/loading/Spinner';
import ProfileImage from '@components/profile/ProfileImage';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function ExplorePage() {
  const [camps, setCamps] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllCamps()
      .then(setCamps)
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      <div className="mb-8 text-point-blue display-regular-20">
        현재 핫한 캠프
      </div>
      {isLoading ? (
        <div className="ml-[10rem]">
          <Spinner />
        </div>
      ) : camps.length > 0 ? (
        <ul className="mb-8 grid grid-cols-5 gap-8 text-text-primary display-regular-16">
          {camps.map(({ campId, campName }) => (
            <Link
              key={campId}
              to={`/camps/${campName}`}
              className="flex flex-col items-center gap-2"
            >
              <ProfileImage src="https://picsum.photos/72/72" alt={campName} />
              {campName}
            </Link>
          ))}
        </ul>
      ) : (
        <div className="mb-8 text-text-primary display-regular-16">
          캠프 목록을 불러오는데 실패했어요. 😥
        </div>
      )}
    </>
  );
}
