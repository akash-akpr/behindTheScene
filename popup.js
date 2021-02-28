var sceneData = {};

$(function(){
  $('#sentSceneData').click(function(){
    chrome.storage.sync.get(['minutes','seconds','songName'],function(sceneInfo){
      if($('#minutes').val() && $('#seconds').val() && $("#songName").val()){
      var time = parseInt($("#minutes").val() * 60) + parseInt($('#seconds').val());
      sceneData[time] = $('#songName').val();
      for (var key in sceneData){
        chrome.extension.getBackgroundPage().console.log(key + ":" + sceneData[key]);
      };
      $('#minutes').val('');
      $('#seconds').val('');
      $('#songName').val('');

    }
      else{
        alert("You have not inputted valid values");
      }
    })
  })
});

chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT},
   function(tabs){
      alert(tabs[0].url.substring(30,38));
   }
);