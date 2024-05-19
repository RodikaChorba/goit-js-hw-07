console.log(`Task-1`);

let categories = document.querySelectorAll('ul#categories > .item');

console.log(`У списку ${categories.length} категорії.`);

categories.forEach(category => {
    let title = category.querySelector('h2').textContent;

    let items = category.querySelectorAll('ul > li');

    console.log(`Категорія: ${title}`);
    console.log(`Кількість елементів: ${items.length}`);
});
