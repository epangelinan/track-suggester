$(document).ready(function(){
  // Assign the result of the user's choice to variables.
  var important = parseInt($("#important").val());
  var appType = parseInt($("#appType").val());
  var company = parseInt($("#company").val());
  var trait = parseInt($("#trait").val());
  var activity = parseInt($("#activity").val());

  var css_track = 0;
  var java_track = 0;
  var c_track = 0;

  var result = "undecided";

  $(".important-group").change(function() {
    important = parseInt($("#important").val());
  });

  $(".appType-group").change(function() {
    appType = parseInt($("#appType").val());
  });

  $(".company-group").change(function() {
    company = parseInt($("#company").val());
  });

  $(".trait-group").change(function() {
    trait = parseInt($("#trait").val());
  });

  $(".activity-group").change(function() {
    activity = parseInt($("#activity").val());
  });

  $('form').submit(function(event) {
    event.preventDefault();
    if (important === 1) {
      css_track += 1;
    } else if (important === 2) {
      java_track += 1;
    } else if (important === 3){
      c_track += 1;
    }

    if (appType === 1) {
      css_track += 1;
    } else if (appType === 2) {
      java_track += 1;
    } else if (appType === 3){
      c_track += 1;
    }

    if (company === 1) {
      css_track += 1;
    } else if (company === 2) {
      java_track += 1;
    } else if (company === 3){
      c_track += 1;
    }

    if (trait === 1) {
      css_track += 1;
    } else if (trait === 2) {
      java_track += 1;
    } else if (trait === 3){
      c_track += 1;
    }

    if (activity === 1) {
      css_track += 1;
    } else if (activity === 2) {
      java_track += 1;
    } else if (activity === 3){
      c_track += 1;
    }

    $('form').hide();
    $(".result").show();

    if (css_track >= 3) {
      result = "CSS/Design";
    } else if (java_track >= 3) {
      result = "Java/Android";
    } else if (c_track >= 3) {
      result = "C#/.NET";
    }

    $(".bestTrack").text(result).fadeIn();

    if (result === "Java/Android") {
      $(".android").slideDown();
    } else if (result === "CSS/Design") {
      $(".webDesign").slideDown();
    } else if (result === "C#/.NET") {
      $(".cSharp").slideDown();
    }
  });
});
