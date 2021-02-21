import { CommentListState } from '../interface';

export const commentListState: CommentListState = {
  // list
  comments: [],

  // form
  authorTitle: {
    id: 'author',
    name: '이름',
  },
  commentTitle: {
    id: 'comment',
    name: '본문',
  },
  author: '',
  comment: '',

  // pagination
  page: 1,
  PrevBtn: {
    id: 'prev',
    name: '이전',
  },
  nextBtn: {
    id: 'next',
    name: '다음',
  },
};
