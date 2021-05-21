const list = document.createElement('ul');
const info = document.createElement('p');
const html = document.querySelector('html')

info.textContent = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet at fuga vero minus exercitationem laboriosam, ad libero mollitia! Ab laborum dignissimos voluptatibus labore nam consequuntur, impedit veniam id quam distinctio?';

document.body.appendChild(info);
document.body.appendChild(list);

html.onclick = () => {
    const listItem = document.createElement('li');
    const listContent = prompt('Favorite color?');
    listItem.textContent = listContent;
    list.appendChild(listItem);

    listItem.onclick = function(event) {
        event.stopPropagation();
        const listContent = prompt('Change your color');
        this.textContent = listContent;
    };
}