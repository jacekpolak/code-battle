import React, {Component} from 'react';
import style from './style.scss';

export default class TournamentListItem extends Component {
    render() {
        const {tournament} = this.props;
        const {
            tags,
            title,
            numberOfTasks,
            difficulty,
            language,
            department,
            remaining,
            status
        } = tournament;

        return (
            <tr className={style.row}>
                <td className={style.tournamentInfo}>
                    <div className={style.tournamentName}>{title}</div>
                    {tags.map((tag) => (
                        <span className={style.tag}
                              key={tag + title}>{tag}
                        </span>
                        ))
                    }

                </td>
                <td>{numberOfTasks} tasks</td>
                <td>{difficulty}</td>
                <td>{language}</td>
                <td>{department}</td>
                <td>
                    <span className={style[`status${status}`]}>{status}</span>
                    <br/>
                    {status === 'Started' && <span>{remaining}</span>}
                </td>
            </tr>
        );
    }
}