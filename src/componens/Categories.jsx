import React from "react";
import PropTypes from "prop-types";

const Categories = React.memo(function Categories({
  items,
  onClickItem,
  activeCategory,
}) {
  return (
    <div className="categories">
      <ul>
        <li
          onClick={() => {
            onClickItem(null);
          }}
          className={activeCategory === null ? "active" : ""}
        >
          Все
        </li>
        {items &&
          items.map((item, index) => (
            <li
              className={activeCategory === index ? "active" : ""}
              onClick={() => {
                onClickItem(index);
              }}
              key={`${item}_${index}`}
            >
              {item}
            </li>
          ))}
      </ul>
    </div>
  );
});

export default Categories;

Categories.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClickItem: PropTypes.func.isRequired,
  activeCategory: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.instanceOf(null),
  ]),
};

Categories.defaultProps = {
  items: [],
  activeCategory: null,
};
