export interface Comment {
  author: string;
  comment: string;
  id: string;
}
export interface CommentListState {
  comments: Comment[];
  authorTitle: {
    id: string;
    name: string;
  };
  commentTitle: {
    id: string;
    name: string;
  };
  author: string;
  comment: string;
  page: number;
  PrevBtn: {
    id: string;
    name: string;
  };
  nextBtn: {
    id: string;
    name: string;
  };
}
