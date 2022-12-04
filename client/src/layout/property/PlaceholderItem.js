import Placeholder from 'react-bootstrap/Placeholder';

const PlaceholderItem = ({property}) => {
    return (
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 property__grid__area__wrapper__inner">
            <Placeholder as="div"  animation="glow">
                <Placeholder xs={12} />
                </Placeholder>
                <Placeholder as="p" animation="wave">
                <Placeholder xs={12} />
            </Placeholder>

        </div>
    )
}

export default PlaceholderItem;