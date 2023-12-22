
import loading from '../../../assets/loading.json'
import { Player } from '@lottiefiles/react-lottie-player';
const Loading = () => {
    return (
        <div>
            <Player
                autoplay
                loop
                src={loading}
            >
            </Player>
        </div>
    );
};

export default Loading;