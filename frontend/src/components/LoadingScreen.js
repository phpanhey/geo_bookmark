import loader from '../images/loader.gif';

const LoadingScreen = ({ loading }) => {
    if (loading) {
        return (
            <div>
                <img src={loader} alt="loading animation" />
            </div>
        )
    }
    return (null)

}

export default LoadingScreen
