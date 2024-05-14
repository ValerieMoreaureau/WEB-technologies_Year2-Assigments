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

function showModal(dog) {
    let modal = $("#myModal");
    let modalContentWrapper = $(".modal-content");

    modalContentWrapper.empty();
    modalContentWrapper.append("<div class=\"dog-details\"></div>");

    let modalContent = $(".dog-details");
    let sex = $("<p class='dog-details-text'>").text(dog.sex);
    let age = $("<p class='dog-details-text'>").text(dog.age);
    let personality = $("<p class='dog-details-text'>").text(dog.description);

    modalContent.empty();
    modalContentWrapper.prepend("<img src='https://usersdogs.dmytrominochkin.cloud" + dog.dogImage + "' alt='" + dog.title + "'>");
    modalContent.append("<h2>" + dog.title + "</h2>");
    modalContent.append("<hr>");
    modalContent.append("<p class='modal-desc-title'>Sex</p> ");
    modalContent.append(sex);
    modalContent.append("<hr>");
    modalContent.append("<p class='modal-desc-title'>Age</p> ");
    modalContent.append(age);
    modalContent.append("<hr>");
    modalContent.append("<p class='modal-desc-title'>Personality</p> ");
    modalContent.append(personality);
    modalContent.append("<div class='button-wrapper'></div>");

    let buttonWrapper = $(".button-wrapper");
    buttonWrapper.append("<a href='tel:+380989999999'><svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-telephone' viewBox='0 0 16 16'><path d='M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z'/></svg> Adopt Me</a>");
    modal.css("display", "block");

    // Close the modal when clicking outside the modal
    $(window).on("click", function(event) {
        if (event.target == modal[0]) {
            modal.css("display", "none");
        }
    });
}

$(document).ready(function() {
    // Fetch dogs data from API
    fetchDogsData().then(data => {
        fillDogsList(data);

        // Show modal with dog details on list item click
        $(".dogs-list li").on("click", function() {
            let dog = $(this).data("dog");
            showModal(dog);
        });
    });
});
