import { renderCommentsList } from '../App';
import { COMMENTS_API } from '../config';
import { commentListState } from '../store';
import { formattedComments } from '../utils';

// SECTION list
export const initComments = async () => {
  try {
    const response = await fetch(COMMENTS_API);
    const validation = response && response.status === 200;
    if (!validation) throw new Error('데이터를 불러올 수 없습니다');
    const result = await response.json();
    commentListState.comments = formattedComments(result);
  } catch (error) {
    alert(`${error} !!!`);
    console.log(`${error} !!!`);
  }
};

// SECTION write
export const postComments = async <T>(reqBody: T) => {
  try {
    const response = await fetch(COMMENTS_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reqBody),
    });
    const validation = response && response.status === 200;
    if (!validation) throw new Error('글 등록을 실패하였습니다');

    // NOTE update commentlist
    await initComments();
    renderCommentsList();
  } catch (error) {
    alert(`${error} !!!`);
    console.log(`${error} !!!`);
  }
};

// SECTION paging
export const getPagination = async (e: any) => {
  const { id } = e.target;
  if (id === 'prev') commentListState.page--;
  if (id === 'next') commentListState.page++;

  try {
    // NOTE first page checker
    if (commentListState.page < 1) {
      commentListState.page++;
      throw new Error('첫 페이지입니다');
    }

    const response = await fetch(
      `${COMMENTS_API}/page/${commentListState.page}`
    );

    const validation = response && response.status === 200;
    if (!validation) throw new Error('데이터를 불러올 수 없습니다');
    const result = await response.json();

    // NOTE last page checker
    if (result.length === 0) {
      commentListState.page--;
      throw new Error('마지막 페이지입니다');
    }

    // NOTE update commentlist
    commentListState.comments = await formattedComments(result);
    renderCommentsList();
  } catch (error) {
    alert(`${error} !!!`);
    console.log(`${error} !!!`);
  }
};
