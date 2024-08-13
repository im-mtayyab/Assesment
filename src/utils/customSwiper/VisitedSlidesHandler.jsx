const VisitedSlidesHandler = (activeIndex, mySlides, mode) => {
    console.log("Hello");
    const visitedSlides = mySlides.filter(
    (index) => mySlides[index] <= Number(activeIndex)
    );
    if(visitedSlides) {
        mySlides.forEach((num) => {
            const element = document.querySelector(`.item${mode}${num}`);
            if(element) {
            num === Number(visitedSlides[num - 1]) ? element.classList.add("visited") : element.classList.remove("visited")
            }
        });
    }
}

export default VisitedSlidesHandler