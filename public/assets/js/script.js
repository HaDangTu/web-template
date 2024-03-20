const LOCATIONS = {
  vietnam: 'Việt Nam',
  thailand: 'Thái Lan',
  asia: 'Châu Á',
  europe: 'Châu Âu',
};

window.onload = () => {
  const headerElement = $('#header');
  const headerHeight = parseInt(
    headerElement.css('height').replace(/[a-zA-z]/g, ''),
    10
  );

  $('#side-menu').css('top', headerHeight);

  $('.app-card-link').hover(cardLinkHover('in'), cardLinkHover('out'));

  $('.app-hover-card-container').hover(cardHover('in'), cardHover('out'));

  const date = new Date();
  $('.copyright').html(`&#169; ${date.getFullYear()} All right reserve`);
};

window.onresize = _.debounce(() => {
  const headerElement = $('#header');
  const headerHeight = parseInt(
    headerElement.css('height').replace(/[a-zA-z]/g, ''),
    10
  );

  $('#side-menu').css('top', headerHeight);
}, 500);

window.onscroll = () => {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    $('.header').addClass('scroll');
  } else {
    $('.header').removeClass('scroll');
  }
};

function toggleSideMenu() {
  const isShow = $('#side-menu').attr('data-menu-show') === 'true';

  const sideMenu = $('#side-menu');
  if (!isShow) {
    sideMenu.addClass('show');
  } else {
    sideMenu.removeClass('show');
  }

  sideMenu.attr('data-menu-show', !isShow);
}

/**
 * Handles the hover action for the card link.
 *
 * @param {string} action - The action to be performed on hover ('in' for hover in, 'out' for hover out).
 * @return {function} The event handler function for the hover action.
 */
function cardLinkHover(action) {
  return (event) => {
    const { target } = event;
    const icon = $(target).find('.d-flex .material-symbols-rounded').get(0);

    anime({
      targets: icon,
      rotate: action === 'in' ? 360 : 0,
      duration: 1000,
      easing: 'easeInOutSine',
    });
  };
}

/**
 * Handles the hover action for a card element.
 *
 * @param {string} action - the type of hover action, either 'in' or 'out'
 * @return {function} a function to handle the hover event
 */
function cardHover(action) {
  return (event) => {
    const { target } = event;
    const cardBody = $(target).get(0);

    const opacity = action === 'in' ? 1 : 0;
    anime({
      targets: cardBody,
      opacity,
      duration: 500,
      easing: 'easeInOutSine',
    });
  };
}

function isTourPage() {
  return (
    $('#title').length > 0 &&
    $('#active-breadcrumb').length > 0 &&
    $('#location').length > 0
  );
}

function onTabClick(event) {
  const { target } = event;
  $('.tab').removeClass('active');
  $(target).addClass('active');

  const activeTabId = $(target).attr('data-active-tab');

  $(`#${activeTabId}`).addClass('active');
}

