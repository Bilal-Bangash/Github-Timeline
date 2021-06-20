const ReposDetail = ({ location: { state: { item = {} } = {} } }) => {
  console.log('%cprops', 'color:green;font-size:30px;', item);
  return <div>Detail</div>;
};

export default ReposDetail;
