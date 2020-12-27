import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import NotificationList188304Navigator from '../features/NotificationList188304/navigator';
import Settings188303Navigator from '../features/Settings188303/navigator';
import Settings188295Navigator from '../features/Settings188295/navigator';
import UserProfile188293Navigator from '../features/UserProfile188293/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
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
