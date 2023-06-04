import PropTypes from 'prop-types';


export const ContactItem = ({i, name, number, id, fnDelete}) => {
    return (
        <tr>
            <td>{name}:</td> 
            <td>{number}</td> 
            <td>
                <button type='button' 
                onClick={() => {fnDelete(id)}}>
                    Delete
                </button>
            </td>
        </tr>
    )
}

ContactItem.propTypes = {
   
    name: PropTypes.string, 
    number: PropTypes.string, 
    id: PropTypes.string,
    fnDelete: PropTypes.func,
}