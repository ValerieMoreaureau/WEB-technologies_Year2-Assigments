function fetchDogsData() {
    return fetch("https://usersdogs.dmytrominochkin.cloud/dogs")
        .then(response => response.json());
}

function fillDogsList(data) {
    let dogsList = $(".dogs-list");
    data.forEach(function(dog) {
        let title = $("<p class='dog-title'>").text(dog.title);
        let sex = $("<p class='dog-sex'>").text(dog.sex);
        let titleSexWrapper = $("<div class='title_sex_wrapper'>").append(title, sex);
        let image = $("<img>").attr("src", "https://usersdogs.dmytrominochkin.cloud" + dog.dogImage).attr("alt", dog.title);

        let listItem = $("<li>").append(image, titleSexWrapper);
        listItem.data("dog", dog);
        dogsList.append(listItem);
    });
}

$(document).ready(function() {
    // Fetch dogs data from API
    fetchDogsData().then(data => {
        fillDogsList(data);
    });
});
