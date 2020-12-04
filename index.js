var image = document.querySelector("img");
var src = 'https://cdn.manhwatop.com/manga_90eba6208d24afb789afa8f92840fba7/chapter_2//chap_2_20.jpg';

fetch(src,{referer:"https://manhwatop.com/",mode:"no-cors",method:"get",headers:{":authority":"cdn.manhwa.com"}})
.then(res => res.blob())
.then(blob => {
  console.log(blob);
  image.src = URL.createObjectURL(blob);
});