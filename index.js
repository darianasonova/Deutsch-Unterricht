const articles = document.querySelectorAll("article");
function ShowArticle(index){
    for(let article of articles){
        article.style.display = "none";
    }
    articles[index].style.display = "block";

}