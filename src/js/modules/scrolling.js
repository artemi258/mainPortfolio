 export default function scrolling(trigger, block) {

    const arrow = document.querySelector(trigger),
    header = document.querySelector(block);

    function screenDown() {
      const height = header.offsetHeight;
      scrollTo(0, height)
    }

    arrow.addEventListener('click', screenDown)
}
