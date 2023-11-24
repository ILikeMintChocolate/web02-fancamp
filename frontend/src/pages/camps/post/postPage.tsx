import { Suspense, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from '../../../components/modal/modal';
import Spinner from '../../../components/loading/spinner';
import ModalSipnner from '../../../components/loading/modalSpinner';
import UploadModal from './uploadModal';
import PostModal from './postModal';
import PostPageGrid from './postGrid';
import useAuth from '../../../hooks/useAuth';

function PostPage() {
  const [showPostModal, setPostModal] = useState(false);
  const [showUploadModal, setUploadModal] = useState(false);
  const [showPostId, setPostId] = useState<string | null>(null);
  const { auth } = useAuth();
  const navigate = useNavigate();

  if (!auth) {
    navigate('/auth/signin');
    return null;
  }

  const handlePostModalOpen = (postId: string) => {
    setPostId(postId);
    setPostModal(true);
  };

  const handlePostModalClose = () => {
    setPostId(null);
    setPostModal(false);
  };

  const handleUploadModalOpen = () => {
    setUploadModal(true);
  };

  const handleUploadModalClose = () => {
    setUploadModal(false);
  };

  return (
    <section className="relative flex-1">
      {showPostModal && (
        <Suspense fallback={<ModalSipnner />}>
          <Modal isOpen={showPostModal} handleCloseModal={handlePostModalClose}>
            <PostModal
              postId={showPostId}
              handlePostModalClose={handlePostModalClose}
            />
          </Modal>
        </Suspense>
      )}
      {showUploadModal && (
        <Modal
          handleCloseModal={handleUploadModalClose}
          isOpen={showUploadModal}
        >
          <UploadModal handleCloseModal={handleUploadModalClose} />
        </Modal>
      )}
      <Suspense
        fallback={
          <div className="h-[10rem] w-full">
            <Spinner className="center" />
          </div>
        }
      >
        <PostPageGrid
          handlePostModalOpen={handlePostModalOpen}
          handleUploadModalOpen={handleUploadModalOpen}
        />
      </Suspense>
    </section>
  );
}

export default PostPage;