/***    FRONTEND.JS Pseudocode    ***/
    //nope. This is your job!
    
$(document).ready(function() {
	console.log("JS is linked");

	$("#getDataBtn").on("click", function() {
		$.ajax({
			url: "/getMyData",
			method: "GET"
		}).done(function(res) {
			console.log(res);

			$("#dataTable").html("");

			let dataToInsert="";

			for (let i = 0; i < res.length; i++) {
				dataToInsert += "<tr>" + 
				"<th>" = res[i].first_name + "</th>" +
				"<th>" = res[i].last_name + "</th>" +
				"<th>" = res[i].age + "</th>" +
				"<th>" = res[i].enjoys + "</th>" +
				"</tr>";
			} //end loop
			$("#dataTable").html(dataToInsert);
		}); // end done
	}); // end click
}); //end ready