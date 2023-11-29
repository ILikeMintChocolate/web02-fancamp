import { useMutation } from '@tanstack/react-query';
import { MutationProps } from '@type/api/api';
import useFetch from './useFetch';

interface PostLikeMutationFnProps {
  postId: string;
}

export const postLikeMutation = ({ onSuccess, onError }: MutationProps) => {
  const { mutate, isPending, isError, isSuccess } = useMutation({
    mutationFn: ({ postId }: PostLikeMutationFnProps) =>
      useFetch(`/api/posts/${postId}/likes`, {
        method: 'POST',
        credentials: 'include',
      }),
    onSuccess,
    onError,
  });

  return { mutate, isPending, isError, isSuccess };
};

export const deleteLikeMutation = ({ onSuccess, onError }: MutationProps) => {
  const { mutate, isPending, isError, isSuccess } = useMutation({
    mutationFn: ({ postId }: PostLikeMutationFnProps) =>
      useFetch(`/api/posts/${postId}/likes`, {
        method: 'DELETE',
        credentials: 'include',
      }),
    onSuccess,
    onError,
  });

  return { mutate, isPending, isError, isSuccess };
};
