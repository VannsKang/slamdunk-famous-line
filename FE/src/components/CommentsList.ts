import { initComments } from '../api';
import { commentListState } from '../store';

// SECTION comment list generator
const generateCommentList = () => {
  const commentTemplate = commentListState.comments
    .map((comment) => {
      return `
        <div class="card text-center">
          <div class="card-header">
            ${comment.author}
          </div>
          <div class="card-body">
            <p class="card-text">${comment.comment}</p>
          </div>
          <div class="card-footer text-muted">
            ${comment.id}
          </div>
        </div>
      `;
    })
    .join('');

  const template = `
    <div>
      ${commentTemplate}
    </div>
  `;

  return template;
};

const CommentsList = async () => {
  if (commentListState.comments.length === 0) await initComments();
  return generateCommentList();
};

export default CommentsList;
