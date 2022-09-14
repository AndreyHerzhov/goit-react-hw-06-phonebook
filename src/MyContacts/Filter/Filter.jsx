import { FilterLabel,FilterInput } from "./Filter.styled"
import PropTypes from "prop-types"
import { setFilter } from "redux/filter/filter-slice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getFilter } from "redux/filter/filter-selectors";

export const Filter = () => {
        const dispatch = useDispatch()
        const filter = useSelector(getFilter);
        const onSetFilter = ({target}) => {
                dispatch(setFilter(target.value))
        }

        return(
            <>
            <FilterLabel>Find contacts by name</FilterLabel>
            <FilterInput type="text" value={filter} onChange={onSetFilter}/>
            </>
        )
    }
 

export default Filter

Filter.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func
}