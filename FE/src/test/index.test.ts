import { initComments, postComments, getPagination } from '../api';
import { COMMENTS_API } from '../config';
import { formattedComments } from '../utils';
import 'whatwg-fetch';

// SECTION REST CR API Check
describe('Checking API Group', () => {
  test('initComments function exists', () => {
    expect(initComments).toBeDefined();
  });

  test('postComments function exists', () => {
    expect(postComments).toBeDefined();
  });

  test('getPagination function exists', () => {
    expect(getPagination).toBeDefined();
  });
});

// SECTION Server Response Checking
describe('Server Response Check', () => {
  test('Response from Comments Data of the first page should be 200', async () => {
    const response = await fetch(COMMENTS_API);
    expect(response.status).toEqual(200);
  });

  test('Response from adding a New Comment should be 200', async () => {
    const testReqBody = {
      author: 'Jest Response Test Author',
      comment: 'Jest Response Test Comment',
    };
    const response = await fetch(COMMENTS_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testReqBody),
    });
    expect(response.status).toEqual(200);
  });

  test('Response from Comments Data of Page should be 200', async () => {
    const pageNumber = 1;
    const response = await fetch(`${COMMENTS_API}/page/${pageNumber}`);
    expect(response.status).toEqual(200);
  });
});

// SECTION type of fetched data {author: string, comment: string, id: string}
describe('Checking Fetched Comments Type', () => {
  test('Type of Author should be String', async () => {
    const response = await fetch(COMMENTS_API);
    const result = await response.json();
    const formattedItems = await formattedComments(result);

    formattedItems.forEach((item) => {
      expect(typeof item.author).toEqual('string');
    });
  });

  test('Type of Comment should be String', async () => {
    const response = await fetch(COMMENTS_API);
    const result = await response.json();
    const formattedItems = await formattedComments(result);

    formattedItems.forEach((item) => {
      expect(typeof item.comment).toEqual('string');
    });
  });

  test('Type of ID should be String', async () => {
    const response = await fetch(COMMENTS_API);
    const result = await response.json();
    const formattedItems = await formattedComments(result);

    formattedItems.forEach((item) => {
      expect(typeof item.id).toEqual('string');
    });
  });
});

// SECTION pagination unit test
describe('Pagination Limitation Check', () => {
  test('First Page should be Limited Backward', () => {
    let pageNumber = 1;
    const backward = jest.fn((page: number) => {
      page -= 1;
      if (page < 1) {
        page += 1;
        return { page, message: '첫 페이지입니다' };
      }
    });

    expect(backward(pageNumber)).toEqual({
      page: 1,
      message: '첫 페이지입니다',
    });
  });

  test('Last Page should be Limited Forward', async () => {
    // NOTE random max page
    let maxPage = Math.floor(Math.random() * 10) + 1;
    // NOTE fetch result length empty
    const fetchResultLength = 0;
    const forward = jest.fn((fetchLength, page) => {
      page += 1;
      if (fetchLength === 0) {
        page -= 1;
        return { page, message: '마지막 페이지입니다' };
      }
    });

    expect(forward(fetchResultLength, maxPage)).toEqual({
      page: maxPage,
      message: '마지막 페이지입니다',
    });
  });
});
