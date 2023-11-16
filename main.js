function autoLocalDate(){
     let date = new Date();
     let setDate = date.toLocaleString('en-EN',
          {
               month: 'short',
          }
     );

     let formattedDate = `${setDate}<span class="day">${date.getDate()}</span>`;
     document.getElementById('dateContainer').innerHTML = formattedDate;
}

function fixedScrollProgress(){
     let progressContainer = document.getElementById("progressContainer");

     window.addEventListener('scroll', () => {
          let scrolledPixels = document.documentElement.scrollTop;
          let totalHeightInVh = (document.documentElement.scrollHeight / window.innerHeight) * 100;
          let scrolledVh = (scrolledPixels / totalHeightInVh) * 100;

          if (scrolledVh > 30) {
               progressContainer.style.position = "fixed";
               progressContainer.style.top = "50%";
               progressContainer.style.transform = "translateY(-50%)";
          } else{
               progressContainer.style.position = "static";
               progressContainer.style.top = "auto";
               progressContainer.style.transform = "none";
          }

        console.log("Vh scrollés : " + scrolledVh);
     })
}

autoLocalDate();
fixedScrollProgress();