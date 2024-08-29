let scrollcontainer = document.querySelector(".gallery");
        let nextbtn = document.getElementById("nextbtn"); // Corrected: getElementById
        let backbtn = document.getElementById("backbtn"); // Corrected: getElementById

        scrollcontainer.addEventListener("wheel", (evt) => {
            evt.preventDefault();
            scrollcontainer.scrollLeft += evt.deltaY;
        });

        nextbtn.addEventListener("click", () => {
            scrollcontainer.scrollLeft += 900;
        });

        backbtn.addEventListener("click", () => {
            scrollcontainer.scrollLeft -= 900;
        });
        var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}
const search_input = document.getElementById('search-input');
const text_clear = document.getElementById('text-clear');
search_input.addEventListener('focus', () => {
    document.getElementById('search-container').borderBottom = '2px solid black';

});
search_input.addEventListener('input', () => {
    if (search_input.value != "") {
        text_clear.style.display = 'block';
        text_clear.addEventListener('click', () => {
            search_input.value = '';
            text_clear.style.display = 'none';
        })
    }
})
function openSidebar(id, cover) {
    console.log(document.getElementById(id), cover);
    console.log(id)
    if(id==='sidebar-1') {
        document.getElementById(id).style.width= 'fit-content';
    }
    document.getElementById(id).classList.toggle('active');
    document.getElementById(cover).classList.toggle('active');

}

function closeSidebar(id, cover) {
    console.log(document.getElementById(id), cover)
    if(id==='sidebar-1') {
        document.getElementById(id).style.width = '0px';
    }
    document.getElementById(id).classList.remove('active');
    document.getElementById(cover).classList.remove('active');

}

function openSecondBar(id_1, id_2, id_3, id_4) {
    document.getElementById(id_1).style.display = 'block';
    document.getElementById(id_2).style.display = 'none';
    document.getElementById(id_3).style.display = 'none';
    document.getElementById(id_4).style.display = 'none';
}

function closeBothSidebar(sidebar, small_sidebar) {
    document.getElementById(sidebar).classList.remove('active');
    document.getElementById('cover').classList.remove('active');
    document.getElementById(small_sidebar).classList.remove('active');
    document.getElementById('small-cover').classList.remove('active');

}
function closeThreeSidebar(sidebar, small_sidebar, mini_sidebar) {
    document.getElementById(sidebar).classList.remove('active');
    document.getElementById('cover').classList.remove('active');
    document.getElementById(small_sidebar).classList.remove('active');
    document.getElementById('small-cover').classList.remove('active');
    document.getElementById(mini_sidebar).classList.remove('active');
    document.getElementById('mini-cover').classList.remove('active');

}


document.addEventListener('mousemove', function (e) {
    const cursor = document.getElementById('custom-cursor-1');
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});
document.addEventListener('mousemove', function (e) {
    const cursor = document.getElementById('custom-cursor-2');
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});


        