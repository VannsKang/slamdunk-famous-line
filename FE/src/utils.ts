import { Comment } from './interface';

// SECTION comments date formatter
export const formattedComments = (fetchResult: Comment[]) => {
  return fetchResult.map(
    (comment) =>
      (comment = {
        ...comment,
        id: `${new Date(comment.id)}`,
      })
  );
};
