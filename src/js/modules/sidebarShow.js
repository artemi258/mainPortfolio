export default function sidebarShow() {
	const container = document.querySelector('.container');
	if (container.clientWidth < 1440) {
		const header = document.querySelector('.header'),
			sidebar = document.querySelector('.sidebar');
		sidebar.classList.remove('animate__fadeIn');
		window.addEventListener('scroll', () => {
			if (document.documentElement.scrollTop > header.offsetHeight) {
				sidebar.style.opacity = '1';
			} else {
				sidebar.style.opacity = '0';
			}
		});
	}
}
