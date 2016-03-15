$( document ).ready(function() {

  // display the autocomplete
  // search results when the search
  // input has at least one character
  $("#autocomplete").keyup(function() {
    var value = $("#autocomplete").val();
    if (value.length>0) {
      $(".autocomplete-suggestions").addClass("display-block");
      $(".topbar").addClass("height-full");
      $("body").addClass("overflow-hidden");
    }
    else {
      $("body").removeClass("overflow-hidden");
      $(".topbar").removeClass("height-full");
      $(".autocomplete-suggestions").removeClass("display-block");
    }
  });

  // display the mobile autocomplete
  // search results when the search
  // input has at least one character
  $("#mobile-autocomplete").keyup(function() {
    var value = $("#mobile-autocomplete").val();
    if (value.length>0) {
      $(".autocomplete-suggestions").addClass("display-block");
      $(".topbar").addClass("height-full");
      $("body").addClass("overflow-hidden");
    }
    else {
      $("body").removeClass("overflow-hidden");
      $(".topbar").removeClass("height-full");
      $(".autocomplete-suggestions").removeClass("display-block");
    }
  });


  // open mobile search
  $( ".search-toggle" ).click(function() {
    $("#nav").removeClass("nav-fullpage-visible");
    $(".mobile-search").toggleClass("mobile-search-visible");
    $('#mobile-autocomplete').val('');
    var value = $("#mobile-autocomplete").val();
    if (value.length>0) {
      $(".autocomplete-suggestions").addClass("display-block");
      $(".topbar").addClass("height-full");
      $("body").addClass("overflow-hidden");
    }
    else {
      $("body").removeClass("overflow-hidden");
      $(".topbar").removeClass("height-full");
      $(".autocomplete-suggestions").removeClass("display-block");
      $("#mobile-autocomplete").blur();
    }
  });


  // pin elements to top of
  // container elment
  $(".pinned").pin({
    minWidth: 640
  })


  // mobile navigation slider
  $( ".nav-toggle" ).click(function() {
    $(".topbar").removeClass("height-full");
    $(".autocomplete-suggestions").removeClass("display-block");
    $("#mobile-autocomplete").blur();
    $(".mobile-search").removeClass("mobile-search-visible");
    $("#nav").toggleClass("nav-fullpage-visible");
  });


  // animate elements
  $("#slide-up").addClass("slide-up");
  $("#fade-out").addClass("fade-out");


  // check if passwords match
  $("#password-confirm").keyup(checkPasswordMatch);


  // enable acordian dropdown
  // for the terminal, pass the number
  // of rows
  terminalAcordian(4);


  //----------
  // FUNCTIONS
  //----------

  // Check passwords
  function checkPasswordMatch() {
    var password = $("#password").val();
    var passwordConfirm = $("#password-confirm").val();

    if (password != passwordConfirm){
      $("#error-message").removeClass("display-none");
      $("#error-message").html("Uh oh, passwords do not match.");
    }
    else{
      $("#error-message").addClass("display-none");
    }
  }


  // for all clusters in project
  // execute the showModal function
  // can we loop through the clusters?

  // below function takes in the id of a link
  // the link must have attribute of data-modal
  // which holds the id of the modal
  function showModal(id) {
    console.log(id);
    var modal = "#" +$(id).attr("data-modal");
    console.log(modal);
    $(id).click(function() {
      console.log("clcked");
      $(modal).addClass("fade-in");
      $(modal).removeClass("display-none");
    });
  }

  function closeAllModals() {
    $(".modal").removeClass("fade-in");
    $(".modal").addClass("display-none");
  }

  $(".close-modal").click(function() {
    closeAllModals();
  });


  // terminal acordian
  // execute this function and pass
  // the number of acordians in the terminal
  // as the id
  function terminalAcordian(id) {
    for (var i = 1; i <= id; i++) {
      (function (i) {
        $("#toggle-"+i).click(function(){
          $("#expand-"+i).toggleClass("display-block");
          if ($("#toggle-"+i).find(".terminal-arrow").text() == "↓") {
            $("#toggle-"+i).find(".terminal-arrow").html("→");
          }
          else {
            $("#toggle-"+i).find(".terminal-arrow").html("↓");
          }
        });
      }(i));
    }
  }

});
