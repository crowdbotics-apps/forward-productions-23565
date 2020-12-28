import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import SignIn2188689Navigator from '../features/SignIn2188689/navigator';
import UserProfile188676Navigator from '../features/UserProfile188676/navigator';
import Tutorial188675Navigator from '../features/Tutorial188675/navigator';
import NotificationList188647Navigator from '../features/NotificationList188647/navigator';
import Settings188646Navigator from '../features/Settings188646/navigator';
import Settings188638Navigator from '../features/Settings188638/navigator';
import UserProfile188636Navigator from '../features/UserProfile188636/navigator';
import UserProfile188333Navigator from '../features/UserProfile188333/navigator';
import Tutorial188332Navigator from '../features/Tutorial188332/navigator';
import NotificationList188304Navigator from '../features/NotificationList188304/navigator';
import Settings188303Navigator from '../features/Settings188303/navigator';
import Settings188295Navigator from '../features/Settings188295/navigator';
import UserProfile188293Navigator from '../features/UserProfile188293/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
SignIn2188689: { screen: SignIn2188689Navigator },
UserProfile188676: { screen: UserProfile188676Navigator },
Tutorial188675: { screen: Tutorial188675Navigator },
NotificationList188647: { screen: NotificationList188647Navigator },
Settings188646: { screen: Settings188646Navigator },
Settings188638: { screen: Settings188638Navigator },
UserProfile188636: { screen: UserProfile188636Navigator },
UserProfile188333: { screen: UserProfile188333Navigator },
Tutorial188332: { screen: Tutorial188332Navigator },
NotificationList188304: { screen: NotificationList188304Navigator },
Settings188303: { screen: Settings188303Navigator },
Settings188295: { screen: Settings188295Navigator },
UserProfile188293: { screen: UserProfile188293Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
