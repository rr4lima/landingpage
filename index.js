
    const btnTopo = document.querySelector(".btn-topo");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            btnTopo.classList.add("show");
        } else {
            btnTopo.classList.remove("show");
        }
    });
