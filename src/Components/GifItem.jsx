export const GifItem = ({image}) => {
    const title = image.title.replace(' GIF', '');
    const url = image.url;

    return (
        <div className={'card'}>
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}