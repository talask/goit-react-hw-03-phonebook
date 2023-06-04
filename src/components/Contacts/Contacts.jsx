export const Contacts = ({contacts, fnDelete}) => {
    if(contacts)
    return ( 
        <table>
            <tbody>
            {contacts.map(({name, number, id}) => {
                return (
                    <tr key={id}>
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
            )}
        </tbody>
    </table>
    )
}