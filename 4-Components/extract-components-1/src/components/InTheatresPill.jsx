const NowPlayingPill = ({ inTheaters }) => {
    return (
        inTheaters && (
            <div className='movie-item-theaters-banner'>
                <span className='movie-item-theaters-banner-text'>Now Playing</span>
            </div>
        )
    );
};

export default NowPlayingPill;
