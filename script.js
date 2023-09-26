var arr=[
    {
        img:"https://images.unsplash.com/photo-1452689842785-5f14840dca48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d2ludGVyJTIwY2xvdGhlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    {
        img:"https://images.unsplash.com/photo-1608063615781-e2ef8c73d114?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGphY2tldHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    {
        img:"https://plus.unsplash.com/premium_photo-1674719144570-0728faf14f96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGphY2tldHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    {
        img:"https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2ludGVyJTIwY2xvdGhlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    {
        img:"https://images.unsplash.com/photo-1603319373788-680871da9246?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    },
    {
        img:"https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8amFja2V0fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
    }
]
var arr1=[
    {
      img: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdpbnRlciUyMGNsb3RoZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
    },
    {
      img: "https://images.unsplash.com/photo-1611246539484-1f8e71d19ea5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdpbnRlciUyMGNsb3RoZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1671658222199-7061b54d29dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fHdpbnRlciUyMGNsb3RoZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
    },
    {
      img: "https://images.unsplash.com/photo-1612808299121-1262e5804f67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fHdpbnRlciUyMGNsb3RoZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
    },
    {
        img:"https://images.unsplash.com/photo-1601582067612-7a347874f27d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzF8fHdpbnRlciUyMGNsb3RoZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
    },
    {
        img:"https://images.unsplash.com/photo-1609178800025-2f253f8e5a6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTB8fHdpbnRlciUyMGNsb3RoZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
    }
  ]

var clutter = "";

var clutter = "";
arr.forEach(function (elem, index) {
    clutter += `
    <div class="im" id="${index}">
        <img src="${elem.img}" width="200" height="300" alt="">
        <button class="shop-btn">Add to Cart</button>
    </div>`;
});

var imageContainer = document.getElementById("imageContainer");
imageContainer.innerHTML = clutter;

var clutter1 = "";
arr1.forEach(function (elem, index) {
    clutter1 += `
    <div class="im" id="${index}">
        <img src="${elem.img}" width="200" height="300" alt="" position: absolute; top: -50%; left: 0; z-index: 9999>
        <button class="shop-btn">Add to Cart</button>
    </div>`;
});

var imageContainer1 = document.getElementById("imageContainer1");
imageContainer1.innerHTML = clutter1;

var shopButtons = document.querySelectorAll(".shop-btn");
var cartCount = 0;
var cartIcon = document.querySelector(".cart");
var popupMessage = document.querySelector(".popup-message")
shopButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      var actionText;
      if (button.innerHTML === "Add to Cart") {
        actionText = "Added to your cart";
        button.innerHTML = "Remove from Cart";
        cartCount++;
      } else {
        actionText = "Removed from your cart";
        button.innerHTML = "Add to Cart";
        cartCount--;
      }
  
      // Create and append the image to the body
      var imgElement = document.createElement("img");
      imgElement.src = "https://tenor.com/en-GB/view/dog-gif-22089558";
 
      imgElement.style =
        "width: 200px; height: 200px; position: fixed; top: -200px; left: 0; transition: top 0.5s ease-in-out; z-index: 9999;";
      document.body.appendChild(imgElement);
      
  
      // Triggering the image animation and popup
      setTimeout(function () {
        imgElement.style.top = "0";
        Swal.fire({
          title: actionText,
          html: "",
          width: 600,
          padding: '3em',
          color: '#716add',
          backdrop: `rgba(0,0,123,0.4)`,
          showConfirmButton: false,
          timer: 2000,
          buttonsStyling: false,
          didOpen: () => {
            document.body.style.overflow = "hidden"; // Prevent body scroll
          },
          willClose: () => {
            document.body.style.overflow = "auto"; // Restore body scroll
            imgElement.style.top = "-200px";
            setTimeout(function () {
              document.body.removeChild(imgElement);
            }, 500); // Wait for the animation to finish before removing the image
          },
        });
  
        cartIcon.innerHTML = " " + cartCount;
      }, 500); // Delay the popup to coincide with the image animation
    });
  });
  
gsap.from("nav > a", {
    duration: 1,
    opacity: 0,
    y: -50,
    stagger: 0.5,
    delay: 0.7
});
gsap.from(".nav h1", {
    duration: 1,
    opacity: 0,
    y: -50,
    stagger: 0.5,
    delay: 0.5
});
