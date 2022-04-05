$.get("/api/Userlist").done((result) => {
    for (let i = 0; i < result.length; i++) {
        const nameElement = $("<span></span>").html(result[i].Name);
        const ageElement = $("<span></span>").html(result[i].Age);
        const deleteButton = $("<button class='delete-button'></button>").text("Delete");
        const listElement = $("<li></li>");
        deleteButton.click(() => {
            $.ajax({
                url: "/api/Userlist/" + result[i].Id,
                method: "Delete"
            }).done((output) => {
                listElement.remove();
            })
        })
        listElement.append(nameElement);
        listElement.append(ageElement);
        listElement.append(deleteButton);
        $("#users-list").append(listElement);

    }
})

$("#add-button").click(() => {
   
    const nameInput = $("<input type=\"text\" placeholder=\"Name\"/>");
    const ageInput = $("<input type=\"text\" placeholder=\"Age\"/>");
    const saveButton = $("<button class ='delete-button'></button>").text("Save");
    const listElement = $("<li></li>");
    console.log(nameInput, ageInput, saveButton);
    saveButton.click(() => {
        $.ajax({
            url: "/api/Userlist/",
            method: "POST",
            data: {
                Name: nameInput.val(),
                Age: ageInput.val()
            }
        }).done((result) => {
            listElement.remove();
            const nameElement = $("<span></span>").html(result.Name);
            const ageElement = $("<span></span>").html(result.Age);
            const deleteButton = $("<button class ='delete-button'></button>").text("Delete");
            const newListElement = $("<li></li>");
            deleteButton.click(() => {
                $.ajax({
                    url: "/api/Userlist/" + result.Id,
                    method: "Delete"
                }).done((output) => {
                    newListElement.remove();
                })
            })
            console.log(nameElement, ageElement, deleteButton)
            newListElement.append(nameElement);
            newListElement.append(ageElement);
            newListElement.append(deleteButton);
            $("#users-list").append(newListElement);

        })
       
    })
    listElement.append(nameInput);
    listElement.append(ageInput);
    listElement.append(saveButton);
    $("#users-list").append(listElement);

 })
  