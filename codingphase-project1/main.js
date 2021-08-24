let notify = document.querySelector('.notify');
let albums = document.querySelectorAll('.album');
let itemsTotal = document.querySelector('.items-total');
let saveBtn = document.querySelector('.button');

let albumsSelected = [];
let i = 0;

while(i < albums.length) {
  albums[i].onclick = function(e) {
    let albumTitle = this.querySelector('.title').textContent;

    
    

    if(!this.className.includes('selected')) {
      this.classList.add('selected')
      albumsSelected.push(albumTitle)
    } else {
      this.classList.remove('selected')
      albumsSelected = albumsSelected.filter(function(item){
        return item !== albumTitle;
      })
    }

   console.log(albumsSelected)
  }

  i++;
}

saveBtn.onclick = function() {
  notify.classList.add('active');
  itemsTotal.textContent = `${albumsSelected.length} items saved`;

  setTimeout(function() {
    notify.classList.remove('active')
  }, 2000)
}
