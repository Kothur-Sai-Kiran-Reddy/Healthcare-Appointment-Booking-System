import {FaStar, FaStarHalfAlt, FaRegStar} from 'react-icons/fa'

const DoctorsCard = (props) => {
    const {doctorsDetail, onCardClick, isSelected} = props
    const randomRating = Math.floor(Math.random() * (5-1) + 1)
    console.log(randomRating)
    const stars = []

    for (let i = 1; i <= 5; i++) {
        if (randomRating >= i) {
            stars.push(<FaStar key={i} style={{ color: '#0099ff' }} />);
        } else if (randomRating >= i - 0.5) {
            stars.push(<FaStarHalfAlt key={i} style={{ color: '#0099ff' }} />);
        } else {
            stars.push(<FaRegStar key={i} style={{ color: '#0099ff' }} />);
        }
    }

    return (
            <div className={`doctor-card ${isSelected ? 'selected' : ''}`} onClick={onCardClick}>
                <img src={doctorsDetail.profileImg} alt="" className='profile-images' />
                <div className='details-container'>
                    <h2>{doctorsDetail.name}</h2>
                    <p>{doctorsDetail.specialization}</p>
                    <div class="stars" style={{ "z-index": '99', 'position': 'relative'}}>
                        {stars}
                    </div>
                </div>
            </div>
    )
}

export default DoctorsCard;