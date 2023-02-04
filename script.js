let inputTextArea = document.getElementById('input-area');
let characterCount = document.getElementById("charac-count");
let wordCount = document.getElementById('word-count');
 
inputTextArea.addEventListener('input', () => {
   //count characters
  characterCount.textContent = inputTextArea.value.length;
  //word count
  let txt = inputTextArea.value.trim()
  wordCount.textContent = txt.split(/\s+/).filter((item) => item).length
})