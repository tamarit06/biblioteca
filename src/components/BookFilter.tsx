type Props={
    onFilterChange: (filter: string) => void;
}
function BookFilter({onFilterChange}: Props) {
    return(
        <select onChange={(e) => onFilterChange(e.target.value)}>
            <option value="all">Todos</option>
            <option value="read">Leídos</option>
            <option value="unread">No leídos</option>
        </select>
    )

}
export default BookFilter;