import { Home } from './Home';
import {GREATKNOCKS} from './Home/greatknocks'
import {playvideo} from './Home/playvideo'
import {bowling} from './Home/bowling'
import {MainHome} from './Home/MainHome'
import {fav} from './Home/favourites'
module.exports = {
    //home
    Home: {
        screen: Home,
    },
    GREATKNOCKS:{
      screen:GREATKNOCKS
    },
    playvideo:{
      screen:playvideo
    },
    bowling:{
      screen:bowling
    },
    MainHome:{
      screen:MainHome
    },
    
}
