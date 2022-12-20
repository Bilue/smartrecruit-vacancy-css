import './style.css';
import './widget.css';

const contentNode = document.createElement('div');
contentNode.innerHTML = `
  <div>
    <h1>${import.meta.env.VITE_COMPANY_CODE} Vacancies Demo</h1>
  </div>
`;

document.querySelector('#app').appendChild(contentNode);
