//** preloader **//

//** preloader **//

//** animation **//
document.addEventListener('load', animation());

function animation() {
  let observer = new IntersectionObserver((entries) => {
    let a = entries[0].target.querySelectorAll('[data-animation-class]');
    for (b of a) {
      if (!b.classList.contains("animation")) {
        b.classList.add("animation");
        observer.unobserve(entries[0].target);
      }
    }
  }, {
    threshold: 0.05
  });

  let blocks = document.querySelectorAll('[data-animation]');
  for (block of blocks) {
    observer.observe(block);
  }
}
//** animation **//


//** video **//
document.addEventListener('load', video());

function video() {
  const videoAll = document.querySelectorAll('[data-video-url]');

  for (const video of videoAll) {
    video.addEventListener('click', () => {
      if (video.classList.contains('active')) {
        return
      }

      video.innerHTML = '';
      let newVideo = document.createElement("video");
      let source = document.createElement("source");

      source.src = video.dataset.videoUrl;
      source.type = 'video/mp4';

      newVideo.append(source);
      newVideo.controls = true;
      newVideo.play();

      video.append(newVideo);
      video.classList.add('active');
    })
  }
}
//** video **//

//** review **//
review();

function review() {
  let reviews = document.querySelectorAll('.review__item');
  let a = 0;
  setInterval(function() {
    for (review of reviews) {
      review.classList.remove('active');
    }

    reviews[a].classList.add('active');
    a++;

    if (a == reviews.length) {
      a = 0;
    }
  }, 5000);
}
//** review **//

//** form **//
buyForm.onsubmit = async (e) => {
    e.preventDefault();

    let response = await fetch('mail.php', {
      method: 'POST',
      body: new FormData(buyForm)
    });

    let result = await response;

	if(result.status == 200){
		document.querySelector('.buy__complete').classList.add('active');
	}
};
//** form **//
