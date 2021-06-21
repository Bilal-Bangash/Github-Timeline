const FilterRepos = ({ handleFilter }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
        marginTop: '20px',
      }}>
      <input
        type='text'
        placeholder='Filter By Month'
        name='month'
        onChange={handleFilter}
      />
      <input
        type='text'
        placeholder='Filter By Year'
        name='year'
        onChange={handleFilter}
      />
    </div>
  );
};

export default FilterRepos;
