import "../../styles/SCSS/sortList.scss";

const SortList = (props) => {
  const { sortingMethod, changeHandler } = props;
  return (
    <select
      ref={sortingMethod}
      onChange={changeHandler}
      className="sortList"
      defaultValue={"A-Z"}
    >
      <option value="A-Z">A-Z</option>
      <option value="Z-A">Z-A</option>
      <option value="New-old">New - old</option>
      <option value="Old-new">Old - new</option>
    </select>
  );
};

export default SortList;
