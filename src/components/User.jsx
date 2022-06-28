import { Avatar } from "./Avatar";
import "./User.css"

export function User(props) {
    return (
        <div className="user">
            <Avatar src={props.src} username={props.username}></Avatar>
            <div>{props.username}</div>
            </div>
    );
}
