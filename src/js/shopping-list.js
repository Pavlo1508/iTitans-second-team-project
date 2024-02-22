const localStorageData = JSON.parse(localStorage.getItem('yourKey')) || [];

function renderObjects(objects) {

    const container = document.getElementById('.renderContainer');
    container.innerHTML = '';

    objects.forEach((object) => {
        const element = document.createElement('div');
        element.textContent = JSON.stringify(object);
        container.appendChild(element);
    });
}


function paginateObjects(objects, objectsPerPage) {
    const pageCount = Math.ceil(objects.length / objectsPerPage);
    const paginatedObjects = [];

    for (let i = 0; i < pageCount; i++) {
        const startIndex = i * objectsPerPage;
        const endIndex = startIndex + objectsPerPage;
        paginatedObjects.push(objects.slice(startIndex, endIndex));
    }

    return { paginatedObjects, pageCount };
}


const objectsPerPage = 3;
const { paginatedObjects, pageCount } = paginateObjects(localStorageData, objectsPerPage);

renderObjects(paginatedObjects[0]);

console.log(`Page count: ${pageCount}`);