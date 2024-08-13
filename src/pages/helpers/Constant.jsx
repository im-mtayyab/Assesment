const calculateBP = () => {
    const slideWidth = 295.2 / 10;
    let combinedWidth = 2829.499999999999;
    const slideMargin = 20;  
    const breakPointsConfig = {};

    for (let i = 8; i >= 0; i -= 0.1) {
    const containerWidth = combinedWidth - slideWidth + 20;
    combinedWidth -= slideWidth + 20;
    breakPointsConfig[containerWidth] = {
        slidesPerView: getSlidesPerView(containerWidth, i),
        }
    };
    console.log(breakPointsConfig);
    return breakPointsConfig;
}

    const getSlidesPerView = (containerWidth, i) => {
        if (containerWidth < 400) {
          return 1;
        } 
        else if (containerWidth < 540) {
            return 1.1;
        } 
        else if (containerWidth < 585) {
            return i - 1.8;
        } 
        else if (containerWidth < 590) {
            return i - 2.5;
        } 
        else if (containerWidth < 600) {
            return i - 1.8;
        } 
        else if (containerWidth < 650) {
            return i - 1.6;
        } else if (containerWidth < 800) {
          return i - 1.5;
        } 
        else if (containerWidth < 1000) {
            return i - 1.3;
        } 
        else if (containerWidth < 1300) {
            return i - 1.1;
        } 
        else if (containerWidth < 1500) {
        return i - .9;
        } else if (containerWidth < 1800) {
          return i - .7;
        }
      }

const BREAKPOINTS = calculateBP();

export default BREAKPOINTS;