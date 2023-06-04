import { nanoid } from 'nanoid';

export const Filter = ({filter, filterChange}) => {
    return (
        <>
            <p>
                Find contacts by name
            </p>
            <input 
            type="text"
            name="filter"
            value={filter}
            id={nanoid()}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            onChange={filterChange}
            required
            />
        </>
    )
}