const categoriesList = document.querySelector("#categories");
const categoriesEl = categoriesList.children;
console.log(`Number of categories: ${categoriesEl.length}`);

[...categoriesEl].forEach((item) => {
    const categoryName = item.querySelector("h2").textContent;
    const categoryLength = item.querySelectorAll("ul li");

    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${categoryLength.length}`)
}
);

