import {connect} from 'react-redux';
import {reduxForm} from 'redux-form';
import Users from './users';
import {USERS_FORM} from 'stores/users/types';
import {usersSelector} from 'stores/users/selectors';

const mapStateToProps = ({users, common}) => ({
  users: usersSelector(users.users),
  locale: common?.locale,
  ...users.loading
});

const UsersForm = reduxForm({
  form: USERS_FORM
})(Users);

export const UsersContainer: any = connect(mapStateToProps)(UsersForm);
