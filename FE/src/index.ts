// LINK polyfill
import 'whatwg-fetch';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

// LINK render components
import {
  renderCommentsTitle,
  renderCommentsList,
  renderCommentsPagination,
  renderCommentsForm,
} from './App';

// LINK global style
import './style/index.css';

const App = async () => {
  const template = `
    <header class="comments-title"></header>
    <main>
      <section class="comments-list"></section>
      <section class="comments-pagination"></section>
      <section class="comments-form" style="margin:10px 0;"></section>
    </main>  
  `;

  document.getElementById('App')!.innerHTML = await template;
  renderElement();
};

const renderElement = () => {
  renderCommentsTitle();
  renderCommentsList();
  renderCommentsPagination();
  renderCommentsForm();
};

export default App();
