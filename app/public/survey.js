$("#submit").on("click", function (event) {
    event.preventDefault();

    var scores = [
        $("#q1").val(),
        $("#q2").val(),
        $("#q3").val(),
        $("#q4").val(),
        $("#q5").val(),
        $("#q6").val(),
        $("#q7").val(),
        $("#q8").val(),
        $("#q9").val(),
        $("#q10").val()
    ]

    var scoreString = JSON.stringify(scores);

    var userResults = {
        name: $("#name").val().trim(),
        photo: $("#photo").val().trim(),
        scores: scoreString
    };
    console.log(userResults);
    //stringify the scores



    $.post("/api/answers", userResults)
    .then(function(data) {

        $('#myModal').modal('show');
        $("#friend-name").text(data.name);
        $("#friend-photo").attr("src", data.photo);
        console.log(data);


    });
        $("#name").val("");  
        $("#photo").val("");  
        $("#q2").val("");
        $("#q1").val("");
        $("#q3").val("");
        $("#q4").val("");
        $("#q5").val("");
        $("#q6").val("");
        $("#q7").val("");
        $("#q8").val("");
        $("#q9").val("");
        $("#q10").val(""); 
        $("myModal").val(""); 


});