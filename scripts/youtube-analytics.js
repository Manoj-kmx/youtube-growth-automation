function fetchYouTubeStats() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("YouTube Data");

  if (!sheet) {
    sheet = SpreadsheetApp.getActiveSpreadsheet().insertSheet("YouTube Data");
  }

  if (sheet.getLastRow() === 0) {
    sheet.appendRow([
      "Video ID",
      "Title",
      "Views",
      "Likes",
      "Comments"
    ]);
  }

  var apiKey = "YOUR_YOUTUBE_API_KEY";
  var channelId = "YOUR_CHANNEL_ID";

  var searchUrl = "https://www.googleapis.com/youtube/v3/search?key=" + apiKey +
                  "&channelId=" + channelId +
                  "&part=snippet,id&order=date&maxResults=10";

  var response = UrlFetchApp.fetch(searchUrl);
  var data = JSON.parse(response.getContentText());

  data.items.forEach(function(item) {
    if (item.id.videoId) {
      var videoId = item.id.videoId;

      var statsUrl = "https://www.googleapis.com/youtube/v3/videos?part=statistics,snippet&id=" + videoId + "&key=" + apiKey;
      var statsResponse = UrlFetchApp.fetch(statsUrl);
      var statsData = JSON.parse(statsResponse.getContentText());

      var video = statsData.items[0];

      sheet.appendRow([
        videoId,
        video.snippet.title,
        video.statistics.viewCount,
        video.statistics.likeCount,
        video.statistics.commentCount
      ]);
    }
  });
}
