const bringToTop = (el) => {
    console.log(el);
    el.parentElement.style.zIndex = "10";
    el.style.transform = "scale(1.05)";
};

const sendToBack = (el) => {
    el.parentElement.style.zIndex = "0";
    el.style.transform = "scale(1)";
};