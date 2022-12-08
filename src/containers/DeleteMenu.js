import { connect } from 'react-redux';
import DeleteMenu from '../components/DeleteMenu';
import { deleteMake } from '../redux/actions';

const mapStateToProps = (state) => {
  return {
    makes: state.makes
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteMake: (index) => dispatch(deleteMake(index)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DeleteMenu);