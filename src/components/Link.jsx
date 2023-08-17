import propTypes from 'prop-types'

const Link = ({ link, title }) => {
    return (
        <a href={link}>{title}</a>
    )
}

Link.propTypes = {
    link: propTypes.string,
    title: propTypes.string
}

export default Link;
