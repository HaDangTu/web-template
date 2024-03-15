const toggleModal = (idSelector, options) => {
  const searchModal = new bootstrap.Modal(idSelector, { ...options });

  return (_, action) => {
    if (action === 'show') {
      searchModal.show();
    } else {
      searchModal.hide();
    }
  }
};

const toggleModalHandler = toggleModal('#search-modal');

const toggleExpandCollapse = (event) => {
  const { target } = event;
  const icon = $(target);
  const button = icon.parent();

  const isExpanded = button.attr('aria-expanded') === 'true';
  icon.text(isExpanded ? 'remove' : 'add');
}

const toggleSidemenuHandler = toggleModal('#side-menu');
