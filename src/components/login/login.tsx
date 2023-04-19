import classNames from 'classnames';
import styles from './login.module.scss';

export interface LoginProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-logins-and-templates
 */
export const Login = ({ className }: LoginProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div>
                <h1>Login</h1>
                <form className={styles['login-form']}>
                    <span>Username</span>
                    <input />
                    <span>Password</span>
                    <input type="password" />
                    <button className={styles.submit}>Submit</button>
                </form>
            </div>
        </div>
    );
};
