// LINK components
import CommentsHeader from './components/CommentsHeader';
import CommentsList from './components/CommentsList';
import CommentsPagination from './components/CommentsPagination';
import CommentsForm from './components/CommentsForm';

export const renderCommentsTitle = () => {
  document.querySelector('.comments-title')!.innerHTML = CommentsHeader();
};

export const renderCommentsList = async () => {
  document.querySelector('.comments-list')!.innerHTML = await CommentsList();
};

export const renderCommentsForm = () => {
  document.querySelector('.comments-form')!.appendChild(CommentsForm());
};

export const renderCommentsPagination = () => {
  document
    .querySelector('.comments-pagination')!
    .appendChild(CommentsPagination());
};
