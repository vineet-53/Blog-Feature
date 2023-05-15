const contentNode = document.querySelectorAll('.content[data-content]');
const contentArr = Array.from(contentNode);
contentArr.forEach((content) => {
  if (content.innerHTML.length > 100) {
    content.innerHTML = content.innerHTML.slice(0, 100) + '...';
    const readMore = document.createElement('a');
    readMore.href = `/posts/show/${content.dataset.contentId}`;
    readMore.innerHTML = 'Read More';
    readMore.style.color = 'blue';
    content.append(readMore);
  }
});
