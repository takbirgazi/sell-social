import { changeTheme } from '@/lib/features/ThemeChange/ThemeChangeSlice';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/lib/store';

const Theme = () => {
    const isDark = useSelector((state: RootState) => state.themeChange);
    const dispatch: AppDispatch = useDispatch();

    const handleThemeChange = () => {
        dispatch(changeTheme(isDark == true ? false : true));
    }
    return (
        <div>
            <button onClick={handleThemeChange}>{isDark ? '🌞 Light Mode' : '🌙 Dark Mode'}</button>
        </div>
    );
};

export default Theme;