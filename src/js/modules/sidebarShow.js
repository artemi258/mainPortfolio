export default function sidebarShow() {
	const header = document.querySelector('.header'),
		sidebar = document.querySelector('.sidebar');
	sidebar.classList.remove('animate__fadeIn');
	if (document.documentElement.scrollTop > header.offsetHeight) {
		sidebar.style.opacity = '1';
	} else {
		sidebar.style.opacity = '0';
	}
	window.addEventListener('scroll', () => {
		if (document.documentElement.scrollTop > header.offsetHeight) {
			sidebar.style.opacity = '1';
		} else {
			sidebar.style.opacity = '0';
		}
	});
}
