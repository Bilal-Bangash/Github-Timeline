import PropTypes from 'prop-types';

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

ListItem.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  created_at: PropTypes.string,
  index: PropTypes.number,
};

export default ListItem;
