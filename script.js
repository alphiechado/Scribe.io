const promise = document.getElementById("promise");
const scriptureText = document.getElementById("scriptureText")
const scriptures = [
  "Psalm 145:9 The Lord is good to all; he has compassion on all he has made.",
  "Psalm 34:8 Taste and see that the Lord is good; blessed is the one who takes refuge in him.",
  "He gives strength to the weary and increases the power of the weak.",
];

promise.addEventListener("click", ()=>{
  const displayPromises = scriptures[Math.floor(Math.random () * scriptures.length)];
  // alert(displayPromises)
  scriptureText.innerHTML = displayPromises

})