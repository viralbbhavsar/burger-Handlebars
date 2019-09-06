// Make sure we wait to attach our handlers until the DOM is fully loaded.

$(function() {
  $(".eat-burger").on("click", function(event) {
    var id = $(this).data("id");
    var burgerState = {
      devoured: true
    };
    
    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: burgerState
    }).then(
      function() {
        location.reload();
      }
    );
  });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#ca").val().trim(),
        devoured: 0
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new Burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  