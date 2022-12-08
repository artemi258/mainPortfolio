export default function sidebarShow() {
	const header = document.querySelector('.header'),
		sidebar = document.querySelector('.sidebar');
	window.addEventListener('scroll', () => {
		console.log(document.documentElement.scrollTop);
		if (document.documentElement.scrollTop > header.offsetHeight) {
			sidebar.style.opacity = '1';
		} else {
			sidebar.style.opacity = '0';
		}
	});
}
