import { postComments } from '../api';
import { commentListState } from '../store';

const CommentsForm = () => {
  const { authorTitle, commentTitle } = commentListState;

  // NOTE form generator
  const formTemplate = document.createElement('form') as HTMLFormElement;
  formTemplate.classList.add('card');
  formTemplate.classList.add('p-5');
  formTemplate.addEventListener('submit', submitComment);

  // NOTE button generator
  const btn = document.createElement('button') as HTMLButtonElement;
  btn.setAttribute('type', 'submit');
  btn.classList.add('btn');
  btn.classList.add('btn-secondary');
  btn.innerText = '작성';

  // NOTE combine
  formTemplate.appendChild(generateInput(authorTitle.id, authorTitle.name));
  formTemplate.appendChild(generateInput(commentTitle.id, commentTitle.name));
  formTemplate.appendChild(btn);

  return formTemplate;
};

// SECTION input generator
const generateInput = (id: string, name: string) => {
  const label = document.createElement('label');
  label.classList.add('form-label');
  label.setAttribute('for', `${id}`);
  label.innerText = `${name}: `;

  const input = document.createElement('input') as HTMLInputElement;
  input.classList.add('form-control');
  input.setAttribute('id', `${id}`);
  input.setAttribute('name', `${id}`);
  input.setAttribute('required', 'true');

  const div = document.createElement('div') as HTMLDivElement;
  div.classList.add('mb-3');
  div.addEventListener('keyup', writeInput);

  // NOTE combine
  div.appendChild(label);
  div.appendChild(input);

  return div;
};

// SECTION update input state
const writeInput = (e: any) => {
  const { id, value }: { id: string; value: string } = e.target;
  const { authorTitle, commentTitle } = commentListState;
  if (id === authorTitle.id) commentListState.author = value;
  if (id === commentTitle.id) commentListState.comment = value;
};

// SECTION submit
const submitComment = (e: any) => {
  e.preventDefault();
  const { author, comment } = commentListState;
  try {
    if (author.length < 1) throw new Error('이름은 한글자 이상 작성해주세요');
    if (comment.length < 10) throw new Error('본문은 10글자 이상 작성해주세요');
    const submitData = {
      author,
      comment,
    };
    // NOTE reset value form/state
    e.target[0].value = e.target[1].value = '';
    [
      commentListState.author,
      commentListState.comment,
      commentListState.page,
    ] = ['', '', 1];

    postComments(submitData);
  } catch (error) {
    alert(`${error} !!!`);
    console.log(`${error} !!!`);
  }
};

export default CommentsForm;
