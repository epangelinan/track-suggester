$(document).ready(function(){
  // Assign the result of the user's choice to variables.
  var important = parseInt($("#important").val());
  var appType = parseInt($("#appType").val());
  var company = parseInt($("#company").val());
  var trait = parseInt($("#trait").val());
  var activity = parseInt($("#activity").val());

  $(".important-group").change(function() {
    important = parseInt($("#important").val());
    alert(important);
  });

  $(".appType-group").change(function() {
    appType = parseInt($("#appType").val());
    alert(appType);
  });

  $(".company-group").change(function() {
    company = parseInt($("#company").val());
    alert(company);
  });

  $(".trait-group").change(function() {
    trait = parseInt($("#trait").val());
    alert(trait);
  });

  $(".activity-group").change(function() {
    activity = parseInt($("#activity").val());
    alert(activity);
  });



  var css_track = 0;
  var java_track = 0;
  var c_track = 0;

  $('form').submit(function(event) {
    event.preventDefault();
    alert("submitted the form");
    $(".result").show();
    alert(important);
    alert (appType);
    alert(company);
    alert (trait);
    alert (activity);
  });
});
