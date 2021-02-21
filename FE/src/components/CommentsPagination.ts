import { commentListState } from '../store';
import { getPagination } from '../api';

const CommentsPagination = () => {
  const divTemplate = document.createElement('div') as HTMLDivElement;
  divTemplate.setAttribute('role', 'group');
  divTemplate.classList.add('btn-group');

  const { PrevBtn, nextBtn } = commentListState;

  divTemplate.appendChild(generateBtn(PrevBtn.id, PrevBtn.name));
  divTemplate.appendChild(generateBtn(nextBtn.id, nextBtn.name));

  return divTemplate;
};

// SECTION pagination btn generator
const generateBtn = (id: string, text: string) => {
  const btn = document.createElement('button') as HTMLButtonElement;
  btn.setAttribute('type', 'button');
  btn.setAttribute('id', id);
  btn.innerText = text;
  btn.classList.add('btn');
  if (id === 'prev') btn.classList.add('btn-outline-danger');
  if (id === 'next') btn.classList.add('btn-outline-primary');

  btn.addEventListener('click', getPagination);
  return btn;
};

export default CommentsPagination;
