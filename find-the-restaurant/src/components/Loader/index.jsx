import Lottie from "react-lottie";

import animationData from '../../assets/loading.json';


const gifLottie = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    return <Lottie options={defaultOptions} />
}

export default gifLottie;