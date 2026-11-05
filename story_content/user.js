function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6ZhSmQ7NkJi":
        Script1();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSongku');
audio.src="musiklatar.mp3";
audio.load();
audio.play();
audio.volume=0.5;
}

