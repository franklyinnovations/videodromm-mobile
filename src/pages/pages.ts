import { ListMasterPage } from './list-master/list-master';
import { ColorsPage } from './colors/colors';
import { SettingsPage } from './settings/settings';
import { TabsPage } from './tabs/tabs';

// The page the user lands on after opening the app
export const FirstRunPage = TabsPage;

// The main page the user will see as they use the app over a long period of time.
// Change this if not using tabs
export const MainPage = TabsPage;

// The initial root pages for our tabs (remove if not using tabs)
export const Tab1Root = ColorsPage;
export const Tab2Root = ListMasterPage;
export const Tab3Root = SettingsPage;
