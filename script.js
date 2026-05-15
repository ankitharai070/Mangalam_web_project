document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('dynamicModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    const submitBtn = document.getElementById('modalSubmitBtn');

    // Modal Content Configurations
    const modalConfigs = {
        callback: {
            title: "Request a call back",
            buttonText: "Submit Form",
            buttonClass: "btn-blue",
            html: `
            <input type="text" placeholder="Full Name" class="modal-input">
            <input type="text" placeholder="Company Name" class="modal-input">
            <input type="email" placeholder="Email Address" class="modal-input">
            <div class="phone-input-group">
                <select><option>+91</option></select>
                <input type="tel" placeholder="7003026616">
            </div>
        `
        },
        brochure: {
            title: "Let us email the entire catalogue to you",
            buttonText: "Download Brochure",
            buttonClass: "btn-gray",
            html: `
            <label>Your Email *</label>
            <input type="email" placeholder="example@gmail.com" class="modal-input">
            <label>Your Contact (Optional)</label>
            <input type="text" placeholder="+91-0000000000" class="modal-input">
        `
        }
    };

    // Reusable Open Function
    function openModal(type) {
        const config = modalConfigs[type];

        modalTitle.textContent = config.title;
        modalBody.innerHTML = config.html;
        submitBtn.textContent = config.buttonText;

        submitBtn.className = `btn-submit ${config.buttonClass}`;

        modal.style.display = 'flex';
    }

    // Event call
    document.querySelector('#request-quote-btn').addEventListener('click', () => openModal('callback'));
    document.querySelector('.btn-download').addEventListener('click', () => openModal('brochure'));

    window.addEventListener('scroll', function () {
        const nav = document.querySelector('.navbar');
        const firstFoldHeight = window.innerHeight;

        if (window.scrollY > firstFoldHeight) {
            nav.classList.add('sticky');
        } else {
            nav.classList.remove('sticky');
        }
    });
    // Close icon logic
    document.querySelector('.close-btn').onclick = () => modal.style.display = 'none';
    window.onclick = (e) => { if (e.target === modal) modal.style.display = 'none'; };
    // 4. Catalogue Submission Logic
    const catalogueBtn = document.getElementById('btn-catalogue');
    if (catalogueBtn) {
        catalogueBtn.addEventListener('click', () => {
            const emailInput = document.getElementById('catalogue-email');
            if (emailInput && emailInput.value.includes('@')) {
                alert(`Success! Catalogue sent to: ${emailInput.value}`);
                modal.style.display = 'none';
            } else {
                alert("Please enter a valid email address.");
            }
        });
    }

    //  Image Gallery carousel
    const mainImage = document.querySelector(".main-image");
    const thumbs = document.querySelectorAll(".thumb");
    const images = ["assets/mainimage.jpg", "assets/portfolio1.jpg", "assets/portfolio2.jpg"];
    let currentIndex = 0;

    function showImage(index) {
        if (mainImage) {
            mainImage.src = images[index];
            thumbs.forEach((thumb, i) => thumb.classList.toggle("active", i === index));
        }
    }


    const rightArrow = document.querySelector(".nav-arrow.right");
    if (rightArrow) {
        rightArrow.addEventListener("click", () => {
            currentIndex = (currentIndex + 1) % images.length;
            showImage(currentIndex);
        });
    }
});