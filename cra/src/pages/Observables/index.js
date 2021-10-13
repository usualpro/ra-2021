import Profils from './profils';
import { observer } from 'mobx-react-lite';
import { observable, runInAction } from 'mobx'

const timePassed = observable.box(0);

setInterval(() => {
    runInAction(() => {
        timePassed.set(timePassed.get() + 1);
    })
}, 1000);

const CounterDisplay = observer(() => <>{timePassed.get()}</>);

const UserCard = ({ avatar, name }) => <div className="col-4 col-md-3 col-lg-2 col-xl-1 text-center">
    <img className="img-fluid rounded w-100" src={avatar} alt={name} />
    <p className="m-0">{name}</p>
</div>;

const UserList = observer(() => Profils.users.map(
    (user, index) => <UserCard {...user} key={index} />)
);

export const Observables = () => <>
    <h1>Observables</h1>
    <div className='row gy-3'>
        <UserList />
        <CounterDisplay />
    </div>
</>