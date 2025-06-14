import PropTypes from 'prop-types'
import "./Toolbar.css"

export const Toolbar = ({ filters, selected, onSelectFilter }) => (
  <div>
    {filters.map((filter, index) => (
      <div
        key={index}
        className={`toolbar-item${
          selected === filter ? " toolbar-item__selected" : ""
        }`}
        onClick={() => onSelectFilter(filter)} 
      >   
        <span>{filter}</span>
      </div>
    ))}
  </div> 
)

Toolbar.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.string).isRequired,
  selected: PropTypes.string.isRequired,
  onSelectFilter: PropTypes.func.isRequired,
}