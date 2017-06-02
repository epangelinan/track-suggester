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
    //alert(important);
  });

  $(".appType-group").change(function() {
    appType = parseInt($("#appType").val());
    //alert(appType);
  });

  $(".company-group").change(function() {
    company = parseInt($("#company").val());
    //alert(company);
  });

  $(".trait-group").change(function() {
    trait = parseInt($("#trait").val());
    //alert(trait);
  });

  $(".activity-group").change(function() {
    activity = parseInt($("#activity").val());
    //alert(activity);
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

    //alert("submitted the form");
    $('form').hide();
    $(".result").show();

    if (css_track >=3) {
      result = "CSS/Design";
    } else if (java_track >=3) {
      result = "Java/Android";
    } else if (c_track >=3) {
      result = "C#/.NET";
    }

    $(".bestTrack").text(result);
    //alert("css:" + css_track);
    //alert ("java:" + java_track);
    //alert("c:" + c_track);
    //alert("result is " + result)
  });
});
