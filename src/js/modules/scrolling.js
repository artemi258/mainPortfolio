 export default function scrolling() {

    const arrow = document.querySelector('.header__arrow'),
    header = document.querySelector('.header');

    function screenDown() {
      const height = header.offsetHeight;
      scrollTo(0, height)
    }

    arrow.addEventListener('click', screenDown)
}
