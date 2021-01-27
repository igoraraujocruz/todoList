import { Switch, Route } from 'react-router-dom';
import TodoList from '../components/To-do/TodoList';


const Routes = () => (
    <Switch>
        <Route path="/" exact component={TodoList} />
    </Switch>
);

export default Routes;