const ListItem = ({
  item: { name = '', description = '', created_at = '' },
  index,
}) => {
  return (
    <li>
      <div className={index % 2 === 0 ? 'direction-l' : 'direction-r'}>
        <div className='flag-wrapper'>
          <span className='flag'>{name}</span>
          <span className='time-wrapper'>
            <span className='time'>{new Date(created_at).toDateString()}</span>
          </span>
        </div>
        <div className='desc'>
          {description ? description : 'No description found......'}
        </div>
      </div>
    </li>
  );
};

export default ListItem;
