$(document).ready(function () {
    httpGet("/approvevolunteer", function (response) {
        var i = 0;
        response.forEach(function (element) {
            $('#listofmemberss').append('<div class="cards-view"> <div class="profile-card col-xs-6 col-sm-3 col-md-3 col-lg-3"> <div>  <img src="../../../../helperfiles/img/sakthi.JPG" class="profile-card-img">  <h4 class="profile-card-title">' + element.profile.name + '</h4> <h5 class="profile-card-title">' + element.role + '</h5> <h5 class="profile-card-title">' + element.profile.profileinfo.work_type + '</h5> </div> <div class="col-xs-6"><button class="profile-card-btn" type="submit" id="submit' + i + '">Accept</button></div><div class="col-xs-6"><button class="profile-card-btn" type="submit">Deny</button></div></div></div>');
            var id = "#submit" + i;
            $(id).click(function () {
                // window.location.href = "../../../../shared/viewvolunteerprofile/en/viewvolunteerprofile.html?id:" + element.id;
                var data = {};
                data.id = element.id;
                httpPost("/changestatus", data, function (response) {
                    console.log(response);
                });

            });
            i++;
        }, this);
    })
})