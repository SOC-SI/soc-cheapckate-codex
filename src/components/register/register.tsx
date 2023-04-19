import classNames from 'classnames';
import styles from './register.module.scss';

export interface RegisterProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-registers-and-templates
 */
export const Register = ({ className }: RegisterProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div>
                <h1>Register</h1>
                <form className={styles['register-form']}>
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
