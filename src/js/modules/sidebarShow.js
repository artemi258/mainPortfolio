export default function sidebarShow() {
	const header = document.querySelector('.header'),
		sidebar = document.querySelector('.sidebar'),
		sd = '8923r';
	console.log(sd);
	window.addEventListener('scroll', () => {
		if (document.documentElement.scrollTop > header.offsetHeight) {
			sidebar.style.display = 'block';
		} else {
			console.log('none');
			sidebar.style.display = 'none';
		}
	});
}
//webpack второй раз не перезагружает страницу после изменений
