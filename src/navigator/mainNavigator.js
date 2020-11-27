import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen19179240Navigator from '../features/BlankScreen19179240/navigator';
import ArticleList179223Navigator from '../features/ArticleList179223/navigator';
import ArticleList179222Navigator from '../features/ArticleList179222/navigator';
import ArticleList179221Navigator from '../features/ArticleList179221/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen19179240: { screen: BlankScreen19179240Navigator },
ArticleList179223: { screen: ArticleList179223Navigator },
ArticleList179222: { screen: ArticleList179222Navigator },
ArticleList179221: { screen: ArticleList179221Navigator },

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
