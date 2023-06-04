import PropTypes from 'prop-types';
import { ContactItem } from './ContactItem';
//import { nanoid } from 'nanoid';

export const Contacts = ({contacts, fnDelete}) => {
    if(contacts)
    return ( 
        <table>
            <tbody>
            {contacts.map(({name, number, id}, i) => {
                return (
                    <ContactItem 
                        key={i}
                        name={name} 
                        number={number} 
                        id={id}
                        fnDelete={fnDelete}
                    ></ContactItem>
                )

            }
            )}
        </tbody>
    </table>
    )
}

Contacts.propTypes = {
    contacts: PropTypes.array, 
    fnDelete: PropTypes.func,
}