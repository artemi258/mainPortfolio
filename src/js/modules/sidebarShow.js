export default function sidebarShow() {
	const header = document.querySelector('.header'),
		sidebar = document.querySelector('.sidebar'),
		sd = '1212';
	console.log(sd);
	window.addEventListener('scroll', () => {
		if (document.documentElement.scrollTop > header.offsetHeight) {
			sidebar.style.display = 'block';
		} else {
			console.log('kek');
			sidebar.style.display = 'none';
		}
	});
}
//webpack второй раз не перезагружает страницу после изменений
