import View from './view';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;

      const goTOPage = +btn.dataset.goto;

      handler(goTOPage);
    });
  }

  _generateMarkup() {
    const curPage = this._data.page;

    const numPage = Math.ceil(
      this._data.result.length / this._data.resultPerPage
    );
    console.log(numPage);

    // Page 1, and there other pages
    if (curPage === 1 && numPage > 1) {
      return `
        <button data-goto ="${
          curPage + 1
        }" class="btn--inline pagination__btn--next">
          <span>Page ${curPage + 1}</span>
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-right"></use>
          </svg>
        </button>
      `;
    }
    // Last page
    if (curPage === numPage && numPage > 1) {
      return `
        <button data-goto ="${
          curPage - 1
        }" class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
            <use href="${icons}.svg#icon-arrow-left"></use>
          </svg>
          <span>Page ${curPage - 1}</span>
        </button>
      `;
    }
    // Other page
    if (curPage < numPage) {
      return `
        <button data-goto ="${
          curPage + 1
        }" class="btn--inline pagination__btn--next">
          <span>Page ${curPage + 1}</span>
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-right"></use>
          </svg>
        </button>
        <button data-goto ="${
          curPage - 1
        }" class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
            <use href="${icons}.svg#icon-arrow-left"></use>
          </svg>
          <span>Page ${curPage - 1}</span>
        </button>
      `;
    }
    // Page 1, and there no other pages
    return '';
  }
}

export default new PaginationView();
