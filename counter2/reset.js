(() =>{
    const $counter = document.getElementById("js-counter");

    const $reset = document.getElementById("reset-screen");

    const clickHandler = () => {
        $counter.textContent = 0;
        $reset.animate(
            [
                {transform: "translateY(-100vh)"},
                {transform:"translateY(0)"},
                {transform:"translateY(100vh)"}
            ],
            {
                duration:1500,
                fill:"forwards",
            }
        );
    };

    document.getElementById("js-reset-button").addEventListener("click",clickHandler);
})();

